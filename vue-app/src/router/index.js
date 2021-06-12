import Vue from 'vue'
import Router from 'vue-router'
import Student from '@/components/Student/AppStudent'
import Subject from '@/components/Subject/AppSubject'
import Prova from '@/components/Prova/AppProva'
import App from '@/components/AppVue'

Vue.use(Router)

const routes = [
  {
      name: 'app',
      path: '/'
  },
  {
      name: 'student',
      path: '/student',
      component: Student
  },
  {
    name: 'subject', 
    path: '/subject', 
    component: Subject
  }, 
  {
    name: 'prova', 
    path: '/prova', 
    component: Prova
  }
]

const router = new Router({ routes })

export default router