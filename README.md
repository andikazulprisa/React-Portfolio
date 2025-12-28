# 👨‍💻 React Portfolio — Andika Zulprisa Adha

Personal portfolio website built with **React.js** to showcase my profile, skills, tools, and projects as a **Backend Engineer** with strong interest in building reliable systems, databases, and REST APIs.

🔗 **Live Demo:**  
https://react-portfolio-eta-steel.vercel.app/

---

## ✨ Overview

This portfolio is designed as a **single-page application** with smooth navigation, clean UI, and responsive layout.  
It represents my professional identity, technical stack, and selected projects in a simple yet effective way.

The website includes:

- Hero & introduction section
- About section with experience summary
- Tools & technologies
- Projects showcase
- Contact form
- Social media links (GitHub & LinkedIn)

---

## 🚀 Features

- ⚡ Built with **React + Vite** for fast performance
- 🎨 Styled using **Tailwind CSS**
- 🧭 Smooth scroll navigation (anchor-based)
- 🎬 Animations using **Animate.css** & **AOS**
- ⏳ Preloader animation using **react-loader-spinner**
- 📄 CV download via Google Docs
- 📬 Contact form integrated with **FormSubmit**
- 📱 Fully responsive (mobile → desktop)

---

## 🛠️ Tech Stack

**Frontend**

- React.js
- Vite
- JavaScript (ES6+)

**Styling & UI**

- Tailwind CSS
- Remix Icon
- Animate.css
- AOS (Animate On Scroll)

**Utilities**

- react-loader-spinner
- FormSubmit (contact form handling)

---

## 📁 Project Structure

```
src/
├─ components/
│ ├─ Navbar.jsx # Navigation bar with scroll behavior
│ ├─ Footer.jsx # Footer with social links
│ ├─ PreLoader.jsx # Preloader animation
│
├─ App.jsx # Main page sections (Hero, About, Projects, Contact)
├─ main.jsx # App entry point & global setup
├─ index.css # Global styles
```

---

## 🧠 Key Implementation Details

### 🔹 Navbar Scroll Effect

- Navbar menu visibility changes based on scroll position using `useEffect` and `window.scrollY`.

### 🔹 Preloader

- Preloader appears on initial load for 3 seconds using `useState` + `setTimeout`.

### 🔹 Animations

- Page animations handled by **Animate.css**
- Scroll-based animations handled by **AOS**

### 🔹 Contact Form

- Uses **FormSubmit** to send messages directly to email without backend setup.

---

## 📦 Getting Started (Local Development)

### 1️⃣ Clone the repository

```
git clone https://github.com/andikazulprisa/React-Portfolio.git
cd React-Portfolio
```

### 2️⃣ Install dependencies

```
npm install
```

### 3️⃣ Run development server

```
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🔗 Links

- 🌐 Live Website
  https://react-portfolio-eta-steel.vercel.app/

- 💻 GitHub Profile
  https://github.com/andikazulprisa

- 🔗 LinkedIn
  https://www.linkedin.com/in/andika-zulprisa/

- 📄 Download CV
  Available on the website

---

## 🎯 Purpose

This project is created for:

- Personal branding

- Portfolio showcase

- Applying for backend / fullstack positions

- Demonstrating frontend fundamentals as a backend-focused engineer

---

## 📌 Future Improvements

- Add detailed project pages

- Add backend-powered contact form

- Add blog or experience timeline

- Improve SEO & accessibility

---

## 🙌 Acknowledgement

Thank you for visiting my portfolio.
Feel free to connect with me via GitHub or LinkedIn.

⭐ If you like this project, consider giving it a star!
