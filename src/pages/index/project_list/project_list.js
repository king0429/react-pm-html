import React, { Component } from 'react';
import './project_list.less';
import axios from 'axios';

class IndexProject extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      sheetsList: ['not_start', 'donging', 'completed', 'calceled', 'verfying'],
      showTitle: [
        {name: '项目名称', key: 'project_title'},
        {name: '创建时间', key: 'project_time'},
        {name: '项目时长', key: 'project_projecet_duration'}
      ],
      showList: []
    }
  }
  componentWillMount () {
    const that = this
    axios.get(`/project/project_list`).then(res => {
      console.log(res)
      if (res.data.code === 1) {
        that.setState({showList: res.data.list})
      }
    })
  }
  render () {
    return (
      <ul className='project_list'>
        <li className="project_list_title">
          {
            this.state.showTitle.map((val, index) => {
              return (
                <div key={index}>{val.name}</div>
              )
            })
          }
        </li>
        {
          this.state.showList.length !== 0 ?
          this.state.showList.map((val, index) => {
            return (
              <li key={index}>
                <div>
                  <i className={'status_' + this.state.sheetsList[val.project_status]}></i>
                  <span title={val.project_name}>{val.project_name}</span>
                </div>
                <div>{window.frames.$time(val.create_time)}</div>
                <div>{val.project_duration ? val.project_duration + '天' : '未填写'}</div>
              </li>
            )
          })
          :
          <li className='null_project'>暂无项目</li>
        }
      </ul>
    )
  }
}
export default IndexProject;
