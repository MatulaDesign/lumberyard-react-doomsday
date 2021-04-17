import * as React from 'react'
import dayjs from 'dayjs'

import * as I from './typings'
import { createDoomsdate } from './utils'

function useDoomsday(date: dayjs.ConfigType, play?: boolean) {
  const doom = React.useMemo(() => createDoomsdate(date), [date])
  const [doomsday, setDoomsday] = React.useState(doom)
  const [ticker, setTicker] = React.useState(doomsday.endOfTime.seconds)
  const [isFinished, setIsFinished] = React.useState(false)

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
          setIsFinished(true)
          clearInterval(tick)
        }
      }, 1000)
    }

    return () => clearInterval(tick)
  }, [refresh, play, ticker, doomsday.endOfMinute.seconds])

  return { doomsday, isFinished }
}

const Doomsday: React.FC<I.DoomsdayProps> = ({
  date = dayjs().endOf('year'),
  play = true,
  showDefaults = true,
  ...props
}) => {
  const { doomsday, isFinished } = useDoomsday(date, play)
  const formattedDate = dayjs(date).format(props.format)

  const renderUnit = (type: I.UnitType) =>
    props[type]
      ? props[type]!({
          endOfTime: doomsday.endOfTime[type]!,
          endOfYear: doomsday.endOfYear[type]!,
          endOfMonth: doomsday.endOfMonth[type]!,
          endOfDay: doomsday.endOfDay[type]!,
          endOfHour: doomsday.endOfHour[type]!,
          endOfMinute: doomsday.endOfMinute[type]!,
          endOfSecond: doomsday.endOfSecond[type]!,
          endOfSequence: doomsday.endOfSequence[type]!,
          endOfTimeFloat: doomsday.endOfTimeFloat[type]!,
          type,
          label: (u: number, text?: string) =>
            u === 1 ? (text || type).slice(0, -1) : text || type
        })
      : showDefaults && (
          <div>
            <div>{doomsday.endOfSequence[type]!}</div>
            <div>
              {doomsday.endOfSequence[type] === 1 ? type.slice(0, -1) : type}
            </div>
          </div>
        )

  const renderAll =
    props.render && props.render({ ...doomsday, date: formattedDate })
  const renderYears = renderUnit('years')
  const renderMonths = renderUnit('months')
  const renderDays = renderUnit('days')
  const renderHours = renderUnit('hours')
  const renderMinutes = renderUnit('minutes')
  const renderSeconds = renderUnit('seconds')

  const { render, years, days, hours, months, minutes, seconds, ...div } = props

  if (isFinished) return <div {...div}>{props.finish}</div>
  if (props.render) return <div {...div}>{renderAll}</div>

  return (
    <div {...div}>
      {renderYears}
      {renderMonths}
      {renderDays}
      {renderHours}
      {renderMinutes}
      {renderSeconds}
    </div>
  )
}

export default Doomsday
