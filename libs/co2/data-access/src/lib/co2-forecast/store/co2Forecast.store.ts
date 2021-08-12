import {Injectable} from '@angular/core'
import {ComponentStore, tapResponse} from '@ngrx/component-store'
import {combineLatest, Observable, timer} from 'rxjs'
import {switchMap} from 'rxjs/operators'

import {Co2EmissionPrognosisType} from '../type/co2EmmisionPrognosis.interface'
import {Co2EmissionPrognosisHttp} from '../service/co2EmissionPrognosis.service'
import {DateQueryInterface} from '../type/dateQuery.interface'
import {CreateCo2ForecastDateQuery} from 'libs/co2/data-access/src/lib/co2-forecast/store/createCo2ForecastDateQuery'

interface Co2ForecastState {
  readonly dateQuery: DateQueryInterface
  readonly records: Co2EmissionPrognosisType
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  private dateQuery$: Observable<DateQueryInterface> = this.select(
    state => state.dateQuery
  )

  records$: Observable<Co2EmissionPrognosisType> = this.select(
    state => state.records,
    {
      debounce: true,
    }
  )

  constructor(private http: Co2EmissionPrognosisHttp) {
    super(CreateInitialState(new Date()))

    this.loadRecordsEveryMinute(this.dateQuery$)
  }

  // NOTE After timer cycles, performs an effect, an http request using the date query, with proper response updating the records and an error clearing them
  private loadRecordsEveryMinute = this.effect<DateQueryInterface>(dateQuery$ =>
    combineLatest([dateQuery$, timer(0, 60 * 1000)]).pipe(
      switchMap(([dateQuery]) =>
        this.http.get(dateQuery).pipe(
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

function CreateInitialState(now: Date): Co2ForecastState {
  return {
    dateQuery: CreateCo2ForecastDateQuery(now),
    records: [],
  }
}
