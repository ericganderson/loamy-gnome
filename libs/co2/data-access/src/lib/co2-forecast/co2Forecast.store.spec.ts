import {Co2ForecastStore} from './co2Forecast.store'
import {TestBed} from '@angular/core/testing'

describe(Co2ForecastStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
      providers: [Co2ForecastStore],
    })

    const store = TestBed.inject(Co2ForecastStore)

    return {
      store,
    }
  }

  it('is provided externally', () => {
    const {store} = setup()

    expect(store).not.toBeNull()
  })
})
