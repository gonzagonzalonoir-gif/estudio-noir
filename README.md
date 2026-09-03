# Estudio Noir — sitio web

Sitio construido con [Eleventy](https://www.11ty.dev/) y editable desde un panel de administración privado ([Decap CMS](https://decapcms.org/)) conectado a este repositorio de GitHub.

## Primeros pasos

1. En `src/admin/config.yml`, la línea `repo:` ya apunta a `gonzagonzalonoir-gif/estudio-noir`.
2. Instalar dependencias:
   ```
   npm install
   ```
3. Servir en local:
   ```
   npm run serve
   ```
4. Generar el sitio de producción:
   ```
   npm run build
   ```

El sitio se despliega automáticamente en Netlify a partir de este repositorio (ver `netlify.toml`). El panel de edición vive en `/admin` una vez publicado el sitio.
