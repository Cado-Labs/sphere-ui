import React from "react"
import { DataTable as PrimeDataTable } from "primereact/datatable"
import { locale } from "primereact/api"

const EMPTY_MESSAGE = {
  ru: "Ничего не найдено",
  en: "Nothing found",
}

export const DataTable = React.forwardRef(({
  id,
  value,
  header,
  footer,
  style,
  className,
  tableStyle,
  tableClassName,
  paginator = false,
  paginatorClassName,
  rowsPerPageOptions,
  first = 0,
  rows,
  totalRecords,
  lazy = false,
  sortField,
  sortOrder,
  multiSortMeta,
  sortMode = "single",
  defaultSortOrder = 1,
  removableSort = false,
  emptyMessage: customEmptyMessage,
  selection,
  onSelectionChange,
  dataKey,
  selectionPageOnly = false,
  showSelectAll = true,
  selectAll = false,
  onSelectAllChange,
  headerColumnGroup,
  footerColumnGroup,
  filters,
  globalFilter,
  filterLocale,
  scrollable = false,
  scrollHeight,
  scrollDirection = "vertical",
  frozenWidth,
  frozenValue,
  csvSeparator = ",",
  exportFilename = "download",
  autoLayout = false,
  rowClassName,
  cellClassName,
  loading = false,
  tabIndex = 0,
  editMode = false,
  editingRows,
  showGridlines = false,
  size = "normal",
  responsiveLayout = "stack",
  breakpoint = "960px",
  filterDisplay = "menu",
  onRowEditComplete,
  globalFilterFields,
  showSelectionElement,
  isDataSelectable,
  onSort,
  onPage,
  onFilter,
  onAllRowsSelect,
  onAllRowsUnselect,
  onRowSelect,
  onRowUnselect,
  onValueChange,
  rowEditValidator,
  onRowEditInit,
  onRowEditSave,
  onRowEditCancel,
  onRowEditChange,
  exportFunction,
  children,
}, ref) => {
  const emptyMessage = customEmptyMessage || EMPTY_MESSAGE[locale().locale]

  return (
    <PrimeDataTable
      ref={ref}
      id={id}
      value={value}
      header={header}
      footer={footer}
      style={style}
      className={className}
      tableStyle={tableStyle}
      tableClassName={tableClassName}
      paginator={paginator}
      paginatorClassName={paginatorClassName}
      rowsPerPageOptions={rowsPerPageOptions}
      alwaysShowPaginator={false}
      first={first}
      rows={rows}
      totalRecords={totalRecords}
      lazy={lazy}
      sortField={sortField}
      sortOrder={sortOrder}
      multiSortMeta={multiSortMeta}
      sortMode={sortMode}
      defaultSortOrder={defaultSortOrder}
      removableSort={removableSort}
      emptyMessage={emptyMessage}
      selection={selection}
      onSelectionChange={onSelectionChange}
      dataKey={dataKey}
      selectionPageOnly={selectionPageOnly}
      showSelectAll={showSelectAll}
      selectAll={selectAll}
      onSelectAllChange={onSelectAllChange}
      headerColumnGroup={headerColumnGroup}
      footerColumnGroup={footerColumnGroup}
      filters={filters}
      globalFilter={globalFilter}
      filterLocale={filterLocale}
      scrollable={scrollable}
      scrollHeight={scrollHeight}
      scrollDirection={scrollDirection}
      frozenWidth={frozenWidth}
      frozenValue={frozenValue}
      csvSeparator={csvSeparator}
      exportFilename={exportFilename}
      autoLayout={autoLayout}
      rowClassName={rowClassName}
      cellClassName={cellClassName}
      loading={loading}
      tabIndex={tabIndex}
      editMode={editMode ? "row" : null}
      editingRows={editingRows}
      showGridlines={showGridlines}
      size={size}
      responsiveLayout={responsiveLayout}
      breakpoint={breakpoint}
      filterDisplay={filterDisplay}
      onRowEditComplete={onRowEditComplete}
      globalFilterFields={globalFilterFields}
      showSelectionElement={showSelectionElement}
      isDataSelectable={isDataSelectable}
      onSort={onSort}
      onPage={onPage}
      onFilter={onFilter}
      onAllRowsSelect={onAllRowsSelect}
      onAllRowsUnselect={onAllRowsUnselect}
      onRowSelect={onRowSelect}
      onRowUnselect={onRowUnselect}
      onValueChange={onValueChange}
      rowEditValidator={rowEditValidator}
      onRowEditInit={onRowEditInit}
      onRowEditSave={onRowEditSave}
      onRowEditCancel={onRowEditCancel}
      onRowEditChange={onRowEditChange}
      exportFunction={exportFunction}
    >
      {children}
    </PrimeDataTable>
  )
})
