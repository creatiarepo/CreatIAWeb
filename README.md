# CreatIA — Soluciones de Software, Inteligencia Artificial & Automatización

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![next-intl](https://img.shields.io/badge/i18n-next--intl-blueviolet?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Sitio web corporativo bilingüe para CreatIA, empresa especializada en desarrollo de software moderno, automatizaciones avanzadas e integración de inteligencia artificial agéntica.**

[Demo en vivo](#) · [Reportar un problema](https://github.com/creatiarepo/CreatIAWeb/issues) · [Contacto](mailto:contacto@creatia.com)

</div>

---

## 🌟 Acerca de CreatIA

**CreatIA** impulsa la transformación digital combinando ingeniería de software de alto nivel con las últimas tecnologías en inteligencia artificial y automatización de procesos:

- 💻 **Desarrollo de Aplicaciones Web:** Plataformas SaaS, paneles de control y portales web de alto rendimiento, optimizados para SEO y accesibilidad.
- ⚡ **Automatización de Procesos:** Workflows inteligentes que eliminan tareas repetitivas y conectan herramientas empresariales (CRMs, ERPs, APIs).
- 🧠 **Integraciones con Inteligencia Artificial:** Modelos LLM personalizados, pipelines RAG con bases de datos vectoriales y procesamiento inteligente de datos.
- 🤖 **Chatbots Agénticos:** Agentes autónomos multi-canal (WhatsApp, Slack, Web) capaces de tomar decisiones, consultar APIs y resolver flujos completos de soporte y ventas.

---

## ✨ Características del Proyecto

- 🌐 **Internacionalización Completa (i18n):** Soporte bilingüe fluido en Español (`/es`) e Inglés (`/en`) impulsado por `next-intl`.
- 🎨 **Diseño Moderno & Cyber-Minimalista:** Paleta de colores oscuros con acentos cian/violeta, efectos de glassmorphism y micro-interacciones.
- 🌌 **Hero Interactivo:** Canvas dinámico de partículas que responde al cursor y ambienta la experiencia.
- 🎬 **Animaciones Fluidas:** Transiciones y animaciones al scroll implementadas con `framer-motion`.
- 📬 **Formulario de Contacto Funcional:** Validación en tiempo real y endpoint backend integrado con `nodemailer` para recepción de correos.
- 💬 **Integración WhatsApp:** Botón flotante directo configurado con mensaje predeterminado dinámico.
- 📱 **100% Responsivo:** Adaptado meticulosamente para dispositivos móviles, tablets y monitores de escritorio.
- ⚡ **Rendimiento y SEO:** Arquitectura Next.js 14 App Router con Server Components y optimización de assets.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Lenguaje** | [TypeScript](https://www.typescriptlang.org/) |
| **Estilos** | CSS Modules (Vanilla CSS con Tokens y Variables personalizadas) |
| **Animaciones** | [Framer Motion](https://www.framer.com/motion/) |
| **Internacionalización** | [next-intl](https://next-intl-docs.vercel.app/) |
| **Iconografía** | [Lucide React](https://lucide.dev/) |
| **Formularios** | [React Hook Form](https://react-hook-form.com/) |
| **Servicio de Correo** | [Nodemailer](https://nodemailer.com/) |

---

## 📁 Estructura del Directorio

```plaintext
CreatIAWeb/
├── .agents/               # Skills y directrices del agente de IA
├── messages/              # Diccionarios de traducción
│   ├── es.json            # Español
│   └── en.json            # Inglés
├── public/                # Recursos estáticos (logos, favicons, fuentes)
├── src/
│   ├── app/
│   │   ├── [locale]/      # Enrutamiento internacionalizado
│   │   │   ├── layout.tsx # Layout principal con providers i18n
│   │   │   └── page.tsx   # Página de inicio
│   │   ├── api/
│   │   │   └── contact/   # Endpoint POST para envío de emails
│   │   └── globals.css    # Design System: tokens, reset y utilidades
│   ├── components/
│   │   ├── Navbar/        # Barra de navegación con selector de idioma
│   │   ├── Hero/          # Portada principal y canvas de partículas
│   │   ├── Services/      # Catálogo de servicios y tarjetas
│   │   ├── WhyCreatIA/    # Propuesta de valor y métricas
│   │   ├── About/         # Visión, enfoque y valores de la empresa
│   │   ├── Contact/       # Formulario y canales de contacto directo
│   │   ├── Footer/        # Pie de página y enlaces institucionales
│   │   └── ui/            # Componentes reutilizables (Button, SectionTitle, WhatsAppButton)
│   ├── i18n/              # Configuración y helpers de navegación de next-intl
│   └── types/             # Definiciones de tipos TypeScript
├── .env.example           # Plantilla de variables de entorno
├── middleware.ts          # Middleware de enrutamiento i18n
└── next.config.mjs        # Configuración de Next.js
```

---

## 🚀 Puesta en Marcha Local

### Prerrequisitos

- Node.js 18.17 o superior
- Gestor de paquetes npm, yarn o pnpm
- Git

### 1. Clonar el repositorio

```bash
git clone https://github.com/creatiarepo/CreatIAWeb.git
cd CreatIAWeb
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Copia la plantilla `.env.example` para crear tu archivo `.env.local`:

```bash
cp .env.example .env.local
```

Configura los valores correspondientes en `.env.local`:

```env
# Configuración del servicio de correo (Gmail con Contraseña de Aplicación)
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=tu-app-password-de-16-caracteres
CONTACT_TO_EMAIL=contacto@creatia.com

# Número de WhatsApp para el botón directo (código de país sin signos ni espacios)
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación. El sistema redirigirá automáticamente a la versión en español `/es`.

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:3000` |
| `npm run build` | Compila la aplicación optimizada para producción |
| `npm run start` | Levanta el servidor en modo producción |
| `npm run lint` | Ejecuta las verificaciones de linter con ESLint |

---

## ☁️ Despliegue en Vercel

La forma recomendada para desplegar este proyecto es a través de la plataforma [Vercel](https://vercel.com/):

1. Conecta el repositorio de GitHub [creatiarepo/CreatIAWeb](https://github.com/creatiarepo/CreatIAWeb.git) a Vercel.
2. Añade las variables de entorno (`EMAIL_USER`, `EMAIL_PASS`, `CONTACT_TO_EMAIL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`) en el panel de Vercel.
3. Haz clic en **Deploy**. Vercel detectará automáticamente Next.js y gestionará la compilación y optimización.

---

## 📄 Licencia

Este proyecto se encuentra bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más información.

<div align="center">
Desarrollado con pasión e innovación por <strong>CreatIA</strong>.
</div>
