import { createRouter, createWebHistory } from 'vue-router'

//Apps
import App from '../App.vue'

//dashboard

import CandidateDashboard from '../views/CandidateDashboard.vue'
import EmployerDashboard from '../views/EmployerDashboard.vue'

//candidate
import HomeView from '../views/candidate/HomeView.vue'
import Jobs from '../views/candidate/Jobs.vue'
import JobDetails from '../views/candidate/JobDetail.vue'
import Companies from '../views/candidate/Companies.vue'
import CompanyDetails from '../views/candidate/CompanyDetail.vue'
import Login from '../views/candidate/Login.vue'
import Register from '../views/candidate/Register.vue'
import LoginLayout from '../views/candidate/LoginLayout.vue'
//Menu user
import MenuUser from '../components/candidate/MenuUser.vue'//thong tin ca nhan
import SettingInfo from '../components/candidate/SettingInfo.vue'//thong tin ca nhan
import ChangePass from '../components/candidate/ChangePass.vue' //doi mat khau
import FollowCompanies from '../components/candidate/FollowCompanies.vue' //viec lam da luu
import JobsHire from '../components/candidate/JobsHire.vue' //viec lam da ung tuyen
import CreateCV from '../components/candidate/CreateCV.vue' //tao cv
import InterviewCalendar from '../components/candidate/InterviewCalendar.vue' //xem lich phong van


//employer
import DashBoard from '../views/employer/DashBoard.vue'
import Post from '../views/employer/Post.vue'
import AddPost from '../views/employer/AddPost.vue'
import CVs from '../views/employer/CVs.vue'
import CVTempt from '../views/employer/CVTempt.vue'
import Setting from '../views/employer/Setting.vue'
import LoginEm from '../views/employer/LoginEm.vue'
import RegisterEm from '../views/employer/RegisterEm.vue'

//temp
import Kanye from '../views/Kanye.vue'




import NotFound from '../views/NotFound.vue'

const routes = [
  // App
  {
    path: '/app',
    name: 'app',
    component: App,
   
  },
  

  // dashboard
  {
    path: '/candidate',
    name: 'candidate',
    component: CandidateDashboard,
    meta: {
      requiresAdmin: true
    }
  },
  {
    path: '/employer',
    name: 'employer',
    component: EmployerDashboard,
    meta: {
      requiresAdmin: false
    }
  },

  //dashboard
  // {
  //   path: '/',
  //   component: CandidateDashboard,
  //   children: [
  //     {
  //       path: '',
  //       name: 'candidateDashboard',
  //       component: () => import('../views/CandidateDashboard.vue'), // Component của candidate
  //     },
  //   ],
  // },

  // {
  //   path: '/employer',
  //   component: EmployerDashboard,
  //   children: [
  //     {
  //       path: '/u',
  //       name: 'employerDashboard',  
  //       component: () => import('../views/EmployerDashboard.vue'), // Component của employer
  //     },
  //   ],
  // },


  //candidate
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'about',
        // component: () => import('@/views/About.vue'), // Ví dụ cho một trang khác
      },
      // Các route khác ở đây
    ],

  },

  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs,

  },
  {
    path: '/jobs/:id',
    name: 'jobsDetail',
    component: JobDetails,
    props: true,

  },

  {
    path: '/companies',
    name: 'companies',
    component: Companies,

  },
  
  {
    path: '/companies/:id',
    name: 'companyDetail',
    component: CompanyDetails,
    props: true,

  },
  // {
  // path: '/login', 
  // name: 'login',
  // component: LoginLayout,
  // children: [
  //   {

  //     path: '',
  //     component: Login,
  //     // component: () => import('@/views/Login.vue'),
  //   } 
  // ]

  // },
  {
    path: '/login',
    name: 'login',
    component: Login,

  },
  {
    path: '/register',
    name: 'register',
    component: Register,

  },
  {
    path: '/menuuser',
    name: 'menuuser',
    component: MenuUser,

  },
  //Menu User

  {
    path: '/menuuser',
    name: 'menuuser',
    component: MenuUser, //menu setting

  },
  {
    path: '/settinginfo',
    name: 'settinginfo',
    component: SettingInfo,//cai dat thong tin ca nhan

  },
  {
    path: '/changepass',
    name: 'changepass',
    component: ChangePass, // doi mat khau

  },
  {
    path: '/followcompanies',
    name: 'followcompanies',
    component: FollowCompanies, //viec lam da luu

  },
  {
    path: '/jobshire',
    name: 'jobshire',
    component: JobsHire, //Viec lam da ung tuyen

  },
  {
    path: '/createcv',
    name: 'creatcv',
    component: CreateCV, //Tao CV

  },
  {
    path: '/interviewcalendar',
    name: 'interviewcalendar',
    component: InterviewCalendar, //Xem lich phong van
 
  },



  

  //employer
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,

  },
  {
    path: '/post',
    name: 'post',
    component: Post,

  },
  {
    path: '/addpost',
    name: 'addpost',
    component: AddPost,

  },
  {
    path: '/cv-manager',
    name: 'CVs',
    component: CVs,

  },
  {
    path: '/cv-managerTemp',
    name: 'CVTempt',
    component: CVTempt,

  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting,

  },
  {
    path: '/loginEm',
    name: 'loginEm',
    component: LoginEm,

  },
  {
    path: '/registerEm',
    name: 'registerEm',
    component: RegisterEm,

  },


  //temp
  {
    path: '/kanye',
    name: 'kanye',
    component: Kanye,
  },

  //catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
