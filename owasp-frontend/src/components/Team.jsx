import React, { useState } from "react";
import ProfileCard from "./ProfileCard";
import { Instagram, Linkedin } from "lucide-react";
import { leads, coreMembers } from "./teamData";

export default function Team() {
  // false = Leads | true = Cores
  const [isCore, setIsCore] = useState(false); 
  
  // Logic: When isCore is true, show coreMembers list.
  const list = isCore ? coreMembers : leads;

  return (
    <div className="team-page">
      <style>{`
        /* --- General Page/Container Styles --- */
        .team-page {
          width: 100%;
          height: 100vh;
          box-sizing: border-box;
          background: transparent;
          color: #f5f7ff;
          display: flex;
          flex-direction: column;
          align-items: center;
          
          padding: 48px 2vw;
          padding-bottom: 0; 
          
          overflow: auto; 
          -webkit-overflow-scrolling: touch;
        }

        /* 💡 FOOTER STYLE: Visible Credits Section (Sleek Contrast) */
        .team-footer {
            width: 100%;
            height: 150px; 
            max-width: 1200px; /* Constrain footer width to content */
            
            /* Solid Black Background */
            background-color: #000000;
            border-top: 1px solid rgba(150, 150, 150, 0.4);
            
            pointer-events: auto; 
            display: flex;
            justify-content: space-between; /* CRITICAL: Pushes columns apart */
            align-items: center;
            
            padding: 20px 20px; /* Padding inside the footer */
            margin-top: 40px; 
            box-sizing: border-box;
            z-index: 5; 
        }
        
        .footer-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }

        .footer-credits {
            align-items: flex-start;
        }

        .footer-socials-group {
            align-items: flex-end; /* Align title and icons to the right */
        }
        
        /* Footer Text Styles */
        .footer-column p {
            font-size: 0.9rem;
            line-height: 1.4;
            margin: 0;
            font-family: 'Montserrat', sans-serif;
            text-align: right; /* Default align for right column */
        }
        .footer-credits p {
            text-align: left; /* Override align for left column */
        }

        .footer-main-text {
            color: #FFFFFF;
        }
        .footer-sub-text {
            color: rgba(255, 255, 255, 0.4);
            font-size: 0.8rem;
        }

        /* Social Icon Group */
        .footer-social-icons {
            display: flex;
            gap: 10px;
            margin-top: 8px;
            /* CRITICAL: Aligns icons underneath the text */
            align-self: flex-end; 
        }

        .footer-social-icons a {
            color: #FFFFFF;
            opacity: 0.7;
            transition: opacity 0.2s, color 0.2s;
            pointer-events: auto; /* Ensure these are clickable */
        }
        .footer-social-icons a:hover {
            opacity: 1;
            color: var(--switcher-active-slide); /* Blue hover effect */
        }


        /* --- Header Layout (Fixed) --- */
        
        .team-header-container {
          width: 100%;
          max-width: 1200px;
          
          position: relative; 
          z-index: 10;
          
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          grid-template-rows: auto auto;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
          padding: 0 10px;
        }
        /* ... (Rest of header styles omitted for brevity, they are correct) ... */
        
        .team-title {
          font-family: "Anton", "Montserrat", sans-serif;
          font-size: 3.5rem;
          letter-spacing: 2px;
          margin: 0;
          color: #ffffff; 
          text-shadow: 0 6px 24px rgba(100,113,194,0.12);
          
          grid-column: 1 / 4; 
          grid-row: 1;
          justify-self: start; 
        }

        .team-sub {
          font-family: "Montserrat", sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.7);
          margin-top: -5px;
          text-align: left;
          grid-column: 1 / 4;
          grid-row: 2;
          justify-self: start;
        }
        
        .team-toggle-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center; 
            gap: 5px;
            grid-column: 2 / 3;
            grid-row: 3;
            justify-self: center;
        }
        
        .switcher-1 {
            --switcher-black: #1E1E1E;
            --switcher-white: #FFFFFF;
            --switcher-active-slide: #00BFFF; 
            --switcher-width: 260px; 
            --label-shift: 135px; 
        }

        span.switcher {
            position: relative;
            width: var(--switcher-width);
            height:50px;
            border-radius:25px;
            margin:10px 0 0 0;
            user-select: none;
        }
        
        span.switcher input {
            appearance: none;
            position: relative;
            width:100%;
            height:100%;
            border-radius:25px;
            background-color:var(--switcher-black);
            outline:none;
            font-family: 'Montserrat', sans-serif;
            cursor: pointer;
            padding: 0;
        }
        
        span.switcher input:before, span.switcher input:after {
            z-index:2;
            position: absolute;
            top:50%;
            transform:translateY(-50%);
            font-weight: 700;
            font-size: 0.8rem;
            white-space: nowrap;
            color: var(--switcher-white); 
        }
        
        span.switcher input:before {
            content: 'THE LEADS'; 
            left:15px;
            right: 0;
            text-align: left;
        }
        
        span.switcher input:after {
            content: 'CORE MEMBERS'; 
            right:15px;
            left: 0;
            text-align: right;
        }
        
        span.switcher label {
            z-index:1;
            position: absolute;
            top:5px;
            bottom:5px;
            border-radius:20px;
        }
        
        .switcher-1 input {
            transition:.25s -.1s;
        }
        
        .switcher-1 input:checked + label {
            left:5px;
            right: var(--label-shift);
            background:var(--switcher-active-slide);
            transition: left .5s, right .4s .2s;
        }
        
        .switcher-1 input:not(:checked) + label {
            left:var(--label-shift);
            right:5px;
            background:var(--switcher-active-slide);
            transition: left .4s .2s, right .5s, background .35s -.1s;
        }


        /* --- Cards Area Styles --- */
        .cards-area {
          width: 100%;
          max-width: 1200px;
          margin-top: 18px;
          margin-bottom: 0;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        
        .card-wrapper .pc-card-wrapper {
            touch-action: pan-y !important;
            position: relative;
            z-index: 5; 
        }
        
        .card-wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          min-height: 340px;
        }
        
        .card-wrapper.empty-slot {
          background-color: rgba(0, 0, 0, 0.01); 
          pointer-events: auto; 
          min-height: 340px;
          z-index: 1; 
        }
        
        .card-wrapper .pc-card-wrapper {
          --card-opacity: 0.15 !important;
        }

        .card-socials {
            display: none; 
        }

        @media (max-width: 1000px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .cards-grid { grid-template-columns: repeat(1, 1fr); }
          .team-title { font-size: 2.5rem; }
          .card-wrapper { min-height: 360px; }
        }
      `}</style>

      <div className="team-header-container">
        
        <h2 className="team-title">OUR TEAM</h2>
        <div className="team-sub">Meet the people who build and secure our projects.</div>

        <div className="team-toggle-wrapper">
          {/* Custom Toggle Switch */}
          <span className="switcher switcher-1">
            <input 
              type="checkbox" 
              id="switcher-1" 
              checked={!isCore} 
              onChange={() => setIsCore(!isCore)}
            />
            <label htmlFor="switcher-1"></label>
          </span>
          {/* End Custom Toggle Switch */}
        </div>
      </div>

      <div className="cards-area">
        <div className="cards-grid">
          {list.map((p, i) => (
            <div className="card-wrapper" key={`${p.handle}-${i}`}>
              <ProfileCard
                name={p.name}
                title={p.title}
                handle={p.handle}
                status={p.status}
                socials={p.socials}
                avatarUrl={p.avatarUrl}
                miniAvatarUrl={p.avatarUrl}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
              />
            </div>
          ))}
          
          {/* PLACEHOLDERS for smooth scrolling over empty grid space */}
          {list.length % 3 !== 0 && Array.from({ length: 3 - (list.length % 3) }, (_, i) => (
             <div className="card-wrapper empty-slot" key={`placeholder-${i}`} style={{ height: '100%' }} />
          ))}
          
        </div>
      </div>

      {/* 💡 The Visible Credits Footer Element - Two Column Layout */}
      <footer className="team-footer">
          {/* Left Column: Main Credits */}
          <div className="footer-column footer-credits">
              <p className="footer-main-text" style={{ fontWeight: '600' }}>
                 © 2025 OWASP NIE Student Chapter.
              </p>
              <p className="footer-sub-text" style={{ marginTop: '6px' }}>
                 All rights reserved.
              </p>
          </div>

          {/* Right Column: Follow Us & Icons */}
          <div className="footer-column footer-socials-group">
              <p className="footer-main-text" style={{ fontWeight: '600' }}>
                 Follow Us
              </p>
              <div className="footer-social-icons">
                  {/* Using placeholders for the global chapter links */}
                  <a href="#" target="_blank" rel="noopener noreferrer">
                      <Instagram size={20} />
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                  </a>
              </div>
          </div>
      </footer>
    </div>
  );
}