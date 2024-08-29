import React, { useState } from 'react';

function RegexEditor({ onAnalyze }) {
  const [pattern, setPattern] = useState('');
  const [testString, setTestString] = useState('');

  const analyze = async () => {
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pattern, test_string: testString }),
    });
    const result = await response.json();
    onAnalyze(result);
  };

  return (
    <div>
      <h2>Regex Editor</h2>
      <input
        type="text"
        placeholder="Enter your regex pattern"
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />
      <textarea
        placeholder="Enter the string to test"
        value={testString}
        onChange={(e) => setTestString(e.target.value)}
      />
      <button onClick={analyze}>Analyze</button>
    </div>
  );
}

export default RegexEditor;
