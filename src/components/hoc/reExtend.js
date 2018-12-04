import React from 'react';

/**
 * 用于查询成绩（反向继承）。
 * @author Tinybo
 * @date 2018 12 04
 */
function HOC (ComponentClass) {
    return class HOC extends ComponentClass {
        constructor () {
            super();
            
            this.state = {
                grade: '',
            }
            this.old = super();
        }

        componentWillMount () {
            let grade = localStorage.getItem('grade');
            this.setState({
                grade: grade
            });

            console.log('这个是高阶组件哦。');
            console.log('反向继承');
        }

        render () {
            return (
                <div className="aliceContainer">
                    <h2>My name is { this.old.state.name }, 我的名字是通过反向继承来获取的呢。</h2>
                    <ComponentClass grade={ this.state.grade }/>
                </div>
            )
        }
    }
}


export default HOC;
