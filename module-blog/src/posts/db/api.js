import AsyncStorage from '@react-native-community/async-storage';
const DB_KEY = '@POSTS';
const initialPostsList = [
  {
    id: 1,
    title: 'Post 1',
    text: 'post 1 text',
    img: 'https://picsum.photos/200/200/?image=11',
  },
  {
    id: 2,
    title: 'Post 2',
    text:
      'Scientists have developed catalysts that can convert carbon dioxide – the main cause of global warming – into plastics, fabrics, resins and other products. The discovery, based on the chemistry of artificial photosynthesis, is detailed in the journal Energy & Environmental Science.',
    img: 'https://picsum.photos/200/200/?image=22',
  },
];

async function reset(items= initialPostsList) {
  return savePostsListToDB(items);
}

async function fetchPosts() {
  let posts = await AsyncStorage.getItem(DB_KEY);
  if (!posts) {
    await reset();
    return initialPostsList;
  }
  posts = JSON.parse(posts);
  return Promise.resolve(posts.list);
}

async function savePostsListToDB(posts) {
  const jsonValue = JSON.stringify({list: posts});
  await AsyncStorage.setItem(DB_KEY, jsonValue);
}

async function addPost(post) {
  const posts = await fetchPosts();
  const newId = posts[posts.length - 1] ? posts[posts.length - 1].id + 1 : 1;
  console.log(newId);
  const postToAdd = {
    ...post,
    id: newId,
  };
  posts.push(postToAdd);
  await savePostsListToDB(posts);
  return Promise.resolve(postToAdd);
}

async function deletePost(id) {
  let posts = await fetchPosts();
  posts = posts.filter(post => post.id !== id);
  return Promise.resolve(savePostsListToDB(posts));
}

async function deleteAllPosts() {
  return reset([]);
}

async function updatePost(post) {
  let posts = await fetchPosts();
  posts = posts.map(item => {
    if (item.id !== post.id) {
      return item;
    }
    return {
      ...item,
      ...post,
    };
  });
  return Promise.resolve(savePostsListToDB(posts));
}

module.exports = {
  reset,
  deleteAllPosts,
  fetchPosts,
  addPost,
  deletePost,
  updatePost,
};
