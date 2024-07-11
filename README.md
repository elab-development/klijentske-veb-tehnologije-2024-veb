# Zahtevi

1. Minimum 4 stranice
2. Minimum 3 reusable komponente (lol)
3. Minimum 6 funkcionalnosti **razlicitih od onih iz skripte**
4. Obavezno koriscenje hook-ova: `useState`, `useEffect`, `useLocation`...
5. Minimum jedna klasa sa metodama koje se aktivno koriste u aplikaciji
6. Minimum jedan interfejs sa metodama koje se aktivno koriste
7. react-router-dom
8. Odvojeni folder za modele i komponente

> Pošto ne piše u zahtevima, čekam odgovor da li za ovaj domaći treba da se radi prema dizajnu iz figme...

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
