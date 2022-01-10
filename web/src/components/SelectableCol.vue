<template>
  <div class="ColContainer">
    <v-toolbar flat dense style="background-color: rgba(0,0,0,0.2)">
      <span>Available</span>
      <v-spacer></v-spacer>
      <v-btn small fab href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list style="background-color: transparent; flex-grow: 10000; overflow-y: auto" dense>
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

    <v-toolbar flat dense style="background-color: rgba(0,0,0,0.2)">
      <span>Footer</span>
      <v-spacer></v-spacer>
      <v-btn small fab href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
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
      this.setParentGroup()
    },
    watch: {
      '$store.state.SelectedCell': function() {
        console.log(`Changed: SelectedCell`)
        console.log(`ParentGroup: ${this.$store.getters.SelectedCell.meta.ParentGroup}`)
        this.setParentGroup()
      }
    },
    methods: {
      setParentGroup() {
        if (this.$store.getters.SelectedCell) {
          const NewParentGroup = this.$store.getters.SelectedCell.meta.group
          this.SelectableItems = this.getEligibleComponents(NewParentGroup)
          this.DraggableGroup.name = NewParentGroup
        }
      },
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