import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost.vue";
import EditPost from "../pages/EditPost.vue";
import Post from "../pages/Post.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/post/:id",
    name: "Post",
    props: true,
    component: Post,
  },
  {
    path: "/post/:id/edit",
    name: "Edit Post",
    props: true,
    component: EditPost,
  },
  {
    path: "/create-post",
    name: "Create Post",
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
