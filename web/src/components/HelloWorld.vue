<template>
  <v-container fluid fill-height class="pa-0" style="align-items: stretch">
    <v-row class="text-center" no-gutters style="">
      <v-col cols="3" class="text-left" style="background-color: #abc">
        <SelectableCol></SelectableCol>
      </v-col>

      <v-col cols="4" class="text-left" style="background-color: #cba">
        <WorkingCol></WorkingCol>
      </v-col>
      <v-col cols="5" style="">
        <v-toolbar flat dense style="background-color: transparent">
          <span>YAML</span>
          <v-spacer></v-spacer>
          <v-btn small fab href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.FlexContainer {
  display: flex;
  overflow: hidden;
  flex: 1 1 auto;
  flex-direction: column;
}
</style>

<script>
import SelectableCol from '@/components/SelectableCol'
import WorkingCol from '@/components/WorkingCol'

  export default {
    name: 'HelloWorld',
    components: {
      SelectableCol,
      WorkingCol,
    },
    data: () => ({
    }),
  }
</script>
