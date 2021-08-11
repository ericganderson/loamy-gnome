import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, of, throwError} from 'rxjs'
import {mergeMap, tap} from 'rxjs/operators'

import {
  Co2EmissionPrognosisInterface,
  Co2EmissionPrognosisType,
} from '../type/co2EmmisionPrognosis.interface'
import {CkanResponseInterface} from '../type/ckanResponse.interface'
import {CkanErrorResponseInterface} from '../type/ckanErrorResponse.interface'
import {DateQueryInterface} from '../type/dateQuery.interface'
import {CreateCo2ForecastSqlQuery} from './createCo2ForecastSqlQuery'
import {EnergiDataServiceEndpointEnv} from '../env/energiDataServiceEndpoint.env'

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  constructor(private http: HttpClient) {}

  get(dateQuery: DateQueryInterface): Observable<Co2EmissionPrognosisType> {
    const sql = CreateCo2ForecastSqlQuery(dateQuery)
    return this.http
      .get<
        | CkanResponseInterface<Co2EmissionPrognosisInterface>
        | CkanErrorResponseInterface
      >(EnergiDataServiceEndpointEnv, {params: {sql}})
      .pipe(
        tap(response => console.log(response)),
        mergeMap(response =>
          response.success
            ? of(
                response.result.records.map(record => ({
                  ...record,
                  minutes5utc: new Date(record.minutes5utc),
                }))
              )
            : throwError(new Error('CKAN Error'))
        )
      )
  }
}
