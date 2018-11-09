import React, { Component } from 'react';
import './task_list.less';

class IndexTask extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      showTitle: [
        {name: '任务序号', key: 'task_number'},
        {name: '任务名称', key: 'task_name'},
        {name: '起止时间', key: 'task_duration'}
      ],
      showList: []
    }
  }
  componentWillMount () {
    this.setState({showList: [
      {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'},
      {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'},
      {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'},
      {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'},
      {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'}
    ]})
  }
  render () {
    return (
      <ul className='task_list'>
        <li className="task_list_title">
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
                  <span title={val.task_number}>{val.task_number}</span>
                </div>
                <div>{val.task_name}</div>
                <div>
                  <span>{val.start_date + '-' + val.end_date }</span>
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
export default IndexTask;
