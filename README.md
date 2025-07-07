# flexcore.ai Website

Eine moderne, responsive Website für flexcore.ai - Ihr Partner für ganzheitliche KI-Lösungen.

## 🚀 Features

- **Moderne React-Architektur** mit Vite als Build-Tool
- **Responsive Design** für alle Geräte (Desktop, Tablet, Mobile)
- **Tailwind CSS** für modernes Styling
- **shadcn/ui Komponenten** für professionelle UI-Elemente
- **React Router** für Navigation zwischen Seiten
- **Lucide Icons** für konsistente Iconographie
- **Optimierte Performance** und SEO-freundlich

## 📱 Seiten

- **Startseite** - Hero-Section mit Call-to-Action und Service-Übersicht
- **Über uns** - Mission, Vision und Unternehmenswerte
- **Leistungen** - Detaillierte Beschreibung der drei Hauptservices:
  - KI-Beratung
  - KI-Automatisierung  
  - SaaS-Lösungen
- **Kontakt** - Kontaktformular und Unternehmensinformationen

## 🛠️ Technologie-Stack

- **Frontend**: React 19, Vite 6
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Package Manager**: pnpm

## 🚀 Installation & Entwicklung

```bash
# Repository klonen
git clone https://github.com/Polar1337/flexcore-ai-website.git
cd flexcore-ai-website

# Dependencies installieren
pnpm install

# Development Server starten
pnpm run dev

# Build für Produktion
pnpm run build

# Preview der Production Build
pnpm run preview
```

## 📁 Projektstruktur

```
src/
├── components/          # Wiederverwendbare Komponenten
│   ├── ui/             # shadcn/ui Basis-Komponenten
│   ├── Navigation.jsx  # Hauptnavigation
│   ├── HeroSection.jsx # Hero-Bereich der Startseite
│   ├── ServicesSection.jsx
│   ├── TestimonialsSection.jsx
│   └── Footer.jsx
├── pages/              # Seiten-Komponenten
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ServicesPage.jsx
│   └── ContactPage.jsx
├── assets/             # Statische Assets (Bilder, Icons)
├── content.js          # Zentrale Content-Verwaltung
├── App.jsx            # Haupt-App-Komponente
└── main.jsx           # Entry Point
```

## 🎨 Design-System

Das Design basiert auf dem flexcore.ai Logo und verwendet:

- **Primärfarbe**: Türkis (#00D4AA) aus dem Logo
- **Dunkler Hintergrund**: #1A2332 für Kontraste
- **Helle Bereiche**: #F8FAFC für Sections
- **Typografie**: Moderne, klare Schriftarten
- **Spacing**: Konsistente Abstände mit Tailwind

## 📝 Content-Management

Alle Texte und Inhalte sind zentral in `src/content.js` verwaltet, was einfache Aktualisierungen ermöglicht ohne Code-Änderungen.

## 🔧 Anpassungen

### Logo ändern
Ersetzen Sie `src/assets/flexcore-logo.png` mit Ihrem neuen Logo.

### Farben anpassen
Bearbeiten Sie die CSS-Variablen in `src/App.css`:
```css
--flexcore-primary: #00D4AA;
--flexcore-dark: #1A2332;
```

### Inhalte ändern
Bearbeiten Sie `src/content.js` für alle Texte und Inhalte.

## 📞 Support

Bei Fragen oder Anpassungswünschen wenden Sie sich an das Entwicklungsteam.

---

**flexcore.ai** - Der Kern deiner KI-Strategie

