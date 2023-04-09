import React, { useState } from "react";
import styled from "styled-components";
import { fadeIn } from "react-animations";

const FadeInDiv = styled.div`
  animation: 1s ${fadeIn};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PromptInput = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  outline: none;
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
  }
`;

const SubmitButton = styled.button`
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #0077cc;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0066aa;
  }
`;

const GeneratedImage = styled.img`
  margin-top: 2rem;
  max-width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make API call to generate image based on prompt
    const response = await fetch(`https://some-api.com/generate-image?prompt=${prompt}`);
    const data = await response.json();
    setImageUrl(data.imageUrl);
  };

  return (
    <Container>
      <FadeInDiv>
        <h2>Generate an Image from a Prompt</h2>
      </FadeInDiv>
      <InputContainer>
        <form onSubmit={handleSubmit}>
          <PromptInput type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Enter a prompt" />
          <SubmitButton type="submit">Generate Image</SubmitButton>
        </form>
      </InputContainer>
      {imageUrl && <GeneratedImage src={imageUrl} alt="Generated Image" />}
    </Container>
  );
}

export default ImageGenerator;
