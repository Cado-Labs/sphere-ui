import React from "react"
import { Tree as PrimeTree } from "primereact/tree"

import { pickDataAttributes } from "../../utils"

export const Tree = React.forwardRef(({
  id,
  value,
  selectionMode,
  selectionKeys,
  expandedKeys,
  style,
  className,
  contentStyle,
  contentClassName,
  metaKeySelection = true,
  propagateSelectionUp = true,
  propagateSelectionDown = true,
  loading = false,
  dragdropScope,
  header,
  footer,
  ariaLabel,
  ariaLabelledBy,
  nodeTemplate,
  togglerTemplate,
  showHeader = true,
  disabled = false,
  onSelect,
  onUnselect,
  onExpand,
  onCollapse,
  onSelectionChange,
  onToggle,
  onDragDrop,
  onNodeClick,
  filter,
  filterBy,
  filterMode,
  filterValue,
  filterPlaceholder,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeTree
      ref={ref}
      id={id}
      value={value}
      selectionMode={selectionMode}
      selectionKeys={selectionKeys}
      expandedKeys={expandedKeys}
      style={style}
      className={className}
      contentStyle={contentStyle}
      contentClassName={contentClassName}
      metaKeySelection={metaKeySelection}
      propagateSelectionUp={propagateSelectionUp}
      propagateSelectionDown={propagateSelectionDown}
      loading={loading}
      dragdropScope={dragdropScope}
      header={header}
      footer={footer}
      ariaLabel={ariaLabel}
      ariaLabelledBy={ariaLabelledBy}
      nodeTemplate={nodeTemplate}
      togglerTemplate={togglerTemplate}
      showHeader={showHeader}
      disabled={disabled}
      onSelect={onSelect}
      onUnselect={onUnselect}
      onExpand={onExpand}
      onCollapse={onCollapse}
      onSelectionChange={onSelectionChange}
      onToggle={onToggle}
      onDragDrop={onDragDrop}
      onNodeClick={onNodeClick}
      filter={filter}
      filterBy={filterBy}
      filterMode={filterMode}
      filterValue={filterValue}
      filterPlaceholder={filterPlaceholder}
      {...dataAttributes}
    />
  )
})
