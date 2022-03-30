import React from "react"
import { Column as PrimeColumn } from "primereact/column"

export const Column = React.forwardRef(({
  field,
  sortField,
  filterField,
  exportField,
  header,
  body,
  footer,
  sortable,
  sortFunction,
  dataType,
  filter,
  filterElement,
  showFilterMenu,
  showFilterOperator,
  showClearButton,
  showApplyButton,
  showFilterMatchModes,
  showFilterMenuOptions,
  showAddButton,
  align,
  alignHeader,
  alignFrozen = "left",
  hidden = false,
  style,
  className,
  headerStyle,
  headerClassName,
  bodyStyle,
  bodyClassName,
  footerStyle,
  footerClassName,
  frozen = false,
  colSpan,
  rowSpan,
  editor,
  cellEditValidator,
  cellEditValidatorEvent = "click",
  onBeforeCellEditHide,
  onBeforeCellEditShow,
  onCellEditInit,
  onCellEditComplete,
  onCellEditCancel,
  rowReorder = false,
  rowEditor = false,
  exportable = true,
  reorderable = true,
  selectionMode = false, // (сделать булевым, если true, то показывается чекбокс),
  columnKey,
}, ref) => {
  return (
    <PrimeColumn
      ref={ref}
      field={field}
      sortField={sortField}
      filterField={filterField}
      exportField={exportField}
      header={header}
      body={body}
      footer={footer}
      sortable={sortable}
      sortFunction={sortFunction}
      dataType={dataType}
      filter={filter}
      filterElement={filterElement}
      showFilterMenu={showFilterMenu}
      showFilterOperator={showFilterOperator}
      showClearButton={showClearButton}
      showApplyButton={showApplyButton}
      showFilterMatchModes={showFilterMatchModes}
      showFilterMenuOptions={showFilterMenuOptions}
      showAddButton={showAddButton}
      align={align}
      alignHeader={alignHeader}
      alignFrozen={alignFrozen}
      hidden={hidden}
      style={style}
      className={className}
      headerStyle={headerStyle}
      headerClassName={headerClassName}
      bodyStyle={bodyStyle}
      bodyClassName={bodyClassName}
      footerStyle={footerStyle}
      footerClassName={footerClassName}
      frozen={frozen}
      colSpan={colSpan}
      rowSpan={rowSpan}
      editor={editor}
      cellEditValidator={cellEditValidator}
      cellEditValidatorEvent={cellEditValidatorEvent}
      onBeforeCellEditHide={onBeforeCellEditHide}
      onBeforeCellEditShow={onBeforeCellEditShow}
      onCellEditInit={onCellEditInit}
      onCellEditComplete={onCellEditComplete}
      onCellEditCancel={onCellEditCancel}
      rowReorder={rowReorder}
      rowEditor={rowEditor}
      exportable={exportable}
      reorderable={reorderable}
      selectionMode={selectionMode ? "multiple" : null}
      columnKey={columnKey}
    />
  )
})
