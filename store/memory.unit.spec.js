/* eslint-disable import/no-named-as-default-member */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations, getters, actions } from '@/store/memory.js'

const cards = [
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
]
const storeConfig = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
describe('', () => {
  const createStore = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(storeConfig)
    return { store }
  }
  it('should return the value of wins ', () => {
    const { store } = createStore()
    expect(store.state.wins).toEqual(0)
  })
  it('should return the value of check ', () => {
    const { store } = createStore()
    expect(store.state.check).toEqual([])
  })
  it('should return the value of mixedCard', () => {
    const { store } = createStore()
    expect(store.state.mixedCard).toEqual([])
  })
  it('should return the value of cards ', () => {
    const { store } = createStore()
    expect(store.state.cards).toEqual(cards)
  })
  it('should return the value of turns ', () => {
    const { store } = createStore()
    expect(store.state.turns).toEqual(2)
  })

  it('should return the value of attempts ', () => {
    const { store } = createStore()
    expect(store.state.attempts).toEqual(0)
  })

  it('should save the new wins value when SET_WINS is called', async () => {
    const { store } = createStore()
    await store.commit('SET_WINS')
    expect(store.state.wins).toEqual(1)
  })
  it('should add value in the check when CHECK is called', async () => {
    const { store } = createStore()
    await store.commit('CHECK', { data: { id: 1 }, index: 0 })
    expect(store.state.check).toHaveLength(1)
  })
  it('should save mixed cards in mixedCard when SET_MIXED is called', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED')
    expect(store.state.mixedCard).toHaveLength(16)
  })
  it('should increment one more no attempts when SET_ATTEMPTS is called', async () => {
    const { store } = createStore()
    await store.commit('SET_ATTEMPTS')
    expect(store.state.attempts).toEqual(1)
  })

  it('should add the new value on the turn when it is negative', async () => {
    const { store } = createStore()
    await store.commit('SET_TURNS')
    await store.commit('SET_TURNS')
    await store.commit('SET_TURNS')
    expect(store.state.turns).toEqual(2)
    expect(store.state.attempts).toEqual(1)
  })

  it('should shuffle the order of cards array items when getCards is called', () => {
    const { store } = createStore()
    expect(store.getters.getCards).toHaveLength(16)
  })
  it('should check if the item is the same and if it is the value checked should be true', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED')
    await store.commit('CHECK', { data: { id: 1 }, index: 0 })
    await store.commit('CHECK', { data: { id: 1 }, index: 3 })
    expect(store.state.mixedCard[0].checked).toBe(true)
  })

  it('should check if the item is the same and if it is the value checked should be false', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED')
    await store.commit('CHECK', { data: { id: 1 }, index: 0 })
    await store.commit('CHECK', { data: { id: 3 }, index: 3 })
    expect(store.state.check).toHaveLength(0)
    expect(store.state.turns).toEqual(1)
  })
})
