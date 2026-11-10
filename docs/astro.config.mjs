// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeTerminal from 'starlight-theme-terminal';
import starlightSidebarTopics from 'starlight-sidebar-topics';
import starlightAutoDrafts from 'starlight-auto-drafts';
import { generateSidebarGroups } from './src/sidebar_grps.mjs';
import { reloadIframeCss } from './src/watch_iframe_styles.mjs'
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://htronic-templates.github.io/docs-astro-template/',
  base: '/docs-astro-template',

  integrations: [
    starlight({
      title: 'Template Docs Page',
      customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/htronic-templates/docs-astro-template' }],
      plugins: [
    starlightThemeTerminal(),
        starlightSidebarTopics([
          {
            label: 'Components',
            icon: 'open-book',
            link: '/components/',
        items: generateSidebarGroups('components/', './src/content/docs/components'),
          },
          {
            label: 'Topic2',
            icon: 'open-book',
            link: '/topic2/',
            items: generateSidebarGroups('topic2/', './src/content/docs/topic2'),
          },
          ],
    ),
        starlightAutoDrafts(),
      ],
    }),
  ],
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss(), reloadIframeCss()],
  },
});
