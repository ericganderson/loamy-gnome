import {HttpClientTestingModule} from '@angular/common/http/testing'
import {TestBed} from '@angular/core/testing'
import {first} from 'rxjs/operators'

import {Co2ForecastStore} from './co2Forecast.store'

describe(Co2ForecastStore.name, () => {
  function setup() {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
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

  describe('records$', () => {
    it('emits 0 records', async () => {
      const {store} = setup()

      const records = await store.records$.pipe(first()).toPromise()

      expect(records).toEqual([])
    })
  })
})