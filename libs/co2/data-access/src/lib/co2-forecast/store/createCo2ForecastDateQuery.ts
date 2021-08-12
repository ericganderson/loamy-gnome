import {localDateOf} from './localDateOf'
import {DateQueryInterface} from '../type/dateQuery.interface'

export function CreateCo2ForecastDateQuery(now: Date): DateQueryInterface {
  const localToday = localDateOf(now)
  const twoDaysMs = 2 * 24 * 60 * 60 * 1000
  const localDayAfterTomorrow = localDateOf(new Date(now.valueOf() + twoDaysMs))

  return {
    from: localToday,
    to: localDayAfterTomorrow,
  }
}
