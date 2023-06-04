// components
import TableForm from "../TableForm/TableForm";

const TableEditForm = ({ tableId }) => {

  const handleSubmit = (table) => {
    console.log(table);
  };

  return (
    <TableForm tableId={tableId} action={handleSubmit} actionText="Update" />
  );

};

export default TableEditForm;