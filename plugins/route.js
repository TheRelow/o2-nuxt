// import firebase from "firebase"
//
// export default ({ app }) => {
//   app.router.beforeEach((to, from, next) => {
//     if (to.name == 'admin') {
//       const currentUser = firebase.auth().currentUser
//       if (currentUser) {
//         next()
//       } else {
//         next('/login')
//         console.log("Для начала нужно войти в систему")
//       }
//     } else {
//       next()
//     }
//   })
// }
