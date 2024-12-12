// Visit developers.reddit.com/docs to learn Devvit!

import { Devvit } from '@devvit/public-api';
import {Router} from './Router.js';

Devvit.configure({
  redditAPI: true,
  redis: true,
  media: true,
});

Devvit.addMenuItem({
  label: 'Dragon Daily: Create a post',
  location: 'subreddit',
  forUserType: 'moderator',
  async onPress(_, { reddit, ui }) {
    const currentSubreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: 'Dragon Daily',
      subredditName: currentSubreddit.name,
      preview: (
        <vstack alignment={'middle center'} grow>
          <text>Loading dragon daily</text>
        </vstack>
      ),
    });
    ui.navigateTo(post);
    ui.showToast('Posted dragon daily!!');
  },
});

Devvit.addCustomPostType({
  name: 'Dragon Daily',
  height: 'tall',
  render: Router,
});

export default Devvit;
