import React from "react"
import { FileUpload as PrimeFileUpload } from "primereact/fileupload"
import { locale } from "primereact/api"

import { pickDataAttributes } from "../../utils"

const getValidationMessage = (file, maxFileSize) => ({
  /* eslint-disable max-len */
  en: `${file.name}: Invalid file size (${file.size} bytes), maximum upload size is ${maxFileSize} bytes.`,
  ru: `${file.name}: Неправильный размер файла (${file.size} байт), максимальный возможный размер — ${maxFileSize} байт.`,
  /* eslint-enable max-len */
})

export const FileUpload = React.forwardRef(({
  id,
  name,
  url,
  mode = "basic",
  multiple = false,
  accept = false,
  disabled = false,
  auto = false,
  maxFileSize,
  style,
  className,
  withCredentials = false,
  chooseLabel,
  chooseOptions = {
    label: null,
    icon: null,
    iconOnly: false,
    className: null,
    style: null,
  },
  uploadOptions = {
    label: null,
    icon: null,
    iconOnly: false,
    className: null,
    style: null,
  },
  cancelOptions = {
    label: null,
    icon: null,
    iconOnly: false,
    className: null,
    style: null,
  },
  customUpload = false,
  emptyTemplate,
  headerTemplate,
  itemTemplate,
  onBeforeUpload,
  onBeforeSend,
  onBeforeSelect,
  onBeforeDrop,
  onUpload,
  onError,
  onClear,
  onSelect,
  onProgress,
  onValidationFail: handleFailedValidation,
  uploadHandler,
  onRemove,
  ...props
}, ref) => {
  // adding validation message because Prime don't do it in basic mode
  const onValidationFail = file => {
    let message = null

    if (maxFileSize && file.size > Number(maxFileSize)) {
      message = getValidationMessage(file, maxFileSize)[locale().locale]
    }

    handleFailedValidation && handleFailedValidation({ file, message })
  }
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeFileUpload
      ref={ref}
      mode={mode}
      id={id}
      name={name}
      url={url}
      multiple={multiple}
      accept={accept}
      disabled={disabled}
      auto={auto}
      maxFileSize={maxFileSize}
      style={style}
      className={className}
      withCredentials={withCredentials}
      chooseLabel={chooseLabel}
      emptyTemplate={emptyTemplate}
      headerTemplate={headerTemplate}
      itemTemplate={itemTemplate}
      chooseOptions={chooseOptions}
      uploadOptions={uploadOptions}
      cancelOptions={cancelOptions}
      customUpload={customUpload}
      onBeforeUpload={onBeforeUpload}
      onBeforeSelect={onBeforeSelect}
      onBeforeSend={onBeforeSend}
      onBeforeDrop={onBeforeDrop}
      onUpload={onUpload}
      onError={onError}
      onClear={onClear}
      onSelect={onSelect}
      onProgress={onProgress}
      onValidationFail={onValidationFail}
      uploadHandler={uploadHandler}
      onRemove={onRemove}
      {...dataAttributes}
    />
  )
})
