import React from 'react'
import './Page_Styles.css'
import Header from '../components/Header_Component'
import Sidebar_Component from '../components/Sidebar_Component'
import MainView_Component from '../components/MainView_Component'

export default function Latest() {
  return (
    <div>
        <Header></Header>
        <div className='body-container'>
            <Sidebar_Component></Sidebar_Component>
            <MainView_Component cat={1}></MainView_Component>
            <noscript>//Cat 1 for Latest Projects. Check Database.js for more</noscript>
        </div>
        
    </div>
  )
}
