import firebase from "firebase/app";

export const actions = {
  async login({dispatch, commit}, {email, password}) {
    // eslint-disable-next-line no-useless-catch
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      throw e
    }
  },
  async logout({commit}) {
    await firebase.auth().signOut()
  }
}
