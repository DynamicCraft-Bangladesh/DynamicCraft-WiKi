import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.dynamiccraft.xyz/',
  base: '/',
  integrations: [starlight({
    title: 'DynamicCraft WiKi 📕',
    logo: {
      src: './src/assets/dynamiccraft-logo.png'
    },
    social: {
      github: 'https://github.com/DynamicCraft-Bangladesh/DynamicCraft-WiKi'
    },
    sidebar: [
    {
      label: '[home] Home',
      link: '/'
    },
    {
      label: '[list] Rules',
      link: '/rules/'
    },
    {
      label: '[book] Guide',
      autogenerate: {
        directory: 'guide'
      }
    },
    {
      label: '[box] Survival',
      autogenerate: {
        directory: 'survival'
      }
    },
    {
      label: '[box] Bed Wars',
      autogenerate: {
        directory: 'bedwars'
      }
    },
    {
      label: '[box] Sky Block',
      autogenerate: {
        directory: 'skyblock'
      }
    },
    {
      label: '[book] Patch Notes',
      autogenerate: {
        directory: 'patchnotes'
    },
      
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro',
    },
    customCss: [
      '@fontsource-variable/space-grotesk/index.css',
      '@fontsource/space-mono/400.css',
      '@fontsource/space-mono/700.css',
      './src/styles/theme.css'
    ],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: false,
    lastUpdated: true
  })],
  output: "static"
});