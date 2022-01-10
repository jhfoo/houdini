<template>
  <div style="display: flex; flex-direction: column; height: 100%; overflow-y: auto">
    <v-toolbar flat dense style="background-color: rgba(0,0,0,0.2); flex-shrink: 0">
      <span>Available</span>
      <v-spacer></v-spacer>
      <v-btn small fab href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list style="background-color: transparent; flex-grow: 10" dense>
      <draggable v-model="SelectableItems" :group="DraggableGroup" :sort="false">
        <v-list-item v-for="(item, idx) in SelectableItems" :key="idx">
          <v-list-item-icon>
            <v-icon>mdi-drag</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.meta.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-drag</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </draggable>
    </v-list>

    <div style="flex-shrink: 0; flex-grow: 10; overflow-y: auto">
      <div v-for="(i, idx) in 100" :key="idx">xxx</div>
    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Const from '@/Const'

  export default {
    name: 'SelectableCol',
    components: {
      draggable,
    },
    data: () => ({
      DraggableGroup: {
        name: 'all',
        pull: 'clone',
        put: false,
      },
      SelectableItems: [],
    }),
    mounted() {
      this.SelectableItems = this.getEligibleComponents('root')
    },
    methods: {
      getEligibleComponents(ParentGroup) {
        let ret = Const.ComponentSchema.filter((item) => {
          return item.meta.ParentGroup === ParentGroup
        })
        ret.sort((a, b) => {
          return a.meta.order - b.meta.order
        })
        return ret
      }
    }
  }
</script>