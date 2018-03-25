import assert from 'power-assert'
import Vue from 'vue'
import Component from '../../src/Component'

describe('Component', () => {
  const Counter = Vue.extend(Component);

  it('accepts value prop', () => {
    const vm = new Counter({
      propsData: {
        value: 3
      }
    });

    assert(vm.value === 3)
  })
});
