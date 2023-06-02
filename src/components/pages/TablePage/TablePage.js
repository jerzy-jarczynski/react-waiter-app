// components
import TableEditForm from "../../features/TableEditForm/TableEditForm";
// router
import { useParams } from "react-router-dom";

const TablePage = () => {

  const { id } = useParams();

  return (
    <>
      <h1>
        { `Table ${id}` }
      </h1>
      <TableEditForm />
    </>
  );

};

export default TablePage;