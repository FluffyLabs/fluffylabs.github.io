import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const resolveFromRoot = (target) => path.resolve(projectRoot, target)

export default defineConfig({
    plugins: [react()],
    resolve: {
        // `@fluffylabs/shared-ui` is linked via `file:../shared-ui`, so without
        // dedupe/alias Vite can resolve a second React copy from that workspace.
        preserveSymlinks: true,
        dedupe: ['react', 'react-dom'],
        alias: {
            react: resolveFromRoot('node_modules/react'),
            'react-dom': resolveFromRoot('node_modules/react-dom'),
            'react/jsx-runtime': resolveFromRoot('node_modules/react/jsx-runtime.js'),
            'react/jsx-dev-runtime': resolveFromRoot('node_modules/react/jsx-dev-runtime.js'),
        },
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
})
