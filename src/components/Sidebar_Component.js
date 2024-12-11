import React from 'react';
import './Sidebar_Component.css'; 
import { Link } from "react-router-dom";  // Make sure to import from 'react-router-dom'

export default function Sidebar_Component() {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li><Link to="/">Who Am I?</Link></li>
        <li><Link to="/Latest">Latest Projects</Link></li>
        <li><Link to="/FlutterProjects">Flutter Apps</Link></li>
        <li><Link to="/AndroidProjects">Android Java Apps</Link></li>
        <li><Link to="/ReactProjects">React.js Apps</Link></li>
        <li><Link to="/MachineLearning">ML Projects</Link></li>
      </ul>
    </div>
  );
}
