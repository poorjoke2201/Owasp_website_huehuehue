import React, { useState } from 'react';

const OwaspBookshelf = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  // OWASP-themed book titles and content - 20 books total
  const books = [
    // Top Shelf (10 books)
    {
      title: "Web Security Testing Guide",
      color: "#8c8b8bff",
      chapter: "Testing Methodology", 
      content: "OWASP Testing Guide provides a comprehensive methodology for testing web application security. It covers various testing techniques from information gathering to business logic testing."
    },
    {
      title: "Top 10 Security Risks",
      color: "#8c8b8bff",
      chapter: "Critical Vulnerabilities",
      content: "The OWASP Top 10 is a standard awareness document representing a broad consensus about critical security risks to web applications. Updated regularly to reflect the current threat landscape."
    },
    {
      title: "API Security Guidelines", 
      color: "#8c8b8bff",
      chapter: "REST & GraphQL",
      content: "Modern applications rely heavily on APIs. This guide covers authentication, authorization, data validation, and rate limiting best practices for secure API development."
    },
    {
      title: "Secure Coding Practices",
      color: "#8c8b8bff", 
      chapter: "Input Validation",
      content: "Learn defensive programming techniques to prevent common vulnerabilities. Covers input validation, output encoding, authentication, and session management."
    },
    {
      title: "Application Security Verification",
      color: "#8c8b8bff",
      chapter: "Security Requirements", 
      content: "ASVS provides a basis for testing application technical security controls and also provides developers with a list of requirements for secure development."
    },
    {
      title: "Mobile Security Testing",
      color: "#8c8b8bff",
      chapter: "iOS & Android",
      content: "Comprehensive manual for mobile app security testing. Covers both iOS and Android platforms with practical testing techniques and tools."
    },
    {
      title: "DevSecOps Guideline",
      color: "#8c8b8bff",
      chapter: "Security Pipeline", 
      content: "Integrate security throughout the development lifecycle. Learn about security automation, infrastructure as code, and continuous security monitoring."
    },
    {
      title: "Threat Modeling Guide",
      color: "#8c8b8bff",
      chapter: "Risk Assessment",
      content: "Systematic approach to identifying and mitigating security threats during application design phase. Includes various threat modeling methodologies."
    },
    {
      title: "Dependency Check Manual",
      color: "#8c8b8bff",
      chapter: "Component Analysis", 
      content: "Tools and techniques for identifying vulnerable components in your applications. Learn about software composition analysis and vulnerability management."
    },
    {
      title: "Security Logging Guide", 
      color: "#8c8b8bff",
      chapter: "Monitoring & Detection",
      content: "Best practices for security event logging and monitoring. Essential for incident response and forensic analysis in modern applications."
    },
    // Bottom Shelf (10 books)
    {
      title: "Zero Trust Architecture",
      color: "#8c8b8bff",
      chapter: "Trust Nothing",
      content: "Modern security model that assumes breach and verifies each transaction. Covers identity verification, device security, and network segmentation."
    },
    {
      title: "Cloud Security Guide",
      color: "#8c8b8bff",
      chapter: "AWS, Azure & GCP",
      content: "Comprehensive cloud security practices covering major cloud providers. Learn about shared responsibility models, IAM, and cloud-native security tools."
    },
    {
      title: "Container Security",
      color: "#8c8b8bff",
      chapter: "Docker & Kubernetes",
      content: "Security best practices for containerized applications. Covers image scanning, runtime protection, and orchestration security."
    },
    {
      title: "Cryptographic Guidelines",
      color: "#8c8b8bff",
      chapter: "Encryption & Hashing",
      content: "Modern cryptography standards and implementations. Learn about algorithms, key management, and common cryptographic mistakes to avoid."
    },
    {
      title: "Penetration Testing",
      color: "#8c8b8bff",
      chapter: "Red Team Operations",
      content: "Professional penetration testing methodologies. Covers reconnaissance, exploitation, post-exploitation, and reporting techniques."
    },
    {
      title: "Incident Response",
      color: "#8c8b8bff",
      chapter: "Breach Management",
      content: "Prepare and respond to security incidents effectively. Learn about detection, containment, eradication, and recovery procedures."
    },
    {
      title: "Authentication Best Practices",
      color: "#8c8b8bff",
      chapter: "MFA & SSO",
      content: "Modern authentication mechanisms including multi-factor authentication, single sign-on, and passwordless authentication strategies."
    },
    {
      title: "Privacy by Design",
      color: "#8c8b8bff",
      chapter: "GDPR Compliance",
      content: "Build privacy into your applications from the ground up. Covers data minimization, consent management, and regulatory compliance."
    },
    {
      title: "Software Supply Chain",
      color: "#8c8b8bff",
      chapter: "SBOM & Provenance",
      content: "Secure your software supply chain with SBOMs, artifact signing, and dependency verification. Prevent supply chain attacks."
    },
    {
      title: "Security Training",
      color: "#8c8b8bff",
      chapter: "Developer Education",
      content: "Build security awareness within your organization. Create effective training programs and foster a security-first culture."
    }
  ];

  // Block definitions - TWO SHELVES with proper Z positioning
  const blocks = [
    // BOTTOM SHELF (Z position lower - further back)
    [2,1,-15, 22,14,1, "#372f2fff", false], // shelf base
    [1,14,-15, 24,1,18, "#706262ff", false], // back wall
    [1,1,-15, 1,13,18, "#372f2fff", false], // left wall  
    [24,1,-15, 1,13,18, "#372f2fff", false], // right wall
    [1,1,-14, 24,12,1, "#372f2fff", false], // top
    // Bottom shelf books (10 books) - indices 5-14
    [2,3,-13, 2,10,14.5, "#4f74e5", true],
    [4,3,-13, 2,10,14.5, "#000", true], 
    [6,3,-13, 2,10,14.5, "#4f74e5", true],
    [8,3,-13, 2,10,14.5, "#000", true],
    [10,3,-13, 2,10,14.5, "#4f74e5", true],
    [12,3,-13, 2,10,14.5, "#000", true],
    [14,3,-13, 2,10,14.5, "#4f74e5", true],
    [16,3,-13, 2,10,14.5, "#000", true], 
    [18,3,-13, 2,10,14.5, "#4f74e5", true],
    [20,3,-13, 2,10,14.5, "#000", true],
    
    // TOP SHELF (Z position higher - closer to front)
    [2,1,1, 22,14,1, "#372f2fff", false], // shelf base
    [1,14,1, 24,1,18, "#706262ff", false], // back wall
    [1,1,1, 1,13,18, "#372f2fff", false], // left wall  
    [24,1,1, 1,13,18, "#372f2fff", false], // right wall
    [1,1,18, 23.5,14,1, "#372f2fff", false], // top
    // Top shelf books (10 books) - indices 20-29
    [2,3,2, 2,10,14.5, "#4f74e5", true],
    [4,3,2, 2,10,14.5, "#000", true], 
    [6,3,2, 2,10,14.5, "#4f74e5", true],
    [8,3,2, 2,10,14.5, "#000", true],
    [10,3,2, 2,10,14.5, "#4f74e5", true],
    [12,3,2, 2,10,14.5, "#000", true],
    [14,3,2, 2,10,14.5, "#4f74e5", true],
    [16,3,2, 2,10,14.5, "#000", true], 
    [18,3,2, 2,10,14.5, "#4f74e5", true],
    [20,3,2, 2,10,14.5, "#000", true]
  ];

  const sqSize = 16;
  const bookStart = 5;

  const handleBookClick = (index) => {
    setSelectedBook(selectedBook === index ? null : index);
  };

  const handleReset = () => {
    setSelectedBook(null);
  };

  const getBlockTransform = (x, y, z, w, d, h) => {
    return `translate3d(${sqSize*(x-1)}px, ${sqSize*(-y-(d-1))}px, ${sqSize*z + sqSize*(h-1)}px)`;
  };

  return (
    <div className="bookshelf-container">
      <style>{`
        .bookshelf-container {
          width: 100%;
          height: 700px;
          perspective: 800px;
          transform-style: preserve-3d;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          animation: fadeIn 0.25s 0.25s linear forwards;
          display: flex;
          margin: auto;
          opacity: 1;
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
          perspective: 800px;
          transform-style: preserve-3d;
        }

        .surface {
          display: block;
          width: ${sqSize * 24}px;
          height: ${sqSize * 14}px;
          margin: auto;
          transform-style: preserve-3d;
          transform: translateY(${sqSize * 3}px) rotateX(80deg) rotateZ(0deg);
          transition: transform 0.25s;
          will-change: transform;
        }

        .block {
          display: block;
          transform-style: preserve-3d;
          position: absolute;
          bottom: 0;
          cursor: pointer;
          transition: z-index 0s 0.25s;
        }
        
        .book-block.selected {
          z-index: 100;
          transition: z-index 0s;
        }

        .block-inner {
          position: relative;
          width: ${sqSize}px;
          transition: transform 0.25s linear;
          transform-style: preserve-3d;
          transform: rotateX(-90deg) translateZ(${sqSize}px);
        }

        .block-inner > div {
          position: absolute;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
        }

        .block-inner > div::before {
          background-color: #baa9a9ff;
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }

        .back {
          transform: translateZ(-${sqSize}px) rotateY(180deg);
        }

        .back::before {
          opacity: 0.2;
        }

        .bottom {
          transform-origin: top center;
        }

        .bottom::before {
          opacity: 0.2;
        }

        .front {
          position: relative;
        }

        .front::before {
          opacity: 0.2;
        }

        .left {
          transform-origin: center left;
          transform: rotateY(270deg) translateX(-${sqSize}px);
        }

        .right {
          transform-origin: top right;
          transform-style: preserve-3d;
        }

        .right::after, .right > div {
          top: 0;
          left: 0;
          transform-origin: 0 50%;
          transition: transform 0.25s 0.25s linear;
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .right::after {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          color: #000;
          font-size: ${sqSize * 1.5}px;
          line-height: ${sqSize * 1.5}px;
          font-family: "Lora", serif;
          font-weight: bold;
          text-align: center;
          padding: 20% 5%;
          z-index: 2;
          content: attr(data-title);
        }

        .top, .bottom {
          transform-origin: top center;
        }

        .spine {
          background: transparent;
          color: #fff;
          font-size: ${sqSize * 0.9}px;
          line-height: ${sqSize * 0.75}px;
          font-family: "Lora", serif;
          font-weight: bold;
          -webkit-font-smoothing: antialiased;
          position: absolute;
          top: 0;
          left: 0;
          transform: rotate(90deg) translate(${sqSize * 1}px, -50%);
          white-space: nowrap;
          width: 0;
          height: ${sqSize}px;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
        }

        .cover {
          background-color: #fff;
          z-index: 1;
          box-shadow: inset 2px 0 8px rgba(0,0,0,0.3), 0 0 10px rgba(0,0,0,0.2);
        }

        .contents {
          font-size: ${sqSize * 0.7}px;
          padding: ${sqSize}px;
          color: #333;
          overflow: hidden;
          word-wrap: break-word;
        }

        .contents h1 {
          font-size: 2em;
          font-family: "Lora", serif;
          font-weight: bold;
          margin: 0 0 10px 0;
        }

        .contents p {
          font-family: "Source Sans Pro", serif;
          line-height: 1.4;
          margin: 0;
        }

        .reset-btn {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #6471c2ff;
          border: 0;
          border-radius: 0;
          color: #fff;
          padding: 0.5em 0.75em;
          font-family: "Hind", sans-serif;
          cursor: pointer;
          transition: background-color 0.2s;
          -webkit-appearance: none;
          appearance: none;
          z-index: 10;
          visibility: ${selectedBook !== null ? 'visible' : 'hidden'};
        }

        .reset-btn:hover {
          background-color: #d44;
        }

        .reset-btn:active {
          background-color: #a00;
        }

        /* Book hover effect */
        .book-block:hover .block-inner {
          transform: rotateX(-90deg) translateZ(${sqSize * 4}px);
        }

        /* Selected book positioning - ALL BOOKS OPEN IN CENTER */
        ${selectedBook !== null ? `
          .book-${selectedBook} {
            animation: moveToCenter 0.5s ease-out forwards;
          }
          .book-${selectedBook} .block-inner {
            animation: openBook 0.5s ease-out forwards;
          }
          .book-${selectedBook} .block-inner:hover .right::after,
          .book-${selectedBook} .block-inner:hover .cover {
            transform: rotateY(-135deg);
          }
        ` : ''}

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes moveToCenter {
          0% { 
            transform: translate3d(0, 0, 0);
          }
          100% { 
            transform: translate3d(${sqSize * 14}px, ${sqSize * -6}px, ${sqSize * 10}px);
          }
        }

        @keyframes openBook {
          0% { 
            transform: rotateX(-90deg) translateZ(${sqSize}px) rotateY(0);
          }
          50% { 
            transform: rotateX(-90deg) translateZ(${sqSize * 12}px) rotateY(0);
          }
          100% { 
            transform: rotateX(-90deg) translateZ(${sqSize * 12}px) rotateY(-90deg);
          }
        }

        @keyframes returnBook {
          from { transform: rotateX(-90deg) translateZ(${sqSize * 15}px) rotateY(-90deg) rotateZ(-10deg) translateZ(-${sqSize * 5}px); }
          50% { transform: rotateX(-90deg) translateZ(${sqSize * 15}px) rotateY(0); }
          to { transform: rotateX(-90deg) translateZ(${sqSize}px) rotateY(0); }
        }
      `}</style>

      <div className="container">
        <div className="surface">
          {blocks.map((block, index) => {
            const [x, y, z, w, d, h, color, isBook] = block;
            const isBookBlock = isBook && index >= bookStart;
            
            // Calculate bookIndex
            // Bottom shelf books: indices 5-14 -> books 10-19
            // Top shelf books: indices 20-29 -> books 0-9
            let bookIndex = -1;
            if (isBookBlock) {
              if (index >= 5 && index < 15) {
                bookIndex = 10 + (index - 5);
              } else if (index >= 20 && index < 30) {
                bookIndex = index - 20;
              }
            }
            
            return (
              <div
                key={index}
                className={`block ${isBookBlock ? `book-block book-${bookIndex}` : ''} ${selectedBook === bookIndex ? 'selected' : ''}`}
                style={{
                  transform: getBlockTransform(x, y, z, w, d, h)
                }}
                onClick={isBookBlock ? () => handleBookClick(bookIndex) : undefined}
              >
                <div className="block-inner">
                  <div 
                    className="back"
                    style={{
                      width: `${sqSize * w}px`,
                      height: `${sqSize * h}px`,
                      backgroundColor: isBook ? '#7c7373ff' : color,
                      backgroundImage: isBook ? `repeating-linear-gradient(90deg,transparent, transparent 21%, #aaa 21%, #aaa 25%, transparent 25%, transparent 46%, #aaa 46%, #aaa 50%, transparent 50%)` : 'none',
                      backgroundSize: isBook ? `${sqSize}px ${sqSize}px` : 'auto',
                      boxShadow: isBook ? 'inset 0 0 10px rgba(0,0,0,0.3)' : 'none'
                    }}
                  />
                  
                  <div 
                    className="bottom"
                    style={{
                      width: `${sqSize * w}px`,
                      height: `${sqSize * d}px`,
                      backgroundColor: isBook ? '#fff' : color,
                      backgroundImage: isBook ? `repeating-linear-gradient(90deg,transparent, transparent 21%, #aaa 21%, #aaa 25%, transparent 25%, transparent 46%, #aaa 46%, #aaa 50%, transparent 50%)` : 'none',
                      backgroundSize: isBook ? `${sqSize}px ${sqSize}px` : 'auto',
                      transform: `rotateX(-90deg) translateY(-${sqSize * (d - 1)}px) translateZ(${sqSize * h}px)`
                    }}
                  />
                  
                  <div 
                    className="front"
                    style={{
                      width: `${sqSize * w}px`,
                      height: `${sqSize * h}px`,
                      backgroundColor: color,
                      transform: `translateZ(${sqSize * (d - 1)}px)`,
                      boxShadow: isBook ? '0 2px 8px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)' : 'none'
                    }}
                  >
                    {isBookBlock && bookIndex >= 0 && (
                      <div className="spine">
                        {books[bookIndex]?.title}
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className="left"
                    style={{
                      width: `${sqSize * d}px`,
                      height: `${sqSize * h}px`,
                      backgroundColor: color,
                      boxShadow: isBook ? 'inset -2px 0 5px rgba(0,0,0,0.3)' : 'none'
                    }}
                  >
                    <div style={{opacity: isBook ? 0 : 0.4}}></div>
                  </div>
                  
                  <div 
                    className="right"
                    style={{
                      width: `${sqSize * d}px`,
                      height: `${sqSize * h}px`,
                      backgroundColor: isBook ? '#fff' : color,
                      transform: `rotateY(-270deg) translate3d(${sqSize}px, 0, ${sqSize * (w - d)}px)`
                    }}
                    data-title={isBookBlock && bookIndex >= 0 ? books[bookIndex]?.title : ''}
                  >
                    {!isBook && <div style={{opacity: 0.4}}></div>}
                    {isBookBlock && bookIndex >= 0 && (
                      <>
                        <div 
                          className="cover"
                          style={{
                            backgroundColor: books[bookIndex]?.color,
                          }}
                        />
                        <div className="contents">
                          <h1>{books[bookIndex]?.chapter}</h1>
                          <p>{books[bookIndex]?.content}</p>
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div 
                    className="top"
                    style={{
                      width: `${sqSize * w}px`,
                      height: `${sqSize * d}px`,
                      backgroundColor: isBook ? '#fff' : color,
                      backgroundImage: isBook ? `repeating-linear-gradient(90deg,transparent, transparent 21%, #aaa 21%, #aaa 25%, transparent 25%, transparent 46%, #aaa 46%, #aaa 50%, transparent 50%)` : 'none',
                      backgroundSize: isBook ? `${sqSize}px ${sqSize}px` : 'auto',
                      transform: `rotateX(-90deg) translateY(-${sqSize * (d - 1)}px)`,
                      boxShadow: isBook ? 'inset 0 0 5px rgba(0,0,0,0.2)' : 'none'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        
        <button className="reset-btn" onClick={handleReset}>
          Return
        </button>
      </div>
    </div>
  );
};

export default OwaspBookshelf;