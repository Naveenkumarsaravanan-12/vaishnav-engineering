import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.vaishnavengineering2009.com'

  const routes = [
    '',
    '/rdso',
    '/company',
    '/company/registration',
    '/approvals/rdso',
    '/approvals/iso',
    '/approvals/third-party',
    '/infrastructure',
    '/quality-policy',
    '/safety',
    '/workforce',
    '/projects',
    '/services',
    '/gallery',
    '/documents',
    '/contact',
    '/about',
    '/team',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/approvals') || route === '/infrastructure' ? 0.9 : 0.8,
  }))
}