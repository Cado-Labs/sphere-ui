/* eslint-disable max-len */
import { DataTable, Column, Dash, Button } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.scroll"

const code = `
function ScrollDataTableExample () {
  const [items, setItems] = React.useState(null)
  const [lockedItems, setLockedItems] = React.useState([])
  const [unlockedItems, setUnlockedItems] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)

    fetch("https://api.publicapis.org/entries")
      .then(res => res.json())
      .then(data => {
        const apiList = data.entries.slice(0, 200).map((entry, index) => ({
          ...entry,
          id: index + 1,
        }))
        setItems(apiList)
        setUnlockedItems(apiList)
      })
      .finally(() => setLoading(false))
  }, [])

  const renderApiName = rowData => {
    return <a href={rowData.Link} target="_blank">{rowData.API}</a>
  }

  const renderHTTPS = rowData => {
    return rowData.HTTPS ? "yes" : "no"
  }

  const renderAuth = rowData => {
    return rowData.Auth || Dash
  }

  const toggleLock = (data, frozen, index) => {
    let _lockedItems, _unlockedItems

    if (frozen) {
      _lockedItems = lockedItems.filter((c, i) => i !== index)
      _unlockedItems = [...unlockedItems, data]
    } else {
      _unlockedItems = unlockedItems.filter((c, i) => i !== index)
      _lockedItems = [...lockedItems, data]
    }

    _unlockedItems.sort((val1, val2) => {
      return val1.id < val2.id ? -1 : 1
    })

    setLockedItems(_lockedItems)
    setUnlockedItems(_unlockedItems)
  }

  const renderLock = (rowData, options) => {
    const icon = options.frozenRow ? "pi pi-lock-open" : "pi pi-lock"
    const disabled = options.frozenRow ? false : lockedItems.length >= 2

    return <Button type="button" icon={icon} disabled={disabled} className="p-button-sm p-button-text" onClick={() => toggleLock(rowData, options.frozenRow, options.rowIndex)} />
  }

  return (
    <div>
      <div className="p-card s-container mb-3">
        <h3>Vertical</h3>
        <DataTable loading={loading} value={items} scrollable scrollHeight="400px">
          <Column field="API" header="API" body={renderApiName} />
          <Column field="Description" header="Description" style={{ minWidth: "250px" }} />
          <Column field="Category" header="Category" />
          <Column field="Auth" header="Auth" body={renderAuth} />
          <Column field="HTTPS" header="HTTPS" body={renderHTTPS} />
          <Column field="Cors" header="Cors" />
        </DataTable>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Horizontal and Vertical with Footer</h3>
        <DataTable loading={loading} value={items} scrollable scrollHeight="400px" scrollDirection="both">
          <Column field="id" header="ID" footer="ID" style={{ flexGrow: 1, flexBasis: "100px" }} />
          <Column field="API" header="API" footer="API" style={{ flexGrow: 1, flexBasis: "200px" }} body={renderApiName} />
          <Column field="Description" header="Description" footer="Description" style={{ flexGrow: 1, flexBasis: "250px" }} />
          <Column field="Category" header="Category" footer="Category" style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="Auth" header="Auth" footer="Auth" body={renderAuth} style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="HTTPS" header="HTTPS" footer="HTTPS" body={renderHTTPS} style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="Cors" header="Cors" footer="Cors" style={{ flexGrow: 1, flexBasis: "200px" }} />
        </DataTable>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Frozen Rows</h3>
        <DataTable loading={loading} value={unlockedItems} frozenValue={lockedItems} scrollable scrollHeight="400px">
          <Column field="id" header="ID" footer="ID" style={{ flexGrow: 1, flexBasis: "100px" }} />
          <Column field="API" header="API" footer="API" style={{ flexGrow: 1, flexBasis: "200px" }} body={renderApiName} />
          <Column field="Description" header="Description" footer="Description" style={{ flexGrow: 1, flexBasis: "250px" }} />
          <Column field="Category" header="Category" footer="Category" style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="Auth" header="Auth" footer="Auth" body={renderAuth} style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="HTTPS" header="HTTPS" footer="HTTPS" body={renderHTTPS} style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="Cors" header="Cors" footer="Cors" style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column style={{ flex: "0 0 4rem" }} body={renderLock} />
        </DataTable>
      </div>

      <div className="p-card s-container">
        <h3>Frozen Columns</h3>
        <DataTable loading={loading} value={items} scrollable scrollHeight="400px" scrollDirection="both">
          <Column field="id" header="ID" style={{ flexGrow: 1, flexBasis: "100px" }} frozen />
          <Column field="API" header="API" style={{ flexGrow: 1, flexBasis: "200px" }} body={renderApiName} frozen />
          <Column field="Description" header="Description" style={{ flexGrow: 1, flexBasis: "250px" }} />
          <Column field="Category" header="Category" style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="Auth" header="Auth" body={renderAuth} style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="HTTPS" header="HTTPS" body={renderHTTPS} style={{ flexGrow: 1, flexBasis: "200px" }} />
          <Column field="Cors" header="Cors" style={{ flexGrow: 1, flexBasis: "200px" }} />
        </DataTable>
      </div>
    </div>
  )
}
`

export const scroll = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: (
      <Trans
        i18nKey={`${I18N_PREFIX}.description`}
        components={{ code: <code className="inline-code" /> }}
      />
    ),
  },
  code,
  scope: { DataTable, Column, Dash, Button },
}
