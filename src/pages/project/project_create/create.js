import React, {Component} from 'react';
import './create.less';
import { message } from 'antd';
import axios from 'axios';
import NodeList from './node_list/node_list';

class projectCreate extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      slide: false,
      formItem: {},
      childNode: [],
      personList: [
        {name: '关联人1', id: 1, checked: false},
        {name: '关联人2', id: 2, checked: false},
        {name: '关联人3', id: 3, checked: false},
        {name: '关联人4', id: 4, checked: false},
        {name: '关联人5', id: 5, checked: false},
      ],
      docsList: [],
      selectPerson: [],
      nodeList: []
    }
  }
  // 点击下拉选择
  handleSlide (e) {
    this.setState({slide: !this.state.slide})
  }
  // 下来选择组成员
  handleSelectPerson (index) {
    let personList = this.state.personList
    let currentItem = personList[index]
    let currentId = currentItem.id
    let selectPerson = this.state.selectPerson
    personList[index].checked = !personList[index].checked
    if (currentItem.checked) {
      selectPerson.push(currentItem)
      console.log(selectPerson)
      this.setState({selectPerson, personList})
    } else {
      let newArr = []
      selectPerson.forEach((val, index) => {
        if (currentId !== val.id) newArr.push(val)
      })
      this.setState({selectPerson: newArr, personList})
    }
  }
  // 获取所有可关联项目
  componentWillMount () {
    // 获取可分配项目成员（算法）
  }
  // 提交数据
  handleSubmit () {
    console.log(this.props)
    let {project_name, project_duration, project_level, project_desc} = this.refs
    if (project_name.value === '') {
      message.error('请输入项目名称')
    } else if (!(/[0-9]*[1-9][0-9]*$/.test(project_duration.value))) {
      message.error('请输入项目时长')
    } else {
      let subData = {project_name: project_name.value, project_duration: project_duration.value, project_level: project_level.value, project_desc: project_desc.value, project_originator: 'dev'}
      subData.project_persion = this.state.selectPerson
      axios.post(`/project/create_project`, subData).then(res => {
        if (res.data.code === 1) {
          message.success('创建成功', 1, () => {
            this.props.history.push('/project')
          })
        }
      })
    }
  }
  render () {
    let optionArr = []
    for (let i = 1; i <= 5; i++) {
        optionArr.push(<option value={i} key={i}>{i + '级'}</option>)
    }
    return (
      <div className="project_create">
        <h2 className='page_title'>
          <i className="iconfont icon-huowudui"></i>
          <span>创建项目</span>
        </h2>
        <div className="project_form">
          <div className="project_line">
            <div className="project_item">
              <span>项目名称</span>
              <input type="text" ref='project_name' maxLength="16" />
            </div>
          </div>
          <div className="project_line">
            <div className="project_item">
              <span>项目周期</span>
              <input type="text" ref='project_duration' maxLength="4" />
              <span>天</span>
            </div>
            <div className="project_item">
              <span>项目级别</span>
              <select ref='project_level'>
                {optionArr}
              </select>
            </div>
          </div>
          <div className="project_line">
            <div className="project_slide">
              <span>项目关联人</span>
              <div className='personList'>
                <div className='slide_list' onClick={() => this.handleSlide()}>
                  {
                    this.state.selectPerson.map((val, index) => {
                      return (
                        <span key={index}>{val.name}</span>
                      )
                    })
                  }
                  {
                    this.state.selectPerson.length === 0 ?
                    '请选择项目相关人员': ''
                  }
                </div>
                {
                  this.state.slide ?
                  <ul className='slide_item'>
                    {
                      this.state.personList.map((v, i) => {
                        return <li key={i}><input checked={v.checked} type="checkbox" onChange={() => this.handleSelectPerson(i)}/><span>{v.name}</span></li>
                      })
                    }
                  </ul>
                  :
                  ''
                }
              </div>
            </div>
          </div>
          <div className="project_desc">
            <span>项目描述</span>
            <textarea name="name" ref='project_desc'></textarea>
          </div>
        </div>
        <NodeList />
        <div className="btn_line">
          <button onClick={() => {this.handleSubmit()}}>创建项目</button>
        </div>
      </div>
    )
  }
}
export default projectCreate;
