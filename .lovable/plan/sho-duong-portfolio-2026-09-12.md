# Sho Duong Portfolio

## Build
- Replace the blank page with a single scrolling portfolio: fixed navigation, full-screen introduction, moving project preview strips, About, Services, and sticky-stacking Projects.
- Use the uploaded otter/sakura video as the fixed full-page background and implement safe horizontal mouse scrubbing without autoplay.
- Add typewriter, scroll-reveal, floating decoration, mobile navigation, and reduced-motion fallbacks.

## Visual system
- Create a dark editorial style with metallic type, translucent panels, and one crisp light Services section.
- Load the requested heading and Kanit fonts through the document head and define all colors, typography, shadows, and motion as reusable tokens.
- Use polished dashboard mockups derived from semantic HTML/CSS so project previews remain sharp and cohesive.

## Technical details
- Keep the existing TanStack Start and React 19 setup, adding Framer Motion for scroll transforms, sticky-card scaling, and in-view animation triggers with reduced-motion fallbacks.
- Store the uploaded video through Lovable Assets, render it as the fixed canvas layer, and use queued mouse scrubbing to prevent excessive seeks.
- Build the Quiet Circuitry interactions: blurred responsive navigation, opposing scroll marquees, animated character reveal, in-view proficiency bars, and a once-only typed Python pipeline terminal.
- Implement the Technical Arsenal as a responsive four-card bento grid using Champagne, circuit green, slate blue, and violet accents from semantic design tokens.
- Add the contact/stat footer, page-specific social metadata, accessible controls, and verify desktop and mobile layouts without overlap.
