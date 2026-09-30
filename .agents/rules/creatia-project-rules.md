# 📐 CreatIA — Reglas del Agente de Desarrollo

> Este archivo es la fuente de verdad absoluta para el desarrollo del sitio web de CreatIA.
> El agente DEBE leer y respetar estas reglas antes de crear, editar o eliminar cualquier archivo.
> Estas reglas se derivan de las skills instaladas: `vercel-react-best-practices`, `frontend-design`, `web-design-guidelines`, `deploy-to-vercel`, `seo-audit`.

---

## 0. Principio General — Anti-Alucinación

- **NUNCA inventar** rutas, nombres de componentes, variables de entorno o dependencias que no existan en el proyecto.
- **SIEMPRE verificar** que un archivo existe antes de importarlo.
- **NUNCA asumir** que una dependencia está instalada; verificar `package.json` primero.
- **NUNCA duplicar** componentes, estilos o lógica que ya exista en el proyecto.
- **SIEMPRE respetar** este archivo como fuente de verdad antes de tomar cualquier decisión de diseño o arquitectura.

---

## 1. Stack Tecnológico Obligatorio

| Categoría | Tecnología | Versión |
|---|---|---|
| Framework | Next.js (App Router) | 14.x |
| Lenguaje | TypeScript | strict mode |
| Estilos | CSS Modules (.module.css) | — |
| Animaciones | Framer Motion | latest |
| Internacionalización | next-intl | latest |
| Íconos | Lucide React | latest |
| Formularios | React Hook Form | latest |
| Email | Nodemailer | latest (API Route) |
| Fuentes | Google Fonts: Outfit (display) + Inter (body) | via next/font/google |
| Imágenes | next/image SIEMPRE | — |

### Prohibiciones de Stack
- NO usar Tailwind CSS — Solo CSS Modules y variables CSS globales.
- NO usar style inline en componentes — Solo CSS Modules.
- NO usar styled-components ni emotion.
- NO usar axios — Solo fetch nativo o SWR.
- NO usar img HTML — Siempre next/image.
- NO usar useEffect para data fetching — Usar Server Components o SWR.

---

## 2. Estructura de Carpetas — Canónica

```
CreatIAWeb/
├── .agents/
│   ├── rules/
│   │   └── creatia-project-rules.md
│   └── skills/
├── public/
│   ├── images/
│   │   └── logo.png
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.tsx
│   │   │   ├── Hero.module.css
│   │   │   └── ParticleCanvas.tsx
│   │   ├── Services/
│   │   │   ├── Services.tsx
│   │   │   ├── Services.module.css
│   │   │   └── ServiceCard.tsx
│   │   ├── WhyCreatIA/
│   │   │   ├── WhyCreatIA.tsx
│   │   │   └── WhyCreatIA.module.css
│   │   ├── About/
│   │   │   ├── About.tsx
│   │   │   └── About.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.tsx
│   │   │   └── Contact.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   └── ui/
│   │       ├── Button/
│   │       │   ├── Button.tsx
│   │       │   └── Button.module.css
│   │       ├── SectionTitle/
│   │       │   ├── SectionTitle.tsx
│   │       │   └── SectionTitle.module.css
│   │       └── WhatsAppButton/
│   │           ├── WhatsAppButton.tsx
│   │           └── WhatsAppButton.module.css
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── lib/
│   │   └── mailer.ts
│   ├── messages/
│   │   ├── es.json
│   │   └── en.json
│   └── types/
│       └── index.ts
├── .env.local
├── .env.example
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Reglas de Estructura
- Cada componente vive en su propia carpeta con el mismo nombre.
- Un archivo CSS Module por componente — nunca CSS compartido entre componentes distintos.
- globals.css contiene SOLO variables CSS, reset y estilos de tipografía base. NADA más.
- src/components/ui/ es para componentes atómicos reutilizables.
- src/lib/ es para utilidades puras sin JSX.
- NUNCA colocar lógica de negocio dentro de componentes de UI.

---

## 3. Sistema de Diseño — Tokens de Color

Estos son los únicos colores autorizados. NUNCA usar colores hardcodeados en CSS.

```css
/* src/app/globals.css */
:root {
  /* FONDOS */
  --bg-deep:        #0D1B2A;
  --bg-surface:     #112240;
  --bg-elevated:    #1a2f4a;

  /* ACENTOS */
  --accent-cyan:    #00D4FF;
  --accent-blue:    #2563EB;
  --accent-blue-lt: #60A5FA;

  /* GRADIENTES */
  --gradient-primary: linear-gradient(135deg, #2563EB 0%, #00D4FF 100%);
  --gradient-surface: linear-gradient(180deg, #112240 0%, #0D1B2A 100%);
  --gradient-glow:    radial-gradient(ellipse at center, rgba(0,212,255,0.15) 0%, transparent 70%);

  /* TEXTO */
  --text-primary:   #F0F6FF;
  --text-secondary: #A8B2C8;
  --text-muted:     #8892B0;
  --text-accent:    #00D4FF;

  /* BORDES */
  --border-subtle:  rgba(255, 255, 255, 0.08);
  --border-default: rgba(0, 212, 255, 0.2);
  --border-focus:   rgba(0, 212, 255, 0.6);

  /* GLASSMORPHISM */
  --glass-bg:       rgba(17, 34, 64, 0.6);
  --glass-border:   rgba(0, 212, 255, 0.15);
  --glass-blur:     blur(12px);

  /* SOMBRAS */
  --shadow-sm:      0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md:      0 4px 24px rgba(0, 0, 0, 0.4);
  --shadow-lg:      0 8px 48px rgba(0, 0, 0, 0.5);
  --shadow-glow:    0 0 32px rgba(0, 212, 255, 0.2);
  --shadow-glow-lg: 0 0 64px rgba(37, 99, 235, 0.3);

  /* ESPACIADO */
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   16px;
  --space-lg:   24px;
  --space-xl:   40px;
  --space-2xl:  64px;
  --space-3xl:  96px;
  --space-4xl:  128px;

  /* TIPOGRAFÍA */
  --font-display: 'Outfit', sans-serif;
  --font-body:    'Inter', sans-serif;
  --text-xs:    0.75rem;
  --text-sm:    0.875rem;
  --text-base:  1rem;
  --text-lg:    1.125rem;
  --text-xl:    1.25rem;
  --text-2xl:   1.5rem;
  --text-3xl:   1.875rem;
  --text-4xl:   2.25rem;
  --text-5xl:   3rem;
  --text-6xl:   3.75rem;
  --text-7xl:   4.5rem;

  /* RADIOS */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-xl:   16px;
  --radius-2xl:  24px;
  --radius-full: 9999px;

  /* TRANSICIONES */
  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
  --transition-slow:   400ms ease;
  --transition-spring: 300ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* LAYOUT */
  --container-max: 1200px;
  --section-py:    var(--space-4xl);
  --container-px:  var(--space-lg);
}
```

---

## 4. Tipografía — Reglas

- Outfit → Solo para h1, h2, h3, hero headline, nombres de servicio.
- Inter → Todo lo demás: párrafos, botones, labels, inputs, nav.
- Longitud de línea máxima: 65ch en párrafos de cuerpo.
- NO usar ALL CAPS para labels decorativos.
- NO usar font-size en px — Siempre usar variables --text-*.

```css
h1 { font-family: var(--font-display); font-size: var(--text-6xl); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
h2 { font-family: var(--font-display); font-size: var(--text-4xl); font-weight: 700; line-height: 1.2; letter-spacing: -0.015em; }
h3 { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 600; line-height: 1.3; }
p  { font-family: var(--font-body);    font-size: var(--text-base); font-weight: 400; line-height: 1.7; }
```

---

## 5. Componentes Canónicos

### 5.1 Button

```tsx
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize    = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;   // default: 'primary'
  size?: ButtonSize;         // default: 'md'
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
```

Variantes:
- primary   → Gradiente --gradient-primary, texto blanco, sombra glow.
- secondary → Fondo --bg-surface, borde --border-default, texto --text-primary.
- ghost     → Sin fondo, sin borde, texto --accent-cyan, hover con fondo sutil.
- outline   → Borde --border-default con --accent-cyan, fondo transparente.

Tamaños:
- sm → padding: 8px 16px, font-size: var(--text-sm)
- md → padding: 12px 24px, font-size: var(--text-base)
- lg → padding: 16px 32px, font-size: var(--text-lg)

Reglas:
- border-radius: var(--radius-full) en todos los botones.
- transition: var(--transition-base) en todos los botones.
- El texto del CTA describe la acción exacta ("Ver servicios", no "Click aquí").
- Estado isLoading muestra spinner y deshabilita el botón.

### 5.2 Glassmorphism Card — Patrón CSS canónico

```css
.card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  transition: var(--transition-base);
}

.card:hover {
  border-color: var(--border-focus);
  box-shadow: var(--shadow-glow);
  transform: translateY(-4px);
}
```

### 5.3 SectionTitle

```tsx
interface SectionTitleProps {
  tag?: string;          // Etiqueta pequeña encima del título
  title: string;
  highlight?: string;    // Parte del título con color --accent-cyan
  description?: string;
  align?: 'left' | 'center';
}
```

### 5.4 Navbar

- Posición: fixed, z-index: 1000.
- Fondo inicial: transparente.
- Fondo al scroll: glassmorphism (--glass-bg + --glass-blur).
- Transición de fondo: var(--transition-base).
- Mobile: menú hamburguesa con aria-expanded y aria-controls.
- Selector ES/EN: botón accesible con aria-label.

### 5.5 WhatsApp Button (flotante)

- position: fixed; bottom: 24px; right: 24px; z-index: 999.
- Ícono verde con animación de pulso (pulse ring CSS).
- Tooltip en hover con texto.
- Número tomado EXCLUSIVAMENTE de NEXT_PUBLIC_WHATSAPP_NUMBER.

---

## 6. Secciones — Especificaciones

| Sección         | ID Anchor   | Altura mínima | Notas                     |
|-----------------|-------------|---------------|---------------------------|
| Navbar          | #top        | 70px          | Fixed                     |
| Hero            | #inicio     | 100vh         | Canvas de partículas      |
| Servicios       | #servicios  | auto          | 4 cards en grid           |
| ¿Por qué CreatIA? | #por-que  | auto          | Stats + diferenciadores   |
| Sobre Nosotros  | #nosotros   | auto          | Equipo + misión/visión    |
| Contacto        | #contacto   | auto          | Formulario + info         |
| Footer          | —           | auto          | —                         |

Espaciado entre secciones: padding-block: var(--section-py).

---

## 7. Internacionalización (i18n)

- Idiomas: es (default) y en.
- Librería: next-intl con App Router.
- NUNCA hardcodear texto en componentes — siempre useTranslations().
- El selector de idioma alterna entre /es y /en.

Estructura de claves JSON obligatoria:
```json
{
  "nav": { "services": "...", "about": "...", "contact": "..." },
  "hero": { "headline": "...", "subheadline": "...", "cta_primary": "...", "cta_secondary": "..." },
  "services": { "title": "...", "subtitle": "...", "items": [] },
  "whyCreatia": {},
  "about": {},
  "contact": {},
  "footer": {}
}
```

---

## 8. Naming Conventions

| Tipo                  | Convención              | Ejemplo                   |
|-----------------------|-------------------------|---------------------------|
| Componentes React     | PascalCase              | ServiceCard.tsx            |
| Carpetas de componentes | PascalCase            | Services/                  |
| CSS Modules           | PascalCase.module.css   | Services.module.css        |
| Hooks                 | camelCase con use       | useScrollAnimation.ts      |
| Utilidades/lib        | camelCase               | mailer.ts                  |
| Tipos                 | sufijo Props/Type        | ButtonProps, ServiceType   |
| Variables de entorno  | SCREAMING_SNAKE_CASE    | NODEMAILER_HOST            |

### Clases CSS en módulos
- camelCase: .cardWrapper, .heroTitle
- Estados: .isActive, .isLoading, .isDisabled
- Layout: .container, .grid, .flex

### Props TypeScript
- Tipos con sufijo Props: ButtonProps, ServiceCardProps
- Booleanos con prefijo is/has: isLoading, hasError
- Handlers con prefijo on: onClick, onSubmit

---

## 9. Animaciones — Reglas (basadas en frontend-design skill)

### Framer Motion — Patrones canónicos

```tsx
// Animación de entrada para secciones
const sectionVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

// Stagger para listas de cards
const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } }
};
```

### Prohibiciones de Animación
- NO animar cada sección con fade-slide-up genérico en scroll — firma de IA genérica.
- NO poner hover transitions en TODOS los elementos indiscriminadamente.

### Permitido
- UNA animación orquestada en el Hero (entrada de partículas + headline + CTAs).
- Hover transitions en cards de servicios y botones.
- Canvas de partículas tipo neural network en el Hero (Canvas API pura).
- Pulso animado en el botón de WhatsApp.

### Accesibilidad de movimiento — OBLIGATORIO
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Performance (vercel-react-best-practices)

- Server Components por defecto — 'use client' solo si necesario.
- next/dynamic para componentes pesados: ParticleCanvas, secciones below-the-fold.
- next/image con width, height y alt siempre.
- Promise.all() para requests paralelas en Server Components.
- Fuentes con next/font/google — display: 'swap'.
- Evitar barrel files (index.ts que reexportan todo).

```tsx
// Correcto
import { Button } from '@/components/ui/Button/Button';

// Incorrecto — barrel file
import { Button } from '@/components/ui';
```

---

## 11. Variables de Entorno

```env
# .env.example (commitear sin valores)
NODEMAILER_HOST=smtp.gmail.com
NODEMAILER_PORT=587
NODEMAILER_USER=your-email@gmail.com
NODEMAILER_PASS=your-app-password
CONTACT_EMAIL_TO=contact@creatia.com
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
```

Reglas:
- NEXT_PUBLIC_ solo para datos no sensibles (se exponen al cliente).
- Sin NEXT_PUBLIC_ solo para servidor (email credentials, API keys).
- .env.local siempre en .gitignore.

---

## 12. SEO — Metadatos Mínimos Obligatorios

```tsx
export const metadata: Metadata = {
  title: {
    default: 'CreatIA — Desarrollo Web, IA y Automatizaciones',
    template: '%s | CreatIA',
  },
  description: 'Transformamos ideas en soluciones inteligentes. Desarrollo de apps web, automatizaciones, integraciones con IA y chatbots agénticos.',
  keywords: ['desarrollo web', 'inteligencia artificial', 'automatizaciones', 'chatbots', 'CreatIA'],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://creatia.co',
    siteName: 'CreatIA',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
```

---

## 13. Accesibilidad — Mínimos Obligatorios

- Todo next/image tiene alt descriptivo.
- Todos los botones con solo ícono tienen aria-label.
- Contraste mínimo: 4.5:1 (WCAG AA).
- Menú hamburguesa con aria-expanded y aria-controls.
- Formulario de contacto con label asociado a cada input.
- Elementos semánticos: nav, main, section, article, footer.

```css
:focus-visible {
  outline: 2px solid var(--accent-cyan);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```

---

## 14. Git — Convenciones de Commit

```
feat:     Nueva funcionalidad
fix:      Corrección de bug
style:    Cambios de CSS/diseño sin lógica
chore:    Dependencias, configuración
refactor: Refactoring sin cambio de funcionalidad
docs:     Documentación
```

---

## 15. Checklist Antes de Cada Fase

- [ ] ¿Todos los textos usan useTranslations()? (no hardcodeados)
- [ ] ¿Todos los colores usan variables CSS --*? (no hardcodeados)
- [ ] ¿Todos los img son next/image?
- [ ] ¿Los componentes pesados usan next/dynamic?
- [ ] ¿El .env.local está en .gitignore?
- [ ] ¿Todos los componentes tienen su CSS Module separado?
- [ ] ¿Los tipos TypeScript están definidos (no any)?
- [ ] ¿Se respeta prefers-reduced-motion?
- [ ] ¿Cada componente vive en su propia carpeta?
- [ ] ¿No hay colores o textos hardcodeados?
