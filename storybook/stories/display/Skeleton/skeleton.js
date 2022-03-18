/* eslint-disable max-len */
import { Skeleton, DataTable, Column } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

import { Highlighter } from "@components"

const I18N_PREFIX = "stories.skeleton"

const code = `
function SkeletonExample () {
  const products = Array.from({ length: 5 })

  const bodyTemplate = () => {
    return <Skeleton />
  }

  return (
    <div>
      <div className="p-card s-container mb-3">
        <div className="grid formgrid">
          <div className="field col-12 md:col-6">
            <h3>Rectangle</h3>
            <Skeleton className="mb-2" />
            <Skeleton width="10rem" className="mb-2" />
            <Skeleton width="5rem" className="mb-2" />
            <Skeleton height="2rem" className="mb-2" />
            <Skeleton width="10rem" height="4rem" />
          </div>
          <div className="field col-12 md:col-6">
            <h3>Rounded</h3>
            <Skeleton className="mb-2" borderRadius="16px" />
            <Skeleton width="10rem" className="mb-2" borderRadius="16px" />
            <Skeleton width="5rem" borderRadius="16px" className="mb-2" />
            <Skeleton height="2rem" className="mb-2" borderRadius="16px" />
            <Skeleton width="10rem" height="4rem" borderRadius="16px" />
          </div>
          <div className="field col-12 md:col-6">
            <h3 className="mt-3">Square</h3>
            <div className="flex align-items-end">
              <Skeleton size="2rem" className="mr-2" />
              <Skeleton size="3rem" className="mr-2" />
              <Skeleton size="4rem" className="mr-2" />
              <Skeleton size="5rem" />
            </div>
          </div>
          <div className="field col-12 md:col-6">
            <h3 className="mt-3">Circle</h3>
            <div className="flex align-items-end">
              <Skeleton shape="circle" size="2rem" className="mr-2" />
              <Skeleton shape="circle" size="3rem" className="mr-2" />
              <Skeleton shape="circle" size="4rem" className="mr-2" />
              <Skeleton shape="circle" size="5rem" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-card s-container">
        <div className="grid formgrid">
          <div className="field col-12 md:col-6 md:pr-6 pr-0">
            <h3>Card</h3>
            <div className="border-solid border-200 border-round p-4">
              <div className="flex mb-3">
                <Skeleton shape="circle" size="4rem" className="mr-2" />
                <div>
                  <Skeleton width="10rem" className="mb-2" />
                  <Skeleton width="5rem" className="mb-2" />
                  <Skeleton height=".5rem" />
                </div>
              </div>
              <Skeleton width="100%" height="150px" />
              <div className="flex justify-content-between mt-3">
                <Skeleton width="4rem" height="2rem" />
                <Skeleton width="4rem" height="2rem" />
              </div>
            </div>
          </div>

          <div className="field col-12 md:col-6">
            <h3>List</h3>
            <div className="border-solid border-200 border-round p-4">
              <ul className="m-0 p-0 list-none">
                <li className="mb-3">
                  <div className="flex">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div style={{ flex: "1" }}>
                      <Skeleton width="100%" className="mb-2" />
                      <Skeleton width="75%" />
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="flex">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div style={{ flex: "1" }}>
                      <Skeleton width="100%" className="mb-2" />
                      <Skeleton width="75%" />
                    </div>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="flex">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div style={{ flex: "1" }}>
                      <Skeleton width="100%" className="mb-2" />
                      <Skeleton width="75%" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex">
                    <Skeleton shape="circle" size="4rem" className="mr-2" />
                    <div style={{ flex: "1" }}>
                      <Skeleton width="100%" className="mb-2" />
                      <Skeleton width="75%" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h3>DataTable</h3>
        <DataTable value={products} className="p-datatable-striped">
          <Column field="code" header="Code" style={{ width: "25%" }} body={bodyTemplate} />
          <Column field="name" header="Name" style={{ width: "25%" }} body={bodyTemplate} />
          <Column field="category" header="Category" style={{ width: "25%" }} body={bodyTemplate} />
          <Column field="quantity" header="Quantity" style={{ width: "25%" }} body={bodyTemplate} />
        </DataTable>
      </div>

    </div>
  )
}
`

const sizeExample = `
<Skeleton width="100%" height="2rem" />
<Skeleton shape="circle" size="50px" />
`

const skeletonExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        {i18n.t(`${I18N_PREFIX}.content.start.body`)}
      </p>
      <Highlighter language="jsx" code={`<Skeleton />`} />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.circle.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.circle.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={`<Skeleton shape="circle" />`} />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.size.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.size.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={sizeExample} />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.radius.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.radius.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={`<Skeleton borderRadius="16px" />`} />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.animation.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.animation.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={`<Skeleton animation="none" />`} />
    </div>
  </div>
)

export const skeleton = {
  component: "Skeleton",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: skeletonExtra,
  },
  code,
  scope: { Skeleton, DataTable, Column },
  descriptionProps: [
    { name: "shape", type: "string", default: "rectangle", description: `${I18N_PREFIX}.props.shape` },
    { name: "size", type: "string", description: `${I18N_PREFIX}.props.size` },
    { name: "width", type: "string", default: "100%", description: `${I18N_PREFIX}.props.width` },
    { name: "height", type: "string", default: "1rem", description: `${I18N_PREFIX}.props.height` },
    { name: "animation", type: "string", default: "wave", description: `${I18N_PREFIX}.props.animation` },
    { name: "borderRadius", type: "string", description: `${I18N_PREFIX}.props.borderRadius` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
  ],
}
