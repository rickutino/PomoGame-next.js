import React from 'react';

const ExperienceBar: React.FC = () => {
  return (
    <header className="experience-bar">
      <span>0</span>
      <div>
        <div style={{ width: '60%' }} />
        <span className="current-experience" style={{ left: '60%' }}>
          400 xp
        </span>
      </div>
      <span>600</span>
    </header>
  )
}

export default ExperienceBar;