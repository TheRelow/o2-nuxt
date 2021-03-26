import firebase from "firebase";

export const state = () => ({
  isMapOpened: false,
  messages: [],
  quiz: []
})

export const mutations = {
  toggleFullscreenMap(state) {
    state.isMapOpened = !state.isMapOpened
  },
  addMessage(state, payload) {
    state.messages.push(payload)
  },
  addQuiz(state, payload) {
    state.quiz.push(payload)
  }
}

export const actions = {
  async fetchMessages({commit}) {
    let answer = []
    const docs = (await firebase.database().ref(`/messages`).once('value')).val()
    for (let i in docs) {
      answer.push(docs[i])
      commit('addMessage', docs[i])
    }
    return answer
  },
  async fetchQuiz({commit}) {
    let answer = []
    const quiz = (await firebase.database().ref(`/quiz`).once('value')).val()
    console.log('quiz', quiz)
    console.log(Array.isArray(quiz))
    for (let i in quiz) {
      answer.push(quiz[i])
      commit('addQuiz', quiz[i])
    }
    return answer
  },
  async setNewMessage({commit}, payload) {
    try {
      let msg = payload
      msg['time'] = firebase.database.ServerValue.TIMESTAMP
      const newDocKey = firebase.database().ref(`/messages`).push().key
      await firebase.database().ref(`/messages/${newDocKey}`).set(payload)
      // commit('addMessage', payload)
      // await firebase.database().ref(`/messages-detail/${newDocKey}`).set({content: 'content'})
    } catch (e) {
      console.log(e)
      throw e
    }
  },
  async setNewQuiz({commit}, payload) {
    try {
      let msg = payload
      msg['time'] = firebase.database.ServerValue.TIMESTAMP
      const newDocKey = firebase.database().ref(`/quiz`).push().key
      await firebase.database().ref(`/quiz/${newDocKey}`).set(payload)
      console.log(newDocKey)
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
