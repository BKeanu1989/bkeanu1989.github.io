https://stevenklambert.com/writing/comprehensive-guide-building-packaging-electron-app/

```js
    contextBridge.exposeInMainWorld(
      'api', {
        send: (channel, data) => {
          // allow only specific channels
          const validChannels = ['toMain', 'foo-bar'];
          if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
          }
        },
        receive: (channel, func) => {
          const validChannels = ['fromMain', 'bar-baz'];
          if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender` 
            ipcRenderer.on(channel, (event, ...args) => func(...args));
          }
        }
      }
    );
```

# Docker Wp /Wp Cli
https://mklasen.com/adding-and-using-wp-cli-in-a-docker-compose-setup/
https://stackoverflow.com/questions/40905761/how-do-i-mount-a-host-directory-as-a-volume-in-docker-compose - mounts & volumes

## App Provide Vue 3

https://vuejs.org/guide/components/provide-inject.html#app-level-provide

```js
import { createApp } from 'vue'

const app = createApp({})

app.provide(/* key */ 'message', /* value */ 'hello!')

```

### Php Character Encodings
```php
foreach(mb_list_encodings() as $chr){
    echo mb_convert_encoding($post_content, 'UTF-8', $chr)." : ".$chr."<br>";   
    echo "<br>";
}   

```
```txt
open office calc
open with Windows Latin Encoding
save as new file with encoding via 'save' interface 

```

## [degit](https://github.com/Rich-Harris/degit)
boilerplate installs via user/repo link. can bis used as
```zh
npx degit
```

:::: code-group
::: code-group-item 
```zh
degit user/repo

```
:::
::: code-group-item example 1
```zh
npx degit https://github.com/huibizhang/template-vite-vue-ts-tailwind-v3 tailwind-vue3

```
:::
::::