import React from "react"
import { useTranslation } from "react-i18next"

import { Highlighter } from "@components/Highlighter"
import { Anchor } from "@components/Anchor"

import { codes, links, I18N_PREFIX } from "./constants"

export function Contributing () {
  const { t } = useTranslation('translation', { keyPrefix: I18N_PREFIX })

  const preparationRef = React.useRef(null)
  const cloneRef = React.useRef(null)
  const workRef = React.useRef(null)
  const buildRef = React.useRef(null)
  const updateRef = React.useRef(null)
  const testRef = React.useRef(null)
  const makeRef = React.useRef(null)

  const renderItemContent = () => {
    return (
      <React.Fragment>
        <h4>{t("contents.title")}</h4>
        <ul>
          <li><Anchor href="#preparation" toRef={preparationRef}>{t("contents.preparation")}</Anchor></li>
          <li><Anchor href="#clone" toRef={cloneRef}>{t("contents.clone")}</Anchor></li>
          <li><Anchor href="#work" toRef={workRef}>{t("contents.work")}</Anchor></li>
          <li><Anchor href="#build" toRef={buildRef}>{t("contents.build")}</Anchor></li>
          <li><Anchor href="#update" toRef={updateRef}>{t("contents.update")}</Anchor></li>
          <li><Anchor href="#test" toRef={testRef}>{t("contents.test")}</Anchor></li>
          <li><Anchor href="#make" toRef={makeRef}>{t("contents.make")}</Anchor></li>
        </ul>
      </React.Fragment>
    )
  }

  const renderItemPreparation = () => {
    return (
      <React.Fragment>
        <h4 id="preparation" ref={preparationRef}>{t("preparation.title")}</h4>
        <p>{t("preparation.tools")}</p>
        <ul>
          <li>
            {t("preparation.node")}
            <a href={links.nvm}> nvm.</a>
          </li>
          <li><a href={links.yarn}>Yarn.</a></li>
          <li><a href={links.git}>Git.</a></li>
        </ul>
      </React.Fragment>
    )
  }

  const renderItemClone = () => {
    return (
      <React.Fragment>
        <h4 id="clone" ref={cloneRef}>{t("clone.title")}</h4>
        <p>{t("clone.goToGithub")}</p>
        <p>{t("clone.download")}</p>
        <Highlighter language="bash" code={codes.clone} />
        <p><a href={links.quickstart}>{t("clone.details")}</a></p>
      </React.Fragment>
    )
  }

  const renderItemWork = () => {
    return (
      <React.Fragment>
        <h4 id="work" ref={workRef}>{t("work.title")}</h4>
        <p>{t("work.contributing")}</p>
        <p>{t("work.newBranch")}</p>
        <Highlighter language="bash" code={codes.newBranch} />
      </React.Fragment>
    )
  }

  const renderItemBuild = () => {
    return (
      <React.Fragment>
        <h4 id="build" ref={buildRef}>{t("build.title")}</h4>
        <p>{t("build.storybook")}</p>
        <p>{t("build.symlink")}</p>
        <Highlighter language="bash" code={codes.build} />
      </React.Fragment>
    )
  }

  const renderItemUpdate = () => {
    return (
      <React.Fragment>
        <h4 id="update" ref={updateRef}>{t("update.title")}</h4>
        <p>{t("update.changes")}</p>
      </React.Fragment>
    )
  }

  const renderItemTest = () => {
    return (
      <React.Fragment>
        <h4 id="test" ref={testRef}>{t("test.title")}</h4>
        <p>{t("test.commands")}</p>
        <Highlighter language="bash" code={codes.lint} />
      </React.Fragment>
    )
  }

  const renderItemMake = () => {
    return (
      <React.Fragment>
        <h4 id="make" ref={makeRef}>{t("make.title")}</h4>
        <p>{t("make.commit")}</p>
        <Highlighter language="bash" code={codes.pullRequest} />
        <p>{t("make.comparePullRequest")}</p>
        <p>
          {t("make.createPullRequest")}.&nbsp;
          <a href={links.pullRequest}>{t("make.aboutRequest")}</a>
        </p>
      </React.Fragment>
    )
  }

  return (
    <div>
      <h2>{t("title")}</h2>
      {renderItemContent()}
      {renderItemPreparation()}
      {renderItemClone()}
      {renderItemWork()}
      {renderItemBuild()}
      {renderItemUpdate()}
      {renderItemTest()}
      {renderItemMake()}
    </div>
  )
}
