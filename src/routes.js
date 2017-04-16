// Load components
// 컴포넌트를 여기서 부름
import Home from './components/Home.vue';
import Detail from './components/Detail/Detail.vue';
import Search from './components/Search/Search.vue';
import Genre from './components/Genre/Genre.vue';
import UserBookMark from './components/User/UserBookMark.vue';


// Route setting
export const routes = [
  { path: '/',         component: Home,   name: 'home' },
  { path: '/bookmark', component: UserBookMark },
  { path: '/detail',   component: Detail },
  { path: '/search',   component: Search },
  { path: '/genre',    component: Genre },
  { path: '*', redirect: '/' }

];
