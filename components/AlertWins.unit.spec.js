/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import AlertWins from '@/components/AlertWins'
import { state, mutations } from '@/store/memory.js'

describe('AlertWins', () => {
  const mountAlertWins = () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store({
      modules: {
        memory: {
          state,
          mutations,
          namespaced: true,
        },
      },
    })
    const wrapper = mount(AlertWins, {
      mocks: {
        $store: store,
      },
    })
    return { store, wrapper }
  }
  it('should mount the component ', () => {
    const { wrapper } = mountAlertWins()
    expect(wrapper.vm).toBeDefined()
  })
  it('should show match results', async () => {
    const { wrapper } = await mountAlertWins()
    const attempts = wrapper.find('[data-testid="result-attempts"]')
    const wins = wrapper.find('[data-testid="result-wins"]')
    const turns = wrapper.find('[data-testid="result-turns"]')

    expect(attempts.text()).toContain('0')
    expect(turns.text()).toContain('2')
    expect(wins.text()).toContain('0')
  })

  it('should start a new game when continue button is clicked', async () => {
    const { wrapper, store } = await mountAlertWins()
    const button = wrapper.find('[data-testid="continue"]')
    await button.trigger('click')
    expect(store.state.memory.alertWins).toBe(false)
  })
})
