import React, { Component } from 'react';
import axios from 'axios';
import './project_info.less';

class ProjectInfo extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      showData: {},
      prevData: {},
      showPerson: [],
      isEdit: false
    }
  }
  componentWillMount () {
    const that = this
    let {id} = window.frames.$query(window.location.search)
    axios.get(`/project?id=${id}`).then(res => {
      if (res.data.code === 1) {
        that.setState({showData: res.data.showData, showPerson: res.data.showData.project_persion})
      }
    })
  }
  render () {
    let optionArr = []
    for (let i = 1; i <= 5; i++) {
        optionArr.push(<option value={i} key={i}>{i + '级'}</option>)
    }
    return (
      <div className="show_project_info">
        <div className="show_project_title">
          <div className='show_project_item'>
            <span>项目名称</span>
            <div>
              {
                this.state.isEdit ?
                <input type="text" ref="project_name" defaultValue={this.state.showData.project_name} />
                :
                <span>{this.state.showData.project_name}</span>
              }
            </div>
          </div>
          <div className='show_project_item'>
            <span>创建时间</span>
            <span>{this.state.showData.create_time ? window.frames.$time(this.state.showData.create_time) : ''}</span>
          </div>
        </div>
        <div className="project_show_line">
          <span>项目详情</span>
          <div>
            <span>{!this.state.isEdit ? '编辑' : '保存'}</span>
            {
              this.state.isEdit ?
              <span>取消</span>
              :
              ''
            }
          </div>
        </div>
        <div className="show_project_line">
          <div className="show_project_item">
            <span>项目ID</span>
            <span>{window.frames.$number(this.state.showData.project_uid, 0)}</span>
          </div>
        </div>
        <div className="show_project_line">
          <div className="show_project_item">
            <span>项目周期</span>
            {
              this.state.isEdit ?
              <input defaultValue={this.state.showData.project_duration} ref='project_duration' />
              :
              <span>{this.state.showData.project_duration ? this.state.showData.project_duration + '天' : ''}</span>
            }
          </div>
          <div className="show_project_item">
            <span>项目级别</span>
            {
              this.state.isEdit ?
              <select>
                {optionArr}
              </select>
              :
              <span>{this.state.showData.project_level ? this.state.showData.project_level + '级' : ''}</span>
            }

          </div>
        </div>
        <p>项目关联人</p>
        <ul className="show_project_persen">
          {
            this.state.showPerson.length !== 0 ?
            this.state.showPerson.map((val, index) => {
              return (
                <li key={index}>{val.name || val}</li>
              )
            })
            :
            <li className='no_person'>无项目关联人</li>
          }
        </ul>
        <div className="show_project_desc">
          <div className="show_project_item">
            <span>项目描述</span>
            <div>
              {
                this.state.isEdit ?
                <textarea ref='project_desc' defaultValue={this.state.showData.project_desc}/>
                :
                <p className={!this.state.showData.project_desc ? 'null_desc' : ''}>{this.state.showData.project_desc || '暂无描述'}</p>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectInfo;
