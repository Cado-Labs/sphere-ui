/* eslint-disable max-len */
import { Image } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.image"

const code = `
function ImageExample () {
  return (
    <div className="p-card s-container">
      <h3>Basic</h3>
      <Image src="https://picsum.photos/600/400" alt="Image" width="250" />

      <h3>Preview</h3>
      <Image src="https://picsum.photos/800/600" alt="Image" width="250" preview />
    </div>
  )
}
`

const imageExtra = (
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
        code={`<Image src="image1.png" alt="Image Text" />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.preview.title`)}</div>
      <p>{i18n.t(`${I18N_PREFIX}.content.preview.body`)}</p>
      <Highlighter
        language="jsx"
        code={`<Image src="image1.png" alt="Image Text" preview />`}
      />
    </div>
  </div>
)

export const image = {
  component: "Image",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: imageExtra,
  },
  code,
  scope: { Image },
  descriptionProps: [
    { name: "preview", type: "boolean", default: false, description: `${I18N_PREFIX}.props.preview` },
    { name: "src", type: "string", description: `${I18N_PREFIX}.props.src` },
    { name: "alt", type: "string", description: `${I18N_PREFIX}.props.alt` },
    { name: "width", type: "string", description: `${I18N_PREFIX}.props.width` },
    { name: "height", type: "string", description: `${I18N_PREFIX}.props.height` },
    { name: "downloadable", type: "boolean", default: false, description: `${I18N_PREFIX}.props.downloadable` },
    { name: "containerStyle", type: "object", description: `${I18N_PREFIX}.props.containerStyle` },
    { name: "containerClassName", type: "string", description: `${I18N_PREFIX}.props.containerClassName` },
    { name: "imageStyle", type: "object", description: `${I18N_PREFIX}.props.imageStyle` },
    { name: "imageClassName", type: "string", description: `${I18N_PREFIX}.props.imageClassName` },
  ],
  eventDescriptionProps: [
    { name: "onShow", description: `${I18N_PREFIX}.props.onShow` },
    { name: "onHide", description: `${I18N_PREFIX}.props.onHide` },
  ],
}
