import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, of, throwError} from 'rxjs'
import {mergeMap, tap} from 'rxjs/operators'

import {
  Co2EmissionPrognosisInterface,
  Co2EmissionPrognosisType,
} from './type/co2EmmisionPrognosis.interface'
import {CkanResponseInterface} from './type/ckanResponse.interface'
import {CkanErrorResponseInterface} from './type/ckanErrorResponse.interface'

const url = 'https://api.energidataservice.dk/datastore_search_sql'

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  constructor(private http: HttpClient) {}

  get(): Observable<Co2EmissionPrognosisType> {
    const sql = `SELECT "Minutes5UTC" AS "minute5utc"
      ,"PriceArea" AS "priceArea"
      ,"CO2Emmision" AS "co2Emmision"
    FROM "co2emisprog"
    -- TODO: WHERE clause
    ORDER BY "Minutes5UTC" ASC`
    return this.http
      .get<
        | CkanResponseInterface<Co2EmissionPrognosisInterface>
        | CkanErrorResponseInterface
      >(url, {params: {sql}})
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
