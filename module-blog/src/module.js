export default class ModuleBlog {
  prefix() {
    return 'blog';
  }

  init() {
    // any initialization code for your module
  }

  methods() {
    return [
      {
        id: 'blog.getPostsCount',
        generator: () => async () => {},
      },
    ];
  }

  components() {
    return [
      {
        id: 'blog.PostsList',
        generator: () => require('./posts/screens/PostsList').default,
      },
      {
        id: 'blog.AddPost',
        generator: () => require('./posts/screens/AddPost').default,
      },
      {
        id: 'blog.ViewPost',
        generator: () => require('./posts/screens/ViewPost').default,
      },
      {
        id: 'blog.PostsCountBanner',
        generator: () => require('./posts/screens/PostsCountBanner').default,
      },
    ];
  }

  listeners() {
    return [
      {
        id: 'settings.resetApp',
        callback: async () => {
          const actions = require('./posts/posts.actions');
          await actions.deleteAllPosts();
        },
      },
    ];
  }

  tabs() {
    return [
      {
        id: 'moduleExampleA',
        label: 'Home',
        screen: 'blog.PostsList',
        icon: require('./icons/home.png'),
        selectedIcon: require('./icons/home_selected.png'),
      },
    ];
  }
}
