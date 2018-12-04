import React, { Component } from 'react';
import HOC from '../../components/hoc';     // 导入高阶组件HOC

/**
 * 用于Bob查询成绩，并表达心情。
 * @author Tinybo
 * @date 2018 11 30
 */
class Bob extends Component {
    render () {
        return (
            <div className="bobContainer">
                <h2>（属性代理）Bob: 哎，只考了 { this.props.grade } 分，再努力一点就可以考一百分了。</h2>
            </div>
        )
    }
}

Bob = HOC(Bob);     // 调用高阶组件
export default Bob;