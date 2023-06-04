// components
import TableAddForm from "../../features/TableAddForm/TableAddForm";
import NewTableId from "../../features/NewTableId/NewTableId";
// react
import { useState } from "react";

const TablePage = () => {

  const [tableId, setTableId] = useState(0);

  return (
    <>
      <h1 className="pb-3">
        { 'Add new Table - #' }
        <NewTableId setParentData={setTableId} />
      </h1>
      <TableAddForm newTableId={tableId} />
    </>
  );

};

export default TablePage;