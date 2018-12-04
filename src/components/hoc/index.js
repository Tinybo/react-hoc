import React, { Component } from 'react';

function HOC (ComponentClass) {
    return class HOC extends Component {
        constructor () {
            super();
            
            this.state = {
                grade: ''
            }
        }

        componentWillMount () {
            let grade = localStorage.getItem('grade');
            this.setState({
                grade: grade
            });

            console.log('这个是高阶组件哦。');
        }

        render () {
            return <ComponentClass grade={ this.state.grade }/>
        }
    }
}


export default HOC;
