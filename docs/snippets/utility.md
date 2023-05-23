#  Convert a base64 string to Uint8Array
```js
function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray; 
};
```

# Slugify string
:::: code-group
::: code-group-item Javascript
```js
const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
```
:::
::: code-group-item PHP
```php
function slugify($str) {
  return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $str), '-'));
}
```
:::
::::