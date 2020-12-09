
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'manage', component: () => import('pages/Manage') },
      { path: 'notebook', component: () => import('pages/Notebook') },
      { path: 'watch', component: () => import('pages/Watch') },
      { path: 'register', component: () => import('pages/Register') },
      { path: 'product', component: () => import('pages/ProductSelect') },
      { path: '/account', component: () => import('pages/Account') }
    ]
  },
  {
    path: '/trading',
    component: () => import('pages/Trading')
  },
  {
    path: '/detail',
    component: () => import('pages/Trading/components/TradingDetail')
  },
  {
    path: '/look',
    component: () => import('pages/Trading/components/Look')
  },
  {
    path: '/chat',
    component: () => import('pages/Chatting')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
