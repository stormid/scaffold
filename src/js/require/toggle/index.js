import { TOGGLES } from '../../constants';
import Toggle from 'storm-toggle';

export default () => {
    Toggle.init(TOGGLES.SELECTOR.LOCAL, TOGGLES.OPTIONS.LOCAL);
};