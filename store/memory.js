export const state = () => ({
  attempts: 0,
  wins: 0,
  mixedCard: [],
  turns: 2,
  check: [],
  alertWins: false,
})

export const mutations = {
  SET_WINS: (state) => {
    state.wins++
  },
  SET_ATTEMPTS: (state) => {
    state.attempts++
  },
  SET_ALERTWINS: (state, payload) => {
    state.alertWins = payload
    if (!payload) {
      state.attempts = 0
      state.turns = 2
    }
  },
  CHECK: (state, payload) => {
    const index = state.mixedCard.findIndex((x) => x.id === payload.id)
    if (state.check.length === 0) {
      state.check.push(payload)
      state.mixedCard[index].checked = true
    } else if (state.check[0].img === payload.img) {
      state.mixedCard[index].checked = true
      const checked = state.mixedCard.filter((card) => card.checked).length
      if (checked === 16) {
        mutations.SET_WINS(state)
        mutations.SET_ALERTWINS(state, true)
        mutations.SET_MIXED(state)
      }
      state.check = []
    } else {
      const indexD = state.mixedCard.findIndex(
        (x) => x.id === state.check[0].id
      )
      state.mixedCard[indexD].checked = false
      state.check = []
      mutations.SET_TURNS(state)
    }
  },
  SET_TURNS: (state) => {
    state.turns--
    if (state.turns < 0) {
      state.turns = 2
      state.attempts++
      for (const card of state.mixedCard) {
        card.checked = false
      }
    }
  },
  SET_MIXED: (state, payload) => {
    const n = 16
    if (payload) {
      const sample = payload
        .map((x) => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map((a) => a.x)
        .slice(0, n)
      state.mixedCard = sample
    }
  },
}

export const getters = {}

export const actions = {}
