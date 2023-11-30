## Vite Unexpected token
out of nowhere this error came to shine
```txt
[vite:vue] Error parsing JavaScript expression: Unexpected token (1:13)

6  |  const isOpen = ref(false);
[2] 7  |  const currentAngle = ref(0);
[2] 8  |  const _svg = ref<HTMLElement | null>(null)
[2]    |                                             ^
[2] 9  |  const props = defineProps({
[2]    |  ^^^^^^^^^^^^
```

error message was misleading, i forgot to correctly pass a prop to a component. 


## Docker Desktop hangs forever during startup (windows 10 / 11)
optionalfeatures
-> uncheck wsl linux -> restart -> check wsl linux -> restart
fixed