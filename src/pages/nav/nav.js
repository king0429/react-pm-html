import React, { Component } from 'react';
import '../../assets/iconfont/iconfont.css';
import './nav.less';

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = this.initalState()
  }
  initalState () {
    return {
      nav: [
        {name: '首页', icon: 'iconfont icon-ditu-qi', url: '/'},
        {name: '项目', icon: 'iconfont icon-daibanshixiang', url: '/project'},
        {name: '计划', icon: 'iconfont icon-renwujincheng', url: '/plan'},
        {name: '任务', icon: 'iconfont icon-renwu', url: ''},
        {name: '进度', icon: 'iconfont icon-renwujincheng'},
        {name: '文档', icon: 'iconfont icon-shiyongwendang', url: ''},
        {name: '消息', icon: 'iconfont icon-xiaoxitongzhi', url: ''},
        {name: '设置', icon: 'iconfont icon-icon_shezhi', url: ''}
      ],
      selIndex: 0
    }
  }
  // 点击跳转
  handleClick (index) {
    let nav = this.state.nav
    let pathName = window.location.pathname
    if (nav[index].url !== pathName && nav[index].url) {
      document.getElementById('mavWrap').style.width = '70px';
      setTimeout(() => {
       window.location.href = nav[index].url
      }, 300)
    }
  }
  setIndex (url) {
    const that = this
    this.state.nav.forEach((val, index) => {
      if (url.indexOf(val.url) > 0) {
          that.setState({selIndex: index})
      }
    })
  }
  componentWillMount () {
    let url = window.location.href
    this.setIndex(url)
  }
  render () {
    return (
      <div className="nav_wrap" id='mavWrap'>
        <ul className='slide_nav'>
          {
            this.state.nav.map((val, index) => {
              return (
                <li key={index} onClick={() => this.handleClick(index)} className={this.state.selIndex === index ? 'sel' : ''}>
                  <i className={val.icon}></i>
                  <span>{val.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Nav;
