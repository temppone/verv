# AI for Creatives eBook Landing Page

This project is a comprehensive web application for creative professionals featuring a landing page and eBook sales platform. The site helps artists and creatives learn how to leverage AI tools to automate operational tasks and improve their workflow.

## Features

- **Modern Design**: Clean interface with teal and sage green accent colors
- **Dynamic Landing Page**: Main site with information about the eBook offering
- **eBook Route**: Dedicated pages for eBook content and sales via dynamic slugs
- **Email API Integration**: Backend API for handling contact form submissions
- **Payment Integration**: Links to payment processor for eBook purchases
- **Testimonials**: Real feedback from creative professionals
- **Responsive Header**: Appears on scroll for better navigation

## Technology Stack

- **Framework**: Next.js with App Router
- **Styling**: Tailwind CSS with custom color palette
- **Components**: shadcn UI components
- **Icons**: Lucide icons library
- **Email Integration**: Mailgun API for form submissions

## Project Structure

The project includes:

- Main landing page (`app/page.tsx`)
- Dynamic eBook routes (`app/ebook/[slug]/page.tsx`)
- Email API endpoints (`app/api/email/send-email/route.ts`)
- Various sections including benefits, testimonials, pricing, and guarantees

## API Endpoints

- **POST /api/email/send-email**: Handles contact form submissions through Mailgun

## eBook Features

- Pricing at R$19 (promotional rate)
- Content focused on AI automation for creative professionals
- Sections on time-saving, client communication, and workflow optimization
- 7-day money-back guarantee

## Getting Started

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Set up environment variables for Mailgun API
4. Run the development server with `pnpm run dev`
5. Open [http://localhost:3000](http://localhost:3000) to view the site

## Live Demo

[Site URL coming soon]
