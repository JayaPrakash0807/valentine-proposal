# Valentine's Day Proposal Website 💕

A romantic, interactive website designed for Valentine's Day proposals featuring galleries, videos, love letters, quizzes, and guestbook.

## Features

### 🎨 Design
- Romantic color scheme: reds, pinks, rose gold, and cream
- Elegant typography with Georgia serif font
- Smooth animations and transitions
- Fully responsive for mobile, tablet, and desktop

### ⏰ Countdown Timer
- Real-time countdown to your special proposal day
- Automatically updates every second
- Displays days, hours, minutes, and seconds

### 📸 Photo Gallery
- Beautiful grid layout with hover effects
- Upload your own photos directly from the browser
- Captions for each memory
- Smooth scaling animations

### 🎥 Video Section
- Embed your proposal video
- Custom video player with poster image
- Upload functionality for personalization

### 💌 Love Letters & Vows
- Pre-written romantic letter template
- Write and save your own custom letters
- Letters saved in browser localStorage
- Beautiful card-style presentation

### 🎯 Interactive Quiz
- "How Well Do You Know Us?" quiz
- 3 customizable questions about your relationship
- Score tracking with instant feedback
- Restart functionality

### 📝 Guestbook
- Allow friends and family to leave messages
- Real-time message posting
- Beautiful message cards with avatars
- Timestamp for each message

## Setup Instructions

1. **Download Files**
   - Ensure all three files are in the same folder:
     - `index.html`
     - `styles.css`
     - `script.js`

2. **Customize Content**
   - Open `index.html` and update:
     - Names and personal details
     - Quiz questions and answers
     - Love letter content
   
   - Open `script.js` and update:
     - Proposal date (line 2): `const proposalDate = new Date('2024-02-14T18:00:00')`

3. **Add Your Media**
   - Replace placeholder images with your own photos
   - Add your proposal video as `proposal-video.mp4` in the same folder
   - Or use the upload buttons to add content dynamically

4. **Launch**
   - Simply open `index.html` in any modern web browser
   - For hosting online, upload all files to a web hosting service

## Customization Guide

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-red: #e63946;
    --soft-pink: #f4a6b8;
    --light-pink: #ffd6e0;
    --rose-gold: #d4af37;
    --cream: #fff5f7;
}
```

### Update Countdown Date
In `script.js`, change the date:
```javascript
const proposalDate = new Date('2024-02-14T18:00:00').getTime();
```

### Modify Quiz Questions
Edit the quiz HTML in `index.html` and update questions, options, and correct answers.

### Change Images
Replace Unsplash URLs with your own image URLs or local file paths.

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Experience
- Use high-quality images (recommended: 1200x800px)
- Keep video file size under 50MB for faster loading
- Test on mobile devices before sharing
- Consider hosting on GitHub Pages or Netlify for free

## Made with Love ❤️
Perfect for proposals, anniversaries, or any romantic occasion!
