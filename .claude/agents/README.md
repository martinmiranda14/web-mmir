# Agentes — web-mmir

Agentes especializados para el sitio CV/portafolio de Martín Miranda (`martinmiranda.org`).

## Disponibles (5)

| Agente | Cuándo usarlo |
| --- | --- |
| 🖥️ [Frontend Developer](frontend-developer.md) | Componentes Astro, páginas, layout, i18n, Tailwind |
| 🎨 [UI Designer](ui-designer.md) | Decisiones visuales, tokens de diseño, coherencia estética |
| 🔍 [SEO Specialist](seo-specialist.md) | Meta tags, structured data, sitemap, contenido orgánico |
| ✍️ [Content Curator](content-curator.md) | Editar MDX de proyectos/skills/experiencia/educación/certificaciones |
| 🚀 [DevOps Deploy](devops-deploy.md) | Build, GitHub Actions, GitHub Pages, dominio custom |

## Modelo de colaboración

- **Content Curator** ↔ **Frontend Developer**: el curator solo edita MDX bajo el schema. Cambios al schema en sí los hace el frontend dev.
- **UI Designer** → **Frontend Developer**: UI designer especifica con tokens; frontend dev implementa.
- **SEO Specialist** → **Frontend Developer**: SEO propone meta/JSON-LD; frontend dev integra a los componentes SEO.
- **DevOps Deploy**: independiente — interviene cuando el deploy se rompe o hay que tocar el workflow.
