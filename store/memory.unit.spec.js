/* eslint-disable import/no-named-as-default-member */
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations, getters, actions } from '@/store/memory.js'
import { cards, test } from '@/db/cards.json'

const storeConfig = {
  state,
  mutations,
  getters,
  actions,
  namespaced: true,
}
describe('Memory', () => {
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
  it('should return the value of alertWins ', () => {
    const { store } = createStore()
    expect(store.state.alertWins).toBe(false)
  })
  it('should return the value of check ', () => {
    const { store } = createStore()
    expect(store.state.check).toEqual([])
  })
  it('should return the value of mixedCard', () => {
    const { store } = createStore()
    expect(store.state.mixedCard).toEqual([])
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
  it('should save the new wins value when SET_ALERTWINS is called', async () => {
    const { store } = createStore()
    await store.commit('SET_ALERTWINS', true)
    expect(store.state.alertWins).toBe(true)
  })
  it('should add value in the check when CHECK is called', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED', cards)
    await store.commit('CHECK', {
      id: 1,
      img: 'https://i.postimg.cc/tCK3wygJ/jiraia.png',
      checked: false,
    })
    expect(store.state.check).toHaveLength(1)
  })
  it('should save mixed cards in mixedCard when SET_MIXED is called', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED', cards)
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

  it('should check if the item is the same and if it is the value checked should be true', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED', [
      {
        id: 1,
        img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
        checked: false,
      },
      {
        id: 2,
        img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
        checked: false,
      },
    ])
    await store.commit('CHECK', {
      id: 1,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
      checked: false,
    })
    await store.commit('CHECK', {
      id: 2,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
      checked: false,
    })
    expect(store.state.mixedCard[0].checked).toBe(true)
  })

  it('should check if the item is the same and if it is the value checked should be false', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED', [
      {
        id: 1,
        img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
        checked: false,
      },
      {
        id: 2,
        img: 'https://i.postimg.cc/05HdG7Rp/le.png',
        checked: false,
      },
    ])
    await store.commit('CHECK', {
      id: 1,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
      checked: false,
    })
    await store.commit('CHECK', {
      id: 2,
      img: 'https://i.postimg.cc/05HdG7Rp/le.png',
      checked: false,
    })
    expect(store.state.check).toHaveLength(0)
    expect(store.state.turns).toEqual(1)
  })

  it('should show an alert with the final result after hitting all cards', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED', test)
    await store.commit('CHECK', {
      id: 1,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
      checked: true,
    })
    await store.commit('CHECK', {
      id: 9,
      img: 'https://i.postimg.cc/05HdG7Rp/levi.png',
      checked: true,
    })
    expect(store.state.alertWins).toEqual(true)
  })

  it('should remove all checked objects marked true after error', async () => {
    const { store } = createStore()
    await store.commit('SET_MIXED', test)
    await store.commit('SET_TURNS')
    await store.commit('SET_TURNS')
    await store.commit('SET_TURNS')
    expect(store.state.alertWins).toEqual(false)
    expect(store.state.mixedCard[0].checked).toBe(false)
  })
})
