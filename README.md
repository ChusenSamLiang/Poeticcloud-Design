# PoeticCloud Design Landing Page

A beautiful, mobile-optimized landing page for PoeticCloud Design services, inspired by Zola's design patterns.

## Features

- **Mobile-First Design**: Optimized for all devices
- **Spam Protection**: Multiple layers of security including honeypot, captcha, and rate limiting
- **Email Integration**: Form submissions sent directly to liang.chusen@gmail.com
- **Modern UI/UX**: Clean, professional design inspired by Zola
- **Performance Optimized**: Fast loading with smooth animations
- **Free Hosting Ready**: No external dependencies

## Email Configuration

The contact form is configured to send emails to **liang.chusen@gmail.com** using a self-hosted PHP solution.

### Option 1: PHP Hosting (Recommended)

**Free PHP Hosting Services:**
- [InfinityFree](https://infinityfree.net) - Free PHP hosting
- [000WebHost](https://000webhost.com) - Free hosting with PHP
- [Freehostia](https://freehostia.com) - Free PHP hosting
- [AwardSpace](https://awardspace.com) - Free hosting

**Setup Instructions:**
1. **Upload Files**: Upload all files to your PHP hosting
2. **Configure Email**: Update `contact.php` if needed
3. **Test Form**: Submit a test message
4. **Check Email**: Verify emails arrive at liang.chusen@gmail.com

### Option 2: Static Hosting Fallback

**For Static Hosting (GitHub Pages, Netlify, etc.):**
1. **Use EmailJS**: Free email service for static sites
2. **Configure EmailJS**: 
   - Sign up at [emailjs.com](https://emailjs.com)
   - Create service and template
   - Update `contact-fallback.js` with your keys
3. **Include Script**: Add EmailJS script to HTML

### Current Configuration:
- **Form Action**: `contact.php` (PHP hosting)
- **Target Email**: `liang.chusen@gmail.com`
- **Method**: POST with JSON response handling
- **Fallback**: `contact-fallback.js` (static hosting)

## Spam Protection Features

1. **Honeypot Field**: Hidden field that catches bots
2. **Math Captcha**: Simple addition problems
3. **Rate Limiting**: Max 3 submissions per 5 minutes
4. **Spam Detection**: Content analysis for spam patterns
5. **Form Validation**: Real-time field validation

## File Structure

```
poeticcloud design/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Usage

1. Open `index.html` in a web browser
2. Test the contact form
3. Check email delivery to liang.chusen@gmail.com

## Customization

- **Colors**: Update CSS variables in `styles.css`
- **Content**: Modify text in `index.html`
- **Email**: Change Formspree configuration
- **Spam Protection**: Adjust settings in `script.js`

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Performance

- Optimized images and CSS
- Minimal JavaScript
- Fast loading times
- Mobile-optimized animations

## Security

- Multiple spam protection layers
- Input sanitization
- Rate limiting
- Bot detection
- XSS prevention

---

**Note**: Make sure to update the Formspree endpoint URL with your actual form URL after creating your Formspree account.
# Poeticcloud-Design
