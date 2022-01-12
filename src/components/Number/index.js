import React from "react"
import BigNumber from "bignumber.js"

const DEFAULT_PRECISION = 2
const DEFAULT_DELIMITER = ","
const DEFAULT_SEPARATOR = "\xA0"

export const Number = ({ value, enforcePrecision = true, ...options }) => {
  const instance = new BigNumber(value)
  const format = { groupSize: 3 }

  const precision = options.precision == null ? DEFAULT_PRECISION : options.precision
  format.decimalSeparator = options.delimiter == null ? DEFAULT_DELIMITER : options.delimiter
  format.groupSeparator = options.separator == null ? DEFAULT_SEPARATOR : options.separator

  const string = instance.toFormat(precision, undefined, format)

  return enforcePrecision
    ? string
    : string.replace(new RegExp(`(\\${DEFAULT_DELIMITER}\\d+)0+`), "$1")
}
