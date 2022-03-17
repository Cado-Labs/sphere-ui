/* eslint-disable max-len */
import { ScrollTop } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

import { Highlighter } from "@components"

const I18N_PREFIX = "stories.scrolltop"

const code = `
function ScrollTopExample () {
  return (
    <div>
      <div className="p-card s-container">
        <h3>Window</h3>
        <p>Scroll down the page to display the ScrollTop component.</p>
        <ScrollTop />

        <h3>Element</h3>
        <div style={{ width: "250px", height: "200px", overflow: "auto" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Vitae et leo duis ut diam.
            Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut.
            Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna.
            Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris.
            Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales.
            Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus.
            Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas.
            Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris.
            Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer.
            Mattis aliquam faucibus purus in massa tempor nec.
          </p>
          <ScrollTop target="parent" threshold={100} size="small" />
        </div>
      </div>
    </div>
  )
}
`

const targetExample = `
<div style={{ height: "400px", overflow: "auto" }}>
    Content that overflows to container
    <ScrollTop target="parent" />
</div>
`

const scrollTopExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={`<ScrollTop />`} />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.threshold.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.threshold.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={`<ScrollTop threshold={200} />`} />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.target.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.target.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={targetExample} />
    </div>
  </div>
)

export const scrollTop = {
  component: "ScrollTop",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: scrollTopExtra,
  },
  code,
  scope: { ScrollTop },
  descriptionProps: [
    { name: "target", type: "string", default: "window", description: `${I18N_PREFIX}.props.target` },
    { name: "threshold", type: "number", default: 400, description: `${I18N_PREFIX}.props.threshold` },
    { name: "behavior", type: "string", default: "smooth", description: `${I18N_PREFIX}.props.behavior` },
    { name: "size", type: "string", default: "large", description: `${I18N_PREFIX}.props.size` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "onShow", type: "function", description: `${I18N_PREFIX}.props.onShow` },
    { name: "onHide", type: "function", description: `${I18N_PREFIX}.props.onHide` },
  ],
}
