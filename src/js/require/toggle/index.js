import { TOGGLES } from '../../constants';
import Toggle from 'storm-toggle';

export default () => {
    Toggle.init(TOGGLES.SELECTOR.NAV,
		{
			local: true,
			callback(){
                if(!this.isOpen) return;
                this.boundProxy = this.settings.proxyToggle.bind(this);
                document.body.addEventListener('click', this.boundProxy);
            },
            proxyToggle(e) {
                document.body.removeEventListener('click', this.boundProxy);
                if(!this.node.contains(e.target) && !this.toggles.reduce((acc, toggle) => {
                    if(e.target === toggle || toggle.contains(e.target)) acc = true;
                    return acc;
                }, false)) this.toggle();
            }
		});
};