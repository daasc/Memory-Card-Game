import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations, getters, actions } from '@/store/memory.js'

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

  it('should increment one more no attempts when SET_ATTEMPTS is called', async () => {
    const { store } = createStore()
    await store.commit('SET_ATTEMPTS')
    expect(store.state.attempts).toEqual(1)
  })
})
