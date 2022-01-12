import React, { Fragment } from "react"
import { Number } from "../Number"

const Money = ({ money: [amount, currency], precision = 2, ...options }) => {
  return (
    <Fragment>
      <Number value={amount} {...options} precision={precision} /> {currency}
    </Fragment>
  )
}

Money.build = (amount, currency) => <Money money={[amount, currency]} />

export { Money }
