import React from "react"
import { Message as PrimeMessage } from "primereact/message"
import { classNames as cn } from "primereact/utils"

export const Message = React.forwardRef(({
  id,
  className,
  style,
  severity,
  text,
  content,
}, ref) => {
  const messageClassName = cn(className, {
    "p-inline-message-secondary": severity === "secondary",
    "p-inline-message-help": severity === "help",
  })
  return (
    <PrimeMessage
      ref={ref}
      id={id}
      style={style}
      className={messageClassName}
      severity={severity}
      text={text}
      content={content}
    />
  )
})
