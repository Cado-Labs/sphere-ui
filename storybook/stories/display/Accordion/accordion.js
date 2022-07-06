/* eslint-disable max-len */
import { Fragment } from "react"
import { Accordion, AccordionTab, Button } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

import { ParamsTable, EventTable, Highlighter } from "@components"

const I18N_PREFIX = "stories.accordion"

const code = `
function AccordionExample () {
    const [activeIndex, setActiveIndex] = React.useState(null)

    const onClick = (itemIndex) => {
        const _activeIndex = activeIndex ? [...activeIndex] : []

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex)
        }
        else {
            const index = _activeIndex.indexOf(itemIndex)
            if (index === -1) {
                _activeIndex.push(itemIndex)
            }
            else {
                _activeIndex.splice(index, 1)
            }
        }

        setActiveIndex(_activeIndex)
    }

    return (
        <div>
            <div className="p-card s-container mb-3">
                <h5>Default</h5>
                <Accordion activeIndex={0}>
                    <AccordionTab header="Header I">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </AccordionTab>
                    <AccordionTab header="Header II">
                        <p>Sed ut perspiciatis unde omnis.</p>
                    </AccordionTab>
                    <AccordionTab header="Header III">
                        <p>At vero eos et accusamus et iusto odio.</p>
                    </AccordionTab>
                </Accordion>
            </div>
            <div className="p-card s-container mb-3">
                <h5>Multiple</h5>
                <Accordion multiple activeIndex={[0]}>
                    <AccordionTab header="Header I">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </AccordionTab>
                    <AccordionTab header="Header II">
                        <p>Sed ut perspiciatis unde omnis.</p>
                    </AccordionTab>
                    <AccordionTab header="Header III">
                        <p>At vero eos et accusamus et iusto odio.</p>
                    </AccordionTab>
                    <AccordionTab header="Header IV" disabled>
                    </AccordionTab>
                </Accordion>
            </div>
            <div className="p-card s-container mb-3">
                <h5>Programmatic</h5>
                <div className="pt-2 pb-4">
                    <Button icon={activeIndex && activeIndex.some((index) => index === 0) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 1st" onClick={() => onClick(0)} className="p-button-text" />
                    <Button icon={activeIndex && activeIndex.some((index) => index === 1) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 2nd" onClick={() => onClick(1)} className="p-button-text ml-2" />
                    <Button icon={activeIndex && activeIndex.some((index) => index === 2) ? 'pi pi-minus' : 'pi pi-plus'} label="Toggle 3rd" onClick={() => onClick(2)} className="p-button-text ml-2" />
                </div>

                <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                    <AccordionTab header="Header I">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </AccordionTab>
                    <AccordionTab header="Header II">
                        <p>Sed ut perspiciatis unde omnis.</p>
                    </AccordionTab>
                    <AccordionTab header="Header III">
                        <p>At vero eos et accusamus et iusto odio.</p>
                    </AccordionTab>
                </Accordion>
            </div>
            <div className="p-card s-container mb-3">
                <h5>Custom Headers</h5>
                <Accordion className="accordion-custom" activeIndex={0}>
                    <AccordionTab header={<React.Fragment><i className="pi pi-calendar"></i><span>Header I</span></React.Fragment>}>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </AccordionTab>
                    <AccordionTab header={<React.Fragment><i className="pi pi-user"></i><span>Header II</span></React.Fragment>}>
                        <p>Sed ut perspiciatis unde omnis.</p>
                    </AccordionTab>
                    <AccordionTab header={<React.Fragment><i className="pi pi-search"></i><span>Header III</span><i className="pi pi-cog"></i></React.Fragment>}>
                        <p>At vero eos et accusamus et iusto odio.</p>
                    </AccordionTab>
                </Accordion>
            </div>
        </div>
    )
}
`

const controlledExample = `
const [activeIndex, setActiveIndex] = useState(0)

<Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
    <AccordionTab header="Header I">
        Content I
    </AccordionTab>
    <AccordionTab header="Header II">
        Content II
    </AccordionTab>
    <AccordionTab header="Header III">
        Content III
    </AccordionTab>
</Accordion>
`

const uncontrolledExample = `
<Accordion>
    <AccordionTab header="Header I">
        Content I
    </AccordionTab>
    <AccordionTab header="Header II">
        Content II
    </AccordionTab>
    <AccordionTab header="Header III">
        Content III
    </AccordionTab>
</Accordion>
`

const multipleExample = `
<Accordion multiple>
    <AccordionTab header="Header I">
        Content I
    </AccordionTab>
    <AccordionTab header="Header II">
        Content II
    </AccordionTab>
    <AccordionTab header="Header III">
        Content III
    </AccordionTab>
</Accordion>
`

const accordionExtra = (
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
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.multiple.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.multiple.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={multipleExample} />
    </div>
  </div>
)

export const accordion = {
  component: "Accordion",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: accordionExtra,
  },
  code,
  scope: { Accordion, AccordionTab, Button },
  footer: (
    <Fragment>
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.header.accordion`)}
        description={[
          { name: "id", type: "string", description: `${I18N_PREFIX}.props.accordion.id` },
          { name: "activeIndex", type: "number", description: `${I18N_PREFIX}.props.accordion.activeIndex` },
          { name: "multiple", type: "boolean", default: false, description: `${I18N_PREFIX}.props.accordion.multiple` },
          { name: "style", type: "object", description: `${I18N_PREFIX}.props.accordion.style` },
          { name: "className", type: "string", description: `${I18N_PREFIX}.props.accordion.className` },
        ]}
      />
      <EventTable
        title={i18n.t(`${I18N_PREFIX}.header.events`)}
        description={[
          { name: "onTabOpen", params: [{ name: "event.originalEvent", description: "browser event" }, { name: "event.index", description: "Index or indexes of the tab (number or array of numbers)" }], description: `${I18N_PREFIX}.props.events.onTabOpen` },
          { name: "onTabClosed", params: [{ name: "event.originalEvent", description: "browser event" }, { name: "event.index", description: "Index or indexes of the tab" }], description: `${I18N_PREFIX}.props.events.onTabClosed` },
          { name: "onTabChange", params: [{ name: "event.originalEvent", description: "browser event" }, { name: "event.index", description: "Index or indexes of the tab" }], description: `${I18N_PREFIX}.props.events.onTabChange` },
        ]}
      />
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.header.accordionTab`)}
        description={[
          { name: "header", type: "string", description: `${I18N_PREFIX}.props.accordionTab.header` },
          { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.accordionTab.disabled` },
          { name: "style", type: "object", description: `${I18N_PREFIX}.props.accordionTab.style` },
          { name: "className", type: "string", description: `${I18N_PREFIX}.props.accordionTab.className` },
          { name: "headerClassName", type: "string", description: `${I18N_PREFIX}.props.accordionTab.headerClassName` },
          { name: "contentClassName", type: "string", description: `${I18N_PREFIX}.props.accordionTab.contentClassName` },
        ]}
      />
    </Fragment>
  ),
}
