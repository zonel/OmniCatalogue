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
    <div className="flex flex-col md:flex-row justify-center items-start gap-8">
      
      <div className="md:w-1/2 w-full p-4 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Generate Image</h3>
        
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Prompt</label>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter image prompt"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Tags (comma-separated)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Enter tags"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Book Name</label>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Enter book name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <button
          onClick={handleGenerate}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700"
        >
          Generate Image
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
      
      <div className="md:w-1/2 w-full flex justify-center items-center p-4 bg-white rounded-lg shadow-lg h-80">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
          </div>
        ) : generatedImage ? (
          <img
            src={generatedImage.imageUrl}
            alt="Generated"
            className="max-w-full max-h-full rounded-md shadow-md"
          />
        ) : (
          <div className="text-gray-500 text-lg">Image will appear here after generation.</div>
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
