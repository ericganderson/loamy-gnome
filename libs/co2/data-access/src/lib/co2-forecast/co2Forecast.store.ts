import {Injectable} from '@angular/core'
import {ComponentStore} from '@ngrx/component-store'
import {Co2EmissionPrognosisInterface} from './type/co2EmmisionPrognosis.interface'

export interface Co2ForecastState {
  readonly records: readonly Co2EmissionPrognosisInterface[]
}

@Injectable()
export class Co2ForecastStore extends ComponentStore<Co2ForecastState> {
  constructor() {
    super(initialState)
  }
}

const initialState: Co2ForecastState = {
  records: [],
}
