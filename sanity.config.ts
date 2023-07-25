import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import project from './sanity/shcemas/project-schema';

const config = defineConfig({
    projectId: 'rund3bo7',
    dataset: 'production',
    title: 'min-info-side',
    apiVersion: '2023-05-20',
    basePath: '/admin',
    plugins: [deskTool()], 
    schema: { types: [project]} 
    
});

export default config;

