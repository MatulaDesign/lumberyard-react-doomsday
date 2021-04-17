import * as React from 'react'
import dayjs from 'dayjs'

type DivProps = React.HTMLAttributes<HTMLDivElement>
/////////////////////////////////////////////////////////

export type UnitType =
  | 'seconds'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'months'
  | 'years'

export type RenderUnit = (to: RenderEndOfUnit) => React.ReactElement

export interface DoomsdayProps extends DivProps {
  date?: dayjs.ConfigType
  years?: RenderUnit
  months?: RenderUnit
  days?: RenderUnit
  hours?: RenderUnit
  minutes?: RenderUnit
  seconds?: RenderUnit
  play?: boolean
  format?: string
  showDefaults?: boolean
  finish?: React.ReactElement
  render?: (doom: DoomsdayCreator & { date: string }) => React.ReactElement
}

interface EndOfUnit {
  endOfTime: number
  endOfYear: number
  endOfMonth: number
  endOfDay: number
  endOfHour: number
  endOfMinute: number
  endOfSecond: number
  endOfSequence: number
  endOfTimeFloat: number
}
export interface RenderEndOfUnit extends EndOfUnit {
  type: UnitType
  label: (endOf: number, text?: string) => string
}

export interface Units {
  years?: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface DoomsdayCreator {
  now: dayjs.Dayjs
  target: dayjs.Dayjs
  nowTimestamp: number | dayjs.Dayjs
  targetTimestamp: number | dayjs.Dayjs
  endOfSequence: Units
  endOfTime: Units
  endOfTimeFloat: Units
  endOfYear: Units
  endOfMonth: Units
  endOfDay: Units
  endOfHour: Units
  endOfMinute: Units
  endOfSecond: Units
}
