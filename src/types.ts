import * as React from 'react'
import dayjs from 'dayjs'

declare type DivProps = React.HTMLAttributes<HTMLDivElement>

export type UnitType =
  | 'seconds'
  | 'minutes'
  | 'hours'
  | 'days'
  | 'months'
  | 'years'

export type RenderUnit = (to: DoomsdayUnit) => React.ReactElement
export type RenderDoomsday = (doom: DoomsdayCreator) => React.ReactElement

export interface DoomsdayProps extends DivProps {
  date?: dayjs.ConfigType
  format?: string
  play?: boolean
  showDefaults?: boolean
  goodbye?: React.ReactElement
  years?: RenderUnit
  months?: RenderUnit
  days?: RenderUnit
  hours?: RenderUnit
  minutes?: RenderUnit
  seconds?: RenderUnit
  render?: RenderDoomsday
  renderAll?: boolean
}

export interface DoomsdayUnit {
  endOfTimeSequence: number
  endOfTimeFloat: number
  endOfTime: number
  endOfYear: number
  endOfMonth: number
  endOfDay: number
  endOfHour: number
  endOfMinute: number
  type: UnitType
  label: (endOf: number, text?: string) => string
}

export interface Units {
  years: number
  months: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface DoomsdayCreator {
  now: dayjs.Dayjs
  target: dayjs.Dayjs
  nowTimestamp: number
  targetTimestamp: number
  diffTimestamp: number
  endOfTimeSequence: Units
  endOfTime: Units
  endOfTimeFloat: Units
  endOfYear: Units
  endOfMonth: Units
  endOfDay: Units
  endOfHour: Units
  endOfMinute: Units
  date: string
}
