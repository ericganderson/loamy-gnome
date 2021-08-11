import {TrimSqlParameter} from './trimSqlParameter'

describe(TrimSqlParameter.name, () => {
  it('replaces newline followed by whitespace with a space character', () => {
    const rawSql = `SELECT "Minutes5UTC"
    ,"CO2Emmision"
    ,"PriceArea"
  FROM "co2emisprog"
  ORDER BY "Minutes5UTC" ASC`

    const trimmedSql = TrimSqlParameter(rawSql)

    expect(trimmedSql).toBe(
      `SELECT "Minutes5UTC" ,"CO2Emmision" ,"PriceArea" FROM "co2emisprog" ORDER BY "Minutes5UTC" ASC`
    )
  })

  it('replaces newline with a space character', () => {
    const text = 'Hello\nWorld'

    const trimmedText = TrimSqlParameter(text)

    expect(trimmedText).toBe('Hello World')
  })
})
