import animations from './animations';
import instaRecent from './insta-recent';
import compInit from './comp-init';
import header from './header';

compInit.init();
animations.init();
instaRecent.init();

window.header = header;