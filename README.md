# 🖥️ SystemCore | Plataforma Web de Tecnología y Computación

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Bootstrap-CSS-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img src="https://img.shields.io/badge/PWA-Enabled-success?style=for-the-badge&logo=pwa&logoColor=white" />
</p>

<p align="center">
  <b>💻 Solución integral de tecnología informática, componentes y comercio electrónico desarrollada para el programa ADSO del SENA.</b>
</p>

---

## 🌐 Demo y Despliegue en Línea

🚀 **Explora el proyecto ejecutándose en tiempo real:**

👉 [SystemCore - Ver proyecto en GitHub Pages](https://egocerberus.github.io/Taller1_React/)

---

## 📌 Descripción del Proyecto

**SystemCore** es una aplicación web moderna orientada a la gestión y exposición de un catálogo tecnológico (equipos de escritorio, portátiles, componentes y periféricos). El desarrollo está estructurado bajo los estándares de la industria moderna de frontend, implementando una arquitectura modular basada en características (*Feature-Based Architecture*).

El sistema incluye interfaces interactivas avanzadas, como un visor dinámico de la API de Rick and Morty con optimización de búsqueda por *debounce* y paginación, componentes interactivos de demostración de *Props*, un módulo completo de autenticación de usuarios (Login, Registro y Recuperación de Contraseñas), y capacidades completas de Progressive Web App (PWA) para funcionamiento fuera de línea.

## ✨ Características Principales

- 🖥️ **Catálogo Comercial:** Visualización organizada por categorías tecnológicas (computadores, portátiles, componentes y periféricos).
- 🛸 **Consumo de API REST Asíncrona:** Módulo interactivo de personajes de Rick and Morty con control de peticiones (*debounce*) y paginación eficiente.
- 🧩 **Componentes Reutilizables y Props:** Demostración práctica del paso de propiedades y renderizado dinámico de elementos.
- 🔐 **Módulo de Autenticación de Usuarios:** Vistas estilizadas con Bootstrap para inicio de sesión, creación de cuentas y recuperación de credenciales (`/login`, `/register`, `/forgot-password`).
- 📲 **Progressive Web App (PWA):** Soporte offline mediante Workbox, manifiesto web personalizado, iconos institucionales y capturas de pantalla adaptadas.
- ⚡ **Optimización Extrema:** Compilación ultrarrápida impulsada por Vite y validación estricta de sintaxis con Oxlint.

## 🛠️ Tecnologías y Herramientas Utilizadas

| Tecnología / Librería | Propósito en el Proyecto |
|---|---|
| ⚛️ **React 19** | Biblioteca principal para la construcción de interfaces modulares y reactivas. |
| 🟨 **JavaScript (ES6+)** | Lenguaje de programación base para la lógica de negocio y gestión de estados. |
| ⚡ **Vite 8** | Servidor de desarrollo de alta velocidad y herramienta de empaquetado (*bundler*). |
| 🎨 **Bootstrap 5** | Framework CSS para maquetación responsiva, tarjetas, contenedores y grillas. |
| 🧭 **React Router DOM** | Enrutamiento del lado del cliente para una navegación fluida entre vistas. |
| 📲 **Vite PWA Plugin** | Integración de Service Workers y manifiesto para convertir la web en aplicación instalable. |
| 🔍 **Oxlint** | Linter de alto rendimiento para asegurar la calidad y limpieza del código fuente. |
| 🐙 **Git & GitHub** | Control de versiones y alojamiento remoto del código fuente. |
| 🌐 **GitHub Pages** | Plataforma de despliegue continuo para la distribución pública de la web. |

## 🧩 Conceptos de React y Arquitectura Aplicados

Durante el ciclo de desarrollo se aplicaron rigurosamente los siguientes fundamentos técnicos:

- **Componentes Funcionales Modernos:** Creación de bloques lógicos independientes, escalables y fáciles de mantener.
- **JSX Avanzado:** Combinación fluida de marcado semántico HTML con expresiones de JavaScript.
- **Gestión de Estados y Ciclos de Vida:** Uso de hooks (`useState`, `useEffect`) para la sincronización con APIs externas y almacenamiento local.
- **Optimización de Eventos (*Debounce*):** Prevención de sobrecarga de peticiones HTTP en los inputs de búsqueda.
- **Modularización Estricta:** Separación lógica entre características del negocio (*auth* y *landing*).

## 📁 Estructura del Repositorio

El proyecto mantiene una organización limpia basada en la separación de responsabilidades:

```text
Taller1_React/
│
├── dist/                         # Archivos compilados listos para producción
├── node_modules/                 # Dependencias y librerías instaladas
├── public/                       # Recursos estáticos, manifiesto PWA e iconos
│
├── src/
│   │
│   ├── assets/                   # Recursos gráficos y multimedia
│   │
│   ├── features/                 # Módulos funcionales de la aplicación
│   │   │
│   │   ├── auth/                 # Módulo de Autenticación
│   │   │   └── components/
│   │   │       ├── ForgotPassword.jsx
│   │   │       ├── Login.jsx
│   │   │       └── Register.jsx
│   │   │
│   │   └── landing/              # Módulo Principal y Landing Page
│   │       └── components/
│   │           ├── Footer.jsx
│   │           ├── Header.jsx
│   │           ├── Main.jsx
│   │           ├── Props.jsx
│   │           └── Rickandmorty.jsx
│   │
│   ├── App.jsx                   # Componente raíz y enrutador principal
│   └── main.jsx                  # Punto de entrada y montaje virtual de React
│
├── .gitignore                    # Exclusiones de control de versiones
├── .oxlintrc.json                # Reglas de análisis estático (Oxlint)
├── index.html                    # Documento HTML principal con metadatos SEO
├── package.json                  # Dependencias, metadatos y scripts de compilación
├── vite.config.js                # Configuración avanzada de Vite y PWA
└── README.md                     # Documentación técnica oficial del proyecto