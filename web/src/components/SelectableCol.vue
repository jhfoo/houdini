<template>
  <div>
    <v-toolbar flat dense style="background-color: rgba(0,0,0,0.2)">
      <span>Available</span>
      <v-spacer></v-spacer>
      <v-btn small fab href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list style="background-color: transparent" dense>
      <draggable v-model="SelectableItems" :group="DraggableGroup" :sort="false">
        <v-list-item v-for="(item, idx) in SelectableItems" :key="idx">
          <v-list-item-icon>
            <v-icon>mdi-drag</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon>mdi-drag</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </draggable>
    </v-list>
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
          return item.ParentGroup === ParentGroup
        })
        ret.sort((a, b) => {
          return a.order - b.order
        })
        return ret
      }
    }
  }
</script>