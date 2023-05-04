import React from "react"
import { Message as PrimeMessage } from "primereact/message"
import { classNames as cn } from "primereact/utils"

import { pickDataAttributes } from "../../utils"

export const Message = React.forwardRef(({
  id,
  className,
  style,
  severity,
  text,
  content,
  ...props
}, ref) => {
  const messageClassName = cn(className, {
    "p-inline-message-secondary": severity === "secondary",
    "p-inline-message-help": severity === "help",
  })
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeMessage
      ref={ref}
      id={id}
      style={style}
      className={messageClassName}
      severity={severity}
      text={text}
      content={content}
      {...dataAttributes}
    />
  )
})
