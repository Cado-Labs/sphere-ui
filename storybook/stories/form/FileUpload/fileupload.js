/* eslint-disable max-len */
import { FileUpload, Toast, InputText, Button } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { ParamsTable, Highlighter } from "@components"

const I18N_PREFIX = "stories.fileupload"

const code = `

function FileUploadExample () {
  const uploadUrl = "https://primefaces.org/primereact/upload.php"
  const toast = React.useRef(null)
  const [formValues, setFormValues] = React.useState({ reportName: "", reportFile: null })
  const [fileName, setFileName] = React.useState("")

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

  const sendReport = (e) => {
    e.preventDefault()
    if (!formValues.reportName || !formValues.reportFile) {
      onFailedFormSend("The form is incomplete")
      return
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      onSuccessUpload()
      resetForm()
    })
    .catch(onFailedFormSend)
  }

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

export const fileupload = {
  header: "FileUpload",
  content: (
    <div>
      <div className="mb-3">
        {i18n.t(`${I18N_PREFIX}.content.main`)}
      </div>
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
  ),
  code,
  scope: { FileUpload, Toast, InputText, Button },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
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
    { name: "chooseOptions", type: "ChooseOptions", description: `${I18N_PREFIX}.props.chooseOptions` },
    { name: "customUpload", type: "boolean", default: false, description: `${I18N_PREFIX}.props.customUpload` },
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
  ],
  footer: (
    <ParamsTable
      title={i18n.t(`${I18N_PREFIX}.header.chooseOptions`)}
      description={[
        { name: "label", type: "string", description: `${I18N_PREFIX}.chooseOptions.label` },
        { name: "icon", type: "string", description: `${I18N_PREFIX}.chooseOptions.icon` },
        { name: "className", type: "string", description: `${I18N_PREFIX}.chooseOptions.className` },
        { name: "iconOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.chooseOptions.iconOnly` },
        { name: "style", type: "object", description: `${I18N_PREFIX}.chooseOptions.style` },
      ]}
    />
  ),
}
