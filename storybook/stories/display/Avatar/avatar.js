/* eslint-disable max-len */
import { Avatar, Badge } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.avatar"

const code = `
function AvatarExample () {
  return (
    <div className="p-card s-container">
      <div className="grid">
        <div className="col-12 md:col-4">
          <div className="card">
            <h3>Label</h3>
            <Avatar label="P" className="mr-2" size="xlarge" />
            <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: "#2196F3", color: "#ffffff" }} />
            <Avatar label="U" className="mr-2" style={{ backgroundColor: "#9c27b0", color: "#ffffff" }} />
            <Avatar label="W" className="mr-2" size="small" style={{ backgroundColor: "#b7e4c7" }} />
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="card">
            <h3>Label - Circle</h3>
            <Avatar label="P" className="mr-2" size="xlarge" shape="circle" />
            <Avatar label="V" className="mr-2" size="large" style={{ backgroundColor: "#2196F3", color: "#ffffff" }} shape="circle" />
            <Avatar label="U" className="mr-2" style={{ backgroundColor: "#9c27b0", color: "#ffffff" }} shape="circle" />
            <Avatar label="W" className="mr-2" size="small" shape="circle" style={{ backgroundColor: "#b7e4c7" }} />
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="card">
            <h3>Label - Badge</h3>
            <Avatar label="U" size="xlarge" className="p-overlay-badge" style={{ backgroundColor: "#4caf4f", color: "#ffffff" }}>
              <Badge value="4" severity="danger" />
            </Avatar>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="col-12 md:col-4">
          <div className="card">
            <h3>Icon</h3>
            <Avatar icon="pi pi-user" className="mr-2" size="xlarge" />
            <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: "#2196F3", color: "#ffffff" }} />
            <Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: "#9c27b0", color: "#ffffff" }} />
            <Avatar icon="pi pi-user" className="mr-2" size="small" style={{ backgroundColor: "#b7e4c7" }} />
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="card">
            <h3>Icon - Circle</h3>
            <Avatar icon="pi pi-user" className="mr-2" size="xlarge" shape="circle" />
            <Avatar icon="pi pi-user" className="mr-2" size="large" style={{ backgroundColor: "#2196F3", color: "#ffffff" }} shape="circle" />
            <Avatar icon="pi pi-user" className="mr-2" style={{ backgroundColor: "#9c27b0", color: "#ffffff" }} shape="circle" />
            <Avatar icon="pi pi-user" className="mr-2" size="small" style={{ backgroundColor: "#b7e4c7" }} shape="circle" />
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="card">
            <h3>Icon - Badge</h3>
            <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge"><Badge value="4" /></Avatar>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="col-12 md:col-4">
          <div className="card">
            <h3>Image</h3>
            <Avatar image="https://randomuser.me/api/portraits/men/3.jpg" className="mr-2" size="xlarge" shape="circle" />
            <Avatar image="https://randomuser.me/api/portraits/women/59.jpg" className="mr-2" size="large" shape="circle" />
            <Avatar image="https://randomuser.me/api/portraits/men/5.jpg" className="mr-2" shape="circle" />
            <Avatar image="https://randomuser.me/api/portraits/women/24.jpg" className="mr-2" size="small" shape="circle" />
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="card">
            <h3>Image - Badge</h3>
            <Avatar className="p-overlay-badge" image="https://randomuser.me/api/portraits/women/44.jpg" size="xlarge">
              <Badge value="4" severity="danger" />
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}
`

const eventParams = [
  { name: "event", description: "Browser event" },
]

export const avatar = {
  header: "Avatar",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Avatar, Badge },
  descriptionProps: [
    { name: "label", type: "string", description: `${I18N_PREFIX}.props.label` },
    { name: "icon", type: "string", description: `${I18N_PREFIX}.props.icon` },
    { name: "image", type: "string", description: `${I18N_PREFIX}.props.image` },
    { name: "size", type: "string", description: `${I18N_PREFIX}.props.size` },
    { name: "shape", type: "string", default: "square", description: `${I18N_PREFIX}.props.shape` },
    { name: "imageAlt", type: "string", description: `${I18N_PREFIX}.props.imageAlt` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
  ],
  eventDescriptionProps: [
    { name: "onClick", params: eventParams, description: `${I18N_PREFIX}.props.onClick` },
    { name: "onImageError", params: eventParams, description: `${I18N_PREFIX}.props.onImageError` },
  ],
}
