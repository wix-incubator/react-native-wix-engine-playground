import {postsStore} from './posts.store';
import * as DBApi from './db/api';

export async function fetchPosts() {
  const posts = await DBApi.fetchPosts();
  postsStore.setPosts(posts);
}

export async function addPost(post) {
  const postToAdd = await DBApi.addPost(post);
  postsStore.addPost(postToAdd);
}

export async function updatePost(post) {
  postsStore.updatePost(post);
  await DBApi.updatePost(post);
}

export async function deletePost(id) {
  await DBApi.deletePost(id);
  postsStore.deletePost(id);
}

export async function deleteAllPosts() {
  await DBApi.deleteAllPosts();
  postsStore.deleteAllPosts();
}
