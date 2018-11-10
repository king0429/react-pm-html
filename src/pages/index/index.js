import React, { Component } from 'react';
import Datedata from './calendar/calendar';
import IndexProject from './project_list/project_list';
import IndexTask from './task_list/task_list';
import { Icon } from 'antd';
import './index.less';
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      section: [
        {name: '参与项目', url: '/project_list'},
        {name: '任务列表', url: '/task_list'},
        {name: '计划列表', url: '/plan_list'}
      ]
    }
  }
  beforeMount() {
    //do something before mounting vue instance
  }
  render () {
    return (
      <div className="index">
        <div className="left_section">
          <div className="top_section">
            <p className='section_title'>
              <span>{this.state.section[0].name}</span>
              <span>查看更多<Icon type="right" /></span>
            </p>
            <IndexProject />
          </div>
          <div className="bottom_section">
            <p className='section_title'>
              <span>{this.state.section[1].name}</span>
              <span>查看更多<Icon type="right" /></span>
            </p>
            <IndexTask />
          </div>
        </div>
        <div className="right_section">
          <p className='section_title'>
            <span>{this.state.section[2].name}</span>
            <span>查看更多<Icon type="right" /></span>
          </p>
          <Datedata />
        </div>
      </div>
    )
  }
}

export default Index;
