import Vue      from 'vue'
import Router   from 'vue-router'
import Archive  from '../components/front/Archive.vue'
import Article  from '../components/front/Article.vue'
import Console  from '../components/back/Console.vue'
import Login    from '../components/back/Login.vue'
import Articles from '../components/back/Articles.vue'
import Editor   from '../components/back/Editor.vue'
import Links    from '../components/back/Links.vue'
import Account  from '../components/back/Account.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/archive', name:'archive', component:Archive}
    {path: '/login', name: 'login', component: Login},
    {path: '/article', name: 'article', component: Article},
    {path: '*', redirect: '/archive'},
    {
      path: '/admin',
      component: Console,
      children: [
        {path: '', component: Articles},
        {path: 'articles', name: 'articles', component: Articles},
        {path: 'editor', name: 'editor', component: Editor},
        {path: 'links', name: 'links', component: Links},
        {path: 'account', name: 'account', component: Account}
      ]
    }
  ]
})
