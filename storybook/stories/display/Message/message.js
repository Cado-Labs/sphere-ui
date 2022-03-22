/* eslint-disable max-len */
import { Message, InputText } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.message"

const code = `
function MessageExample () {
  return (
    <div className="p-card s-container">
      <h3>Inline Message</h3>
      <p>Message component is used to display inline messages mostly within forms.</p>
      <div className="grid">
        <div className="col-12 md:col-3">
          <Message severity="info" text="Message Content" />
        </div>
        <div className="col-12 md:col-3">
          <Message severity="success" text="Message Content" />
        </div>
        <div className="col-12 md:col-3">
          <Message severity="warn" text="Message Content" />
        </div>
        <div className="col-12 md:col-3">
          <Message severity="error" text="Message Content" />
        </div>
        <div className="col-12 md:col-3">
          <Message severity="secondary" text="Message Content" />
        </div>
        <div className="col-12 md:col-3">
          <Message severity="help" text="Message Content" />
        </div>
      </div>

      <h3>Validation Message</h3>
      <div className="formgroup-inline mb-2">
        <label htmlFor="username1" className="p-sr-only">Username</label>
        <InputText id="username1" placeholder="Username" className="p-invalid mr-2" />
        <Message severity="error" text="Username is required" />
      </div>
      <div className="formgroup-inline">
        <label htmlFor="email" className="p-sr-only">email</label>
        <InputText id="email" placeholder="Email" className="p-invalid mr-2" />
        <Message severity="error" />
      </div>

      <h3>Form Layout</h3>
      <div className="field p-fluid w-3">
        <label htmlFor="username2">Username</label>
        <InputText id="username2" aria-describedby="username-help" className="p-invalid mr-2" />
        <small id="username-help" className="p-error">Username is not available.</small>
      </div>

      <h3>Inline Message with custom content</h3>
      <div className="col-12 md:col-3">
        <Message
          severity="info"
          content={
            <div className="m-1">
              <div className="font-bold text-center text-xl">Message title</div>
              <div className="flex gap-2 align-items-center mt-2">
                <img alt="info message image" className="border-circle" src="https://picsum.photos/70" />
                <div>
                  This is an information message!
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  )
}
`

const messageExtra = (
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
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.severities.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.severities.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <ul>
        <li className="line-height-3">info (default)</li>
        <li className="line-height-3">success</li>
        <li className="line-height-3">warn</li>
        <li className="line-height-3">error</li>
        <li className="line-height-3">secondary (without icon)</li>
        <li className="line-height-3">help (without icon)</li>
      </ul>
    </div>
  </div>
)

export const message = {
  component: "Message",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: messageExtra,
  },
  code,
  scope: { Message, InputText },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "severity", type: "string", description: `${I18N_PREFIX}.props.severity` },
    { name: "text", type: "string", description: `${I18N_PREFIX}.props.text` },
    { name: "content", type: "any", description: `${I18N_PREFIX}.props.content` },
  ],
}
