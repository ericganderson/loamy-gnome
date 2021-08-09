import {HttpClientTestingModule} from '@angular/common/http/testing'
import {TestBed} from '@angular/core/testing'
import {first, skip, take} from 'rxjs/operators'

import {Co2ForecastStore} from './co2Forecast.store'
import {Co2EmissionPrognosisHttp} from '../service/co2EmissionPrognosis.service'
import {Observable, of, throwError} from 'rxjs'
import {Co2EmissionPrognosisType} from '../type/co2EmmisionPrognosis.interface'

describe(Co2ForecastStore.name, () => {
  function setup({
    httpGetSpy = jest.fn().mockReturnValue(of([])),
  }: {
    readonly httpGetSpy?: jest.Mock<Observable<Co2EmissionPrognosisType>, []>
  } = {}) {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Co2ForecastStore],
    })

    const http = TestBed.inject(Co2EmissionPrognosisHttp)
    http.get = httpGetSpy
    // const httpGetSpy = jest.spyOn(http, 'get').mockReturnValue(of(records))
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
    it('initially emits 0 records', async () => {
      const {store} = setup()

      const records = await store.records$.pipe(first()).toPromise()

      expect(records).toEqual([])
    })

    it('it immediately emits records on success response from the CO2 Emission Prognosis API', async () => {
      // Arrange
      const expectedRecords: Co2EmissionPrognosisType = [
        {
          co2Emission: 80,
          minutes5utc: new Date('2021-20-05T22:45:00+02:00'),
          priceArea: 'DK1',
        },
      ]
      const httpGetSpy = jest.fn().mockReturnValue(of(expectedRecords))
      const {store} = setup({
        httpGetSpy,
      })

      // Act
      const actualRecords = await store.records$
        .pipe(skip(1), take(1))
        .toPromise()

      // Assert
      expect(httpGetSpy).toHaveBeenCalledTimes(1)
      expect(actualRecords).toEqual(expectedRecords)
    })

    it('it clears the records on error response from the CO2 Emission Prognosis API', async () => {
      // Arrange
      const httpGetSpy = jest
        .fn()
        .mockReturnValue(throwError(new Error('Ckan Error')))
      const {store} = setup({
        httpGetSpy,
      })

      // Act
      const actualRecords = await store.records$
        .pipe(skip(1), take(1))
        .toPromise()

      // Assert
      expect(httpGetSpy).toHaveBeenCalledTimes(1)
      expect(actualRecords).toEqual([])
    })
  })
})
