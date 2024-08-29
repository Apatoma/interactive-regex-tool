import React from 'react';

function Explanation({ explanation }) {
  return (
    <div>
      <h2>Regex Explanation</h2>
      {explanation.length > 0 ? (
        explanation.map((exp, index) => (
          <div key={index} className="explanation">
            {exp}
          </div>
        ))
      ) : (
        <p>No explanation available.</p>
      )}
    </div>
  );
}

export default Explanation;
