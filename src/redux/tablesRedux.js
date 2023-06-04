// selectors
export const getAllTables = state => state.tables;

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');

// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const removeTable = payload => ({ type: REMOVE_TABLE, payload });
export const addTable = payload => ({ type: ADD_TABLE, payload });
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
export const addTableRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTable),
    };

    fetch('http://localhost:3131/api/tables', options)
      .then(response => {
        if (response.ok) {
          console.log(`Table #${newTable.id} added succesfully`);
        } else {
          console.log(`Failed to add Table #${newTable.id}`);
        }
      })
      .then(() => dispatch(addTable(newTable)))
      .then(() => dispatch(fetchTables()))
      .catch(error => {
        console.log(`Error occurred while adding Table #${newTable.id}`, error);
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
    default:
      return statePart;
  }
};

export default tablesReducer;