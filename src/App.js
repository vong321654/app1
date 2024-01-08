import React from 'react'
import { Content, Footer, Header } from './func-components';
import './style.css'
import Calender from './class-components';
function App() {
  return (
    <>
      <Header/>
      <p><center><Calender/></center></p>
      <Content/>
      <Footer/>
    </>
    )
}

export default App;
