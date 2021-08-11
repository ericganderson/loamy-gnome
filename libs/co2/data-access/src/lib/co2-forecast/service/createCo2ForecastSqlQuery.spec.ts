import {DateQueryInterface} from 'libs/co2/data-access/src/lib/co2-forecast/type/dateQuery.interface'
import {CreateCo2ForecastSqlQuery} from './createCo2ForecastSqlQuery'

describe(CreateCo2ForecastSqlQuery.name, () => {
  it('adds a date range start filter', () => {
    const dateQuery: DateQueryInterface = {
      from: new Date('2021-05-22T00:00:00+02:00'),
      to: new Date('2021-05-24T00:00:00+02:00'),
    }

    const sql = CreateCo2ForecastSqlQuery(dateQuery)

    expect(sql).toContain(`"Minutes5UTC" >= '${dateQuery.from.toISOString()}'`)
  })

  it('adds a date range end filter', () => {
    const dateQuery: DateQueryInterface = {
      from: new Date('2021-06-22T00:00:00+02:00'),
      to: new Date('2021-06-24T00:00:00+02:00'),
    }

    const sql = CreateCo2ForecastSqlQuery(dateQuery)

    expect(sql).toContain(`"Minutes5UTC" < '${dateQuery.to.toISOString()}'`)
  })

  it('sorts with erliest records first', () => {
    const sql = CreateCo2ForecastSqlQuery({
      from: new Date(),
      to: new Date(),
    })

    expect(sql).toContain(`ORDER BY "Minutes5UTC" ASC`)
  })

  it('queries the Co2 Emission Prognosis dataset', () => {
    const expectedTableName = 'co2emisprog'

    const sql = CreateCo2ForecastSqlQuery({
      from: new Date(),
      to: new Date(),
    })

    expect(sql).toContain(`FROM "${expectedTableName}"`)
  })
})
