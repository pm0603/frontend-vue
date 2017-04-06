
// Load components 
// 컴포넌트를 여기서 부름
import Home from './components/Home.vue';
import User from './components/User/User.vue';


// Route setting
export const routes = [
  { path: '/',     component: Home },
  { path: '/user/:id', component: User }
];