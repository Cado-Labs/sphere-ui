import React from "react"
import { FileUpload as PrimeFileUpload } from "primereact/fileupload"
import { locale } from "primereact/api"

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
  multiple = false,
  accept,
  disabled = false,
  auto = false,
  maxFileSize,
  style,
  className,
  withCredentials = false,
  chooseLabel,
  chooseOptions,
  customUpload = false,
  onBeforeUpload,
  onBeforeSend,
  onUpload,
  onError,
  onClear,
  onSelect,
  onProgress,
  onValidationFail: handleFailedValidation,
  uploadHandler,
  onRemove,
}, ref) => {
  const onValidationFail = file => {
    let message = null

    if (maxFileSize && file.size > Number(maxFileSize)) {
      message = getValidationMessage(file, maxFileSize)[locale().locale]
    }

    handleFailedValidation && handleFailedValidation({ file, message })
  }

  return (
    <PrimeFileUpload
      ref={ref}
      mode="basic"
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
      chooseOptions={chooseOptions}
      customUpload={customUpload}
      onBeforeUpload={onBeforeUpload}
      onBeforeSend={onBeforeSend}
      onUpload={onUpload}
      onError={onError}
      onClear={onClear}
      onSelect={onSelect}
      onProgress={onProgress}
      onValidationFail={onValidationFail}
      uploadHandler={uploadHandler}
      onRemove={onRemove}
    />
  )
})
