import React, { useState } from 'react';

function Visualize() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');

  const generateImage = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DALLE_KEY}`
      },
      body: JSON.stringify({
        model: 'image-alpha-001',
        prompt: `Generate an image of ${description}`,
        num_images: 1,
        size: '256x256',
        response_format: 'url'
      })
    };

    fetch('https://api.openai.com/v1/images/generations', requestOptions)
      .then(response => response.json())
      .then(data => setImage(data.data[0].url))
      .catch(error => console.error(error));
  };

  return (
    <div style={{marginTop: '30%'}}>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button onClick={generateImage}>Generate Image</button>
      {image && <img src={image} alt="Generated Image" />}
    </div>
  );
}

export default Visualize;
