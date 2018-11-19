// 仿制vue-router 路由配置页面
import Index from '../pages/index/index'
import ProjectList from '../pages/project/project_list/project_list.js'
import showProject from '../pages/project/project_detail/show.js'
import ProjectCreate from '../pages/project/project_create/create.js'

export default [
  {
    name: Index,
    url: '/'
  },
  {
    name: ProjectList,
    url: '/project'
  },
  {
    name: ProjectCreate,
    url: '/project/create'
  },
  {
    name: showProject,
    url: '/project/detail'
  }
]
