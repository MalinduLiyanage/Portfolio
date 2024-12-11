import React from 'react'
import './Page_Styles.css'
import Header from '../components/Header_Component'
import Sidebar_Component from '../components/Sidebar_Component'
import MainView_Component from '../components/MainView_Component'

export default function About() {
  return (
    <div>
        <Header></Header>
        <div className='body-container'>
            <Sidebar_Component></Sidebar_Component>
            <MainView_Component>

              <h2 className='header-two'>An Overview</h2>
              <p className='paragraph'>A friendly person who believes in himself and has the courage to face various challenges. As a computer enthusiast, I am dedicated to mastering mobile application development and related technologies.</p>
              <h2 className='header-two'>Why Me?</h2>
              <p className='paragraph'>With my experience working with people and computers, I believe I am capable of delivering a product that meets the required specifications. Additionally, as a friendly communicator, I engage in meaningful conversations with people to better understand their exact needs. Most importantly, as a fast learner, I ready to deliver work using the required technologies, even if I have no prior experience with them.</p>
              <h2 className='header-two'>My Education</h2>

              <table>
                <tbody>
                    <tr>
                        <td>2021 - Present</td>
                        <td>Bachelor of Science in Information Technology</td>
                        <td>Rajarata University of Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>2019</td>
                        <td>G. C. E. Advanced Level - Commerce Stream<br/>Obtained ABB Passes with Z Score of 1.27</td>
                        <td>Nalanda College - Colombo 10 - Sri Lanka</td>
                    </tr>
                    <tr>
                        <td>2016</td>
                        <td>G. C. E. Ordinary Level<br/>Obtained 8 A passes and 1 B pass for History subject</td>
                        <td>Nalanda College - Colombo 10 - Sri Lanka</td>
                    </tr>
                </tbody>
              </table>

              <h2 className='header-two'>Soft Skills</h2>
              
              <table>
                <tbody>
                    <tr>
                        <td className='table-no-border'><li>Leadership</li></td>
                    </tr>
                    <tr>
                        <td className='table-no-border'><li>Leadership</li></td>
                    </tr>
                    <tr>
                        <td className='table-no-border'><li>Team Work</li></td>
                    </tr>
                    <tr>
                        <td className='table-no-border'><li>Communication</li></td>
                    </tr>
                    <tr>
                        <td className='table-no-border'><li>Creativity</li></td>
                    </tr>
                    <tr>
                        <td className='table-no-border'><li>Problem Solving</li></td>
                    </tr>
                </tbody>
              </table>

              <h2 className='header-two'>Extra Curricular</h2>
              
              <table>
                <tbody>
                    <tr>
                        <td className='table-no-border'><li>University Batch Coordinator - 19/20 Batch</li></td>
                    </tr>
                    <tr>
                        <td className='table-no-border'><li>Former Secretary - Nalanda Commerce Society</li></td>
                    </tr>
                </tbody>
              </table>

            </MainView_Component>
        </div>
    </div>
  )
}
