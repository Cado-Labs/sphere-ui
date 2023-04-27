import React from "react"
import { Avatar as PrimeAvatar } from "primereact/avatar"
import { classNames as cn } from "primereact/utils"

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
}, ref) => {
  const avatarClassName = cn(className, { "p-avatar-sm": size === "small" })

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
    >
      {children}
    </PrimeAvatar>
  )
})
