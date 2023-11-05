import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis.js';

function App() {
  //A title for the page
  //A text box to enter the URL of the image to be analyzed or the prompt of the image to  generate
  //A button to trigger the image analysis and another button to trigger the image generation
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState(null);
  const handleAnalyzeClick = async () => {
    setIsLoading(true);
    const analysisResults = await analyzeImage(inputValue);
    setResults(analysisResults);
    setIsLoading(false);
  };

  const DisplayResults = () => {
    if (!results) return null;
    return (
      <div>
        <p>{results.readableFormat}</p>
        <img src={results.processedImageUrl} alt="Processed" />
      </div>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Image Analyzer and Generator
        </p>
        <p>
          This app uses Azure Cognitive Services to analyze an image and generate an image based on the analysis
        </p>
        <p>
          Enter the URL of the image to be analyzed or the prompt of the image to be generated
        </p>
        
        
        <input type="text" placeholder="URL or Prompt" onChange={e => setInputValue(e.target.value)} />
        <button onClick={handleAnalyzeClick} disabled={isLoading}>
          Analyze
        </button>
        <button>
          Generate
        </button>
        {isLoading && <p>Processing...</p>}
        <DisplayResults />
       
      </header>
    </div>
  );
  //A title for the page
  //A text box to enter the URL of the image to be analyzed or the prompt of the image to  generate
  //A button to trigger the image analysis and another button to trigger the image generation

}

export default App;
