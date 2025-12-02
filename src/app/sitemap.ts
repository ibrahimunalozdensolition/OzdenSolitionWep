import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ozdensolutions.com'

  const routes = [
    '',
    '/mobile-app-development',
    '/web-development',
    '/rpa',
    '/graphic-design',
    '/ai-solutions',
    '/pcb-design',
    '/automation-systems',
    '/social-media-management',
    '/microcontroller-programming',
    '/3d-printing',
    '/cybersecurity',
    '/cloud-devops',
    '/electronic-design',
    '/social-media',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}

