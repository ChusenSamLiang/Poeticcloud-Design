# GitHub Pages Setup for PoeticCloud Design

## 🚀 Quick Setup Guide

### Step 1: Create GitHub Repository
1. **Visit**: [github.com](https://github.com)
2. **Sign In**: Use your GitHub account
3. **Click**: "New repository" (green button)
4. **Repository Name**: `poeticcloud-design`
5. **Description**: "PoeticCloud Design Landing Page"
6. **Visibility**: Public (required for free GitHub Pages)
7. **Click**: "Create repository"

### Step 2: Upload Files to GitHub
1. **Clone Repository** (or use GitHub web interface):
   ```bash
   git clone https://github.com/yourusername/poeticcloud-design.git
   cd poeticcloud-design
   ```

2. **Copy Files**: Copy all files to the repository folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `HOSTING_SETUP.md`

3. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Initial commit - PoeticCloud landing page"
   git push origin main
   ```

### Step 3: Enable GitHub Pages
1. **Go to**: Repository Settings
2. **Scroll to**: "Pages" section
3. **Source**: Deploy from a branch
4. **Branch**: main
5. **Folder**: / (root)
6. **Click**: "Save"

### Step 4: Configure EmailJS
1. **Visit**: [emailjs.com](https://emailjs.com)
2. **Sign Up**: Create free account
3. **Create Service**: 
   - Go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail" or "Outlook"
   - Connect your email account
4. **Create Template**:
   - Go to "Email Templates"
   - Click "Create New Template"
   - Template ID: `template_poeticcloud`
   - Subject: `PoeticCloud Contact - {{service}}`
   - Content:
     ```
     New contact form submission:
     
     Name: {{from_name}}
     Email: {{from_email}}
     Service: {{service}}
     Message: {{message}}
     Submitted: {{submitted_on}}
     ```
5. **Get Public Key**: Go to "Account" → "General" → "Public Key"

### Step 5: Update EmailJS Configuration
1. **Edit**: `script.js`
2. **Update**: EMAILJS_CONFIG object:
   ```javascript
   const EMAILJS_CONFIG = {
       serviceId: 'your_service_id', // From EmailJS
       templateId: 'template_poeticcloud',
       publicKey: 'your_public_key' // From EmailJS
   };
   ```
3. **Commit Changes**:
   ```bash
   git add script.js
   git commit -m "Update EmailJS configuration"
   git push origin main
   ```

### Step 6: Test Your Site
1. **Visit**: `https://yourusername.github.io/poeticcloud-design`
2. **Test Form**: Submit a test message
3. **Check Email**: Verify email arrives at `liang.chusen@gmail.com`

---

## 📁 File Structure for GitHub

```
poeticcloud-design/
├── index.html              # Main landing page
├── styles.css              # CSS styles
├── script.js               # JavaScript with EmailJS
├── README.md               # Documentation
├── HOSTING_SETUP.md        # PHP hosting guide
└── .gitignore              # Git ignore file
```

---

## 🔧 EmailJS Configuration

### Template Variables:
- `{{to_email}}` - Target email (liang.chusen@gmail.com)
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{service}}` - Selected service
- `{{message}}` - User's message
- `{{submitted_on}}` - Submission timestamp

### Email Format:
```
Subject: PoeticCloud Contact - [Service] Inquiry
To: liang.chusen@gmail.com
From: [User Email]

Content:
Name: [User Name]
Email: [User Email]
Service: [Selected Service]
Message: [User Message]
Submitted: [Date/Time]
```

---

## 🛡️ Security Features

Your form includes:
- ✅ **Honeypot Protection**: Catches bots
- ✅ **Math Captcha**: Human verification
- ✅ **Rate Limiting**: Max 3 submissions per 5 minutes
- ✅ **Spam Detection**: Content analysis
- ✅ **Input Validation**: Prevents XSS attacks

---

## 📱 Mobile Optimization

Your site is optimized for:
- ✅ **Mobile First**: Responsive design
- ✅ **Touch Friendly**: Large buttons
- ✅ **Fast Loading**: Optimized assets
- ✅ **Cross Browser**: Works everywhere

---

## 🚀 Deployment Commands

```bash
# Clone repository
git clone https://github.com/yourusername/poeticcloud-design.git
cd poeticcloud-design

# Add files
git add .
git commit -m "Add PoeticCloud landing page"
git push origin main

# Your site will be live at:
# https://yourusername.github.io/poeticcloud-design
```

---

## 🔄 Updating Your Site

To update your site:
1. **Edit files** locally
2. **Commit changes**:
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```
3. **Site updates** automatically (may take 1-2 minutes)

---

## 📧 Email Setup Summary

1. **EmailJS Account**: Free email service
2. **Service**: Connect Gmail/Outlook
3. **Template**: Create email template
4. **Configuration**: Update script.js with your keys
5. **Target**: Emails sent to `liang.chusen@gmail.com`

---

## 🎯 Final Steps

1. **Create GitHub repository**
2. **Upload files**
3. **Enable GitHub Pages**
4. **Configure EmailJS**
5. **Test form submission**
6. **Share your site URL**

---

**Your site will be live at**: `https://yourusername.github.io/poeticcloud-design`

**Email destination**: `liang.chusen@gmail.com`

**Status**: Ready to deploy! 🚀
