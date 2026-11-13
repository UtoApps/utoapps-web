# utoapps-web

Sitio de **UtoApps** — www.utoapps.ch. Estático, cinco idiomas, sin dependencias externas.

⚠️ **No se edita aquí.** Este repositorio es solo el resultado publicado.
La fuente vive en `~/projects/UtoApps/web/`:

- `site/index.html` — entregable auditado de Claude Design. **Intocable.**
- `landing-copy-5-idiomas.json` — textos de la landing (auditoría legal suiza).
- `legal-copy-5-idiomas.json` — textos del aviso legal y la privacidad.
- `build-site.py` — genera `dist/`. Parchea el origen a la salida con aserciones:
  si el origen cambia y un parche deja de encajar, el build falla.

Para republicar: `python3 build-site.py && bash publicar.sh`
