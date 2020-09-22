export default function userReducer(state, action) {

  switch(action.type) {
    case 'USER_AUTH':
      state.user = action.user.dataValues
      state.user.authToken = action.user.token
      let user = {username: state.user.username, authToken: state.user.authToken}
      localStorage.setItem('userLogged', JSON.stringify(user));

      return {...state}
    case 'SAVE_TOKEN':
      console.log("action in save token", action)
      state.user.authToken = action

      return {...state}
    default:

      return {...state}
  }
}