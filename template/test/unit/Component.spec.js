import assert from 'power-assert';
import {shallow} from '@vue/test-utils';
import Component from '../../src/Component';

describe('Component', () => {
  const wrapper = shallow(Component);

  it('create vue instance', () => {
    assert(wrapper.isVueInstance());
  });

  it('counter should reset to value once value change', () => {
    wrapper.setProps({'value': 3});
    assert(wrapper.vm.counter === 3);
  })
});
