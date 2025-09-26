# Portafolio 

## 🚀 Tecnologías utilizadas
- HTML5
- SCSS (Sass)
- JavaScript (ES6+)
- Librerías: FontAwesome, Particles.js
- Deploy: Netlify

## 📁 Estructura del proyecto
- `index.html` — Página principal
- `src/scss/` — Estilos SCSS organizados por secciones, layouts y utilidades
- `assets/js/` — Componentes JS (navegación, animaciones, formulario, etc.)
- `assets/img/` — Imágenes y recursos gráficos
- `dist/css/` — CSS compilado

## 🛠️ Instalación y uso local
1. Clona el repositorio:
   ```
   git clone https://github.com/evar-7/portafolio.git
   ```
2. Instala dependencias (requiere Node.js y npm):
   ```
   npm install
   npm install sass
   npm install particles.js
   npm install @fortawesome/fontawesome-free
   ```
3. Compila los estilos SCSS:
   ```
   npm run build
   ```
4. Abre `index.html` en tu navegador.

## 📁 Estructura de carpetas

```text
index.html
netlify.toml
package.json
README.md
assets/
   documents/
      CV_Erick_Vargas.pdf
   img/
      dev_gif.gif
      photos/
         foto.jpg
         README.md
      skills/
         git.png
         java.png
         javascript.png
         php.png
         python.png
         react.png
         springboot.png
         sql.png
   js/
      main.js
      components/
         animations.js
         form.js
         mobile-menu.js
         navigation.js
         particles.js
      utils/
         constants.js
         helpers.js
src/
   scss/
      main.scss
      base/
         _reset.scss
         _theme-switch.scss
         _typography.scss
         _variables.scss
      components/
         _buttons.scss
         _cards.scss
         _navigation.scss
      layouts/
         _footer.scss
         _header.scss
      sections/
         _about.scss
         _skills.scss
      utils/
         _helpers.scss
         _mixins.scss
```
## 🌐 Deploy
El sitio se despliega automáticamente en Netlify al hacer push a la rama `master`.

## ✨ Características destacadas
- Modo claro/oscuro con switch animado
- Animaciones de entrada y partículas en el header
- Modal de contacto flotante
- Diseño responsive
- Código modular

## 📬 Contacto
- Email: L.ev.var52@gmail.com
- LinkedIn: https://linkedin.com/in/erickvargas7
- GitHub: https://github.com/evar-7

---