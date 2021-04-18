import * as React from 'react'
import dayjs from 'dayjs'

import * as I from './types'
import { createDoomsdate } from './utils'

export function useDoomsday(date: dayjs.ConfigType, play: boolean = true) {
  if (dayjs(date).valueOf() < dayjs().valueOf())
    throw new Error('Doomsday: The past is in the past, pick some future date')

  const doom = React.useMemo(() => createDoomsdate(date), [date])
  const [doomsday, setDoomsday] = React.useState(doom)
  const [ticker, setTicker] = React.useState(doomsday.endOfTime.seconds)
  const [isHere, setIsHere] = React.useState(false)

  const refresh = React.useCallback(
    (now: dayjs.ConfigType) => setDoomsday(createDoomsdate(date, now)),
    [date]
  )

  React.useEffect(() => {
    let tick: NodeJS.Timeout
    if (play) {
      tick = setInterval(() => {
        refresh(dayjs())
        setTicker((s) => --s)
        if (ticker <= 0) {
          setIsHere(true)
          clearInterval(tick)
        }
      }, 999.999)
    }

    return () => clearInterval(tick)
  }, [refresh, play, ticker, doomsday.endOfMinute.seconds])

  return { doomsday, isHere }
}

const Doomsday: React.FC<I.DoomsdayProps> = ({
  date = dayjs().endOf('year'),
  play = true,
  showDefaults = true,
  renderAll = false,
  ...props
}) => {
  const { doomsday, isHere } = useDoomsday(date, play)
  const formattedDate = doomsday.target.format(props.format)

  const renderUnit = (type: I.UnitType) =>
    props[type]
      ? props[type]!({
          endOfTime: doomsday.endOfTime[type]!,
          endOfYear: doomsday.endOfYear[type]!,
          endOfMonth: doomsday.endOfMonth[type]!,
          endOfDay: doomsday.endOfDay[type]!,
          endOfHour: doomsday.endOfHour[type]!,
          endOfMinute: doomsday.endOfMinute[type]!,
          endOfTimeSequence: doomsday.endOfTimeSequence[type]!,
          endOfTimeFloat: doomsday.endOfTimeFloat[type]!,
          type,
          label: (u: number, text?: string) =>
            u === 1 ? (text || type).slice(0, -1) : text || type
        })
      : showDefaults && (
          <div style={{ margin: '0 4px' }}>
            <span>{doomsday.endOfTimeSequence[type]!} </span>
            <span>
              {doomsday.endOfTimeSequence[type] === 1
                ? type.slice(0, -1)
                : type}
            </span>
          </div>
        )

  const renderDoom =
    props.render && props.render({ ...doomsday, date: formattedDate })
  const renderYears = renderUnit('years')
  const renderMonths = renderUnit('months')
  const renderDays = renderUnit('days')
  const renderHours = renderUnit('hours')
  const renderMinutes = renderUnit('minutes')
  const renderSeconds = renderUnit('seconds')

  const { seconds, minutes, hours, days, months, years, render, ...div } = props

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...props.style
  }

  if (isHere)
    return (
      <div style={styles} {...div}>
        {props.goodbye}
      </div>
    )
  if (props.render && !renderAll)
    return (
      <div style={styles} {...div}>
        {renderDoom}
      </div>
    )

  return (
    <div style={styles} {...div}>
      {renderYears}
      {renderMonths}
      {renderDays}
      {renderHours}
      {renderMinutes}
      {renderSeconds}
      {renderAll && renderDoom}
    </div>
  )
}

export default Doomsday
