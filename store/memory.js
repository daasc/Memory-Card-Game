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
      checked: false,
    },
    {
      id: 2,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
      checked: false,
    },
    {
      id: 3,
      img: 'https://i.postimg.cc/CxbGVtZN/naruto.png',
      checked: false,
    },
    {
      id: 4,
      img: 'https://i.postimg.cc/BQL5mt4R/luffy.png',
      checked: false,
    },
    {
      id: 5,
      img: 'https://i.postimg.cc/Jztbsndp/itati.png',
      checked: false,
    },
    {
      id: 6,
      img: 'https://i.postimg.cc/7YH1yX18/saitama.png',
      checked: false,
    },
    {
      id: 7,
      img: 'https://i.postimg.cc/qvY2yTP4/sasuke.png',
      checked: false,
    },
    {
      id: 8,
      img: 'https://i.postimg.cc/nc34V7Ts/zoro.png',
      checked: false,
    },
    {
      id: 9,
      img: 'https://i.postimg.cc/tCK3wygJ/jiraia.png',
      checked: false,
    },
    {
      id: 10,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
      checked: false,
    },
    {
      id: 11,
      img: 'https://i.postimg.cc/CxbGVtZN/naruto.png',
      checked: false,
    },
    {
      id: 12,
      img: 'https://i.postimg.cc/BQL5mt4R/luffy.png',
      checked: false,
    },
    {
      id: 13,
      img: 'https://i.postimg.cc/Jztbsndp/itati.png',
      checked: false,
    },
    {
      id: 14,
      img: 'https://i.postimg.cc/7YH1yX18/saitama.png',
      checked: false,
    },
    {
      id: 15,
      img: 'https://i.postimg.cc/qvY2yTP4/sasuke.png',
      checked: false,
    },
    {
      id: 16,
      img: 'https://i.postimg.cc/nc34V7Ts/zoro.png',
      checked: false,
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
    const index = state.mixedCard.findIndex((x) => x.id === payload.id)
    if (state.check.length === 0) {
      state.check.push(payload)
      state.mixedCard[index].checked = true
    } else if (state.check[0].img === payload.img) {
      state.mixedCard[index].checked = true
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
  SET_MIXED: (state) => {
    const n = 16
    const sample = state.cards
      .map((x) => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map((a) => a.x)
      .slice(0, n)
    state.mixedCard = sample
  },
}

export const getters = {}

export const actions = {}
