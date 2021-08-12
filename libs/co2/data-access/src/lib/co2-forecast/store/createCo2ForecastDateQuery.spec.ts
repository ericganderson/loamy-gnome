// import {CreateCo2ForecastDateQuery} from './createCo2ForecastDateQuery'

// describe(CreateCo2ForecastDateQuery.name, () => {
//   it('the start of today is the beginning of the forecast', () => {
//     const fakeNow = new Date('2021-05-22T01:42:00+02:00')

//     const actualDateQuery = CreateCo2ForecastDateQuery(fakeNow)

//     expect(actualDateQuery.from).toEqual(new Date('2021-05-22T00:00:00+02:00'))
//   })

//   it('the day after tomorrow is the end of the forecast', () => {
//     const fakeNow = new Date('2021-05-22T01:42:00+02:00')

//     const actualDateQuery = CreateCo2ForecastDateQuery(fakeNow)

//     expect(actualDateQuery.from).toEqual(new Date('2021-05-24T00:00:00+02:00'))
//   })
// })
