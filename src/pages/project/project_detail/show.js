import React, { Component } from 'react';
import ProjectInfo from './project_info/project_info'
import './show.less';

class showProject extends Component {
  constructor () {
    super()
    this.state = this.initalState()
  }
  initalState () {
    return {
      showTitle: '项目详情'
    }
  }
  render () {
    return (
      <div className="project_show">
        <h2 className='page_title'>
          <i className="iconfont icon-guizeyinqing"></i>
          <span>{this.state.showTitle}</span>
        </h2>
        <ProjectInfo/>
      </div>
    )
  }
}
export default showProject;
