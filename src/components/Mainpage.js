import React from 'react';
import './Mainpage.css';
import {RxDashboard} from 'react-icons/rx';
import {TbMoneybag} from 'react-icons/tb';
import {MdOutlineSchedule} from 'react-icons/md';
import {BiUserCircle} from 'react-icons/bi';
import {FiSettings} from 'react-icons/fi';
import {GiTakeMyMoney} from 'react-icons/gi';
import {GiMoneyStack} from 'react-icons/gi';
import {SlLike} from 'react-icons/sl';
import {TbUsers} from 'react-icons/tb';
import {AiOutlineSearch} from 'react-icons/ai';
import { ApexChart } from './charts';
import { PieChart,Tooltip,Pie} from 'recharts'
import {Link} from 'react-router-dom';


import { useState, useEffect } from 'react';



//import {BrowserRouter, Routes, Route} from 'react-router-dom';


const Mainpage = () => {

  

 

  const dat=[
    {name:"Week1", value:55},
    {name:"Week2", value:31},
    {name:"Week3", value:14},
    {name:"Week4"}   

  ];


  return (
    <div className="container">


      <nav>
      
        <ul>
        <h1 className="dashboard">Dashboard</h1>
       <h1> Board.</h1>
        <br /><br />
        
          <li><a href="#" ><RxDashboard/> <span className="nav-item"> Dashboard</span></a></li><br /><br /><br />

          <li><a href="#" ><TbMoneybag /> <span className="nav-item "> Transactions</span></a></li><br /><br /><br />

          <li><a href="#" ><MdOutlineSchedule /> <span className="nav-item"> Schedules</span></a></li><br /><br /><br />

          <li><a href="#" ><BiUserCircle /> <span className="nav-item"> Users</span></a></li><br /><br /><br />

          <li><a href="#" ><FiSettings /> <span className="nav-item"> Settings</span></a></li><br /><br /><br />
          

        </ul>
        <br /><br /><br /><br /><br /><br /><br /> <br /><br />
        <br />
        <h1>Help</h1>
        <h1>ContactUs</h1>
        <ul className="logout">
           <h1> <li><a href="http://localhost:3000" >Logout</a></li></h1>
          </ul>
      </nav>
      <section className="main">
        <span className="main-top">
          <div className="logo">
          <img className="user" src="bellicon.jpg" alt="logo"/>
          <img className="user" src="images.jpg" alt="logo"/>    
          </div>
          
         
          <form>

          <pre>                                                                                                                                                                                                                <input type="search" placeholder="  Search " 
         /> </pre>
          </form>
          
        </span>
       
        <div className="main-skills">
          <div className="card1">
          <i class="fas fa-laptop-cog"></i>
            <h3 ><GiTakeMyMoney />  Total Revenues</h3>
            <br />
            <h2>$2,129,430</h2>
          </div>

          <div className="card2">
            <i class="fas fa-laptop-cog"></i>
            <h3 ><GiMoneyStack />  Total Transactions</h3>
            <br />
            <h2>1,520</h2>
          </div>

          <div className="card3">
            <i class="fas fa-laptop-cog"></i>
            <h3 ><SlLike />  Total Likes</h3>
            <br />
            <h2>9,721</h2>
          </div>

          <div className="card4">
            <i class="fas fa-laptop-cog"></i>
            <h3 ><TbUsers />  Total Users</h3>
            <br />
            <h2>892</h2>
          </div>
        </div>

        <section className="charts">
       
          <h2>Activities</h2>
          <h5>May - June 2021</h5>
          <pre><h2>                                                                                Guest & User</h2> </pre>
         
         <ApexChart />
                 
  
        </section>
        <section className="products">
        <div className="products1">

         
      
          
          <pre>                                     May - June 2021</pre>
      
         <h3>TopProducts</h3> 
         <br />
     
      <PieChart width={400} height={200} >
            <Pie 
            dataKey="value" 
            isAnimationActive={false} 
            data={dat}
            cx={100}
            outerRadius={60}
            fill="black"
            
            label />
            
            <Tooltip />
          </PieChart> 
        <ul class="lists">
        <li><h4>BasicTees </h4></li>
          <h5>55%</h5>
          <br></br>     
          <li><h4>CustomShortPants</h4></li>
          <h5>31%</h5>
          <br></br>
          <li><h4>SuperHoodies</h4></li>
          <h5>14%</h5>
        </ul>
  
        </div>
        <div className="products2">

        
          <ul>
            <div className="schedule1">
          <pre>                                                 See All</pre>
          <h4>Today'sSchedule</h4> <br></br>

        
          <span>
          <div class="line"></div>
         
         <h4 class="posi">Meeting with suppliers from kuta Bali</h4>
            <h5 class="posi">14.00-15.00<br />
          at Sunset Road, Kuta, Bali
          </h5>
          </span>
          </div>
          <br/>
            <div className="schedule2">

            <div class="line1"></div>
            <h4 class="posi1">Check operation at Giga Factory 1</h4>
          <h5 class="posi">18.00-20.00<br />
          at Central Jakarta
          </h5>
          </div>
          </ul>
          
          <h4></h4>

          
        </div>
        </section>
        
      </section>

  
    </div>
  )
}

export default Mainpage;
