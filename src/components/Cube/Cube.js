import React from 'react';
import './CubeCSS.css';

const CubeCSS = ({props}) => {
  // 6 ta tomonning hammasi shu yerda bo'lishi shart:
  const sides = [
    { text: "3D", class: "front" },
    { text: "Konsept", class: "back" },
    { text: "Motion", class: "left" },
    { text: "Final", class: "right" },
    { text: "Tepada", class: "top" },
    { text: "Pastda", class: "bottom" }
  ];

  return (
    <div {...props}>
      <div className="cube-container" >
        <div className="cube">
          {sides.map((side, index) => (
            <div key={index} className={`cube-face ${side.class}`}>
              <span className="cube-text">{side.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CubeCSS;