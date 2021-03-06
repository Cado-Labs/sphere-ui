/* eslint-disable max-len */
import { Fragment } from "react"
import { TabView, TabPanel, Button, Avatar, Badge } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

import { ParamsTable, Highlighter } from "@components"

const I18N_PREFIX = "stories.tabview"

const code = `
function TabViewExample () {
  const [activeIndex1, setActiveIndex1] = React.useState(1)
  const [activeIndex2, setActiveIndex2] = React.useState(0)
  const scrollableTabs = Array.from({ length: 50 }, (_, i) => {
    const tabNumber = i + 1
    return { title: ("Tab" + tabNumber), content: ("Tab " + tabNumber +  " Content") }
  })

  const tabHeaderIIITemplate = options => {
    return (
      <div onClick={options.onClick} className={options.className} style={{ cursor: "pointer" }}>
        <i className="pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
          <Badge severity="danger" />
        </i>
      </div>
    )
  }

  const tabHeaderIITemplate = options => {
    return (
      <div className={options.className} style={{ cursor: "pointer" }} onClick={options.onClick}>
        <Avatar image="images/avatar/amyelsner.png" onImageError={e => e.target.src = "https://randomuser.me/api/portraits/women/81.jpg"} shape="circle" className="mx-2" />
        Amy Elsner
      </div>
    )
  }

  const tabHeaderITemplate = options => {
    return (
      <button className={options.className} style={{ cursor: "pointer", height: "calc(100% + 2px)" }} onClick={options.onClick}>
        <i className="pi pi-prime mr-2" />
        {options.titleElement}
      </button>
    )
  }

  return (
    <div>
      <div className="p-card s-container mb-3">
        <h3>Default</h3>
        <TabView>
          <TabPanel header="Header I">
            <p>Aliquam auctor lacus nec lacus porta egestas. Quisque mauris elit.</p>
          </TabPanel>
          <TabPanel header="Header II">
            <p>Morbi a pretium tellus, non vulputate quam. Vivamus nunc enim.</p>
          </TabPanel>
          <TabPanel header="Header III">
            <p>Suspendisse non leo eu augue convallis viverra nec at augue.</p>
          </TabPanel>
        </TabView>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Programmatic</h3>
        <div className="pt-2 pb-4">
          <Button onClick={() => setActiveIndex1(0)} className="p-button-text mr-1" label="Activate 1st" />
          <Button onClick={() => setActiveIndex1(1)} className="p-button-text mr-1" label="Activate 2nd" />
          <Button onClick={() => setActiveIndex1(2)} className="p-button-text" label="Activate 3rd" />
        </div>

        <TabView activeIndex={activeIndex1} onTabChange={e => setActiveIndex1(e.index)}>
          <TabPanel header="Header I">
            <p>Aliquam auctor lacus nec lacus porta egestas. Quisque mauris elit.</p>
          </TabPanel>
          <TabPanel header="Header II">
            <p>Morbi a pretium tellus, non vulputate quam. Vivamus nunc enim.</p>
          </TabPanel>
          <TabPanel header="Header III">
            <p>Suspendisse non leo eu augue convallis viverra nec at augue.</p>
          </TabPanel>
        </TabView>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Disabled</h3>
        <TabView>
          <TabPanel header="Header I">
            <p>Aliquam auctor lacus nec lacus porta egestas. Quisque mauris elit.</p>
          </TabPanel>
          <TabPanel header="Header II">
            <p>Morbi a pretium tellus, non vulputate quam. Vivamus nunc enim.</p>
          </TabPanel>
          <TabPanel header="Header III">
            <p>Suspendisse non leo eu augue convallis viverra nec at augue.</p>
          </TabPanel>
          <TabPanel header="Header IV" disabled />
        </TabView>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Header Icons</h3>
        <TabView className="tabview-custom">
          <TabPanel header="Header I" leftIcon="pi pi-calendar">
            <p>Aliquam auctor lacus nec lacus porta egestas. Quisque mauris elit.</p>
          </TabPanel>
          <TabPanel header="Header II" rightIcon="pi pi-user">
            <p>Morbi a pretium tellus, non vulputate quam. Vivamus nunc enim.</p>
          </TabPanel>
          <TabPanel header="Header III" leftIcon="pi pi-search" rightIcon="pi pi-cog">
            <p>Suspendisse non leo eu augue convallis viverra nec at augue.</p>
          </TabPanel>
        </TabView>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Custom Headers</h3>
        <TabView>
          <TabPanel header="Header I" headerTemplate={tabHeaderITemplate}>
            <p>Aliquam auctor lacus nec lacus porta egestas. Quisque mauris elit.</p>
          </TabPanel>
          <TabPanel headerTemplate={tabHeaderIITemplate}>
            <p>Morbi a pretium tellus, non vulputate quam. Vivamus nunc enim.</p>
          </TabPanel>
          <TabPanel headerTemplate={tabHeaderIIITemplate}>
            <p>Suspendisse non leo eu augue convallis viverra nec at augue.</p>
          </TabPanel>
        </TabView>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Closable</h3>
        <TabView>
          <TabPanel header="Header I">
            <p>Aliquam auctor lacus nec lacus porta egestas. Quisque mauris elit.</p>
          </TabPanel>
          <TabPanel header="Header II closable" closable>
            <p>Morbi a pretium tellus, non vulputate quam. Vivamus nunc enim.</p>
          </TabPanel>
          <TabPanel header="Header III" closable>
            <p>Suspendisse non leo eu augue convallis viverra nec at augue.</p>
          </TabPanel>
        </TabView>
      </div>

      <div className="p-card s-container">
        <h3>Scrollable</h3>
        <div className="py-2">
          <Button onClick={() => setActiveIndex2(0)} className="p-button-text mr-1" label="Activate 1st" />
          <Button onClick={() => setActiveIndex2(29)} className="p-button-text mr-1" label="Activate 30th" />
          <Button onClick={() => setActiveIndex2(49)} className="p-button-text" label="Activate 50th" />
        </div>

        <TabView activeIndex={activeIndex2} onTabChange={e => setActiveIndex2(e.index)} scrollable>
          {scrollableTabs.map(tab => {
            return (
              <TabPanel key={tab.title} header={tab.title}>
                <p>{tab.content}</p>
              </TabPanel>
            )
          })}
        </TabView>
      </div>
    </div>
  )
}
`

const controlledExample = `
const [activeIndex, setActiveIndex] = useState(0);

<TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
    <TabPanel header="Header I">
        Content I
    </TabPanel>
    <TabPanel header="Header II">
        Content II
    </TabPanel>
    <TabPanel header="Header III">
        Content III
    </TabPanel>
</TabView>
`

const uncontrolledExample = `
<TabView>
    <TabPanel header="Header I">
        Content I
    </TabPanel>
    <TabPanel header="Header II">
        Content II
    </TabPanel>
    <TabPanel header="Header III">
        Content III
    </TabPanel>
</TabView>
`

const headerTemplateExample = `
<TabView>
    <TabPanel header="Header I" headerTemplate={template}>
        Content I
    </TabPanel>
</TabView>
`

const headerTemplateFunctionExample = `
template: (options) => {
  // options.className
  // options.titleClassName
  // options.onClick
  // options.leftIconElement
  // options.titleElement
  // options.rightIconElement
  // options.element
  // options.props
  // options.index
  // options.selected
  // options.ariaControls
}
`

const tabViewExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.controlled.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.controlled.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={controlledExample} />
    </div>
    <div className="mb-3">
      <div className="title"h3>{i18n.t(`${I18N_PREFIX}.content.uncontrolled.title`)}</div>
      <p>{i18n.t(`${I18N_PREFIX}.content.uncontrolled.body`)}</p>
      <Highlighter language="jsx" code={uncontrolledExample} />
    </div>
    <div>
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.template.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.template.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={headerTemplateExample} />
      <Highlighter language="jsx" code={headerTemplateFunctionExample} />
    </div>
  </div>
)

export const tabView = {
  component: "TabView",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: tabViewExtra,
  },
  code,
  scope: { TabView, TabPanel, Button, Avatar, Badge },
  footer: (
    <Fragment>
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.header.tabview`)}
        description={[
          { name: "id", type: "string", description: `${I18N_PREFIX}.props.tabview.id` },
          { name: "activeIndex", type: "number", default: 0, description: `${I18N_PREFIX}.props.tabview.activeIndex` },
          { name: "style", type: "object", description: `${I18N_PREFIX}.props.tabview.style` },
          { name: "className", type: "string", description: `${I18N_PREFIX}.props.tabview.className` },
          { name: "renderActiveOnly", type: "boolean", default: true, description: `${I18N_PREFIX}.props.tabview.renderActiveOnly` },
          { name: "scrollable", type: "boolean", default: false, description: `${I18N_PREFIX}.props.tabview.scrollable` },
        ]}
      />
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.header.tabpanel`)}
        description={[
          { name: "header", type: "any", description: `${I18N_PREFIX}.props.tabpanel.header` },
          { name: "headerTemplate", type: "any", description: `${I18N_PREFIX}.props.tabpanel.headerTemplate` },
          { name: "leftIcon", type: "string", description: `${I18N_PREFIX}.props.tabpanel.leftIcon` },
          { name: "rightIcon", type: "string", description: `${I18N_PREFIX}.props.tabpanel.rightIcon` },
          { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.tabpanel.disabled` },
          { name: "closable", type: "boolean", default: false, description: `${I18N_PREFIX}.props.tabpanel.closable` },
          { name: "style", type: "object", description: `${I18N_PREFIX}.props.tabpanel.style` },
          { name: "className", type: "string", description: `${I18N_PREFIX}.props.tabpanel.className` },
          { name: "headerStyle", type: "object", description: `${I18N_PREFIX}.props.tabpanel.headerStyle` },
          { name: "headerClassName", type: "string", description: `${I18N_PREFIX}.props.tabpanel.headerClassName` },
          { name: "contentStyle", type: "object", description: `${I18N_PREFIX}.props.tabpanel.contentStyle` },
          { name: "contentClassName", type: "string", description: `${I18N_PREFIX}.props.tabpanel.contentClassName` },
        ]}
      />
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.header.headerTemplate`)}
        description={[
          { name: "className", type: "string", description: `${I18N_PREFIX}.props.headerTemplate.className` },
          { name: "titleClassName", type: "string", description: `${I18N_PREFIX}.props.headerTemplate.titleClassName` },
          { name: "onClick", type: "function", description: `${I18N_PREFIX}.props.headerTemplate.onClick` },
          { name: "leftIconElement", type: "string", description: `${I18N_PREFIX}.props.headerTemplate.leftIconElement` },
          { name: "titleElement", type: "any", description: `${I18N_PREFIX}.props.headerTemplate.titleElement` },
          { name: "rightIconElement", type: "string", description: `${I18N_PREFIX}.props.headerTemplate.rightIconElement` },
          { name: "element", type: "any", description: `${I18N_PREFIX}.props.headerTemplate.element` },
          { name: "props", type: "object", description: `${I18N_PREFIX}.props.headerTemplate.props` },
          { name: "index", type: "number", description: `${I18N_PREFIX}.props.headerTemplate.index` },
          { name: "selected", type: "boolean", description: `${I18N_PREFIX}.props.headerTemplate.selected` },
          { name: "ariaControls", type: "string", description: `${I18N_PREFIX}.props.headerTemplate.ariaControls` },
        ]}
      />
    </Fragment>
  ),
}
