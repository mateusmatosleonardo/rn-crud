import React, {createContext, useReducer} from 'react';
import users from '../data/users';

const UsersContext = createContext({});
const initialState = {users};

export const UsersProvider = props => {
  function reducer(state, action) {
    if (action.type === 'deleteUser') {
      const user = action.payload;
      return {
        // ...state,
        users: state.users.filter(u => u.id !== user.id),
      };
    }
    return state;
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UsersContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
