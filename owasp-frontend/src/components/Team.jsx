import React, { useState, useRef } from "react";
import ProfileCard from "./ProfileCard";
import { Instagram, Linkedin } from "lucide-react";
import { leads, coreMembers } from "./teamData";

export default function Team() {
  const [isCore, setIsCore] = useState(false);
  const list = isCore ? coreMembers : leads;
  const contentContainerRef = useRef(null);

  return (
    <section
      id="team"
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
        color: "#f5f7ff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .scroll-delegate-wrapper {
          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          display: flex;
          justify-content: center;
        }

        .team-content-container {
          width: 100%;
          max-width: 1200px;
          padding: 10vh 2vw 20vh ; /* increased bottom padding for footer gap */
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .team-header-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 40px;
        }

        .team-title {
          font-family: "Anton", "Montserrat", sans-serif;
          font-size: 3.5rem;
          letter-spacing: 2px;
          color: #ffffff;
          margin: 0;
          text-shadow: 0 6px 24px rgba(100,113,194,0.12);
        }

        .team-sub {
          font-family: "Montserrat", sans-serif;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.7);
          margin-top: 5px;
          margin-bottom: 15px;
        }

        .team-toggle-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 30px;
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
          height: 50px;
          border-radius: 25px;
          user-select: none;
        }

        span.switcher input {
          appearance: none;
          width: 100%;
          height: 100%;
          border-radius: 25px;
          background-color: var(--switcher-black);
          cursor: pointer;
          position: relative;
          outline: none;
        }

        span.switcher input:before,
        span.switcher input:after {
          z-index: 2;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--switcher-white);
        }

        span.switcher input:before {
          content: 'THE LEADS';
          left: 15px;
          text-align: left;
        }

        span.switcher input:after {
          content: 'CORE MEMBERS';
          right: 15px;
          text-align: right;
        }

        span.switcher label {
          position: absolute;
          top: 5px;
          bottom: 5px;
          border-radius: 20px;
          z-index: 1;
        }

        .switcher-1 input:checked + label {
          left: 5px;
          right: var(--label-shift);
          background: var(--switcher-active-slide);
        }

        .switcher-1 input:not(:checked) + label {
          left: var(--label-shift);
          right: 5px;
          background: var(--switcher-active-slide);
        }

        .cards-area {
          width: 100%;
         
        }

        .cards-grid {
          display: grid;
         
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px 20px; /* more spacing between cards */
        }

        .card-wrapper {
          
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Footer */
        .team-footer {
          width: 100%;
          max-width: 1200px;
          margin-top: 40px;
          padding: 40px 20px 20px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .footer-column p {
          margin: 0;
        }

        .footer-social-icons {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }

        .footer-social-icons a {
          color: #fff;
          opacity: 0.7;
          transition: opacity 0.2s, color 0.2s;
        }

        .footer-social-icons a:hover {
          opacity: 1;
          color: #00BFFF;
        }
      `}</style>

      <div className="scroll-delegate-wrapper" ref={contentContainerRef}>
        <div className="team-content-container">
          <div className="team-header-container">
            <h2 className="team-title">OUR TEAM</h2>
            <div className="team-sub">
              Meet the people who build and secure our projects.
            </div>
            <div className="team-toggle-wrapper">
              <span className="switcher switcher-1">
                <input
                  type="checkbox"
                  id="switcher-1"
                  checked={!isCore}
                  onChange={() => setIsCore(!isCore)}
                />
                <label htmlFor="switcher-1"></label>
              </span>
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
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer className="team-footer">
            <div className="footer-column">
              <p style={{ fontWeight: 600 }}>© 2025 OWASP NIE Student Chapter.</p>
              <p style={{ opacity: 0.6, marginTop: '4px' }}>All rights reserved.</p>
            </div>
            <div className="footer-column">
              <p style={{ fontWeight: 600 }}>Follow Us</p>
              <div className="footer-social-icons">
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
      </div>
    </section>
  );
}
