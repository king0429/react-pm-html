import React, { Component } from 'react';
import axios from 'axios';
import './project_list.less';
import { Icon, Pagination } from 'antd';

class ProjectList extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      showList: [],
      showTitle: [
        {name: '项目名称', key: 'project_name'},
        {name: '创建日期', key: 'create_time'},
        {name: '项目状态', key: 'project_status'},
        {name: '项目级别', key: 'project_level'},
        {name: '项目周期', key: 'project_duration'},
        {name: '操作'}
      ],
      stausList: [
        {title: '未开始', className: 'status_not_start-color'},
        {title: '进行中', className: 'status_donging-color'},
        {title: '已完成', className: 'status_completed-color'},
        {title: '已取消', className: 'status_calceled-color'},
        {title: '审核中', className: 'status_verfying-color'}
      ],
      pageLen: 0
    }
  }
  handlePetch (p, ps) {
    let page = p || 0
    let page_size = ps || 10
    const that = this
    axios.get(`/project/project_list?page=${page}&page_szie=${page_size}`).then(res => {
      if (res.data.code === 1) {
        that.setState({showList: res.data.list, pageLen: res.data.len})
      }
    })
  }
  handleCreate () {
    this.props.history.push('/project_list/create')
  }
  componentWillMount () {
    this.handlePetch()
  }
  render () {
    this.state.showList.forEach((val, index) => {
      val.stars = []
      for (let i = 0; i < Number(val.project_level); i++) {
        val.stars.push(<Icon key={i} type='star' theme="filled" />)
      }
    })
    return (
      <div className="show_project_list">
        <div className='btn_list'>
          <button type="button" name="button" onClick={() => this.handleCreate()}>创建项目</button>
        </div>
        <table cellSpacing='0' cellPadding='0' border='1px' bordercolor='#eaeaea'>
          <tbody>
            <tr>
              {
                this.state.showTitle.map((val, index) => {
                  return <td key={index}>{val.name}</td>
                })
              }
            </tr>
            {
              this.state.showList.map((val, index) => {
                return (
                <tr key={index}>
                  <td>{val.project_name}</td>
                  <td>{window.frames.$time(val.create_time, 1)}</td>
                  <td className={this.state.stausList[val.project_status].className}>{this.state.stausList[val.project_status].title}</td>
                  <td>{val.stars}</td>
                  <td>{val.project_duration ? val.project_duration + '天' : '未填写'}</td>
                  <td className='operate_btn'>
                    <span>查看</span>
                  </td>
                </tr>
                )
              })
            }
          </tbody>
        </table>
        {
          this.state.pageLen > 10 ?
          <div className='page'>
            <Pagination defaultCurrent={1} total={this.state.pageLen} />
          </div>
          :
          ''
        }
      </div>
    )
  }
}
export default ProjectList;
