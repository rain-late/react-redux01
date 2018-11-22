
const ADD_GUN = 'ADD_GUN';
const RM_GUN = 'RM_GUN';

export const counter = (state = 0, action) => {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case RM_GUN:
      return state - 1;
    default:
      return 10;
  }
}

export const addGun = () => ({ type: ADD_GUN });
export const rmGun = () => ({ type: RM_GUN });
export const addGunAsync = () => (dispatch) => { setTimeout(() => { dispatch(addGun()) }, 2000) }