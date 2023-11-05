import React from 'react';

function App() {
  //A title for the page
  //A text box to enter the URL of the image to be analyzed or the prompt of the image to  generate
  //A button to trigger the image analysis and another button to trigger the image generation
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Image Analyzer and Generator
        </p>
        <img src="https://i.imgur.com/3ZwvW7c.jpg" className="App-logo" alt="logo" />
        <p>
          Enter the URL of the image to be analyzed or the prompt of the image to be generated
        </p>
        <input type="text" placeholder="URL or Prompt" />
        <button>
          Analyze
        </button>
        <button>
          Generate
        </button>
      </header>
    </div>
  );
  //A title for the page
  //A text box to enter the URL of the image to be analyzed or the prompt of the image to  generate
  //A button to trigger the image analysis and another button to trigger the image generation

}

export default App;
