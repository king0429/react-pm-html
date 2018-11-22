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
  // 添加节点
  handleAdd () {
    let nodeList = this.state.nodeList
    nodeList.push({isEdit: true})
    this.setState({nodeList})
  }
  // 保存节点
  handleSave (index) {
    console.log(index)
    console.log(this.state.nodeList)
  }
  // 获取输入
  handleInput (index, sw, e) {
    e.persist()
    console.log(e)
    let nodeList = this.state.nodeList
    if (sw === 1) {
      nodeList[index].node_name = e.target.value
    } else if (sw === 2) {
      nodeList[index].node_info = e.target.value
    }
    this.setState({nodeList})
  }
  // 获取日期
  handleDate (index, e) {
    let nodeList = this.state.nodeList
    console.dir(Object.values(e[0]._d))
    nodeList[index].start_date = e[0]._d
    nodeList[index].end_date = e[1]._d
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
                    <input type="text" maxlenght='16' onChange={this.handleInput.bind(this, index, 1)} />
                  </div>
                  <div>
                    <span>起止日期</span>
                    <RangePicker onChange={this.handleDate.bind(this, index)} placeholder={['起始日期', '结束日期']} className='date_picker' />
                  </div>
                </div>
                <div className="node_info_detail">
                  <span>节点描述</span>
                  <textarea maxlenght='256' onChange={this.handleInput.bind(this, index, 2)}></textarea>
                </div>
                <div className="node_info_btn">
                  <span onClick={() => {this.handleSave(index)}}>{val.isEdit ? '保存' : '修改'}</span>
                  {
                    !val.isEdit ?
                    <span>删除节点</span>
                    :
                    ''
                  }
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
