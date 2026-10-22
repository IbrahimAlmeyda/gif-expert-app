# Gif Expert App

<div align="center">
  <img src="./src/assets/images/desktop-preview.webp" alt="Gif Expert App Preview" width="600">
  <p>Una aplicación moderna para buscar, explorar y compartir GIFs</p>
  <p><a href="https://gif-expert-app-gold-psi.vercel.app/">Ver demo en vivo</a></p>
</div>

## Descripción
Gif Expert App es una aplicación web que permite buscar GIFs por categoría utilizando la API de Giphy. Con una interfaz intuitiva y responsiva, muestra los resultados en una cuadrícula y permite eliminarlos, recargar nuevos GIFs de la misma categoría y compartirlos con otras personas.

## Características
- 🔍 Barra de búsqueda para encontrar GIFs por categoría
- 🧺 Listado de resultados en cuadrícula centrada
- ❌ Botón de eliminación para quitar GIFs del listado
- 🔄 Botón de reset para obtener un nuevo set de GIFs desde la API
- 📤 Compartir cada GIF mediante:
  - La **Web Share API** (si el navegador es compatible)
  - Un enlace directo a **WhatsApp** con la URL del GIF como alternativa
- 🎨 Interfaz amigable y responsiva

## Tecnologías Utilizadas
- ⚡️ **Vite** - Entorno de desarrollo y empaquetado
- ⚛️ **React 19** - Para la interfaz de usuario
- 📝 **TypeScript** - Para tipado estático y mejor mantenimiento del código
- 💅 **Tailwind CSS** - Para estilos modernos y responsivos
- 🎁 **Giphy API** - Para obtener los GIFs
- 📱 **Web Share API** - Para compartir GIFs de forma nativa
- 📦 **React Icons** - Para los iconos de la interfaz
- 🧪 **Vitest + Testing Library** - Para las pruebas

## Estructura del Proyecto
```
src/
├── assets/           # Imágenes y recursos estáticos
├── components/       # Componentes de React
│   ├── GifExpert.tsx # Componente principal que orquesta la aplicación
│   ├── GifSearch.tsx # Barra de búsqueda
│   ├── GifList.tsx   # Listado de GIFs de una categoría
│   ├── GifCard.tsx   # Tarjeta individual de un GIF
│   ├── Header.tsx
│   └── Footer.tsx
├── config/           # Configuración de la aplicación (API key y URL base)
├── helpers/          # Funciones de ayuda
├── hooks/            # Custom hooks para lógica reutilizable
│   ├── useFetch.tsx     # Hook para obtener GIFs de una categoría
│   └── useShareGif.tsx  # Hook para compartir un GIF (Web Share API / WhatsApp)
├── service/          # Comunicación con APIs
│   └── gifApi.ts     # Funciones para interactuar con la API de Giphy
└── utils/            # Funciones utilitarias
    ├── capitalize.ts # Formateo de texto
    └── utils.ts      # Validaciones generales
tests/                # Pruebas unitarias (componentes y helpers)
```

## Instalación y Uso
### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/IbrahimAlmeyda/gif-expert-app.git
cd gif-expert-app
```

### 2️⃣ Instalar dependencias
```bash
pnpm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_API_KEY_GIPHY=tu_clave_de_giphy
```
> 📝 **Nota**: Puedes obtener una clave gratuita en el [Giphy Developers Portal](https://developers.giphy.com/).

### 4️⃣ Ejecutar en desarrollo
```bash
pnpm dev
```
La aplicación estará disponible en `http://localhost:5173/`

### Otros comandos
| Comando | Descripción |
| --- | --- |
| `pnpm build` | Compila el proyecto para producción |
| `pnpm preview` | Sirve localmente la build de producción |
| `pnpm lint` | Ejecuta ESLint |
| `pnpm test` | Ejecuta las pruebas con Vitest |

## Buenas Prácticas Implementadas
- ✅ **Custom hooks** - Separación de la lógica de negocio y la presentación
- ✅ **Capa de servicios** - Las llamadas a la API están aisladas en `service/`
- ✅ **TypeScript** - Tipado estático en componentes, hooks y servicios
- ✅ **Pruebas unitarias** - Tests con Vitest y Testing Library
- ✅ **Documentación de código** - Comentarios JSDoc en funciones importantes
- ✅ **Optimización de rendimiento** - Uso de `useCallback` y `useRef` en los hooks
- ✅ **Paginación con offset** - El botón de reset obtiene nuevos GIFs sin repetir resultados

## Agradecimientos
- [Giphy API](https://developers.giphy.com/) por proporcionar acceso a los GIFs

## Autor
Desarrollado con ❤️ por **[Ibrahim Almeyda](https://github.com/IbrahimAlmeyda)**.

