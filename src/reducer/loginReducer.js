export const loginReducer = (state, {type, payload}) => {
  switch(type) {
    case "EMAIL":
      return {
        ...state, email: payload.email
      }
    case "PASSWORD":
      return {
        ...state, password: payload.password
      }
    case "TOKEN":
      return {
        ...state, isLoggedIn: payload.value
      }
    case "LOGOUT":
      localStorage.setItem("accessToken", JSON.stringify(""));
      return {
        ...state, isLoggedIn: payload.value
      }
    default:
      return state
  }
}