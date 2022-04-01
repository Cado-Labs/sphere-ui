import { Column } from "primereact/column"

/*
we can't customize Column component because Prime use it only as children of DataTable:

const columns = React.Children.toArray(props.children);
*/

export { Column }
