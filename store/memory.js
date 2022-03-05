export const state = () => ({
  attempts: 0,
  wins: 0,
  mixedCard: [],
  turns: 2,
  check: [],
  cards: [
    {
      id: 1,
      img: '',
    },
    {
      id: 2,
      img: '',
    },
    {
      id: 3,
      img: '',
    },
    {
      id: 4,
      img: '',
    },
    {
      id: 5,
      img: '',
    },
    {
      id: 6,
      img: '',
    },
    {
      id: 7,
      img: '',
    },
    {
      id: 8,
      img: '',
    },
    {
      id: 1,
      img: '',
    },
    {
      id: 2,
      img: '',
    },
    {
      id: 3,
      img: '',
    },
    {
      id: 4,
      img: '',
    },
    {
      id: 5,
      img: '',
    },
    {
      id: 6,
      img: '',
    },
    {
      id: 7,
      img: '',
    },
    {
      id: 8,
      img: '',
    },
  ],
})

export const mutations = {
  SET_WINS: (state) => {
    state.wins++
  },
  SET_ATTEMPTS: (state) => {
    state.attempts++
  },
  CHECK: (state, payload) => {
    if (state.check.length === 0) {
      state.check.push(payload)
    } else if (state.check[0].data.id === payload.data.id) {
      state.mixedCard[payload.index].checked = true
      state.mixedCard[state.check[0].index].checked = true
      state.check = []
    } else {
      state.check = []
      mutations.SET_TURNS(state)
    }
  },
  SET_TURNS: (state) => {
    state.turns--
    if (state.turns < 0) {
      state.turns = 2
      state.attempts++
    }
  },
  SET_MIXED: (state) => {
    state.mixedCard = getters.getCards(state)
  },
}

export const getters = {
  getCards(state) {
    const n = 16
    const sample = state.cards
      .map((x) => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((a) => a.x)
      .slice(0, n)
    return [...sample]
  },
}

export const actions = {}
