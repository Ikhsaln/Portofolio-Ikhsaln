# Portfolio Website

This is a portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features
- Responsive design with mobile navigation
- Dark mode support with theme toggle
- Google Analytics integration
- Contact form
- Certificate viewer
- Smooth scrolling navigation

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Google Analytics
1. Create a Google Analytics 4 property at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (it looks like `G-XXXXXXXXXX`)
3. Create a `.env.local` file in the root directory
4. Add your Measurement ID to the file:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Deploy to Vercel
1. Push your code to a GitHub repository
2. Sign up/in to [Vercel](https://vercel.com/)
3. Create a new project and import your repository
4. Vercel will automatically detect the Next.js framework
5. Add your environment variables in the Vercel project settings
6. Deploy!

## Contact Form
The contact form is currently set up to simulate submission. To make it fully functional, you'll need to:
1. Set up an API endpoint to handle form submissions
2. Update the `handleSubmit` function in `components/contact-form.tsx` to send data to your API
3. Consider using services like:
   - Formspree
   - Netlify Forms
   - Custom API with nodemailer
   - Firebase Functions

## Mobile Navigation
The portfolio includes a responsive mobile navigation menu that can be toggled on smaller screens. The menu includes:
- All navigation links
- Theme toggle
- Close button

## Customization
- Update content in `app/page.tsx`
- Modify styling in `app/globals.css`
- Add new components in the `components` directory