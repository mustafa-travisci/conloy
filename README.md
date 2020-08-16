# conloy

![NPM](https://img.shields.io/npm/l/conloy?color=blue)
[![install size](https://packagephobia.com/badge?p=conloy)](https://packagephobia.com/result?p=conloy)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ElitKrit/conloy)
![Travis (.com)](https://img.shields.io/travis/com/ElitKrit/conloy)
![npm](https://img.shields.io/npm/dw/conloy?color=blue)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FElitKrit%2Fconloy.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FElitKrit%2Fconloy?ref=badge_shield)

A lightweight solution to the tedious process of writing if return statements.

## Installation

`npm i conloy`

Then...

Add "type": "module" to your package.json or set the type attribute of your script tag to "module". 

```
import conloy from 'conloy';
const { convert } = conloy;

convert(x, y, target, caseSensitivity, crossConversion);
```    
### Options

This function supports 5 parameters, 2 of which are optional:

* *x* - _The text that will be converted_ (Supports arrays)
* *y* - _The text that x will be converted to_ (Supports arrays) 
* *target* - _Where to get x from_ 
* *caseSensitivity* - _boolean | is it case-sensitive_ (optional, defaults to false)
* *crossConversion* _boolean | does y convert to x_ (optional, defaults to false) 

## Example

### Without conloy 

```
if (number === 0) {
    return 'zero';
} else if (number === 1) {
    return 'one';
}  else if (number === 2) {
    return 'two';
} else if (number === 3) {
    return 'three';
} else if (number === 4) {
    return 'four';
} else if (number === 5) {
    return 'five';
} else if (number === 6) {
    return 'six';
} else if (number === 7) {
    return 'seven';
} else if (number === 8) {
    return 'eight';
} else if (number === 9) {
    return 'nine';
}
```
### With conloy

```
import conloy from 'conloy';
const { convert } = conloy;

convert([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], number);
```