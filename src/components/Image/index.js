import React from "react"
import { Image as PrimeImage } from "primereact/image"

import { pickDataAttributes } from "../../utils"

export const Image = React.forwardRef(({
  preview = false,
  src,
  alt,
  width,
  height,
  downloadable = false,
  containerStyle,
  containerClassName,
  imageStyle,
  imageClassName,
  onShow,
  onHide,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeImage
      ref={ref}
      preview={preview}
      downloadable={downloadable}
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={containerStyle}
      className={containerClassName}
      imageStyle={imageStyle}
      imageClassName={imageClassName}
      onShow={onShow}
      onHide={onHide}
      {...dataAttributes}
    />
  )
})
