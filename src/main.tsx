import './createPost.js';

import { Devvit } from '@devvit/public-api';
import {Router} from './Router.js';

Devvit.configure({
  redditAPI: true,
  redis: true,
  media: true,
});

Devvit.addCustomPostType({
  name: 'Dragon Daily',
  height: 'tall',
  render: Router,
});

export default Devvit;
