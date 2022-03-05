export const state = () => ({
  attempts: 0,
  wins: 0,
  mixedCard: [],
  turns: 2,
  check: [],
  cards: [
    {
      id: 1,
      img: 'https://i.postimg.cc/tCK3wygJ/jiraia.png',
    },
    {
      id: 2,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
    },
    {
      id: 3,
      img: 'https://i.postimg.cc/CxbGVtZN/naruto.png',
    },
    {
      id: 4,
      img: 'https://i.postimg.cc/BQL5mt4R/luffy.png',
    },
    {
      id: 5,
      img: 'https://i.postimg.cc/Jztbsndp/itati.png',
    },
    {
      id: 6,
      img: 'https://i.postimg.cc/7YH1yX18/saitama.png',
    },
    {
      id: 7,
      img: 'https://i.postimg.cc/qvY2yTP4/sasuke.png',
    },
    {
      id: 8,
      img: 'https://i.postimg.cc/nc34V7Ts/zoro.png',
    },
    {
      id: 1,
      img: 'https://i.postimg.cc/tCK3wygJ/jiraia.png',
    },
    {
      id: 2,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
    },
    {
      id: 3,
      img: 'https://i.postimg.cc/CxbGVtZN/naruto.png',
    },
    {
      id: 4,
      img: 'https://i.postimg.cc/BQL5mt4R/luffy.png',
    },
    {
      id: 5,
      img: 'https://i.postimg.cc/Jztbsndp/itati.png',
    },
    {
      id: 6,
      img: 'https://i.postimg.cc/7YH1yX18/saitama.png',
    },
    {
      id: 7,
      img: 'https://i.postimg.cc/qvY2yTP4/sasuke.png',
    },
    {
      id: 8,
      img: 'https://i.postimg.cc/nc34V7Ts/zoro.png',
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
