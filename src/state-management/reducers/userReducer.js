export default function userReducer(state, action) {

  switch(action.type) {
    case 'LOGIN':
      console.log("username:", action.user.user.username)
      state.user.push(action.user.user.username)

      return {...state}
    default:

      return {...state}
  }
}