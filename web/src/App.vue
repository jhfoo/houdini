<template>
  <v-app class="app">
    <v-app-bar app color="primary" dark dense flat clipped-left>
      <div class="d-flex align-center">
        Houdini
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <Sidebar/>

    <v-main class="main">
      <HelloWorld></HelloWorld>
    </v-main>
  </v-app>
</template>

<style>
html { 
  overflow-y: auto;
}

html, body, .app, .main {
  height: 100%;
}
body {
  margin: 0;
}
</style>

<script>

import HelloWorld from './components/HelloWorld';
import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Sidebar,
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
