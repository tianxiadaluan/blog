const routes = [
  {
      path: '/',
      name: 'Hello',
      component: resolve => require(['@/components/HelloWorld.vue'], resolve)
  }
]
export default routes;
