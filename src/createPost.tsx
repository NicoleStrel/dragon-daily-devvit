import { Devvit } from '@devvit/public-api';
import {LoadingComponent} from './components/LoadingComponent.js';

// Configure Devvit's plugins
Devvit.configure({
  redditAPI: true,
});

// Adds a new menu item to the subreddit allowing to create a new post
Devvit.addMenuItem({
  label: 'Dragon Daily: Create a post (with Web View)',
  location: 'subreddit',
  forUserType: 'moderator',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: 'Dragon Daily',
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <LoadingComponent />
        </vstack>
      ),
    });
    ui.showToast({ text: 'Posted dragon daily!!' });
    ui.navigateTo(post);
  },
});
