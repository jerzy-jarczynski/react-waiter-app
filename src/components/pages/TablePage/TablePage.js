// components
import TableEditForm from "../../features/TableEditForm/TableEditForm";
// router
import { useParams } from "react-router-dom";

const TablePage = () => {

  const { id } = useParams();

  const numId = parseInt(id, 10);

  return (
    <>
      <h1 className="pb-3">
        { `Table ${id}` }
      </h1>
      <TableEditForm tableId={numId} />
    </>
  );

};

export default TablePage;