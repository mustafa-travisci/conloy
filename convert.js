function Convert(x, y, target, location, caseSensitivity, crossConversion) {
    if (location) {
        if (Array.isArray(location)) {
            if ((caseSensitivity === false && crossConversion === false) || (typeof caseSensitivity == 'undefined' && typeof crossConversion == 'undefined')) {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target.toUpperCase() === x[i].toUpperCase()) {
                            location.push(y[i]);
                        }
                    }
                } else {
                    if (target.toUpperCase() === x.toUpperCase()) {
                        location.push(y);
                    }
                }
            } else if ((caseSensitivity === true && crossConversion === false) || (caseSensitivity === true && typeof crossConversion == 'undefined')) {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target === x[i]) {
                            location.push(y[i]);
                        }
                    }
                } else {
                    if (target === x) {
                        location.push(y);
                    }
                }
            } else if ((caseSensitivity === false && crossConversion === true) || (typeof caseSensitivity == 'undefined' && crossConversion === true)) {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target.toUpperCase() === x[i].toUpperCase()) {
                            location.push(y[i]);
                        } else if (target.toUpperCase() === y[i].toUpperCase()) {
                            location.push(x[i]);
                        }
                    }
                } else {
                    if (target.toUpperCase() === x.toUpperCase()) {
                        location.push(y);
                    } else if (target.toUpperCase() === y.toUpperCase()) {
                        location.push(x);
                    }
                }
            } else if (caseSensitivity === true && crossConversion === true) {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target === x[i]) {
                            location.push(y[i]);
                        } else if (target === y[i]) {
                            location.push(x[i]);
                        }
                    }
                } else {
                    if (target === x) {
                        location.push(y);
                    } else if (target === y) {
                        location.push(x);
                    }
                }
            } else {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target.toUpperCase() === x[i].toUpperCase()) {
                            location.push(y[i]);
                        }
                    }
                } else {
                    if (target.toUpperCase() === x.toUpperCase()) {
                        location.push(y);
                    }
                }
            }
        } else {
            if ((caseSensitivity === false && crossConversion === false) || (typeof caseSensitivity == 'undefined' && typeof crossConversion == 'undefined')) {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target.toUpperCase() === x[i].toUpperCase()) {
                            location.innerHTML = y[i];
                            location = y[i];
                        }
                    }
                } else {
                    if (target.toUpperCase() === x.toUpperCase()) {
                        location.innerHTML = y;
                        location = y;
                    }
                }
            } else if ((caseSensitivity === true && crossConversion === false) || (caseSensitivity === true && typeof crossConversion == 'undefined')) {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target === x[i]) {
                            location.innerHTML = y[i];
                            location = y[i];
                        }
                    }
                } else {
                    if (target === x) {
                        location.innerHTML = y;
                        location = y;
                    }
                }
            } else if ((caseSensitivity === false && crossConversion === true) || (typeof caseSensitivity == 'undefined' && crossConversion === true)) {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target.toUpperCase() === x[i].toUpperCase()) {
                            location.innerHTML = y[i];
                            location = y[i];
                        } else if (target.toUpperCase() === y[i].toUpperCase()) {
                            location.innerHTML = x[i];
                            location = x[i];
                        }
                    }
                } else {
                    if (target.toUpperCase() === x.toUpperCase()) {
                        location.innerHTML = y;
                        location = y;
                    } else if (target.toUpperCase() === y.toUpperCase()) {
                        location.innerHTML = x;
                        location = x;
                    }
                }
            } else if (caseSensitivity === true && crossConversion === true) {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target === x[i]) {
                            location.innerHTML = y[i];
                            location = y[i];
                        } else if (target === y[i]) {
                            location.innerHTML = x[i];
                            location = x[i];
                        }
                    }
                } else {
                    if (target === x) {
                        location.innerHTML = y;
                        location = y;
                    } else if (target === y) {
                        location.innerHTML = x;
                        location = x;
                    }
                }
            } else {
                if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                    for (i = 0; i < x.length; i++) {
                        if (target.toUpperCase() === x[i].toUpperCase()) {
                            location.innerHTML = y[i];
                            location = y[i];
                        }
                    }
                } else {
                    if (target.toUpperCase() === x.toUpperCase()) {
                        location.innerHTML = y;
                        location = y;
                    }
                }
            }
        }
    } else {
        if ((caseSensitivity === false && crossConversion === false) || (typeof caseSensitivity == 'undefined' && typeof crossConversion == 'undefined')) {
            if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                for (i = 0; i < x.length; i++) {
                    if (target.toUpperCase() === x[i].toUpperCase()) {
                        document.write(y[i]);
                        return y[i];
                    }
                }
            } else {
                if (target.toUpperCase() === x.toUpperCase()) {
                    document.write(y);
                    return y;
                }
            }
        } else if ((caseSensitivity === true && crossConversion === false) || (caseSensitivity === true && typeof crossConversion == 'undefined')) {
            if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                for (i = 0; i < x.length; i++) {
                    if (target === x[i]) {
                        document.write(y[i]);
                        return y[i];
                    }
                }
            } else {
                if (target === x) {
                    document.write(y);
                    return y;
                }
            }
        } else if ((caseSensitivity === false && crossConversion === true) || (typeof caseSensitivity == 'undefined' && crossConversion === true)) {
            if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                for (i = 0; i < x.length; i++) {
                    if (target.toUpperCase() === x[i].toUpperCase()) {
                        document.write(y[i]);
                        return y[i];
                    } else if (target.toUpperCase() === y[i].toUpperCase()) {
                        document.write(x[i]);
                        return x[i];
                    }
                }
            } else {
                if (target.toUpperCase() === x.toUpperCase()) {
                    document.write(y);
                    return y;
                } else if (target.toUpperCase() === y.toUpperCase()) {
                    document.write(x);
                    return x;
                }
            }
        } else if (caseSensitivity === true && crossConversion === true) {
            if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                for (i = 0; i < x.length; i++) {
                    if (target === x[i]) {
                        document.write(y[i]);
                        return y[i];
                    } else if (target === y[i]) {
                        document.write(x[i]);
                        return x[i];
                    }
                }
            } else {
                if (target === x) {
                    document.write(y);
                    return y;
                } else if (target === y) {
                    document.write(x);
                    return x;
                }
            }
        } else {
            if (Array.isArray(x) && Array.isArray(y) && x.length == y.length) {
                for (i = 0; i < x.length; i++) {
                    if (target.toUpperCase() === x[i].toUpperCase()) {
                        document.write(y[i]);
                        return y[i];
                    }
                }
            } else {
                if (target.toUpperCase() === x.toUpperCase()) {
                    document.write(y);
                    return y;
                }
            }
        }
    }
}

module.exports.Convert = convert;