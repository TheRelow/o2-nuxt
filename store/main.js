import firebase from "firebase";

export const state = () => ({
  isMapOpened: false,
})

export const mutations = {
  toggleFullscreenMap(state) {
    state.isMapOpened = !state.isMapOpened
  },
}

export const actions = {
  async setNewMessage({commit}, payload) {
    try {
      let msg = payload
      msg['time'] = firebase.database.ServerValue.TIMESTAMP
      const newDocKey = firebase.database().ref(`/messages`).push().key
      await firebase.database().ref(`/messages/${newDocKey}`).set(payload)
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  async setNewQuiz({commit}, payload) {
    try {
      let msg = payload
      msg['time'] = firebase.database.ServerValue.TIMESTAMP
      console.log(msg['time'])
      const newDocKey = firebase.database().ref(`/quiz`).push().key
      await firebase.database().ref(`/quiz/${newDocKey}`).set(payload)
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
