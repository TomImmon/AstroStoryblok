import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
const env = loadEnv("", process.cwd(), 'STORYBLOK')

export default defineConfig({
  integrations: [
  storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
        page: 'storyblok/Page',
      config: 'storyblok/Config',
        feature: 'storyblok/Feature',
        grid: 'storyblok/Grid',
        teaser: 'storyblok/Teaser',
      hero: 'storyblok/Hero',
      'popular-articles': 'storyblok/PopularArticles',
      'all-articles': 'storyblok/AllArticles',
      article: 'storyblok/Article',
      },
  }), 
    tailwind()
 ],

  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },

  apiOptions: {
   region: "de",
  },

  output: 'server',
  adapter: vercel(),
})