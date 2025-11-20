# Joshua Price Portfolio Website

A modern, responsive portfolio website showcasing software engineering projects, skills, and professional experience. Built with clean HTML, CSS, and JavaScript, this site features a cyberpunk-inspired aesthetic with cyan accents and terminal-style fonts.

## 🌐 Live Site

[joshuapriceportfolio.com](https://joshuapriceportfolio.com)

## 📋 Features

- **Responsive Design**: Fully mobile-friendly layout that adapts to all screen sizes
- **Modern UI/UX**: Cyberpunk-inspired design with smooth animations and hover effects
- **Project Portfolio**: Filterable project showcase with categories (Web, Mobile, Desktop, Game)
- **Skills Section**: Comprehensive display of technical skills and proficiencies
- **Social Integration**: Direct links to GitHub, LinkedIn, and Instagram
- **Resume Access**: Downloadable PDF resume

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, grid, and animations
- **JavaScript**: Interactive filtering and dynamic content
- **Font Awesome**: Icon library for social media and UI elements
- **Custom Fonts**: Terminal-inspired typography for unique branding

## 📂 Project Structure

```
JoshuaPricePortfolio/
├── index.html              # Main landing page
├── about.html              # About me page
├── skills.html             # Skills showcase
├── portfolio.html          # Project portfolio gallery
├── contact.html            # Contact information
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── Files/                  # Assets directory
│   ├── 3D_Assests/        # 3D models and assets
│   ├── JoshuaProfilePic.jpg
│   ├── Resume_Sept_2025_CAREERFAIR.pdf
│   └── project images...
├── Fonts/                  # Custom font files
│   ├── PixelPurl.ttf
│   └── windows_command_prompt.ttf
├── js_resources/           # JavaScript libraries
│   ├── three.module.js
│   └── FBXLoader.js
└── nc_assets/              # Namecheap hosting assets
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript for modifications
- FTP client for deployment (WinSCP recommended)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/JoshuaPrice13/JoshuaPricePortfolio.git
cd JoshuaPricePortfolio
```

2. Open `index.html` in your web browser to view the site locally

3. Make changes to HTML, CSS, or JavaScript files as needed

### Deployment

The site is hosted on Namecheap shared hosting. To deploy updates:

1. **Using WinSCP:**
   - Host: `ftp.joshuapriceportfolio.com`
   - Username: `joshpkua`
   - Port: 21 (FTP) or 22 (SFTP)
   - Upload modified files to the web root directory

2. **Using cPanel File Manager:**
   - Access cPanel at `joshuapriceportfolio.com:2083`
   - Navigate to File Manager
   - Upload files directly to `public_html`

## 🎨 Customization

### Color Scheme

The site uses a dark theme with cyan accents. Main colors:
- Background: `#0d0d0d`
- Header: `#131313`
- Accent: `cyan` / `#00ffff`
- Text: `white` / `#bfbfbf`

To change colors, edit the CSS variables in `styles.css`.

### Adding Projects

Edit `portfolio.html` and add new project widgets:

```html
<div class="project-widget" data-category="web">
    <div class="project-image">
        <i class="fas fa-code"></i>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Project description here</p>
        <div class="project-tech">
            <span class="tech-tag">HTML</span>
            <span class="tech-tag">CSS</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fab fa-github"></i> View Code
            </a>
        </div>
    </div>
</div>
```

### Updating Resume

Replace `Files/Resume_Sept_2025_CAREERFAIR.pdf` with your updated resume file.

## 📱 Responsive Breakpoints

- Desktop: > 768px
- Tablet/Mobile: ≤ 768px

## 🔧 Development Notes

- The site uses custom fonts located in the `Fonts/` directory
- Three.js is included for potential 3D visualizations
- FBX models can be loaded using the included FBXLoader
- Font Awesome 6.4.0 is loaded via CDN for icons

## 🌟 Features in Development

- [ ] Contact form functionality
- [ ] Blog section for technical articles
- [ ] Dark/Light theme toggle
- [ ] Advanced project filtering
- [ ] 3D interactive elements

## 📄 License

© 2025 Joshua Price. All rights reserved.

## 📞 Contact

- **Email**: jprice.dev@gmail.com
- **GitHub**: [JoshuaPrice13](https://github.com/JoshuaPrice13)
- **LinkedIn**: [Joshua Price](https://www.linkedin.com/in/joshua-price-680750244)

## 🙏 Acknowledgments

- Oklahoma State University Computer Science Program
- American Indian Science and Engineering Society
- Font Awesome for icon library
- Namecheap for hosting services

---

**Note**: This portfolio represents my journey as a Computer Science student at Oklahoma State University and showcases my passion for software development, game engineering, and STEM education.
