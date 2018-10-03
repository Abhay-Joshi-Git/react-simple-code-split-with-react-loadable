with react-loadable we can get easy code split -

import Loadable from 'react-loadable';

const Feeds = Loadable({
	loader: () => import('./feeds/Feeds'),
	loading: () => <div>loading .... </div>
});
