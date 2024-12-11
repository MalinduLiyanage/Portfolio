import React from 'react'
import './MainView_Component.css'
import {latest, flutter, javaandroid, reactprj, mlprj} from '../database/Database'
import ItemCard_Component from './ItemCard_Component'

export default function MainView_Component(props) {

  let data = [];

  if (props.cat === 1) {
    data = latest;
  }else if (props.cat === 2) {
    data = flutter;
  }else if (props.cat === 3) {
    data = javaandroid;
  }else if (props.cat === 4) {
    data = reactprj;
  }else if (props.cat === 5) {
    data = mlprj;
  }
  
  return (
    <div className="empty-div">
      {data
        .slice() 
        .reverse() 
        .map((item) => (
          <ItemCard_Component
            key={item.id}
            image={item.image}
            title={item.name}
            description={item.description}
            link={item.link}
          />
        ))}
      {props.children}
    </div>

  )
}
