import { mount } from '@vue/test-utils'
import Guidelines from '../components/Guidelines.vue'

describe('Guidelines', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Guidelines)
    expect(wrapper.vm).toBeTruthy()
  })
})
