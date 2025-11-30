# 🌞 EatTravelPray  
*A Boho-Inspired Lifestyle Website Built with Love & Code*

Welcome to **EatTravelPray**, a serene, mobile-friendly, boho-chic digital space designed to blend travel inspiration, self-care, food, and soulful exploration.  
This project is part of my personal creative and technical portfolio — showcasing UI/UX clarity, front-end development, and real world DevOps deployment skills.

---

## ✨ Features

- 🌿 **Clean, boho-chic responsive design**  
- 🌴 **Hero section with soft beach imagery**  
- 🌞 **Floating account/profile menu (Profile, Dashboard, Sign Out)**  
- 📱 **100% mobile-optimized layout**  
- 🧘‍♀️ **Light, relaxed color palette & typography**  
- 🗂️ **Organized page structure with reusable components**  
- 🚀 **Automatic GitHub → SiteGround deployment pipeline**  
- 🔐 **Secure SSH-based real-time updates**

---

## 🛠️ Tech Stack

### **Frontend**
- HTML5  
- CSS3 (custom, no frameworks)  
- Vanilla JavaScript  
- Component-based structure (`header.html`, `footer.html`, etc.)

### **DevOps / Deployment**
- Git & GitHub  
- GitHub Actions CI/CD  
- SiteGround hosting (SSH + rsync deployment)  
- OpenSSH keys (zero-downtime deploys)

---

## 📁 Project Structure

public_html/
│
├── index.html
├── assets/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── main.js
│ └── components/
│ ├── header.html
│ └── footer.html
└── .gitignore


---

## 🚀 Automatic Deployment (CI/CD)

This project uses **GitHub Actions** to automatically deploy to SiteGround whenever the `master` branch is updated.

### Workflow file:



### Deployment triggers:
- Any `git push` to `master`
- GitHub UI commits
- Merges into `master`

### Deployment method:
- GitHub connects securely via SSH  
- Uses rsync to mirror repo → SiteGround  
- Old files automatically removed (`--delete`)  
- Zero downtime

---

## 🔧 How to Make Updates

1. Edit any file (HTML, CSS, JS)  
2. Commit changes to `master`  
3. Wait 10–20 seconds  
4. Refresh your live site:  
   👉 https://eattravelpray.com

That’s it — completely automated.

---

## 🌸 Vision & Purpose

**EatTravelPray** is more than a website —  
it’s a gentle digital space built for inspiration, reflection, and storytelling.  

It blends:
- Wanderlust  
- Healing  
- Spiritual expression  
- Nature  
- Self-care  
- Creative freedom  

…and represents the heart of my personal and professional journey.

---

## ❤️ Author

** girlCoding@icloud.com ** 
Developer • Designer • Creator  
https://github.com/girlCoding

---

## 📬 Future Enhancements

- User account system  
- Photo gallery  
- Travel journal pages  
- Blog section  
- Meditation page  
- Recipes & cultural food celebrations  
- Lunar calendar integration  
- Interactive map overlays  
- Boho-inspired animations

---

## 🧿 Thank You

Thank you for exploring the project.  
Feel free to follow the repo for updates or reach out with ideas!

