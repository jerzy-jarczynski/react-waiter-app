// components
import TableForm from "../TableForm/TableForm";
// redux
import { useSelector, useDispatch } from "react-redux";
import { getTableById, fetchTableDataRequest, changeTableRequest } from "../../../redux/tablesRedux";
// Router
import { useNavigate } from "react-router-dom";
// react
import { useEffect } from "react";

const TableEditForm = ({ tableId }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTableDataRequest(tableId));
  }, [dispatch, tableId]);

  const tableData = useSelector(
    (state) => getTableById(state, tableId)
  );

  const handleSubmit = (table) => {
    dispatch(changeTableRequest(table));
    navigate('/');
  };

  if (!tableData) {
    return null;
  }

  return (
    <TableForm
      tableId={tableId}
      action={handleSubmit}
      actionText="Update"
      {...tableData}
    />
  );
};

export default TableEditForm;