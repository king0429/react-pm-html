import React, { Component } from 'react';
import { Icon } from 'antd';
import './project_list.less';

class IndexProject extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      showTitle: [
        {name: '项目名称', key: 'project_title'},
        {name: '创建时间', key: 'project_time'},
        {name: '项目级别', key: 'project_class'}
      ],
      showList: []
    }
  }
  componentWillMount () {
    this.setState({showList: [
      {project_status: 0, project_title: '1', project_class: '1', project_charger: '2018-01-02'},
      {project_status: 1, project_title: '1', project_class: '3', project_charger: '2018-01-02'},
      {project_status: 2, project_title: '1', project_class: '3', project_charger: '2018-01-02'},
      {project_status: 3, project_title: '1', project_class: '4', project_charger: '2018-01-02'},
      {project_status: 4, project_title: '1', project_class: '3', project_charger: '2018-01-02'},
      {project_status: 0, project_title: '1', project_class: '3', project_charger: '2018-01-02'}
    ]})
  }
  render () {
    let statusList = ['not_start', 'donging', 'completed', 'calceled', 'verfying']
    this.state.showList.forEach((val, index) => {
      val.stars = []
      for (let i = 0; i < Number(val.project_class); i++) {
        val.stars.push(<Icon key={i} type='star' theme="filled" />)
      }
      val.state = 'status_' + statusList[val.project_status]
    })
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
          this.state.showList.map((val, index) => {
            return (
              <li key={index}>
                <div>
                  <i className={val.state}></i>
                  <span title={val.project_title}>{val.project_title}</span>
                </div>
                <div>{val.project_charger}</div>
                <div>{val.stars}</div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
export default IndexProject;
