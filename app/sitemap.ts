import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.vaishnavengineering2009.com',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vaishnavengineering2009.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vaishnavengineering2009.com/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vaishnavengineering2009.com/services',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vaishnavengineering2009.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://www.vaishnavengineering2009.com/team',
      lastModified: new Date(),
    },
  ]
}