import React, { Component } from 'react';
import './main.scss';

import Bob from '../bob';       // 导入Bob组件
import Lily from '../lily';     // 导入Lily组件
import Alice from '../alice';   // 导入Alice组件

/**
 * 主页的主体内容。
 * @author Tinybo
 * @date 2018 11 30
 */
class Main extends Component {
    render () {
        return (
            <main className="mainContainer">
                <Bob />
                <Lily />
                <Alice />
            </main>
        )
    }
}

export default Main;