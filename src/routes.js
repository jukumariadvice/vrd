export default [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
  //   },
  {
    path: "/contracts/:departament",
    name: "contracts",
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Contracts.vue")
  },
  {
    path: "*",
    redirect: "/contracts/la-paz"
  }
];
