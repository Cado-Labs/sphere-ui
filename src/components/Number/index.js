import BigNumber from "bignumber.js"
import { ROUNDING_MAP } from "./rounding"

const DEFAULT_PRECISION = 2
const DEFAULT_DELIMITER = ","
const DEFAULT_SEPARATOR = "\xA0"
const DEFAULT_ROUNDING = "ROUND_DOWN"

export const Number = ({
  value,
  enforcePrecision = true,
  precision = DEFAULT_PRECISION,
  roundingMode = DEFAULT_ROUNDING,
  delimiter = DEFAULT_DELIMITER,
  separator = DEFAULT_SEPARATOR,
}) => {
  const bnRounding =
    ROUNDING_MAP[roundingMode] ?? ROUNDING_MAP[DEFAULT_ROUNDING]

  const instance = new BigNumber(value).decimalPlaces(
    precision,
    bnRounding,
  )

  const format = {
    groupSize: 3,
    decimalSeparator: delimiter,
    groupSeparator: separator,
  }

  const string = instance.toFormat(precision, undefined, format)

  return enforcePrecision
    ? string
    : string.replace(new RegExp(`(\\${delimiter}\\d+)0+`), "$1")
}
