<template>
  <main role="main">
    <Nuxt />
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'LayoutsDefault'
})
export default class LayoutsDefault extends Vue {}
</script>

<style>
html,
body {
  @apply m-0 p-0;
}
</style>
