# OmniCatalogue
![image](https://github.com/user-attachments/assets/bc5c9151-187e-40a2-8b00-5fadeb6747e8)

OmniCatalogue is an AI-powered web application that brings literature to life by transforming text prompts into unique, AI-generated images. Users can explore an extensive gallery of generated images, create their own visuals based on literary scenes, and manage their personal collections.

## Technologies

- **Frontend**: React, React Hook Form, Material-UI, Tailwind CSS
- **Backend**: .NET RESTful API
- **AI Integration**: OpenAI Dall-e 3 image generation model

## Features

- **Image Generation**: Generate AI images by inputting a scene description, book title, and tags.
- **Gallery Browsing**: Explore recently generated images by all users, updated in real time.
- **User Profile**: View your generated images, track the number of images created, and estimate generation costs.

## Demo

<p align="center">
  <img src="https://github.com/user-attachments/assets/11306f3b-2bff-4221-bce7-383760e94c4e" alt="OmniCatalogue Hero Section" width="600"/>
  <br/>
  <em>Figure 1: The welcoming hero section introducing OmniCatalogue.</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/0f8223bc-10fc-4340-b401-ef9db89278ae" alt="Recently Generated Images Section" width="600"/>
  <br/>
  <em>Figure 2: The recently generated images section with continuous scrolling gallery.</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/83b33a54-4207-4b31-9e01-c4fff1793c28" alt="Image Generation Page" width="600"/>
  <br/>
  <em>Figure 3: The image generation page where users can input prompts and tags to create images.</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/6950ed09-e79f-4a20-92d7-82bb9b7ff8f6" alt="User Profile Page" width="600"/>
  <br/>
  <em>Figure 4: The user profile page showing generated images and statistics.</em>
</p>

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/zonel/omnicatalogue.git
   cd omnicatalogue
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Backend Setup**:
   - This project is designed to work with a backend that provides API endpoints for image generation and gallery management. Ensure you also run OmniCatalogue.Backend which is C# Web API project.


## Usage

1. **Generate an Image**: Navigate to the "Generate Image" page, enter a scene description, book name, and tags, then click "Generate."
2. **Explore the Gallery**: Check out recent image generations in the "Gallery" section.
3. **View Your Profile**: Go to "My Images" to see all images you've generated, along with statistics on your usage.
