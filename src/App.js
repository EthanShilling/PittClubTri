import React from "react";
import "./App.css";
import { useEffect, useState } from "react";

import logo1 from './newlogo.png';
import logo2 from './pittlogo.png';
import pittsburgh from './pittsburgh.png';
//import cathedralBlack from "./cathedralblack.png";
//import cathedralColor from "./cathedral.png";
import qrCode from "./qr.jpeg";
import grouppic1 from "./grouppic1.jpeg";
import grouppic2 from "./grouppic2.jpeg";
import grouppic3 from "./grouppic3.jpeg";
import instagramLogo from "./instagramLogo.png";
import groupmeLogo from "./groupmeLogo.png";
import stravaLogo from "./stravaLogo.png";
import facebookLogo from "./facebookLogo.png";

import Milestone1 from "./donuts.png";
import Milestone2 from "./running.png";
import Milestone3 from "./swim.png";
import Milestone4 from "./gels.png";
import Milestone5 from "./ice.png";
import Milestone6 from "./fire.png";



const getNextMilestoneIndex = (raised, milestones) => {
  return (1+ milestones.findIndex(m => raised < m.amount));
};


function App() {
  //set raised var
   const [raised, setRaised] = useState(0);

  useEffect(() => {
    fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQub9CCxxL5fKWtXbKTu_GnQJDTWrKV95S2PUtbkQx03u31CubMJDKPV9i4adLuYpjq_aiIdzxFmZfn/pub?gid=0&single=true&output=csv")
      .then(res => res.text())
      .then(text => {
        const rows = text.split("\n");
        const firstRow = rows[1]; // skip header row
        const amount = parseFloat(firstRow.split(",")[0]);
        setRaised(amount);
      })
      .catch(err => console.error("Error fetching sheet:", err));
  }, []);



  // Fundraising info
  const goal = 1000; 
  const milestones = [
    { amount: 50 }, { amount: 100 }, { amount: 150 }, { amount: 250 },
    { amount: 350 }, { amount: 500 }, { amount: 600 },
    { amount: 700 }, { amount: 800 }, { amount: 900 }, { amount: 1000 }
  ];

  // Progress percentage for the vertical bar
  const progressPercent = Math.min((raised / goal) * 100, 100);


   // --- Milestone bar logic (bottom panel) ---
  const currentIndex = milestones.findIndex(m => raised < m.amount);
  const prevMilestone = currentIndex === 0 ? 0 : milestones[currentIndex - 1].amount;
  const nextMilestone = currentIndex !== -1 ? milestones[currentIndex].amount : milestones[milestones.length - 1].amount;

  const milestoneProgress =
    ((raised - prevMilestone) / (nextMilestone - prevMilestone)) * 100;
  const nextMilestoneIndex = getNextMilestoneIndex(raised, milestones);

  // Milestone Descriptions
  const mDesc = [
    "Sebastian runs a mile around a track, eating 1 donut each lap",
    "Ethan runs 4 miles around Schenley park in a sports bra",
    "Ava swims 500m in street clothes",
    "Hedalis can only eat gels for 24 hours",
    "Sebastian takes an ice bath in the middle of Schenley Plaza",
    "Ethan must eat and burn 10,000 calories in 24 hours",
    "to be determined",
    "to be determined",
    "to be determined",
    "to be determined",
    "to be determined",
  ];
// Milestone Images
const mImages = [
  Milestone1,
  Milestone2,
  Milestone3,
  Milestone4,
  Milestone5,
  Milestone6,
];
//Milestone Posts
const Link1 = "https://www.instagram.com/reel/DOVZuwKjTyk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
const Link2 = "https://www.instagram.com/reel/DOiAsKwjeAS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
const Link3 = "https://www.instagram.com/reel/DOnUoPiDZ48/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";

const mPosts = [
  Link1, Link2, Link3,
];


  // interpolate dim gold → bright gold
  const dimGold = [120, 110, 80];
  const brightGold = [205, 184, 125];
  const mix = milestoneProgress / 100;
  const color = dimGold.map((c, i) =>
    Math.round(c + (brightGold[i] - c) * mix)
  );


  return (
    <div
    className="page-background"
    style={{
      backgroundImage: `url(${pittsburgh})`,
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "122%"
    }}
  >
        

       <div className="top-panel">
        <br></br>
      </div>

      {/* Side Panels */}
      <div className="side-panel left-panel">
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
      </div>

      <div className="side-panel right-panel">
        <img src={logo2} alt="Logo 2" />
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo1} alt="Logo 1" />
      </div>

      {/* Middle Section */}
      <div className="app ">
        <header className="page-header">
          <h1>Club Triathlon at Pitt Fundraiser</h1>
          <p className="subtitle">2025-2026</p>
          <hr style={{
          height: "6px",
          backgroundColor: "black",
          margin: "-20px 0 30px 0",
        }} />
          <h2>About This Fundraiser</h2>
        </header>

        {/* Main Description Section */}
        <div className="main-desc">
          <h3>This year Club Triathlon is holding a year long fundraiser where for each fundraising goal met, one of our club members have volunteered to complete the corresponding challenge.
            These triathlon related challenges increase in both difficulty and entertainment factor with each milestone!
            <br></br><br></br>
             <span style={{ fontWeight: "bold" }}>All challenges will be posted on either
            our{" "}
            <a
              href="https://www.instagram.com/clubtriathlon_pitt/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram page
              </a>, or our{" "}
            <a
              href="https://groupme.com/join_group/109115353/cWGA5Iyn"
              target="_blank"
              rel="noreferrer"
            >
              Groupme
              </a>. </span> <br></br>Read about what the challenges are below! 

          </h3>
        </div>


        {/* Venmo Section */}
        <div className="venmo">
          <h2>Donate via Venmo</h2>
          <img src={qrCode} alt="qrCode" />
          <p>
            Or click here:{" "}
            <a
              href="https://venmo.com/EthanShilling"
              target="_blank"
              rel="noreferrer"
            >
              Club Triathlon Venmo
            </a><br></br>
            <h5>Donations are updated manually, so it may take a little while before your contribution 
              appears here. Thanks for your patience (and your support)!</h5>
          </p>
        </div>

        <p className="totals">Total Goal: ${goal} Raised: ${raised.toFixed(0)}</p>
        <hr style={{
          height: "6px",
          backgroundColor: "black",
          margin: "20px 0"     
        }} />
        <p className="challenges-header">The Challenges</p>
        <p className="pbar-header">Total Progress Bar</p>

        <div className="progress-section">
          {/* Vertical Progress Bar */}
          <div className="progress-bar-vertical">
            <div
              className="progress-fill-vertical"
              style={{ height: `${progressPercent}%` }}
            />
              
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="milestone-marker"
                  style={{
                    bottom: `${(m.amount / goal) * 100}%`,
                    backgroundColor: raised >= m.amount ? "green" : "gray"
                  }}
                />
              ))}
            </div>

            {/* Milestone text on the right */}
           <div className="progress-text">
            {milestones.map((m, i) => (
            <div
              key={i}
              className="milestone-wrapper"
              style={{ bottom: `${(m.amount / goal) * 100}%` }}
            >
              <h3
                className="milestone-label"
                style={{
                  backgroundColor: raised >= m.amount ? "green" : "red", // <-- dynamic color
                  color: "white",     // optional, makes text readable
                  padding: "0px 5px",// optional padding
                  borderRadius: "5px" // optional rounded corners
                }}
              >
                Milestone {i + 1} (<strong>${m.amount}</strong>)
                {mImages[i] && <img src={mImages[i]} alt={`Milestone ${i + 1}`} />}
                {mPosts[i] && raised >= m.amount && (
                  <a
                    href={mPosts[i]} // <-- put your video link here
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        color: "#fff",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        borderRadius: "4px",
                        padding: "2px 6px",
                        display: "inline-block",
                        cursor: "pointer",
                        transform: "translateY(-4px)"
                      }}
                    >
                      Click to watch
                    </span>
                  </a>
                )}
              </h3>
              <h4 className="milestone-description">{mDesc[i]}</h4>
            </div>
          ))}
          </div>
          </div> {/* closes progress-section */}

        {/* Who are we? */}
        <div className="who-are-we">
          <h1>
              Who are we?
          </h1>
          <h3>
            We are the Club Triathlon team at the University of Pittsburgh, and have created this site to help our club fundraise throughout
            the 2025-2026 school year. Our club aims to give its members the opportunity to be part of a fun, inclusive 
            environment while encouraging them to challenge themselves and improve both physically and mentally.
            <br></br>
            <br></br>
            Over the past few years, our club has grown from a handful of members, to a large group of students with
            many different experience levels.The money we fundraise through this webpage, along with our other fundraisers, will go towards registrations for future
            races including triathlons, road runs, and obstacle courses. By contributing to our club funds, you are helping us continue to be able
            to offer Pitt students an affordable way to participate in triathlons and other races across the U.S.
          </h3>
          
          <div className="group-pics">
            <img src={grouppic1} alt="grouppic1" />
            <img src={grouppic2} alt="grouppic2" />
            <img src={grouppic3} alt="grouppic3" />
          </div>    

          <h2>
              Board Members
          </h2>
          <div className="officers">
            <div className="officer">
              <h4>Ethan Shilling</h4>
              <span className="role">President</span>
            </div>

            <div className="officer">
              <h4>Sebastian Mladenovic</h4>
              <span className="role">Vice President</span>
            </div>

            <div className="officer">
              <h4>Jinwoo Park</h4>
              <span className="role">Business Manager</span>
            </div>

            <div className="officer">
              <h4>Ava Newman</h4>
              <span className="role">Social Chair</span>
            </div>
            <br></br>
          </div>
        </div>
          {/* Bottom Info*/}
        <p className="bottom-info">Join our community! </p>
        <div className="bottom-logos">
               <a href="https://www.instagram.com/clubtriathlon_pitt/" target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" />
              </a>
              <a href="https://groupme.com/join_group/109115353/cWGA5Iyn" target="_blank" rel="noopener noreferrer">
                <img src={groupmeLogo} alt="GroupMe" />
              </a>
              <a href="https://www.strava.com/clubs/PittTri" target="_blank" rel="noopener noreferrer">
                <img src={stravaLogo} alt="Strava" />
              </a>
              <a href="https://www.facebook.com/clubtriathlonpitt" target="_blank" rel="noopener noreferrer">
                <img src={facebookLogo} alt="Facebook" />
              </a>
        </div>
        <p className="email-info">Email club president Ethan Shilling at {" "}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ess102@pitt.edu" target="_blank" rel="noopener noreferrer">
        ESS102@pitt.edu 
      </a> with any questions or comments</p>

      </div> {/* closes app */}
              {/* Bottom Panel*/}
        <div className="bottom-panel">
               <h2>
          Progress to next milestone: ${raised} / ${nextMilestone}
        </h2>
        
        <div
          style={{
            width: "65%",
            height: "20px",
            background: "#eee",
            borderRadius: "8px",
            overflow: "hidden",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              width: `${milestoneProgress}%`,
              height: "100%",
              backgroundColor: `rgb(${color.join(",")})`,
              transition: "width 0.4s ease, background-color 0.4s ease"
            }}
          />
        </div>
        <div className="bottom_milestone-description">
          ${(nextMilestone - raised).toFixed(2)} until milestone {nextMilestoneIndex}
        </div>
              
        </div>
    </div> /* closes top-level div */
  );
}

export default App;