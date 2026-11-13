# 🖥️ SystemCore | Tecnología y Computación

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap-CSS-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
</p>

<p align="center">
  <b>💻 Tecnología informática y computación para estudiantes, profesionales, gamers y empresas.</b>
</p>

---

## 🌐 Demo del proyecto

🚀 **Visita y explora nuestra página web:**

👉 [SystemCore - Ver proyecto en línea](https://tu-usuario.github.io/my-react-app/) *(Actualiza este enlace con tu URL de GitHub Pages)*

---

## 📌 Descripción del proyecto

**SystemCore** es una aplicación web desarrollada con React como parte de la formación en el programa ADSO (Análisis y Desarrollo de Software) del SENA. Está enfocada en ofrecer un catálogo de tecnología, componentes y equipos de computación, integrando además herramientas interactivas y consumo de APIs externas.

El proyecto cuenta con una interfaz moderna, organizada mediante una arquitectura modular (*Feature-Based Architecture*), e incluye un módulo completo de autenticación de usuarios, recuperación de credenciales, renderizado dinámico de componentes mediante Props y consumo de la API de Rick and Morty con búsqueda en tiempo real y paginación.

## ✨ Características principales

- 🖥️ **Catálogo de categorías:** visualización de equipos de escritorio, portátiles, componentes y periféricos.
- 🛸 **Consumo de API REST:** sección interactiva de personajes de Rick and Morty con buscador inteligente (*debounce*) y paginación.
- 🧩 **Demostración de Props:** componente de avatares interactivos para ilustrar el paso de propiedades en React.
- 🔐 **Módulo de autenticación:** vistas funcionales de inicio de sesión, registro de usuarios y recuperación de contraseña.
- 🎨 **Interfaz visual:** diseño responsivo adaptado con Bootstrap y estilos modernos.
- ⚡ **Desarrollo optimizado:** compilación ultrarrápida impulsada por Vite y empaquetado como Progressive Web App (PWA).
- 🔍 **Calidad de código:** análisis estricto de sintaxis mediante Oxlint.

## 🛠️ Tecnologías utilizadas

Las siguientes tecnologías y herramientas fueron utilizadas durante el desarrollo:

| Tecnología | Uso dentro del proyecto |
|---|---|
| ⚛️ React 19 | Biblioteca principal para construir interfaces modulares. |
| 🟨 JavaScript (ES6+) | Lenguaje base para la lógica de componentes y control de estado. |
| ⚡ Vite 8 | Servidor de desarrollo y empaquetador de alta velocidad. |
| 🎨 Bootstrap | Framework CSS para la maquetación y diseño responsivo. |
| 🧭 React Router DOM | Gestión de rutas dinámicas entre las diferentes vistas. |
| 📲 Vite PWA | Configuración de Progressive Web App para funcionamiento offline. |
| 🔍 Oxlint | Herramienta de linting para la detección de errores y optimización. |
| 🐙 Git y GitHub | Control de versiones y repositorio de código fuente. |
| 🌐 GitHub Pages | Plataforma de despliegue para la web en producción. |

## 🧩 Conceptos de React aplicados

Durante el desarrollo se implementaron diferentes conceptos fundamentales:

- **Componentes funcionales:** división de la interfaz en bloques independientes y reutilizables.
- **JSX:** integración de marcado HTML con lógica de JavaScript.
- **Props y Estados (`useState`, `useEffect`):** gestión de datos dinámicos, ciclos de vida y efectos secundarios.
- **Optimización de eventos (*Debounce*):** control de peticiones asíncronas para mejorar el rendimiento del buscador.
- **Enrutamiento dinámico:** navegación fluida entre páginas sin recargar el navegador.
- **Modularización por características:** separación lógica entre vistas de autenticación y secciones públicas (*landing*).

## 📁 Estructura del proyecto

El proyecto utiliza una arquitectura modular basada en características (*Feature-Based*):

```text
my-react-app/
│
├── dist/                         # Archivos compilados para producción
├── node_modules/                 # Dependencias del proyecto
├── public/                       # Recursos estáticos y manifiesto PWA
│
├── src/
│   │
│   ├── assets/                   # Recursos gráficos e imágenes
│   │
│   ├── features/                 # Módulos funcionales de la app
│   │   │
│   │   ├── auth/                 # Módulo de autenticación
│   │   │   └── components/
│   │   │       ├── ForgotPassword.jsx
│   │   │       ├── Login.jsx
│   │   │       └── Register.jsx
│   │   │
│   │   └── landing/              # Módulo principal y características
│   │       └── components/
│   │           ├── Footer.jsx
│   │           ├── Header.jsx
│   │           ├── Main.jsx
│   │           ├── Props.jsx
│   │           └── Rickandmorty.jsx
│   │
│   ├── App.jsx                   # Enrutador principal y layout
│   └── main.jsx                  # Punto de montaje de React
│
├── .gitignore                    # Archivos ignorados por Git
├── .oxlintrc.json                # Configuración de Oxlint
├── index.html                    # Documento HTML principal
├── package.json                  # Dependencias y scripts de NPM
├── vite.config.js                # Configuración de Vite y PWA
└── README.md                     # Documentación del proyecto