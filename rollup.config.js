import path from 'path';
import { fileURLToPath } from 'url';
import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const extensions = ['.ts', '.js'];

const preventTreeShakingPlugin = () => ({
    name: 'no-treeshaking',
    resolveId(id, importer) {
        if (!importer) {
            return { id, moduleSideEffects: 'no-treeshake' };
        }
        return null;
    },
});

export default {
    input: './src/index.ts',
    output: {
        file: 'build/index.js',
        format: 'cjs',
    },
    plugins: [
        alias({
            entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
        }),
        preventTreeShakingPlugin(),
        nodeResolve({
            extensions,
            mainFields: ['jsnext:main', 'main'],
        }),
        babel({ extensions, babelHelpers: 'runtime' }),
    ],
};
