/* eslint-disable max-len */

import { Card, Button } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.card"

const code = `
function CardExample () {
  const header = (
    <img alt="Card" src="https://picsum.photos/350/150" />
  )
  const footer = (
    <span>
      <Button label="Save" icon="pi pi-check" />
      <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
    </span>
  )

  return (
    <div>
      <Card title="Simple Card" style={{ width: "25rem", marginBottom: "2em" }}>
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Inventore sed consequuntur error repudiandae numquam deserunt
          quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
          cupiditate neque quas!
        </p>
      </Card>

      <Card title="Advanced Card" subTitle="Subtitle" style={{ width: "25em" }} footer={footer} header={header}>
        <p className="m-0" style={{ lineHeight: "1.5" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Inventore sed consequuntur error repudiandae numquam deserunt
          quisquam repellat libero asperiores earum nam nobis,
          culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  )
}
`

export const card = {
  header: "Card",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Card, Button },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "header", type: "any", description: `${I18N_PREFIX}.props.header` },
    { name: "footer", type: "any", description: `${I18N_PREFIX}.props.footer` },
    { name: "title", type: "any", description: `${I18N_PREFIX}.props.title` },
    { name: "subTitle", type: "any", description: `${I18N_PREFIX}.props.subTitle` },
    { name: "sustylebTitle", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
  ],
}
