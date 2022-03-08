/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import MemoryGame from '@/components/MemoryGame'
import AlertWins from '@/components/AlertWins.vue'
import Index from '@/pages/index'
import { state, mutations, getters } from '@/store/memory.js'
describe('Index', () => {
  const mountIndex = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        memory: {
          state,
          mutations,
          getters,
          namespaced: true,
        },
      },
    })
    const wrapper = mount(Index, {
      mocks: {
        $store: store,
      },
    })
    return { store, wrapper }
  }
  it('should mount the component ', () => {
    const { wrapper } = mountIndex()
    expect(wrapper.vm).toBeDefined()
  })
  it('should find the MemoryCard component', () => {
    const { wrapper } = mountIndex()
    const memory = wrapper.findComponent(MemoryGame)
    expect(memory.vm).toBeDefined()
  })

  it('should not found the AlertWins component', () => {
    const { wrapper } = mountIndex()
    const alert = wrapper.findComponent(AlertWins)
    expect(alert.exists()).toBe(false)
  })
})
