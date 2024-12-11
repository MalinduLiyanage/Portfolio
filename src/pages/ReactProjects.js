import React from 'react'
import './Page_Styles.css'
import Header from '../components/Header_Component'
import Sidebar_Component from '../components/Sidebar_Component'
import MainView_Component from '../components/MainView_Component'

export default function ReactProjects() {
  return (
    <div>
        <Header></Header>
        <div className='body-container'>
            <Sidebar_Component></Sidebar_Component>
            <MainView_Component cat={4}></MainView_Component>
            <noscript>//Cat 4 for React.js Apps. Check Database.js for more</noscript>
        </div>
        
    </div>
  )
}
