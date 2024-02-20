/* eslint-disable max-len */
import { FileUpload, Toast, InputText, Button, Tooltip, ProgressBar, Tag } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { ParamsTable, Highlighter } from "@components"

const I18N_PREFIX = "stories.fileupload"

const code = `
function FileUploadExample () {
  const uploadUrl = "https://primefaces.org/primereact/upload.php"
  const toast = React.useRef(null)
  const [formValues, setFormValues] = React.useState({ reportName: "", reportFile: null })
  const [fileName, setFileName] = React.useState("")
  const [totalSize, setTotalSize] = React.useState(0)
  const fileUploadRef = React.useRef(null)

  const setValue = (name, value) => {
    setFormValues(s => ({ ...s, [name]: value }))
  }

  const onSuccessUpload = (message = "File uploaded") => {
    toast.current.show({ severity: "info", summary: "Success", detail: message })
  }

  const onFailedFormSend = (message = "Error occured during file uploading") => {
    toast.current.show({ severity: "error", summary: "Failure", detail: message })
  }

  const onFileValidationFail = ({ file, message }) => {
    toast.current.show({ severity: "error", summary: "Validation fail", detail: message })
  }

  const onAddReport = reportFile => {
    setFileName(reportFile.name)

    const reader = new FileReader()
    reader.readAsDataURL(reportFile)
    reader.onload = event => setValue("reportFile", event.target.result)
    reader.onerror = error => console.error("Error occured", error)
  }

  const renderReportFile = () => (
    <div className="flex align-items-center">
      <span className="text-green-600">{fileName}</span>
      <Button
        icon="pi pi-times"
        className="ml-2 p-button-outlined"
        onClick={() => setValue("reportFile", null)}
      />
    </div>
  )

  const renderUploadButton = () => (
    <FileUpload
      accept=".csv, .xls, .xlsx"
      onSelect={data => onAddReport(data.files[0])}
      chooseLabel="Add report (csv, xls, xlsx)"
      chooseOptions={{ className: "p-button-outlined" }}
    />
  )

  const resetForm = () => {
    setFormValues({ reportName: "", reportFile: null })
    setFileName("")
  }

  const sendReport = e => {
    e.preventDefault()
    if (!formValues.reportName || !formValues.reportFile) {
      onFailedFormSend("The form is incomplete")
      return
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        onSuccessUpload()
        resetForm()
      })
      .catch(onFailedFormSend)
  }

  const onTemplateSelect = e => {
    let _totalSize = totalSize
    const files = e.files

    Object.keys(files).forEach(key => {
      _totalSize += files[key].size || 0
    })

    setTotalSize(_totalSize)
  }

  const onTemplateUpload = e => {
    let _totalSize = 0

    e.files.forEach(file => {
      _totalSize += file.size || 0
    })

    setTotalSize(_totalSize)
    toast.current.show({ severity: "info", summary: "Success", detail: "File Uploaded" })
  }

  const onTemplateRemove = (file, callback) => {
    setTotalSize(totalSize - file.size)
    callback()
  }

  const onTemplateClear = () => {
    setTotalSize(0)
  }

  const headerTemplate = options => {
    const { className, chooseButton, uploadButton, cancelButton } = options
    const value = totalSize / 10000
    const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : "0 B"

    return (
      <div className={className} style={{ backgroundColor: "transparent", display: "flex", alignItems: "center" }}>
        {chooseButton}
        {uploadButton}
        {cancelButton}
        <div className="flex align-items-center gap-3 ml-auto">
          <span>{formatedValue} / 1 MB</span>
          <ProgressBar value={value} showValue={false} style={{ width: "10rem", height: "12px" }} />
        </div>
      </div>
    )
  }

  const itemTemplate = (file, props) => {
    return (
      <div className="flex align-items-center flex-wrap">
        <div className="flex align-items-center" style={{ width: "40%" }}>
          <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
          <span className="flex flex-column text-left ml-3">
            {file.name}
            <small>{new Date().toLocaleDateString()}</small>
          </span>
        </div>
        <Tag value={props.formatSize} severity="warning" className="px-3 py-2" />
        <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
      </div>
    )
  }

  const emptyTemplate = () => {
    return (
      <div className="flex align-items-center flex-column">
        <i className="pi pi-image mt-3 p-5" style={{ fontSize: "5em", borderRadius: "50%", backgroundColor: "var(--surface-b)", color: "var(--surface-d)" }} />
        <span style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }} className="my-5">
          Drag and Drop Image Here
        </span>
      </div>
    )
  }

  const chooseOptions = { icon: "pi pi-fw pi-images", iconOnly: true, className: "custom-choose-btn p-button-rounded p-button-outlined" }
  const uploadOptions = { icon: "pi pi-fw pi-cloud-upload", iconOnly: true, className: "custom-upload-btn p-button-success p-button-rounded p-button-outlined" }
  const cancelOptions = { icon: "pi pi-fw pi-times", iconOnly: true, className: "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined" }

  return (
    <div>
      <Toast ref={toast} />
      <div className="p-card s-container">

        <h3>Basic</h3>
        <FileUpload name="demo[]" url={uploadUrl} accept="image/*" maxFileSize={1000000} onUpload={onSuccessUpload} />

        <h3>Basic with Auto</h3>
        <FileUpload name="demo[]" url={uploadUrl} accept="image/*" maxFileSize={1000000} onUpload={() => onSuccessUpload("File Uploaded with Auto Mode")} auto chooseLabel="Browse" />

        <h3>With too small maxFileSize</h3>
        <FileUpload name="demo[]" url={uploadUrl} accept="image/*" maxFileSize={10} onUpload={onSuccessUpload} onValidationFail={onFileValidationFail} />

        <h3>With adding file to a form</h3>
        <form className="mb-3 w-20rem">
          <div className="flex flex-column mb-3">
            <label htmlFor="report-name" className="mb-1 font-bold">Report name</label>
            <InputText
              id="report-name"
              value={formValues.reportName}
              onChange={e => setValue("reportName", e.target.value)}
            />
          </div>

          <div className="flex flex-column mb-3">
            <label className="mb-1 font-bold">Report file</label>
            {formValues.reportFile ? renderReportFile() : renderUploadButton() }
          </div>

          <Button type="submit" onClick={sendReport}>Send</Button>
        </form>

        <h3>Advanced</h3>
        <FileUpload
          mode="advanced"
          name="demo[]"
          url={"/api/upload"}
          multiple
          accept="image/*"
          maxFileSize={1000000}
          emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>}
        />

        <h3>Template</h3>
        <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
        <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
        <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />

        <FileUpload mode="advanced" ref={fileUploadRef} name="demo[]" url="/api/upload" multiple accept="image/*" maxFileSize={1000000}
          onUpload={onTemplateUpload} onSelect={onTemplateSelect} onError={onTemplateClear} onClear={onTemplateClear}
          headerTemplate={headerTemplate} itemTemplate={itemTemplate} emptyTemplate={emptyTemplate}
          chooseOptions={chooseOptions} uploadOptions={uploadOptions} cancelOptions={cancelOptions}
        />
      </div>
    </div>
  )
}
`

const myUploaderExample = `
const myUploader = (event) => {
    //event.files == files to upload
}
`

const onBeforeUploadParams = [
  { name: "event.xhr", description: "XmlHttpRequest instance." },
  { name: "event.formData", description: "FormData object." },
]

const onBeforeSendParams = [
  { name: "event.xhr", description: "XmlHttpRequest instance." },
  { name: "event.formData", description: "FormData object." },
]

const onUploadParams = [
  { name: "event.xhr", description: "XmlHttpRequest instance." },
  { name: "event.files", description: "Uploaded files." },
]

const onErrorParams = [
  { name: "event.xhr", description: "XmlHttpRequest instance." },
  { name: "event.files", description: "Files that are not uploaded." },
]

const onSelectParams = [
  { name: "event.originalEvent", description: "Original browser event." },
  { name: "event.files", description: "List of selected files." },
]

const onProgressParams = [
  { name: "event.originalEvent", description: "Original browser event." },
  { name: "event.progress", description: "Calculated progress value." },
]

const onValidationFailParams = [
  { name: "event.file", description: "Invalid file." },
  { name: "event.message", description: "Validation message." },
]

const uploadHandlerParams = [
  { name: "event.files", description: "List of selected files." },
  { name: "event.options", description: "Handler options." },
]

const onRemoveParams = [
  { name: "event.originalEvent", description: "Original browser event." },
  { name: "event.file", description: "Selected file." },
]

const onBeforeSelectParams = [
  { name: "event.xhr", description: "XmlHttpRequest instance." },
  { name: "event.files", description: "Uploaded files." },
]

const onBeforeDropParams = [
  { name: "event", description: "DragEvent." },
]

const fileuploadExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<FileUpload name="demo" url="./upload" />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.multiple.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.multiple.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<FileUpload name="demo[]" url="./upload" multiple />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.auto.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.auto.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<FileUpload name="demo" url="./upload" auto />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.fileTypes.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.fileTypes.body`}
          components={{
            code: <code className="inline-code" />,
            acceptLink: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept" target="_blank" />,
          }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<FileUpload name="demo[]" url="./upload" multiple accept="image/*" />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.fileSize.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.fileSize.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<FileUpload name="demo" url="./upload" maxFileSize={1000000} />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.request.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.request.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.customUpload.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.customUpload.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<FileUpload name="demo[]" url="./upload" customUpload uploadHandler={myUploader} />`}
      />
      <Highlighter language="jsx" code={myUploaderExample} />
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.customUpload.onSelect`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<FileUpload onSelect={data => onSelectFile(data.files[0])} />`}
      />
    </div>
  </div>
)

export const fileupload = {
  component: "FileUpload",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: fileuploadExtra,
  },
  code,
  scope: { FileUpload, Toast, InputText, Button, Tooltip, ProgressBar, Tag },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "mode", type: `"basic" | "advanced"`, default: "basic", description: `${I18N_PREFIX}.props.name` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "url", type: "string", description: `${I18N_PREFIX}.props.url` },
    { name: "multiple", type: "boolean", default: false, description: `${I18N_PREFIX}.props.multiple` },
    { name: "accept", type: "string", description: `${I18N_PREFIX}.props.accept` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "auto", type: "boolean", default: false, description: `${I18N_PREFIX}.props.auto` },
    { name: "maxFileSize", type: "number", description: `${I18N_PREFIX}.props.maxFileSize` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "withCredentials", type: "boolean", default: false, description: `${I18N_PREFIX}.props.withCredentials` },
    { name: "chooseLabel", type: "string", description: `${I18N_PREFIX}.props.chooseLabel` },
    { name: "chooseOptions", type: "Options", description: `${I18N_PREFIX}.props.chooseOptions` },
    { name: "uploadOptions", type: "Options", description: `${I18N_PREFIX}.props.uploadOptions` },
    { name: "cancelOptions", type: "Options", description: `${I18N_PREFIX}.props.cancelOptions` },
    { name: "customUpload", type: "boolean", default: false, description: `${I18N_PREFIX}.props.customUpload` },
    { name: "emptyTemplate", type: "ReactNode | Function", default: null, description: `${I18N_PREFIX}.props.emptyTemplate` },
    { name: "headerTemplate", type: "ReactNode | Function", default: null, description: `${I18N_PREFIX}.props.headerTemplate` },
    { name: "itemTemplate", type: "ReactNode | Function", default: null, description: `${I18N_PREFIX}.props.itemTemplate` },
  ],
  eventDescriptionProps: [
    { name: "onBeforeUpload", params: onBeforeUploadParams, description: `${I18N_PREFIX}.props.onBeforeUpload` },
    { name: "onBeforeSend", params: onBeforeSendParams, description: `${I18N_PREFIX}.props.onBeforeSend` },
    { name: "onUpload", params: onUploadParams, description: `${I18N_PREFIX}.props.onUpload` },
    { name: "onError", params: onErrorParams, description: `${I18N_PREFIX}.props.onError` },
    { name: "onClear", description: `${I18N_PREFIX}.props.onClear` },
    { name: "onSelect", params: onSelectParams, description: `${I18N_PREFIX}.props.onSelect` },
    { name: "onProgress", params: onProgressParams, description: `${I18N_PREFIX}.props.onProgress` },
    { name: "onValidationFail", params: onValidationFailParams, description: `${I18N_PREFIX}.props.onValidationFail` },
    { name: "uploadHandler", params: uploadHandlerParams, description: `${I18N_PREFIX}.props.uploadHandler` },
    { name: "onRemove", params: onRemoveParams, description: `${I18N_PREFIX}.props.onRemove` },
    { name: "onBeforeSelect", params: onBeforeSelectParams, description: `${I18N_PREFIX}.props.onBeforeSelect` },
    { name: "onBeforeDrop", params: onBeforeDropParams, description: `${I18N_PREFIX}.props.onBeforeDrop` },
  ],
  footer: (
    <ParamsTable
      title={i18n.t(`${I18N_PREFIX}.header.chooseOptions`)}
      description={[
        { name: "label", type: "string", description: `${I18N_PREFIX}.options.label` },
        { name: "icon", type: "string", description: `${I18N_PREFIX}.options.icon` },
        { name: "className", type: "string", description: `${I18N_PREFIX}.options.className` },
        { name: "iconOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.options.iconOnly` },
        { name: "style", type: "object", description: `${I18N_PREFIX}.options.style` },
      ]}
    />
  ),
}
