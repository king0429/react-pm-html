import React, { Component } from 'react';
import Datedata from './calendar/calendar';
import IndexProject from './project_list/project_list';
import IndexTask from './task_list/task_list';
import './index.less';
class Index extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      section: ['参与项目', '任务列表', '计划列表']
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
            <p className='section_title'>{this.state.section[0]}</p>
            <IndexProject />
          </div>
          <div className="bottom_section">
            <p className='section_title'>{this.state.section[1]}</p>
            <IndexTask />
          </div>
        </div>
        <div className="right_section">
          <p className='section_title'>{this.state.section[2]}</p>
          <Datedata />
        </div>
      </div>
    )
  }
}

export default Index;
