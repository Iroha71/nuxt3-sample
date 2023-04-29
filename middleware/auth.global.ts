export default defineNuxtRouteMiddleware((to, from) => {
  // ファイル名にglobalをつけることで全てのページに適用可能
  console.log('from', from)
  console.log('to', to)
  if (isAdmin() === false) {
    return navigateTo('/login')
  }
})

function isAdmin() {
  return true
}