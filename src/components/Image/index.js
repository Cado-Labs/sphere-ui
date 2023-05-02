import React from "react"
import { Image as PrimeImage } from "primereact/image"

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
  dataCy,
  dataTestId,
}, ref) => {
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
      data-cy={dataCy}
      data-testid={dataTestId}
    />
  )
})
