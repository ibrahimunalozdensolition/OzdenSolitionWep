import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ozdensolutions.com'

  const routes = [
    '',
    '/ai-chat',
    '/ai-solutions',
    '/mobile-app-development',
    '/web-development',
    '/rpa',
    '/3d-printing',
    '/electronic-design',
    '/automation-systems',
    '/microcontroller-programming',
    '/social-media',
    '/graphic-design',
    '/cybersecurity',
    '/cloud-devops',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))
}

