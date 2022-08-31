/* eslint-disable max-len */
import { Tree } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.tree.pages.lazy"

const code = `
function LazyTreeExample () {
  const [nodes, setNodes] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const createLazyNodes = () => {
    return [
      {
        key: "0",
        label: "Node 0",
        leaf: false,
      },
      {
        key: "1",
        label: "Node 1",
        leaf: false,
      },
      {
        key: "2",
        label: "Node 2",
        leaf: false,
      },
    ]
  }

  const loadOnExpand = event => {
    if (!event.node.children) {
      setLoading(true)

      setTimeout(() => {
        const node = { ...event.node }
        node.children = []

        for (let i = 0; i < 3; i += 1) {
          node.children.push({
            key: node.key + "-" + i,
            label: "Lazy " + node.label + "-" + i,
          })
        }

        const value = [...nodes]
        value[parseInt(event.node.key, 10)] = node
        setNodes(value)
        setLoading(false)
      }, 500)
    }
  }

  React.useEffect(() => {
    setTimeout(() => {
      setNodes(createLazyNodes())
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div>
      <div className="p-card s-container">
        <Tree value={nodes} onExpand={loadOnExpand} loading={loading} />
      </div>
    </div>
  )
}
`

export const lazy = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
  },
  code,
  scope: { Tree },
}
