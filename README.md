# Dr. John Mignelli Chiropractic Website

A performance-focused chiropractic business website built with Next.js and optimized for local SEO and accessibility.

## Live Site

https://www.johnmignellichiropractic.ca

## Project Overview

This website has been designed and built for Dr. John Mignelli to give him an online presence to inform clients of who he is, the services he provides, and where he can be located. Additionally, a form is available for visitors to fill out if they wish to email Dr. Mignelli directly to address any concerns or book appointments. Dr. Mignelli hopes that online exposure will help him convert visitors into new patients and give him additional legitimacy in the healthcare field.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Formspree (Form Handling)
- Elfsight (Google Reviews widget)
- Vercel (Deployment)

## Key Features

- Responsive, mobile-first design
- SEO-optimized semantic structure
- Accessible navigation using ARIA attributes such as aria-label, aria-expanded, and aria-controls
- Optimized image loading using Next.js built-in Image component
- Server/client component separation

## Performance and Accessibility

- Lighthouse optimized for strong performance scores
- Semantic HTML structure
- Keyboard accessible navigation
- Optimized image loading with priority for largest contentful paint (LCP) elements

## Architecture Decisions

- Used Next.js App Router for modern routing patterns
- Separated client components only where interactivity is required to increase performance and SEO
- Navigation state managed at navbar level to control dropdown behaviour

## Folder Structure

- /app for app router pages and global styles
- /components for reusable UI components
- /public for static assets (images)

## Technical Decisions

- Decided to use React and Next.js due to my familiarity with the frameworks - Next.js offers image optimization via its built-in Image component to increase performance, and improve SEO
- TypeScript used for type safety
- Tailwind is a popular CSS framework which allows for rapid styling of HTML elements
- Hosting is handled through Vercel - its integration with Next.js makes deployment easy

## What I Learned

- High resolution images that were provided hamstrung load times and lowered Lighthouse performance scores. I learned the importance of managing image sizes via Next.js Image component and compressing those images to lower the time for the LCP to help increase performance
- The importance of semantic structure and ARIA attributes for accessibility
- Furthered my understanding of Tailwind styling conventions, file structure, routing, and utilizing Vercel's dashboard to aid with deployment
