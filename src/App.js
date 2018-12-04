import React, { Component } from 'react';
import './App.scss';

import Header from './components/header';
import Footer from './components/footer';
import Main from './page/main';

class App extends Component {
  componentDidMount () {
    localStorage.setItem('grade', 98);  // 设置成绩到浏览器缓存
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
