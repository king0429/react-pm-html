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
        {name: '首页', icon: 'iconfont icon-icon_zhanghao', url: ''},
        {name: '项目', icon: 'iconfont icon-daibanshixiang', url: ''},
        {name: '计划', icon: 'iconfont icon-renwujincheng', url: ''},
        {name: '任务', icon: 'iconfont icon-renwu', url: ''},
        {name: '进度', icon: 'iconfont icon-renwujincheng'},
        {name: '文档', icon: 'iconfont icon-shiyongwendang', url: ''},
        {name: '设置', icon: 'iconfont icon-icon_shezhi', url: ''}
      ],
      setIndex: 0
    }
  }
  beforeMount() {
    //do something before mounting vue instance
  }
  render () {
    return (
      <div className="nav_wrap">
        <ul className='slide_nav'>
          {
            this.state.nav.map((val, index) => {
              return (
                <li key={index} className={this.state.setIndex === index ? 'sel' : ''}>
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
