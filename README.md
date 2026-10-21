# Gif Search App

Aplicación web desarrollada con **Vite + React + TypeScript** que permite explorar y compartir GIFs de manera interactiva, utilizando la API de Giphy.

---

## 🚀 Características

- 🔍 **Barra de búsqueda** para encontrar GIFs por categoría.
- 🧠 **Consulta a la API de Giphy** para obtener GIFs según la categoría ingresada.
- 🧺 **Listado de resultados** que muestra los GIFs obtenidos.
- ❌ **Botón de eliminación** para quitar GIFs del listado.
- 🔄 **Botón de reset** para obtener un nuevo set de GIFs desde la API.
- 📤 **Funcionalidad de compartir** cada GIF usando:
  - La **Web Share API** (si es compatible con el navegador).
  - O un enlace directo a **WhatsApp** con la URL del GIF.

---

## 🖼️ Capturas de pantalla

![Vista de productos](./src/assets/images/desktop-preview.webp)
Puedes ver la versión demo en vivo aquí: [Gif Expert App](https://gif-expert-app-gold-psi.vercel.app/)
---

## 🧪 Tecnologías usadas

- ⚡️ [Vite](https://vitejs.dev/)
- ⚛️ [React](https://reactjs.org/)
- 💬 [TypeScript](https://www.typescriptlang.org/)
- 🎁 [Giphy API](https://developers.giphy.com/)
- 📱 [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API)
- 📦 [React Icons](https://react-icons.github.io/react-icons/)

---

## 📦 Instalación

```bash
# Clona el repositorio
git clone https://github.com/IbrahimAlmeyda/gif-expert-app.git

# Entra al proyecto
cd gif-expert-app

# Instala las dependencias
npm install
```

---

## 🧪 Ejecución en desarrollo

```bash
npm run dev
```

---

## 🔐 Variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de la API de Giphy:

```env
VITE_GIPHY_API_KEY=tu_clave_aqui
```

---

## 👨‍💻 Autor

Desarrollado por **[Ibrahim Almeyda](https://github.com/IbrahimAlmeyda)**.
