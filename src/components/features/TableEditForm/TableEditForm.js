import TableForm from "../TableForm/TableForm";
import { useSelector, useDispatch } from "react-redux";
import { getTableById, fetchTableDataRequest, changeTableRequest } from "../../../redux/tablesRedux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const TableEditForm = ({ tableId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    dispatch(fetchTableDataRequest(tableId));
  }, [dispatch, tableId]);

  const tableData = useSelector((state) => getTableById(state, tableId));

  useEffect(() => {
    if (tableData) {
      setLoading(false); // Set loading state to false when data is available
    }
  }, [tableData]);

  const handleSubmit = (table) => {
    dispatch(changeTableRequest(table));
    navigate('/');
  };

  if (loading) {
    // Show spinner while loading
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

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