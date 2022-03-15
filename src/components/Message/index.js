import React from "react"
import { Message as PrimeMessage } from "primereact/message"

export const Message = React.forwardRef(({
  id,
  className,
  style,
  severity,
  text,
  content,
}, ref) => {
  return (
    <PrimeMessage
      ref={ref}
      id={id}
      style={style}
      className={className}
      severity={severity}
      text={text}
      content={content}
    />
  )
})
