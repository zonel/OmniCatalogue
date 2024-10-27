import React, { useState } from 'react';
import { generateImage } from '../services/api';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [tags, setTags] = useState('');
  const [bookName, setBookName] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const tagsArray = tags.split(',').map(tag => tag.trim());
      const image = await generateImage({ prompt, tags: tagsArray, bookName });
      setGeneratedImage(image);
    } catch (err) {
      if (err.code === 'ECONNABORTED') {
        setError('Image generation timed out. Please try again or check your connection.');
      } else {
        setError('Failed to generate image. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto mt-10">
      
      {/* Left Section: Form */}
      <div className="md:w-2/5 w-full p-6 bg-accent text-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-semibold mb-4 text-white">Generate Image</h3>
        
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Prompt</label>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter image prompt"
            className="w-full px-4 py-2 bg-white text-accent border border-white rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
            className="w-full px-4 py-2 bg-white text-accent border border-white rounded-md"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Book Name</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Enter book name"
            className="w-full px-4 py-2 bg-white text-accent border border-white rounded-md"
          />
        </div>
        
        <button
          onClick={handleGenerate}
          className="w-full bg-rareAccent text-white font-semibold py-2 rounded-md hover:bg-white hover:text-accent"
        >
          Generate Image
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
      
      {/* Right Section: Image Display */}
      <div className="md:w-3/5 w-full flex justify-center items-center p-6 bg-accent rounded-lg shadow-lg h-96">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
          </div>
        ) : generatedImage ? (
          <img
            src={generatedImage.imageUrl}
            alt="Generated"
            className="max-w-full max-h-full rounded-md shadow-md"
          />
        ) : (
          <div className="text-white text-lg">Image will appear here after generation.</div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
