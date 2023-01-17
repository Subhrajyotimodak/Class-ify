# Class-ify

A small utility for optimising longer classNames.
Very effective when coupled with CSS UI Frameworks like Tailwind.

## Install

```
$ npm install --save class-ify
```

or

```
$ yarn add class-ify
```

## Usage

```
import Classify, {classify} from 'class-ify';

// pass strings
classify("text-slate-200", "w-20", "h-40")
=> "text-slate-200 w-20 h-40"

// pass objects
classify({
  sm: "text-slate-200 w-20 h-40",
  md: "bg-black h-300 w-0",
})
=> "sm:text-slate-200 sm:w-20 sm:h-40 md:bg-black md:h-300 md:w-0"

// pass anything
classify(
  {
    sm: "text-slate-200 w-20 h-40",
    md: "bg-black h-300 w-0",
  },
  "text-slate-200",
  "w-20",
  "h-40",
)
=> "sm:text-slate-200 sm:w-20 sm:h-40 md:bg-black md:h-300 md:w-0 text-slate-200 w-20 h-40"

// change the separator, aggregator and/or joiner
Classify.separator = " ";
Classify.aggregator = "+";
Classify.joiner = "=";
classify(
  {
    sm: "text-slate-200 w-20 h-40",
    md: "bg-black h-300 w-0",
  },
  "text-slate-200",
  "w-20",
  "h-40",
)
=> "sm+text-slate-200=sm+w-20=sm+h-40=md+bg-black=md+h-300=md+w-0=text-slate-200=w-20=h-40"

```
