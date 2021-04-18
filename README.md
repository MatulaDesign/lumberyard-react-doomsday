# react-doomsday

![npm bundle size](https://img.shields.io/bundlephobia/minzip/@lumberyard/react-doomsday)
[![NPM](https://img.shields.io/npm/v/@lumberyard/react-doomsday.svg)](https://www.npmjs.com/package/@lumberyard/react-doomsday)
![npm](https://img.shields.io/npm/dw/@lumberyard/react-doomsday)

## **A nifty countdown component for React**

<br>

Doomsday is a component written originally for one of my projects. I needed something that would be very flexible at displaying time countdown and since existing solutions required hacking around to make the countdown behave as I intended, I wrote my own and decided to publish it. Maybe somebody will find it useful.

**react-doomsday** is written with TypeScript and is using [dayjs](https://day.js.org/) in the background. It's sole purpose is to count time from **now** until **some date in the future**.

## Menu

- [Doomsday component](#doomsday-component)
- [Doomsday hook](#doomsday-hook)
- [Doomsday types](#doomsday-types)
- [Stuff](#stuff)

<br>

## Usage

```tsx
import * as React from 'react'

import Doomsday from '@lumberyard/react-doomsday'

const Example: React.FC = () => {
  const date = "2029-05-25T02:23:35.000Z" // or use dayjs or native or timestamp
  return (
    ...
    <Doomsday date={date} />
    ...
  )
}
```

<br>

## Install

```bash
yarn add @lumberyard/react-doomsday

npm install --save @lumberyard/react-doomsday
```

<br>

## Demo

### [Codesandbox](https://codesandbox.io/s/react-doomsday-r24y3)

<br>

## Doomsday component

\<Doomsday/> is a \<div> wrapper around logic based on `dayjs`. The component gives you a bunch of ways of displaying the date. Each time-unit (eg. month, minute, etc.) is separate from the rest and works independently.

### Props

All `<Doomsday/>` props are optional, however, bear in mind that this component has only bare minimum of styling. You can use `style`, `className` or any other popular CSS-in-JS solution to style it. DoomsdayProps are extended by

Default styles of the component can be overwritten.

```javascript
const defaultStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}
```

See [DoomsdayProps](#doomsdayprops)

<br/>

### Examples

```tsx
import * as React from 'react'

import Doomsday from '@lumberyard/react-doomsday'

const Example: React.FC = () => {
  return (
    ...
    <Doomsday
      date="2029-05-25T02:23:35.000Z"
      format="[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]"
      render={(doom) => ({
        // `doom.date` will be in a format passed above
        <div>
          <h3>{doom.date}</h3>
          <p>{doom.endOfTimeSequence.months} months</p>
          <p>{doom.endOfTimeSequence.minutes} minutes</p>
          <p>{doom.endOfTimeSequence.seconds} seconds</p>
        </div>
      })}
    />
    ...
  )
}
```

```tsx
import * as React from 'react'

import Doomsday from '@lumberyard/react-doomsday'

const Example: React.FC = () => {
  const [play, setPlay] = React.useState(true)

  return (
    ...
    <Doomsday
      play={play}
      showDefaults={false} // hides default units
      goodbye={<div>KAPUT!</div>}
      date="2029-05-25T02:23:35.000Z"
      years={({ label, endOfTimeSequence }) => (
        // label() displays the unit's label ('years' in this case) and cuts the plural form when necessary
        <div>
          <span>{endOfTimeSequence}</span>
          <span>{label(endOfTimeSequence)}</span>
        </div>
      )}
      months={({ type, endOfTimeSequence }) => (
        // label() also takes a second string argument that gets singu/pluralized
        <div>
          <span>{endOfTimeSequence}</span>
          <span>{label(endOfTimeSequence, 'pidgeons')}</span>
        </div>
      )}
      days={(to) => (
        // type shows the unit's label
        <div>
          <span>{to.endOfTimeSequence}</span>
          <span>{type}</span>
        </div>
      )}
      hours={(to) => (
        <div>
          <span>{to.endOfTimeSequence}</span>
          <span>Is this a real life...</span>
        </div>
      )}
      minutes={(to) => (
        <div>
          <span>{to.endOfTimeSequence}</span>
          <span>...or just a fantasy?</span>
        </div>
      )}
      seconds={(to) => (
        <div>
          <span>{to.endOfTimeSequence}</span>
          <span>What does the fox say?</span>
        </div>
      )}
    />
    ...
  )
}
```

## Doomsday hook

> **The hook is used inside the `<Doomsday/>` wrapper, so don't use both in the same component.**<br>

> **Use the hook in the very last child of the parent tree**

If you want more freedom (but keep the default calculations), you can import a `useDoomsday` hook instead of `<Doomsday/>` component. This function is the ticker written using `setInterval()`. I didn't use `window.requestAnimationFrame()` because I know `setInterval()` better and didn't have time to learn and understand how the other works - I'll probably rewrite it at some point. There shouldn't be any breaking changes.<br>

The hook takes a `date` and an optional `play` argument and returns a `doomsday` object and an `isHere` flag.

| prop     | type                                | description                                       |
| -------- | ----------------------------------- | ------------------------------------------------- |
| doomsday | [DoomsdayCreator](#doomsdaycreator) | object containing default doomsday's calculations |
| isHere   | boolean                             | flag indicating countdown's completion            |

<br>

```tsx
import * as React from 'react'

import { useDoomsday } from '@lumberyard/react-doomsday'

const Example: React.FC = () => {
  const [play, setPlay] = React.useState(true);
  const date = "2029-05-25T02:23:35.000Z";
  const { doomsday, isHere } = useDoomsday(date, play);

  if (isHere) return <div>KAPUT!</div>

  return (
    ...
    <div>{doomsday.endOfTime.months}</div>
    ...
  )
}
```

<br>

## Doomsday types

Since react-doomsday is written with TypeScript I am going to list typings instead of your regular props.

### DoomsdayProps

| prop                                         | type                              | default               | description                                                                                                                                                                                                                       |
| -------------------------------------------- | --------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| date                                         | dayjs.ConfigType                  | dayjs().endOf('year') | This prop takes any date you might want to throw into `dayjs()`. **It only takes dates from the future**                                                                                                                          |
| format                                       | string                            | undefined             | You can set the date's format using strings from [dayjs](https://day.js.org/docs/en/display/format)                                                                                                                               |
| play                                         | boolean                           | true                  | This prop lets you programatically decide when to initialise the countdown                                                                                                                                                        |
| showDefaults                                 | boolean                           | true                  | If you use one of the [RenderUnit](#renderunit) props, a corresponding default will be overwritten. This turns the defaults off                                                                                                   |
| goodbye                                      | React.ReactElement                | undefined             | `goodbye` renders the component you wish to show when the countdown is finished.                                                                                                                                                  |
| render                                       | [RenderDoomsday](#renderdoomsday) | undefined             | This prop returns [DoomsdayCreator](#doomsdaycreator) object. It basically is an inner wraper around plugin's logic that gives you access to all date calculations. It overwrites RenderUnits, so it's either this or the rest... |
| renderAll                                    | boolean                           | false                 | ...unless this prop is set to `true`, which will display component passed with `render` as a last child (after) `seconds`                                                                                                         |
| years, months, days, hours, minutes, seconds | [RenderUnit](#renderunit)         | undefined             | returns a function that passes [DoomsdayUnit](#doomsdayunit) object as its prop and takes a JSX component that gets rendered inside `<Doomsday/>`'s wrapper                                                                       |

<br>

### DoomsdayCreator

| prop              | type            | default          | description                                                                                                  |
| ----------------- | --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------ |
| now               | dayjs.Dayjs     | dayjs()          | now captured by dayjs                                                                                        |
| target            | dayjs.Dayjs     | dayjs(`date`)    | `date` passed as a prop used as an argument for dayjs                                                        |
| nowTimestamp      | number          | now.valueOf()    | timestamp of `now`                                                                                           |
| targetTimestamp   | number          | target.valueOf() | timestamp of `target`                                                                                        |
| diffTimestamp     | number          | target - now     | timestamp of a difference between `targetTimestamp` and `nowTimestamp`                                       |
| endOfTimeSequence | [Units](#units) | -                | returns an object with calculations per unit indicating logical sequence of time units until `target` is met |
| endOfTimeFloat    | [Units](#units) | -                | returns time left per unit after subtracting `endOfTime` years                                               |
| endOfTime         | [Units](#units) | -                | returns units left until target                                                                              |
| endOfYear         | [Units](#units) | -                | returns units left until end of year, if it's short, it returns 0                                            |
| endOfMonth        | [Units](#units) | -                | same story, different end                                                                                    |
| endOfDay          | [Units](#units) | -                | you get the gist                                                                                             |
| endOfHour         | [Units](#units) | -                | ...                                                                                                          |
| endOfMinute       | [Units](#units) | -                | ...                                                                                                          |

<br>

### Units

| prop    | type   | description                                 |
| ------- | ------ | ------------------------------------------- |
| years   | number | years it will take to reach the end of unit |
| months  | number | months until the end of unit                |
| days    | number | ...                                         |
| hours   | number | ...                                         |
| minutes | number | ...                                         |
| seconds | number | ...                                         |

<br>

### RenderUnit

(to: [DoomsdayUnit](#doomsdayunit)) => React.ReactElement

<br>

### RenderDoomsday

(doom: [DoomsdayCreator](#doomsdaycreator)) => React.ReactElement

<br>

### DoomsdayUnit

This is [DoomsdayCreator](#doomsdaycreator) in (sort of) reverse. Depending on which [RenderUnit](#renderunit) you render in \<Doomsday/> instead of returning the entire DoomsdayCreator, you get only endOfs for that specific unit.

| prop              | type                                      | description                                              |
| ----------------- | ----------------------------------------- | -------------------------------------------------------- |
| type              | [UnitType](#unittype)                     | string indicating which unit is selected                 |
| label             | (endOf: number, text?: string) => string; | `slice(0, -1)` on UnitType or `text` removing plural 's' |
| endOfTimeSequence | number                                    | `endOfTimeSequence` in selected UnitType                 |
| endOfTimeFloat    | number                                    | ...                                                      |
| endOfTime         | number                                    | ...                                                      |
| endOfYear         | number                                    | ...                                                      |
| endOfMonth        | number                                    | ...                                                      |
| endOfDay          | number                                    | ...                                                      |
| endOfHour         | number                                    | ...                                                      |
| endOfMinute       | number                                    | ...                                                      |

<br>

### UnitType

`"seconds" | "minutes" | "hours" | "days" | "months" | "years"`

<br>

## Stuff

If you feel the docs are missing something, or some stuff isn't clear, feel free to open an issue.<br>
I feel this plugin is simple enough to get by without unit tests. TS is here to keep an eye on things.<br>
As for the Code of Conduct, there is none. Just be humane to humans and non-humans alike.

## License

MIT © [MatulaDesign](https://github.com/MatulaDesign)
