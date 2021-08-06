import {TestBed} from '@angular/core/testing'
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing'

import {EnergiDataServiceEndpointEnv} from '../env/energiDataServiceEndpoint.env'
import {Co2EmissionPrognosisHttp} from '../service/co2EmissionPrognosis.service'
import {Co2EmissionPrognosisInterface} from '../type/co2EmmisionPrognosis.interface'
import {CkanErrorResponseInterface} from '../type/ckanErrorResponse.interface'

describe(Co2EmissionPrognosisHttp.name, () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })

    http = TestBed.inject(Co2EmissionPrognosisHttp)
    controller = TestBed.inject(HttpTestingController)
  })

  let http: Co2EmissionPrognosisHttp
  let controller: HttpTestingController

  it('maps successful response to records', () => {
    // Arrange
    const records = [
      {
        co2Emission: 100,
        minutes5utc: '2021-05-20T22:20:00+02:00',
        priceArea: 'DK1',
      },
    ]
    const ckanResponse = {
      help: 'help me',
      result: {
        fields: [],
        records,
        sql: 'testing testing SQL',
      },
      success: true,
    }
    // Act
    const whenResponse = http.get().toPromise()
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(EnergiDataServiceEndpointEnv)
    )
    testRequest.flush(ckanResponse)

    //Assert
    expect(whenResponse).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          co2Emission: expect.any(Number),
          minutes5utc: expect.any(Date),
          priceArea: expect.any(String),
        } as Co2EmissionPrognosisInterface),
      ])
    )
  })

  it('emits an array for successful responses', () => {
    // Arrange
    const records = [
      {
        co2Emission: 110,
        minutes5utc: '2021-05-20T22:25:00+02:00',
        priceArea: 'DK2',
      },
    ]
    const ckanResponse = {
      help: 'help me',
      result: {
        fields: [],
        records,
        sql: 'testing testing SQL',
      },
      success: true,
    }
    // Act
    const whenResponse = http.get().toPromise()
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(EnergiDataServiceEndpointEnv)
    )
    testRequest.flush(ckanResponse)

    //Assert
    expect(whenResponse).resolves.toEqual(expect.any(Array))
  })

  it('emits an error for error responses', () => {
    // Arrange
    const ckanErrorResponse: CkanErrorResponseInterface = {
      help: 'help me',
      success: false,
    }
    // Act
    const whenResponse = http.get().toPromise()
    const testRequest = controller.expectOne(
      request =>
        request.method === 'GET' &&
        request.url.startsWith(EnergiDataServiceEndpointEnv)
    )
    testRequest.flush(ckanErrorResponse)

    //Assert
    expect(whenResponse).rejects.toEqual(expect.any(Error))
  })
})
