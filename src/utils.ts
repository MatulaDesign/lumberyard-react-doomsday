import dayjs from 'dayjs'
import * as I from './types'

const endOfUnit = (now: dayjs.Dayjs, type: I.UnitType) => ({
  years: now.endOf(type).diff(now, 'years'),
  months: now.endOf(type).diff(now, 'months'),
  days: now.endOf(type).diff(now, 'days'),
  hours: now.endOf(type).diff(now, 'hours'),
  minutes: now.endOf(type).diff(now, 'minutes'),
  seconds: now.endOf(type).diff(now, 'seconds')
})

export const createDoomsdate = (
  date: dayjs.ConfigType,
  refresh?: dayjs.ConfigType
): I.DoomsdayCreator => {
  const now = dayjs(refresh)
  const target = dayjs(date)
  const takeYr = target.subtract(target.diff(now, 'years'), 'years')
  const takeMo = takeYr.subtract(takeYr.diff(now, 'months'), 'months')
  const takeDay = takeMo.subtract(takeMo.diff(now, 'days'), 'days')
  const takeHr = takeDay.subtract(takeDay.diff(now, 'hours'), 'hours')
  const takeMin = takeHr.subtract(takeHr.diff(now, 'minutes'), 'minutes')
  return {
    now,
    target,
    date: target.format(`${date}`),
    nowTimestamp: now.valueOf(),
    targetTimestamp: target.valueOf(),
    diffTimestamp: target.valueOf() - now.valueOf(),
    endOfTimeSequence: {
      years: target.diff(now, 'years'),
      months: takeYr.diff(now, 'months'),
      days: takeMo.diff(now, 'days'),
      hours: takeDay.diff(now, 'hours'),
      minutes: takeHr.diff(now, 'minutes'),
      seconds: takeMin.diff(now, 'seconds')
    },
    endOfTimeFloat: {
      years: target.diff(now, 'years'),
      months: takeYr.diff(now, 'months'),
      days: takeYr.diff(now, 'days'),
      hours: takeYr.diff(now, 'hours'),
      minutes: takeYr.diff(now, 'minutes'),
      seconds: takeYr.diff(now, 'seconds')
    },
    endOfTime: {
      years: target.diff(now, 'years'),
      months: target.diff(now, 'months'),
      days: target.diff(now, 'days'),
      hours: target.diff(now, 'hours'),
      minutes: target.diff(now, 'minutes'),
      seconds: target.diff(now, 'seconds')
    },
    endOfYear: endOfUnit(now, 'years'),
    endOfMonth: endOfUnit(now, 'months'),
    endOfDay: endOfUnit(now, 'days'),
    endOfHour: endOfUnit(now, 'hours'),
    endOfMinute: endOfUnit(now, 'minutes')
  }
}
