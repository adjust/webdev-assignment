<template>
  <div class="m-4">
    <h1 class="my-6 text-center text-3xl font-bold">
      Hello and welcome to our Coding Challenge!
    </h1>

    <div class="rounded-xl bg-blue-100 p-8 container max-w-screen-sm mx-auto">
      <p>We hope you have as much fun solving it, as we did when making it.</p>

      <p>We have put together this basic <strong>NuxtJS</strong> boilerplate to help you get started faster.</p>

      <p>It already includes the things you will need:</p>

      <ul class="pl-8 my-4 list-disc">
        <li class="mb-4">
          <i>NuxtJS + Typescript <br>(We added "nuxt-property-decorator" plugin for the TS syntax, but you can remove it if you don't want it)</i>
        </li>

        <li class="mb-4">
          <i>Jest</i>
        </li>

        <li class="mb-4">
          <a href="https://tailwindcss.com/" target="_blank">
            <i>TailwindCSS</i>
          </a>
        </li>
      </ul>

      <p>Note: It is totally up to you to use all of the things in the list or just some of them. Additionally, you can add new things should you need them.</p>

      <p>
        Check <strong>Readme.md</strong> for information. <br>
        Feel free to DELETE this component to get started!
      </p>

      <p>Good luck! 👋</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'Guidelines'
})
export default class Guidelines extends Vue {}
</script>

<style>
p {
  @apply leading-8;
}
</style>
