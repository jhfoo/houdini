<template>
  <div class="ColContainer">
    <v-toolbar flat dense style="background-color: rgba(0,0,0,0.2)">
      <span>Editor</span>
      <v-spacer></v-spacer>
      <v-btn small fab href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- flex-grow: 10000 to keep toolbar height as styled -->
    <v-list style="background-color: transparent; flex-grow: 10000; overflow-y: auto" dense>
      <WorkingCell :cell="root" :ParentChildrenProxy="getChildrenProxy()" :onSelectCell="onSelectCell"></WorkingCell>

      <!--
      <v-list-item v-for="(idx) in 100" :key="idx">
        <v-list-item-icon>
          <v-icon>mdi-drag</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>line</v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon>mdi-drag</v-icon>
        </v-list-item-icon>
      </v-list-item>
      -->
    </v-list>
  </div>
</template>

<style scoped>
.ColContainer {
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>

<script>
import WorkingCell from '@/components/WorkingCell'

  export default {
    name: 'WorkingCol',
    components: {
      WorkingCell,
    },
    props: ['onSelectCell'],
    data: () => ({
      root: {
        meta: {
          name: 'Root',
          group: 'root',
        },
        data: {
          children: [],
        }
      },
    }),
    mounted() {
      // this.root.meta.ParentGroup = this.$store.getters.SelectedCell.meta.group
    },
    methods: {
      getChildrenProxy() {
        return {
          get: this.getChildren,
          set: this.setChildren,
          sort: this.sortChildren,
          delete: this.deleteChild,
        }
      },
      getChildren() {
        return this.children
      },
      setChildren(NewValue) {
        this.children = NewValue
      }
    }
  }
</script>
