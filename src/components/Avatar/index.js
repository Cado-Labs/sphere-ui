import React from "react"
import { Avatar as PrimeAvatar } from "primereact/avatar"
import { classNames as cn } from "primereact/utils"

import { pickDataAttributes } from "../../utils"

export const Avatar = React.forwardRef(({
  label,
  icon,
  image,
  size,
  shape = "square",
  imageAlt,
  style,
  className,
  onImageError,
  onClick,
  children,
  ...props
}, ref) => {
  const avatarClassName = cn(className, { "p-avatar-sm": size === "small" })
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeAvatar
      style={style}
      ref={ref}
      className={avatarClassName}
      label={label}
      icon={icon}
      image={image}
      size={size}
      shape={shape}
      imageAlt={imageAlt}
      onImageError={onImageError}
      onClick={onClick}
      {...dataAttributes}
    >
      {children}
    </PrimeAvatar>
  )
})
