# DevDex - Pokémon-Style Developer Portfolio

A retro-themed, accessible developer portfolio component inspired by Gen 2/3 Pokédex screens with terminal aesthetics.

## 🎮 Features

- **Trainer Profile Card**: Your professional info styled like a Pokédex entry
- **Skills Pokédex**: Three visual states (Seen/Studied/Active) with dynamic rendering
- **Captured Pokémon**: Top 6 main skills displayed as collectible cards with level bars
- **Responsive Design**: Mobile-first, stacks vertically on small screens
- **Accessible**: WCAG compliant, respects prefers-reduced-motion, proper ARIA labels
- **No Dependencies**: Pure HTML/CSS/JS, no frameworks or build steps required

## 🚀 Deployment

### GitHub Pages

1. Upload `pokedex.html` to your repository
2. Rename it to `index.html` (or keep as `pokedex.html` and access via `/pokedex.html`)
3. Enable GitHub Pages in repository settings
4. Your site will be live at `https://yourusername.github.io/repo-name/`

### Vercel

1. Push your repository to GitHub/GitLab
2. Import the project in Vercel
3. Deploy automatically

**Recommendation**: Both platforms work perfectly. Use **GitHub Pages** if you want to keep everything in one place. Use **Vercel** if you plan to add serverless functions or want faster global CDN.

## 📝 Customization Guide

### 1. Update Trainer Info

Find this section in the HTML and update with your details:

```html
<h2 id="trainer-heading" class="trainer-name">Your Name</h2>
<p class="trainer-title">Full Stack Developer</p>
<div class="trainer-meta">
    <span class="trainer-meta-item">Type: Frontend/Backend</span>
    <span class="trainer-meta-item">Region: São Paulo, BR</span>
</div>
<p class="trainer-description">
    Your professional summary here (2 lines max)
</p>
```

### 2. Add/Edit Skills

In the `<script>` section, find the `skillsData` array. Each skill has these properties:

```javascript
{
    id: 1,                    // Unique identifier
    name: "JavaScript",       // Skill name
    type: "Frontend",         // Category/type
    level: 8,                 // Proficiency (1-15, where 1 year ≈ 1 level)
    state: "active",          // 'seen', 'studied', or 'active'
    isMain: true,             // Show in top 6 "Captured Pokémon" cards
    icon: "🟨",               // Emoji icon
    moveset: ["ES6+", "..."]  // Sub-skills/tools (3-4 items)
}
```

#### Skill States Explained:

- **`seen`**: You've heard of it (appears dimmed in the list)
- **`studied`**: You've taken a course/trained (bold text with blue underline)
- **`active`**: You use it daily (shows Pokéball icon before name)

### 3. Adjust Skill Level

Change the `level` property (1-15 scale):
- Level 1-3: Beginner
- Level 4-7: Intermediate  
- Level 8-12: Advanced
- Level 13-15: Expert

The progress bar updates automatically.

### 4. Change Main Skills

Set `isMain: true` for up to 6 skills you want featured in the "Captured Pokémon" section. The rest will appear in the complete skills list below.

### 5. Customize Colors

Edit CSS variables in the `:root` section:

```css
:root {
    --bg: #0a0a0f;           /* Background */
    --bg-card: #111827;      /* Card background */
    --purple: #7c3aed;       /* Primary accent */
    --cherry: #dc2626;       /* Secondary accent */
    --yellow: #fbbf24;       /* Highlights */
    --blue: #3b82f6;         /* Links/info */
    --green: #10b981;        /* Terminal/success */
    --text: #f3f4f6;         /* Main text */
    --text-muted: #9ca3af;   /* Muted text */
}
```

## ♿ Accessibility Features

- ✅ Semantic HTML structure
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Respects `prefers-reduced-motion`
- ✅ Color contrast ≥ 4.5:1
- ✅ Screen reader friendly

## 🎨 Design System

### Fonts
- **VT323**: Titles, UI labels, terminal prompts
- **Fira Code**: Body text, descriptions

### Visual Elements
- Pixel borders with box-shadow technique
- Subtle scanline overlay (non-intrusive)
- Terminal prompt prefixes (`> trainer.info`)
- Hover effects only (no auto-animations)
- Responsive grid layout

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (single column, centered content)
- **Tablet**: 640px - 768px (transitional)
- **Desktop**: > 768px (two-column Pokédex layout)

## 🔧 Technical Details

- **File Size**: ~30KB (minified would be ~15KB)
- **Performance**: No external dependencies except Google Fonts
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **SEO**: Meta description included, semantic HTML

## 📄 File Structure

```
/workspace/
├── pokedex.html      # Main component (rename to index.html for deployment)
└── README.md         # This file
```

## 🎯 Quick Start

1. Open `pokedex.html` in a code editor
2. Update the trainer profile section with your info
3. Modify the `skillsData` array with your skills
4. Save and open in browser to preview
5. Deploy to GitHub Pages or Vercel

## 💡 Tips

- Use emojis for skill icons (keeps file size small)
- Keep moveset items short (1-2 words each)
- Limit main skills to 6 for best visual impact
- Test on mobile devices before deploying
- Update GitHub link in footer before going live

## 📄 License

Free to use and modify for personal and commercial projects.

---

**Built with ❤️ and ☕** | Compatible with GitHub Pages & Vercel
