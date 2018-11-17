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
    return (
      <div className="project_create">
        <h2 className='page_title'>
          <i className="iconfont icon-huowudui"></i>
          <span>创建任务</span>
        </h2>
      </div>
    )
  }
}
export default projectCreate;
