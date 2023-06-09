# [Tailwindcss](https://tailwindcss.com/)
Es gibt seit geraumer Zeit einen gewissen Hype um dieses CSS - Framework / Library.

Und nach anfänglicher Skepsis, bin ich einfach begeistert. Die Dokumentation ist großartig.

For some time there as a hype around tailwindcss...
At the start I was sceptical, but after using it for just one day I'm in awe.
It's pretty easy to setup and not having to search in various CSS files given that you are not using a Javascript Framework. Even if you use a Framework it's amazing. My biggest reason for using it is the dark mode feature & it being expressive. 
Just with a prefix 'dark:' you can easily add the CSS feature in dark mode. By default it uses the preferes-color-schema.

A very useful feature is the extension for [VS Code](https://code.visualstudio.com/). Just go to extensions and search Tailwind Css IntelliSense. After installing you get all the autocompletion you can imagine. It also supports prefixes if you can't use the default class names.


---
## Darkmode
If you are using a specific prefix in the config file of tailwind (tailwind.config.js) with 'class' for toggling:
```
darkMode: 'class',
prefix: 'tw-'
```
you need to add 'PREFIX-dark' to the documentElement


## Stack
- [Vite](https://vitejs.dev/)
- Vue 3
- Tailwind

## Source
[Github repo](https://github.com/BKeanu1989/tutorial-tailwind-setup)

```zh
npm create vite@latest tailwind-vue3 -- --template vue
```

```zh

npm install -D concurrently
```

```json
  "scripts": {
    "dev": "concurrently \"vite\" \"npm run dev:setup\"",
    "build": "vite build",
    "preview": "vite preview",
    "dev:setup": "npx tailwindcss -i ./src/input.css -o ./src/assets/tailwind.build.css --watch"
  },
```