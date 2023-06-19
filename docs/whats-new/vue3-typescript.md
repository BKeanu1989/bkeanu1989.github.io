# Whats new in Vue 3.3
Developer experience enhancements with Typescript.
https://blog.vuejs.org/posts/vue-3-3

::: warning
Dependency Updates

When upgrading to 3.3, it is recommended to also update the following dependencies:

volar / vue-tsc@^1.6.4
vite@^4.3.5
@vitejs/plugin-vue@^4.2.0
vue-loader@^17.1.0 (if using webpack or vue-cli)
:::

## Complex Type support in macros
```vue
<script setup lang="ts">
import type { Props } from './foo'

// imported + intersection type
defineProps<Props & { extraProp?: string }>()
</script>
```

## Generic Support
```vue
<script setup lang="ts" generic="T">
defineProps<{
  items: T[]
  selected: T
}>()
</script>
```

## Typed slots
```vue
<script setup lang="ts">
defineSlots<{
  default?: (props: { msg: string }) => any
  item?: (props: { id: number }) => any
}>()
</script>
```

### Better getter support with toRef & toValue
```vue
// equivalent to ref(1)
toRef(1)
// creates a readonly ref that calls the getter on .value access
toRef(() => props.foo)
// returns existing refs as-is
toRef(existingRef)

toValue(1) //       --> 1
toValue(ref(1)) //  --> 1
toValue(() => 1) // --> 1
```