export default function userReducer(state, action) {

  switch(action.type) {
    case 'LOGIN':
      console.log("action", action)
      state.user.push(action.user.user.username)
      state.userToken = action.user.token

      return {...state}
    case 'SIGN_UP':
      console.log("username:", action.user.username)
      state.user.push(action.user.username)
      state.userToken = action.user.token

      return {...state}
    default:

      return {...state}
  }
}