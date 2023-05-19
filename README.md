
# Sanity Next.js Blog

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Deploy](#deploy)
- [Run Locally](#run-locally)
- [Contact](#contact)

## Overview

This project is a minimalist blog developed using Next.js, a popular React framework, on the frontend, and Sanity, a headless CMS, on the backend. The blog is designed with simplicity in mind, offering a clean and intuitive user interface. It incorporates essential features such as user authentication, responsive design for optimal viewing across devices, and a commenting system to foster engagement. Next.js enables server-side rendering and efficient routing, while Sanity provides a flexible content management system to manage blog posts and content. With a focus on user experience and ease of customization, this blog project serves as a versatile foundation for individuals looking to create their own minimalist blogs. Thank you for checking out the Sanity Next.js Blog Project!

[Demo Link](https://ai-blog.hareeshr.me/)

### Built With

 - [Sanity](https://www.sanity.io/)
 - [Next.js](https://nextjs.org/)
 - [React.js](https://react.dev/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Node.js](https://nodejs.org/)
 - [Tailwind CSS](https://tailwindcss.com/)

## Features

 - Minimalist design for a clean and intuitive user experience.
 - Markdown support for easy formatting of blog content.
 - User authentication to allow registered users to create and manage blog posts.
 - Tagging and categorization of blog posts for easy organization and navigation.
 - Markdown editor with live preview for a seamless writing and editing experience.

## Prerequisites

 - Get your Project ID, dataset and version from [here](https://www.sanity.io/manage/).
 - Git -  [Download & Install Git](https://git-scm.com/downloads) for Windows users. (OSX and Linux machines has it preinstalled).
 - Node.js -  [Download & Install Node.js](https://nodejs.org/en/download/).

## Deploy

**Vercel**
Host your own live version of Chatbot UI with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhareeshr%2Fsanity-nextjs-blog&env=NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET,NEXT_PUBLIC_SANITY_API_VERSION&project-name=blog)
    
## Run Locally
**1. Clone Repo**

**2. Install Dependencies**

    npm i
**3. Provide API Key**
Create a .env.local file in the root of the repo with your configuration and API Keys:

    NEXT_PUBLIC_SANITY_PROJECT_ID=YOUR_SANITY_PROJECT_ID
    NEXT_PUBLIC_SANITY_DATASET=YOUR_SANITY_DATASET
    NEXT_PUBLIC_SANITY_API_VERSION=YOUR_SANITY_API_VERSION
**4. Run App**

    npm run dev
    
**5. Happy chatting**
You can now publish your blog posts using your domain/studio and your posts will be visible on home page.

## Contact

If you have any questions, feel free to reach out to me on [hareeshr.me](https://hareeshr.me)