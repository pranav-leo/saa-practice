# SAA Counselors Website Replica

A modern replica of the SAA Counselors legal services website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with responsive layouts
- **Modern UI Components**: Reusable components built with TypeScript
- **Professional Styling**: Clean, professional design matching the original
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML

## Sections

1. **Header**: Navigation menu with mobile responsiveness
2. **Hero Section**: Company introduction and mission statement
3. **Practice Areas**: 9 different legal service categories
4. **Statistics**: Key metrics and achievements
5. **Team Section**: Attorney profiles and specializations
6. **Blog Section**: Latest legal articles and insights
7. **Contact Section**: Contact form and business information
8. **Footer**: Links, contact info, and legal disclaimer

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans and Geist Mono
- **Icons**: Emoji icons for simplicity

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── PracticeAreasSection.tsx
│   │   ├── StatisticsSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── Button.tsx
│       └── Card.tsx
```

## Key Features Implemented

- ✅ Responsive navigation with mobile menu
- ✅ Hero section with company description
- ✅ Practice areas grid with hover effects
- ✅ Statistics section with animated counters
- ✅ Team member cards with contact buttons
- ✅ Blog posts grid layout
- ✅ Contact form with validation
- ✅ Professional footer with social links
- ✅ Legal disclaimer section
- ✅ Smooth scrolling and focus styles

## Customization

The website is built with modular components that can be easily customized:

- **Colors**: Update Tailwind color classes in components
- **Content**: Modify text content in section components
- **Layout**: Adjust grid layouts and spacing
- **Styling**: Customize CSS in `globals.css`

## Performance Optimizations

- Next.js Image optimization
- Font optimization with Google Fonts
- CSS purging with Tailwind
- Component-based architecture for code splitting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational purposes and replicates the design of SAA Counselors website.