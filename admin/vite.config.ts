import path from 'path'
import { UserConfig } from 'vite'

function resolve(dir: string): string {
    return path.resolve(__dirname, '.', dir)
}

const config: UserConfig = {

    base: './',

    port: 3000,

    hostname: 'localhost',

    open: false,

    outDir: 'dist',
    
    sourcemap: true,

    assetsDir: '_assets',

    assetsInlineLimit: 4096,

    esbuildTarget: 'es2020',
    
    silent: true,

    alias: {
        '/@/': resolve('src')
    }
}

export default config;
