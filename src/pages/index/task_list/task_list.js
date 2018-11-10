import React, { Component } from 'react';
import axios from 'axios';
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
    const that = this
    axios.get(`/task/task_list`).then(res => {
      console.log(res)
      if (res.data.code === 1) {
        that.setState({showList: res.data.list})
      }
    })
    // this.setState({showList: [
    //   {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'},
    //   {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'},
    //   {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'},
    //   {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11', end_date: '2019-12-20'},
    //   {task_number: '12345612346', task_name: '任务132465', start_date: '2019-12-11'}
    // ]})
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
          this.state.showList.length === 0 ?
          <li className='none_type'>暂无任务</li>
          :
          ''
        }
        {
          this.state.showList.map((val, index) => {
            return (
              <li key={index}>
                <div>
                  <span title={val.task_number}>{val.task_number}</span>
                </div>
                <div>
                  <span>{val.task_name}</span>
                </div>
                <div>
                  <span>{val.start_date}</span>
                  <span> 至 </span>
                  <span style={!val.end_date ? {color: "#999"} : {}}>{val.end_date || '未填写'}</span>
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
