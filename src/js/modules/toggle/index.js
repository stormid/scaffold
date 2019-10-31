import { TOGGLE } from '../../constants';
import Toggle from './lib';

export default () => {
  if (document.querySelector(TOGGLE.SELECTOR.GLOBAL)) {
    Toggle.init(TOGGLE.SELECTOR.GLOBAL);
  }

  if (document.querySelector(TOGGLE.SELECTOR.LOCAL)) {
    Toggle.init(TOGGLE.SELECTOR.LOCAL, TOGGLE.OPTIONS.LOCAL);
  }
};
