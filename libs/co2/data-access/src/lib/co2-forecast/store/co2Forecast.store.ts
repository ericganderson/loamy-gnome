import {Injectable} from '@angular/core'
import {ComponentStore, tapResponse} from '@ngrx/component-store'
import {combineLatest, Observable, timer} from 'rxjs'
import {switchMap} from 'rxjs/operators'

import {Co2EmissionPrognosisType} from '../type/co2EmmisionPrognosis.interface'
import {Co2EmissionPrognosisHttp} from '../service/co2EmissionPrognosis.service'
import {DateQueryInterface} from 'libs/co2/data-access/src/lib/co2-forecast/type/dateQuery.interface'

interface Co2ForecastState {
  readonly records: Co2EmissionPrognosisType
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  records$: Observable<Co2EmissionPrognosisType> = this.select(
    state => state.records,
    {
      debounce: true,
    }
  )

  constructor(private http: Co2EmissionPrognosisHttp) {
    super(initialState)

    this.loadRecordsEveryMinute({
      from: new Date(),
      to: new Date(),
    })
  }

  private loadRecordsEveryMinute = this.effect<DateQueryInterface>(
    queryFilter$ =>
      combineLatest([queryFilter$, timer(0, 60 * 1000)]).pipe(
        switchMap(queryFilter =>
          this.http.get().pipe(
            tapResponse(
              records => this.updateRecords(records),

              () => this.updateRecords([])
            )
          )
        )
      )
  )

  private updateRecords = this.updater<Co2EmissionPrognosisType>(
    (state, records) => ({
      ...state,
      records,
    })
  )
}

const initialState: Co2ForecastState = {
  records: [],
}
