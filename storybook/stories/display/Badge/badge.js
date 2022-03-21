/* eslint-disable max-len */
import { Badge, Button } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.badge"

const code = `
function BadgeExample () {
  return (
    <div className="p-card s-container">
      <div className="card">
        <h3>Numbers</h3>
        <Badge value="2" className="mr-2" />
        <Badge value="5" severity="secondary" className="mr-2" />
        <Badge value="8" severity="success" className="mr-2" />
        <Badge value="4" severity="info" className="mr-2" />
        <Badge value="12" severity="warning" className="mr-2" />
        <Badge value="15" severity="help" className="mr-2" />
        <Badge value="3" severity="danger" />

        <h3 className="mb-4">Positioned Badge</h3>
        <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge value="2" />
        </i>
        <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge value="10+" severity="danger" />
        </i>
        <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge severity="danger" />
        </i>

        <h3>Button Badge</h3>
        <Button type="button" label="Emails" className="mr-2"><Badge value="8" /></Button>
        <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning">
          <Badge value="8" severity="danger" />
        </Button>

        <h3>Sizes</h3>
        <Badge value="2" className="mr-2" size="small" severity="info" />
        <Badge value="2" className="mr-2" />
        <Badge value="4" className="mr-2" size="large" severity="warning" />
        <Badge value="6" size="xlarge" severity="secondary" />
      </div>
    </div>
  )
}
`

const badgeExtra = (
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
        code={`<Badge value="2" />`}
      />
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
        <li className="line-height-3">error</li>
      </ul>
      <Highlighter
        language="jsx"
        code={`<Badge value="2" severity="info" />`}
      />
    </div>
  </div>
)

export const badge = {
  component: "Badge",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
    extra: badgeExtra,
  },
  code,
  scope: { Badge, Button },
  descriptionProps: [
    { name: "value", type: "any", description: `${I18N_PREFIX}.props.value` },
    { name: "severity", type: "string", description: `${I18N_PREFIX}.props.severity` },
    { name: "size", type: "string", description: `${I18N_PREFIX}.props.size` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
  ],
}
