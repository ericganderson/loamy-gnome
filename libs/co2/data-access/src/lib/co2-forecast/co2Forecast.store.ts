import {Injectable} from '@angular/core'
import {ComponentStore, tapResponse} from '@ngrx/component-store'
import {combineLatest, Observable, timer} from 'rxjs'
import {switchMap} from 'rxjs/operators'

import {Co2EmissionPrognosisInterface} from './type/co2EmmisionPrognosis.interface'
import {Co2EmissionPrognosisHttp} from './co2EmissionPrognosis.service'

interface Co2ForecastState {
  readonly records: readonly Co2EmissionPrognosisInterface[]
}

interface QueryFilter {
  readonly from: Date
  readonly to: Date
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  records$: Observable<readonly Co2EmissionPrognosisInterface[]> = this.select(
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

  private loadRecordsEveryMinute = this.effect<QueryFilter>(queryFilter$ =>
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

  private updateRecords = this.updater<
    readonly Co2EmissionPrognosisInterface[]
  >((state, records) => ({
    ...state,
    records,
  }))
}

const initialState: Co2ForecastState = {
  records: [],
}
