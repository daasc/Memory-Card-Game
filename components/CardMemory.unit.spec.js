/* eslint-disable import/no-named-as-default-member */
import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import CardMemory from '@/components/CardMemory'
import { state, mutations, getters } from '@/store/memory.js'

const storeConfig = {
  state,
  mutations,
  getters,
  namespaced: true,
}
describe('CardMemory', () => {
  const mountCardMemory = ({ propsData = {} }) => {
    const localVue = createLocalVue()
    localVue.use(Vuex)
    const store = new Vuex.Store(storeConfig)
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
})
