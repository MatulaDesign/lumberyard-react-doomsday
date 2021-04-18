import * as React from 'react';
import dayjs from 'dayjs';
declare type DivProps = React.HTMLAttributes<HTMLDivElement>;
export declare type UnitType = 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years';
export declare type RenderUnit = (to: RenderEndOfUnit) => React.ReactElement;
export declare type RenderDoomsday = (doom: DoomsdayCreator) => React.ReactElement;
export interface DoomsdayProps extends DivProps {
    date?: dayjs.ConfigType;
    format?: string;
    play?: boolean;
    showDefaults?: boolean;
    goodbye?: React.ReactElement;
    years?: RenderUnit;
    months?: RenderUnit;
    days?: RenderUnit;
    hours?: RenderUnit;
    minutes?: RenderUnit;
    seconds?: RenderUnit;
    render?: RenderDoomsday;
    renderAll?: boolean;
}
interface EndOfUnit {
    endOfTimeSequence: number;
    endOfTimeFloat: number;
    endOfTime: number;
    endOfYear: number;
    endOfMonth: number;
    endOfDay: number;
    endOfHour: number;
    endOfMinute: number;
    endOfSecond: number;
}
export interface RenderEndOfUnit extends EndOfUnit {
    type: UnitType;
    label: (endOf: number, text?: string) => string;
}
export interface Units {
    years?: number;
    months: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
export interface DoomsdayCreator {
    now: dayjs.Dayjs;
    target: dayjs.Dayjs;
    nowTimestamp: number;
    targetTimestamp: number;
    endOfTimeSequence: Units;
    endOfTime: Units;
    endOfTimeFloat: Units;
    endOfYear: Units;
    endOfMonth: Units;
    endOfDay: Units;
    endOfHour: Units;
    endOfMinute: Units;
    endOfSecond: Units;
    date?: string;
}
export {};
