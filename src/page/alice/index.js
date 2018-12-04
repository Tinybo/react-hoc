import React, { Component } from 'react';
import HOC from '../../components/hoc/reExtend';    // 导入高阶组件HOC

/**
 * 用于Alice查询成绩，并表达心情。
 * @author Tinybo
 * @date 2018 11 30
 */
class Alice extends Component {
    constructor () {
        super();
        this.state = {
            name: 'Alice'   // 在高阶组件中被使用
        }
    }
    render () {
        return (
            <div className="AliceContainer">
                <h2>(反向继承)Alice: 哎，只考了 { this.props.grade } 分，再努力一点就可以考一百分了。</h2>
            </div>
        )
    }
}

Alice = HOC(Alice);     // 调用高阶组件
export default Alice;