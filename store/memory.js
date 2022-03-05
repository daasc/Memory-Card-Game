export const state = () => ({
  attempts: 0,
  wins: 0,
  turns: 2,
})

export const mutations = {
  SET_WINS: (state) => {
    state.wins++
  },
  SET_ATTEMPTS: (state) => {
    state.attempts++
  },
}

export const getters = {}

export const actions = {}
