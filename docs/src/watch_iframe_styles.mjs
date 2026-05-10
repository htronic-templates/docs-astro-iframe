import path from 'node:path';

// Force a Reload of the page if anything under
// ./src/styles/neon-ui-css is updated
export function reloadIframeCss() {
  var stylesDir = path.resolve('./src/styles/neon-ui-css');
  stylesDir = stylesDir.replace(/\\/g, '/')

  return {
    name: 'reload-iframe-css',
    handleHotUpdate({ file, server }) {
      console.log(`File ${file} has been changed`)
      if (file.startsWith(stylesDir)) {
        server.ws.send({ type: 'full-reload' });
      }
    },
  };
}
