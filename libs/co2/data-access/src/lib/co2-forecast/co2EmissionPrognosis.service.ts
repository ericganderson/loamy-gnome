import {Injectable} from '@angular/core'
import {Observable, of} from 'rxjs'
import {Co2EmissionPrognosisInterface} from './type/co2EmmisionPrognosis.interface'

const url = 'https://api.energidataservice.dk/datastore_search_sql'
// sql
// query Dataset {
//   co2emisprog(order_by: {Minutes5UTC: desc}, limit: 100, offset: 0) {
//     Minutes5UTC
//     Minutes5DK
//     PriceArea
//     CO2Emission
//     __typename
//   }
// }

@Injectable({
  providedIn: 'root',
})
export class Co2EmissionPrognosisHttp {
  get(): Observable<readonly Co2EmissionPrognosisInterface[]> {
    return of([])
  }
}
