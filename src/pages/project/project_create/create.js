import React, {Component} from 'react';
import './create.less';

class projectCreate extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      formItem: {},
      childNode: []
    }
  }
  render () {
    let optionArr = []
    for (let i = 1; i <= 5; i++) {
        optionArr.push(<option value={i} key={i}>{i}</option>)
    }
    return (
      <div className="project_create">
        <h2 className='page_title'>
          <i className="iconfont icon-huowudui"></i>
          <span>创建任务</span>
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
            </div>
            <div className="project_item">
              <span>项目级别</span>
              <select ref='project_class'>
                {optionArr}
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default projectCreate;
