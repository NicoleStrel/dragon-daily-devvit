// Visit developers.reddit.com/docs to learn Devvit!

import { Devvit } from '@devvit/public-api';
import {DateComponent} from './components/DateComponent.js';

Devvit.configure({
  redditAPI: true,
  redis: true,
  media: true,
});

Devvit.addMenuItem({
  label: 'Puzzle Daily: Create a post',
  location: 'subreddit',
  forUserType: 'moderator',
  async onPress(_, { reddit, ui }) {
    const currentSubreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: 'Puzzle Daily',
      subredditName: currentSubreddit.name,
      preview: (
        <vstack alignment={'middle center'} grow>
          <text>Loading puzzle daily</text>
        </vstack>
      ),
    });
    ui.navigateTo(post);
    ui.showToast('Posted puzzle daily!!');
  },
});

Devvit.addCustomPostType({
  name: 'Puzzle Daily',
  height: 'tall',
  render: () => {
    return (
      <vstack gap="medium" alignment="middle center" grow>
       <DateComponent/>
      </vstack>
    );
  },
});

export default Devvit;
