/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import ResultGame from '@/components/ResultGame.vue'
import { state } from '@/store/memory.js'

describe('ResultGame', () => {
  const mountResultGame = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        memory: {
          state,
          namespaced: true,
        },
      },
    })
    const wrapper = mount(ResultGame, {
      mocks: {
        $store: store,
      },
    })
    return { store, wrapper }
  }
  it('should mount the component ', () => {
    const { wrapper } = mountResultGame()
    expect(wrapper.vm).toBeDefined()
  })
  it('should show match results', async () => {
    const { wrapper } = await mountResultGame()
    const attempts = wrapper.find('[data-testid="result-attempts"]')
    const wins = wrapper.find('[data-testid="result-wins"]')
    const turns = wrapper.find('[data-testid="result-turns"]')

    expect(attempts.text()).toContain('0')
    expect(turns.text()).toContain('2')
    expect(wins.text()).toContain('0')
  })
})
