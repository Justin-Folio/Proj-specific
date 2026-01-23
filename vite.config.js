import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        module: resolve(__dirname, 'module.html'),
        examples: resolve(__dirname, 'examples.html'),
        learningPath: resolve(__dirname, 'learning-path.html'),
        practiceLab: resolve(__dirname, 'practice-lab.html'),
        topics: resolve(__dirname, 'topics.html'),
        workflow: resolve(__dirname, 'workflow.html'),
        successCriteria: resolve(__dirname, 'successcriteria.html'),
        edgeCases: resolve(__dirname, 'edgecases.html')
      }
    }
  }
});
