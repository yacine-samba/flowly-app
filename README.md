# 🌊 Flowly

**Automatisez votre business, pas votre passion.**

Flowly est une landing page responsive construite avec **Next.js 13 (App Router)** et **Material UI (MUI)**.  
Elle présente un SaaS fictif qui aide les freelances à automatiser leurs tâches (facturation, relances clients, organisation de rendez-vous, notifications).

---

## 🚀 Stack technique

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [Material UI](https://mui.com/)
- TypeScript prêt à l’emploi (optionnel)
- Responsive design (mobile, tablette, desktop)
- SEO optimisé (metadata, balises Open Graph)
- Smooth scroll activé

---

## 📂 Structure du projet

app/
├─ layout.tsx # Layout global + ThemeRegistry
├─ page.tsx # Landing page principale
├─ theme-registry.tsx# Custom Material UI Theme
public/
└─ logo.svg


---

## 🎨 Sections de la landing page

- **Header** : Logo, navigation (Features, Pricing, Testimonials, Login), CTA *Essayer gratuitement*
- **Hero** : slogan, description, bouton CTA principal
- **Features** : présentation des fonctionnalités clés avec icônes
- **Why Flowly** : avantages pour freelances + workflow exemple
- **Pricing** : plans Free, Pro et Premium
- **Testimonials** : avis de freelances
- **Footer** : navigation secondaire, newsletter, réseaux sociaux

---

## 📦 Installation & usage

```bash
# 1. Cloner le repo
git clone https://github.com/yacine-samba/flowly.git

# 2. Installer les dépendances
cd flowly
npm install

# 3. Lancer le serveur de dev
npm run dev

# 4. Ouvrir dans le navigateur
http://localhost:3000

📜 Licence

Projet fictif créé pour démonstration.
Aucune restriction d’usage.