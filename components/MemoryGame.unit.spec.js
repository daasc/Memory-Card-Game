/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import MemoryGame from '@/components/MemoryGame'
import CardMemory from '@/components/CardMemory'
import { state, mutations, getters } from '@/store/memory.js'
import { cards } from '@/db/cards.json'
describe('MemoryGame', () => {
  const mountMemoryGame = ({ propsData = [] }) => {
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
    const wrapper = mount(MemoryGame, {
      mocks: {
        $store: store,
      },

      propsData: {
        cards: propsData,
      },
    })
    return { store, wrapper }
  }
  it('should mount the component ', () => {
    const { wrapper } = mountMemoryGame({})
    expect(wrapper.vm).toBeDefined()
  })
  it('should contain 16 cardMemory', () => {
    const { wrapper } = mountMemoryGame({ propsData: cards })
    const card = wrapper.findAllComponents(CardMemory)
    expect(card).toHaveLength(16)
  })
})
