# 🎁 Página Web de Regalos Interactiva

Una página web hermosa e interactiva para mostrar regalos especiales del 11 al 27, diseñada con React y Vite.

## ✨ Características

- **Diseño Moderno y Romántico**: Interfaz elegante con gradientes y animaciones suaves
- **Interactividad**: Haz clic en cada regalo para ver los detalles
- **Animaciones**: Efectos visuales sorprendentes con corazones flotantes y confeti
- **Responsive**: Se adapta perfectamente a dispositivos móviles y tablets
- **Modal Detallado**: Vista ampliada de cada regalo con información completa

## 🚀 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en la URL que aparece en la terminal (generalmente `http://localhost:5173`)

## 📦 Construcción para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

## 🎨 Personalización

Los regalos están definidos en `src/App.jsx`. Puedes editar el array `gifts` para agregar, modificar o eliminar regalos:

```javascript
const gifts = [
  { id: 11, title: "Tu regalo aquí", emoji: "🎁" },
  // ... más regalos
]
```

Los regalos 25, 26 y 27 están como placeholders y puedes actualizarlos con el contenido real cuando lo tengas.

## 🛠️ Tecnologías Utilizadas

- React 18
- Vite
- CSS3 con animaciones avanzadas
- Diseño responsive con CSS Grid

## 💝 Características Especiales

- **Corazones Flotantes**: Animación de fondo con corazones que flotan suavemente
- **Efectos de Hover**: Cada regalo tiene animaciones al pasar el mouse
- **Modal con Confeti**: Al abrir un regalo, aparece confeti animado
- **Gradientes Dinámicos**: Fondos con gradientes que cambian según el estado del regalo
- **Transiciones Suaves**: Todas las interacciones tienen transiciones fluidas

¡Disfruta sorprendiendo a tu pareja con esta página especial! 💖
