import React, { useState } from 'react';
import RegexEditor from './components/RegexEditor';
import MatchVisualizer from './components/MatchVisualizer';
import Explanation from './components/Explanation';

function App() {
  const [regexResult, setRegexResult] = useState(null);

  const handleRegexAnalysis = (result) => {
    setRegexResult(result);
  };

  return (
    <div>
      <h1>Interactive Regex Testing Tool</h1>
      <RegexEditor onAnalyze={handleRegexAnalysis} />
      {regexResult && (
        <>
          <MatchVisualizer matches={regexResult.matches} />
          <Explanation explanation={regexResult.explanation} />
        </>
      )}
    </div>
  );
}

export default App;
