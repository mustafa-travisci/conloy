function convert (
  x,
  y,
  target,
  caseSensitivity = false,
  crossConversion = false
) {
  const xtu = x.toString().toUpperCase()
  const ytu = y.toString().toUpperCase()
  const targettu = target.toString().toUpperCase()
  if (caseSensitivity === false && crossConversion === false) {
    if (Array.isArray(x) && Array.isArray(y) && x.length === y.length) {
      for (let i = 0; i < x.length; i++) {
        if (targettu === x[i].toString().toUpperCase()) {
          return y[i]
        }
      }
    } else {
      if (targettu === xtu) {
        return y
      }
    }
  } else if (caseSensitivity === true && crossConversion === false) {
    if (Array.isArray(x) && Array.isArray(y) && x.length === y.length) {
      for (let i = 0; i < x.length; i++) {
        if (target === x[i]) {
          return y[i]
        }
      }
    } else {
      if (target === x) {
        return y
      }
    }
  } else if (caseSensitivity === false && crossConversion === true) {
    if (Array.isArray(x) && Array.isArray(y) && x.length === y.length) {
      for (let i = 0; i < x.length; i++) {
        if (targettu === x[i].toString().toUpperCase()) {
          return y[i]
        } else if (targettu === y[i].toString().toUpperCase()) {
          return x[i]
        }
      }
    } else {
      if (targettu === xtu) {
        return y
      } else if (targettu === ytu) {
        return x
      }
    }
  } else if (caseSensitivity === true && crossConversion === true) {
    if (Array.isArray(x) && Array.isArray(y) && x.length === y.length) {
      for (let i = 0; i < x.length; i++) {
        if (target === x[i]) {
          return y[i]
        } else if (target === y[i]) {
          return x[i]
        }
      }
    } else {
      if (target === x) {
        return y
      } else if (target === y) {
        return x
      }
    }
  } else {
    if (Array.isArray(x) && Array.isArray(y) && x.length === y.length) {
      for (let i = 0; i < x.length; i++) {
        if (targettu === x[i].toString().toUpperCase()) {
          return y[i]
        }
      }
    } else {
      if (targettu === xtu) {
        return y
      }
    }
  }
}

const _conloy = convert
export {
  _conloy as convert
}

