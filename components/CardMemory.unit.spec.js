/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import CardMemory from '@/components/CardMemory'
import { state, mutations, getters } from '@/store/memory.js'

describe('CardMemory', () => {
  const mountCardMemory = ({ propsData = {} }) => {
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
    const wrapper = mount(CardMemory, {
      mocks: {
        $store: store,
      },
      propsData,
    })
    return { store, wrapper }
  }
  it('should mount the component ', () => {
    const { wrapper } = mountCardMemory({})
    expect(wrapper.vm).toBeDefined()
  })
  it('should create a card with the data passed by the prompt', () => {
    const { wrapper } = mountCardMemory({
      propsData: {
        urlImg: 'https://i.postimg.cc/nc34V7Ts/zoro.png',
      },
    })
    const img = wrapper.find('[data-testid="img"]')
    expect(img.attributes().src).toEqual(
      'https://i.postimg.cc/nc34V7Ts/zoro.png'
    )
  })

  it('should emit an event when checkMemory is clicked', async () => {
    const { wrapper, store } = mountCardMemory({
      propsData: {
        urlImg: 'https://i.postimg.cc/nc34V7Ts/zoro.png',
        id: 3,
        index: 0,
      },
    })
    store.commit('memory/SET_MIXED')
    const card = wrapper.find('[data-testid="check-memory"]')
    await card.trigger('click')
  })
})
