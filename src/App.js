import React from 'react';
import './App.css';
import data from "./globals/sample.json"
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function App() {
  return (
    <div className="App">
      <div className="banner">
        <div className="juniors">Juniors make IT work.</div>
        <div className="hire">Hire and invest in highly skilled juniors work.</div>
        <button className="post">Post Offer Now</button>
      </div>
      <div className="content">
        <div className="align-head">
        <div className="new-job">Newest Job Offers</div>
        <div className="job-title align-view">
          <div>View all job offers</div>
          <ArrowForwardIcon fontSize="small"/>
        </div>
        </div>
        <div className="card-align">
          {data.cards.map((obj,index)=>
            <React.Fragment>
              <div className="card">
                <div className="head-line">
                  <div className="job-title">{obj.title}</div>
                  <div className="last-time">{obj.lastTime}</div>
                </div>
                <div className="sub-line">
                  <div className="sub">{obj.sub}</div>
                  <div className="location">{obj.location}</div>
                </div>
                <div className="description">{obj.description}</div>
                <div className="plan">{obj.plan}</div>
                <button className="btn-next">{">"}</button>
              </div>
              {index+1!=data.cards.length?<div className="line"/>:""}
            </React.Fragment>
          )}
        </div>
        <div className="new-job">Featured Companies</div>
        <div className="companies">
            {data.companies.map(val=>
              <div className="company">
                  <WorkOutlineOutlinedIcon className="circle" style={{color:"#959595"}}/>
                  {val}
              </div>  
            )}
        </div>
      </div>
    </div>
  );
}

export default App;
