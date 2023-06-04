import { API_URL } from "../config";

// selectors
export const getAllTables = state => state.tables;
export const getTableById = ({tables}, tableId) => tables.find(table => table.id === tableId);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE_DATA = createActionName('UPDATE_TABLE_DATA');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');
const CHANGE_TABLE = createActionName('CHANGE_TABLE');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const removeTable = payload => ({ type: REMOVE_TABLE, payload });
export const addTable = payload => ({ type: ADD_TABLE, payload });
export const updateTableData = payload => ({ type: UPDATE_TABLE_DATA, payload });
export const changeTable = payload => ({ type: CHANGE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
  };
};
export const fetchTableDataRequest = (tableId) => {
  return (dispatch) => {
    fetch(`${API_URL}/tables/${tableId}`)
      .then(res => res.json())
      .then(data => {
        dispatch(updateTableData(data)); // Dispatch the action to update the state with the table data
      })
      .catch(error => {
        console.log("Error occurred while fetching table data:", error);
      });
  };
};
export const removeTableRequest = (tableId) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`${API_URL}/tables/${tableId}`, options)
      .then(response => {
        if (response.ok) {
          console.log(`Table #${tableId} removed succesfully`);
        } else {
          console.log(`Failed to remove Table #${tableId}`);
        }
      })
      .then(() => dispatch(removeTable(tableId)))
      .catch(error => {
        console.log(`Error occurred while removing Table #${tableId}`, error);
      });
  }
};
export const addTableRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable),
    };

    fetch(`${API_URL}/tables`, options)
      .then(response => {
        if (response.ok) {
          console.log(`Table #${newTable.id} added succesfully`);
        } else {
          console.log(`Failed to add Table #${newTable.id}`);
        }
      })
      .then(() => dispatch(addTable(newTable)))
      .catch(error => {
        console.log(`Error occurred while adding Table #${newTable.id}`, error);
      });
  };
};
export const changeTableRequest = (changedTable) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(changedTable),
    };

    fetch(`${API_URL}/tables/${changedTable.id}`, options)
    .then(response => {
      if (response.ok) {
        console.log(`Table #${changedTable.id} changed succesfully`);
      } else {
        console.log(`Failed to change Table #${changedTable.id}`);
      }
    })
    .then(() => dispatch(changeTable(changedTable)))
    .catch(error => {
      console.log(`Error occurred while changing Table #${changedTable.id}`, error);
    });
  };
};

// reducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [ ...statePart, { ...action.payload }];
    case REMOVE_TABLE:
      return statePart.filter(table => table.id !== action.payload);
    case UPDATE_TABLES:
      return [ ...action.payload ];
    case UPDATE_TABLE_DATA:
      return statePart.map(table => {
        if (table.id === action.payload.id) {
          return { ...table, ...action.payload };
        }
        return table;
      });
    case CHANGE_TABLE:
      return statePart.map(table => {
        if (table.id === action.payload.id) {
          return { ...table, ...action.payload };
        }
        return table;
      });
    default:
      return statePart;
  }
};

export default tablesReducer;