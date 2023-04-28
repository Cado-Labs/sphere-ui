/* eslint-disable max-len */
import { Tag } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.tag"

const code = `
function TagExample () {
  return (
    <div className="p-card s-container">
      <h3>Tags</h3>
      <div className="flex gap-2">
        <Tag value="Primary" />
        <Tag severity="secondary" value="Secondary" />
        <Tag severity="success" value="Success" />
        <Tag severity="info" value="Info" />
        <Tag severity="warning" value="Warning" />
        <Tag severity="help" value="Help" />
        <Tag severity="danger" value="Danger" />
      </div>

      <h3>Icons</h3>
      <div className="flex gap-2">
        <Tag icon="pi pi-user" value="Primary" />
        <Tag icon="pi pi-eye" severity="secondary" value="Secondary" />
        <Tag icon="pi pi-check" severity="success" value="Success" />
        <Tag icon="pi pi-info-circle" severity="info" value="Info" />
        <Tag icon="pi pi-exclamation-triangle" severity="warning" value="Warning" />
        <Tag icon="pi pi-heart-fill" severity="help" value="Help" />
        <Tag icon="pi pi-times" severity="danger" value="Danger" />
      </div>
    </div>
  )
}
`

const tagExtra = (
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
        code={`<Tag value="New" />`}
      />
    </div>

    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.icon.title`)}</div>
      <p>{
        <Trans
          i18nKey={`${I18N_PREFIX}.content.icon.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      }</p>
      <Highlighter language="jsx" code={`<Tag value="New" icon="pi pi-plus" />`} />
    </div>

    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.severities.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.severities.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <ul>
        <li className="line-height-3">primary (default)</li>
        <li className="line-height-3">secondary</li>
        <li className="line-height-3">success</li>
        <li className="line-height-3">info</li>
        <li className="line-height-3">warning</li>
        <li className="line-height-3">help</li>
        <li className="line-height-3">danger</li>
      </ul>
    </div>
  </div>
)

export const tag = {
  component: "Tag",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: tagExtra,
  },
  code,
  scope: { Tag },
  descriptionProps: [
    { name: "value", type: "any", description: `${I18N_PREFIX}.props.value` },
    { name: "severity", type: "string", description: `${I18N_PREFIX}.props.severity` },
    { name: "icon", type: "string", description: `${I18N_PREFIX}.props.icon` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "rounded", type: "boolean", default: false, description: `${I18N_PREFIX}.props.rounded` },
  ],
}
