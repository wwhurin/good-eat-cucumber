import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '../components/main/mainPage'
import chatPage from '../components/chat/chatPage'

Vue.use(Router)

export default new Router({
  mode: 'history'
  , routes: [
    {
      path: '/',
      name: 'main_page',
      component: mainPage
    }
    , {
      path: '/chat',
      name: 'chat_page',
      component: chatPage
    }
  ]
})
