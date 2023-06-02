// selectors
export const getAllTables = state => state.tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const removeTable = payload => ({ type: REMOVE_TABLE, payload });
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
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

    fetch(`http://localhost:3131/api/tables/${tableId}`, options)
      .then(response => {
        if (response.ok) {
          console.log(`Table #${tableId} removed succesfully`);
        } else {
          console.log(`Failed to remove Table #${tableId}`);
        }
      })
      .then(() => dispatch(removeTable(tableId)))
      .then(() => dispatch(fetchTables()))
      .catch(error => {
        console.log(`Error occurred while removing Table #${tableId}`, error);
      });
  }
};

// reducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_TABLE:
      return statePart.filter(table => table.id !== action.payload);
    case UPDATE_TABLES:
      return [ ...action.payload ];
    default:
      return statePart;
  }
};

export default tablesReducer;