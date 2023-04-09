import axios from 'axios';
import { useState } from 'react';

const API_KEY = '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';
const OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/completions';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerateImage = async () => {
    const prompt = 'a cat sitting on a mat';
    const response = await axios.post(
      OPENAI_API_ENDPOINT,
      {
        model: 'image-alpha-001',
        prompt,
        api_key: API_KEY,
        size: '512x512',
      },
      { responseType: 'arraybuffer' }
    );

    const data = Buffer.from(response.data, 'binary').toString('base64');
    const imageSrc = `data:image/jpeg;base64,${data}`;
    setImageUrl(imageSrc);
  };

  return (
    <div style={{marginTop: '30vh'}}>
      <button onClick={handleGenerateImage}>Generate Image</button>
      {imageUrl && <img src={imageUrl} alt="Generated Image" />}
    </div>
  );
}

export default App;