import React, { useState } from 'react';
import './project.css';
import theme_pattern from '../../assets/download.svg';
import mywork_data from '../../assets/mywork_data';

const MyWork = () => {
  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const handleShowMore = () => {
    setVisibleCount(mywork_data.length);
  };

  const handleImageClick = (index) => {
    if (selectedProjectIndex === index) {
      setSelectedProjectIndex(null);
    } else {
      setSelectedProjectIndex(index);
    }
  };

  return (
    <div id='projects'className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="mywork-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => (
          <div
            key={index}
            className={`work-item ${selectedProjectIndex === index ? 'selected' : ''}`}
            onMouseEnter={() => setSelectedProjectIndex(index)}
            onMouseLeave={() => setSelectedProjectIndex(null)}
          >
            <img
              src={work.w_img}
              alt={`work-${index}`}
              className="work-image"
              onClick={() => handleImageClick(index)}
            />

            {(selectedProjectIndex === index) && (
              <div className="work-overlay">
                <a
                  href={work.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {mywork_data.length > initialCount && visibleCount === initialCount && (
        <button className="show-more-button" onClick={handleShowMore}>
          Show More....
        </button>
      )}
    </div>
  );
};

export default MyWork;
