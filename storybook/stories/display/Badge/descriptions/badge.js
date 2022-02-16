/* eslint-disable max-len */
import { Badge, Button } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.badge"

const code = `
function BadgeExample () {
  return (
    <div className="p-card sh-container">
      <div className="card">
        <h5>Numbers</h5>
        <Badge value="2" className="mr-2" />
        <Badge value="8" severity="success" className="mr-2" />
        <Badge value="4" severity="info" className="mr-2" />
        <Badge value="12" severity="warning" className="mr-2" />
        <Badge value="3" severity="danger" />

        <h5 className="mb-4">Positioned Badge</h5>
        <i className="pi pi-bell mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge value="2" />
        </i>
        <i className="pi pi-calendar mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge value="10+" severity="danger" />
        </i>
        <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge severity="danger" />
        </i>

        <h5>Button Badge</h5>
        <Button type="button" label="Emails" className="mr-2"><Badge value="8" /></Button>
        <Button type="button" label="Messages" icon="pi pi-users" className="p-button-warning">
          <Badge value="8" severity="danger" />
        </Button>

        <h5>Sizes</h5>
        <Badge value="2" className="mr-2" size="small" severity="info" />
        <Badge value="2" className="mr-2" />
        <Badge value="4" className="mr-2" size="large" severity="warning" />
        <Badge value="6" size="xlarge" severity="success" />
      </div>
    </div>
  )
}
`

export const badge = {
  header: "Badge",
  content: `${I18N_PREFIX}.content`,
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
