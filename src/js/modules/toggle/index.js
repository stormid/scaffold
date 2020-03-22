import { TOGGLE } from '../../constants';
import toggle from '@stormid/toggle';

export default () => {
    document.querySelector(TOGGLE.SELECTOR.GLOBAL) && toggle(TOGGLE.SELECTOR.GLOBAL);
    document.querySelector(TOGGLE.SELECTOR.LOCAL) && toggle(TOGGLE.SELECTOR.LOCAL, TOGGLE.OPTIONS.LOCAL);
};