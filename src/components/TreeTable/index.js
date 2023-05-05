import React from "react"
import { TreeTable as PrimeTreeTable } from "primereact/treetable"

import { pickDataAttributes } from "../../utils"

export const TreeTable = React.forwardRef(({
  id,
  value,
  header,
  footer,
  style,
  className,
  tableStyle,
  tableClassName,
  expandedKeys,
  first,
  lazy = false,
  sortField,
  sortOrder,
  multiSortMeta,
  sortMode = "single",
  defaultSortOrder = 1,
  removableSort = false,
  selectionMode = false,
  selectionKeys,
  metaKeySelection = true,
  selectOnEdit = true,
  propagateSelectionUp = true,
  propagateSelectionDown = true,
  autoLayout = false,
  rowClassName,
  loading = false,
  tabIndex = 0,
  scrollable = false,
  scrollHeight,
  headerColumnGroup,
  footerColumnGroup,
  frozenHeaderColumnGroup,
  frozenFooterColumnGroup,
  frozenWidth,
  emptyMessage,
  showGridlines = false,
  onExpand,
  onCollapse,
  onToggle,
  onSelect,
  onUnselect,
  onSelectionChange,
  onRowClick,
  onSort,
  children,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeTreeTable
      ref={ref}
      id={id}
      value={value}
      header={header}
      footer={footer}
      style={style}
      className={className}
      tableStyle={tableStyle}
      tableClassName={tableClassName}
      expandedKeys={expandedKeys}
      first={first}
      lazy={lazy}
      sortField={sortField}
      sortOrder={sortOrder}
      multiSortMeta={multiSortMeta}
      sortMode={sortMode}
      defaultSortOrder={defaultSortOrder}
      removableSort={removableSort}
      selectionMode={selectionMode ? "checkbox" : null}
      selectionKeys={selectionKeys}
      metaKeySelection={metaKeySelection}
      selectOnEdit={selectOnEdit}
      propagateSelectionUp={propagateSelectionUp}
      propagateSelectionDown={propagateSelectionDown}
      autoLayout={autoLayout}
      rowClassName={rowClassName}
      loading={loading}
      tabIndex={tabIndex}
      scrollable={scrollable}
      scrollHeight={scrollHeight}
      headerColumnGroup={headerColumnGroup}
      footerColumnGroup={footerColumnGroup}
      frozenHeaderColumnGroup={frozenHeaderColumnGroup}
      frozenFooterColumnGroup={frozenFooterColumnGroup}
      frozenWidth={frozenWidth}
      emptyMessage={emptyMessage}
      showGridlines={showGridlines}
      onExpand={onExpand}
      onCollapse={onCollapse}
      onToggle={onToggle}
      onSelect={onSelect}
      onUnselect={onUnselect}
      onSelectionChange={onSelectionChange}
      onRowClick={onRowClick}
      onSort={onSort}
      alwaysShowPaginator={false}
      {...dataAttributes}
    >
      {children}
    </PrimeTreeTable>
  )
})
