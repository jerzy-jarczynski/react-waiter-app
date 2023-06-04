// components
import TableForm from "../TableForm/TableForm";
// redux
import { useDispatch } from "react-redux";
import { addTableRequest } from "../../../redux/tablesRedux";
// router
import { useNavigate } from "react-router-dom";

const TableAddForm = ({ newTableId }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = table => {
    dispatch(addTableRequest(table));
    navigate('/');
  };

  return (
    <TableForm tableId={newTableId} action={handleSubmit} actionText="Add table" />
  );

};

export default TableAddForm;