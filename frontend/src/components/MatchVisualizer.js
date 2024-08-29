import React from 'react';

function MatchVisualizer({ matches }) {
  return (
    <div>
      <h2>Match Visualizer</h2>
      {matches.length > 0 ? (
        matches.map((match, index) => (
          <div key={index} className="match">
            <strong>Match:</strong> {match.match} <br />
            <strong>Start:</strong> {match.start} <br />
            <strong>End:</strong> {match.end} <br />
            {match.groups.length > 0 && (
              <div>
                <strong>Groups:</strong> {match.groups.join(', ')}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
}

export default MatchVisualizer;
