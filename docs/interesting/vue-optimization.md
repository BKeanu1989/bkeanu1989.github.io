# Vue Performance Optimizations

## v-memo
kinda like reacts. useEffect, but here without an dependency array, we get the same functionality like v-once
```vue
<p v-memo="[count]"">
    {{ count }} - {{ msg }}
</p>
```
in this example the paragraph only rerenders, when count changes.

## v-once
only renders once. applicable for long list, which do not change.