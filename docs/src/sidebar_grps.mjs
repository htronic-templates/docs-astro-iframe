import { readdirSync } from 'fs';
import { extname } from 'path';

/**
 * Generate sidebar entries from a directory
 * - Directories -> { label, autogenerate }
 * - Files -> "filename" (string)
 */
export function generateSidebarGroups(prefix, basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });

  return entries
    .filter((entry) => !entry.name.startsWith('.'))
    .map((entry) => {
      if (entry.isDirectory()) {
        return {
          label: entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
          items: [{ autogenerate: {
            directory: prefix + entry.name,
          } }],
        };
      }

      if (entry.isFile()) {
        const nameWithoutExt = entry.name.replace(extname(entry.name), '');
        const ext = extname(entry.name).toLowerCase();
        // only allow .md and .mdx
        if (ext !== '.md' && ext !== '.mdx') {
          return null;
        }
        // ignore index
        if (nameWithoutExt.toLowerCase() === 'index') {
          return null;
        }
        return prefix + nameWithoutExt;
      }

      return null;
    })
    .filter(Boolean);
}
