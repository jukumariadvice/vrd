export default [
  {
    path: "/top-20-companies",
    name: "top",
    meta: { title: "Obras" },
    component: () =>
      import(/* webpackChunkName: "home" */ "./views/Top20Companies.vue")
  },
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
