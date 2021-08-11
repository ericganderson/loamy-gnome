import {DateQueryInterface} from 'libs/co2/data-access/src/lib/co2-forecast/type/dateQuery.interface'
export function CreateCo2ForecastSqlQuery(
  dateQuery: DateQueryInterface
): string {
  return `SELECT "Minutes5UTC" AS "minute5utc"
      ,"PriceArea" AS "priceArea"
      ,"CO2Emmision" AS "co2Emmision"
    FROM "co2emisprog"
    WHERE "Minutes5UTC" >= '${dateQuery.from.toISOString()}'
      AND "Minutes5UTC" < '${dateQuery.to.toISOString()}'
    ORDER BY "Minutes5UTC" ASC`
}
