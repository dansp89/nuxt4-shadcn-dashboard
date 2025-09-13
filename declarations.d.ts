// src/declarations.d.ts or /declarations.d.ts

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent<unknown, unknown, unknown>
  export default component
}

// Add this if you're using .scss files
declare module '*.scss' {
  const content: { [className: string]: string }
  export default content
}

// Add this if you're using .css files
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
