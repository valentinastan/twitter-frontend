export function clearUserText() {
  if(document.getElementById("newTweet").value)
    return document.getElementById("newTweet").value = ''
}

export function clearUserInfos() {
  if(document.getElementById("email").value)
    document.getElementById("email").value = ''
  if(document.getElementById("password").value )
    document.getElementById("password").value = ''
}

export function clearUserSignUp() {
  if(document.getElementById("username").value)
    document.getElementById("username").value = ''
  if(document.getElementById("email").value)
    document.getElementById("email").value = ''
  if(document.getElementById("password").value )
    document.getElementById("password").value = ''
}