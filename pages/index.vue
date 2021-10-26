<template>
  <guidelines />
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Guidelines from '../components/Guidelines.vue'

@Component({
  name: 'PageIndex',
  components: {
    Guidelines
  }
})
export default class PageIndex extends Vue {}
</script>
