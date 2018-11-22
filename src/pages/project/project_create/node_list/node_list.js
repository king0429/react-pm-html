import React, { Component } from 'react';
import { message, DatePicker } from 'antd';
import './node_list.less';

const { RangePicker } = DatePicker;

class NodeList extends Component {
  constructor () {
    super()
    this.state = this.initalState()
  }
  initalState () {
    return {
      nodeList: []
    }
  }
  handleAdd () {
    let nodeList = this.state.nodeList
    nodeList.push({isEdit: true})
    this.setState({nodeList})
  }
  render () {
    return (
      <div className="node_list">
        <div className="node_list_title">
          <span>项目节点</span>
          <span className='add_node' onClick={() => this.handleAdd()}>添加节点</span>
        </div>
        {
          this.state.nodeList.map((val, index) => {
            return (
              <div className="node_item" key={index}>
                <div className="node_info_line">
                  <div>
                    <span>节点名称</span>
                    <input type="text" value={val.name} maxLenght='16' />
                  </div>
                  <div>
                    <span>起止日期</span>
                    <RangePicker placeholder={['起始日期', '结束日期']} className='date_picker' />
                  </div>
                </div>
                <div className="node_info_detail">
                  <span>节点描述</span>
                  <textarea value={val.info}></textarea>
                </div>
                <div className="node_info_btn">
                  <span>{val.isEdit ? '保存' : '修改'}</span>
                  <span>删除节点</span>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
export default NodeList;
