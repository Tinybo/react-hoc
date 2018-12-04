import React, { Component } from 'react';
import HOC from '../../components/hoc';     // 导入高阶组件HOC

/**
 * 用于Lily查询成绩，并表达心情。
 * @author Tinybo
 * @date 2018 11 30
 */
class Lily extends Component {
    render () {
        return (
            <div className="bobContainer">
                <h2>（属性代理）Lily：哇，我居然考了 { this.props.grade } 分，太棒了，先去庆祝下。</h2>
            </div>
        )
    }
}

Lily = HOC(Lily);   // 调用高阶组件
export default Lily;