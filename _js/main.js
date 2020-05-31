import animations from './animations';
import instaRecent from './insta-recent';
import compInit from './comp-init';
import header from './header';
import post from './post';

compInit.init();
animations.init();
instaRecent.init();
post.init();

hljs.initHighlighting();

window.header = header;