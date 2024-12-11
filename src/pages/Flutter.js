import React from 'react'
import './Page_Styles.css'
import Header from '../components/Header_Component'
import Sidebar_Component from '../components/Sidebar_Component'
import MainView_Component from '../components/MainView_Component'

export default function FlutterProjects() {
  return (
    <div>
        <Header></Header>
        <div className='body-container'>
            <Sidebar_Component></Sidebar_Component>
            <MainView_Component cat={2}></MainView_Component>
            <noscript>//Cat 2 for Flutter Projects. Check Database.js for more</noscript>
        </div>
        
    </div>
  )
}
