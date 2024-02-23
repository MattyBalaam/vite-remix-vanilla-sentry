import * as styles from './test.css.ts' 

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class=${styles.root}>
    <h1>Vite + TypeScript</h1>
  </div>
`

