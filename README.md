# What is this?

Make string conversion and if return statements a piece of cake.

# Installation

`npm i convert --save`

Then...

```
import { convert } from 'convert';

Convert(x, y, target, location, caseSensitivity, crossConversion);
```

## Options

Convert supports 6 parameters, 3 of which are optional:

* *x* - _The text that will be converted_ (Supports arrays)
* *y* - _The text that x will be converted to_ (Supports arrays, returned or printed in document if location is not mentioned) 
* *target* - _Where to get x from_ 
* *location* - _Where y will be printed after checking the value of target_ (optional)
* *caseSensitivity* - _boolean | if is case-sensitive_ (optional, defaults to false)
* *crossConversion* _boolean | if y converts to x_ (optional, defaults to false) 