<template>
  <div>
    <v-list-item @click="onSelectCell()">
      <v-list-item-icon>
        <v-icon>mdi-drag</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="cell.meta.name"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
          <v-icon @click="ParentProxy.deleteChild(ChildIndex)">mdi-delete</v-icon>
      </v-list-item-icon>
    </v-list-item>
    <draggable v-if="cell.data.children" v-model="cell.data.children" :group="cell.meta.group" @change="onDragIn" :sort="false">
      <WorkingCell v-for="(child, idx) in cell.data.children" :key="idx" :cell="child" :ParentProxy="MyParentProxy" :ChildIndex="idx"></WorkingCell>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

  export default {
    name: 'WorkingCell',
    components: {
      draggable,
    },
    props: ['cell', 'ParentProxy', 'ChildIndex'],
    data: () => ({
      EditableItems: [],
    }),
    computed: {
      MyParentProxy() {
        return {
          deleteChild: this.deleteChild,
        }
      },
      // children: {
      //   get() {
      //     return this.ParentChildrenProxy.get()
      //   },
      //   set(NewValue) {
      //     this.ParentChildrenProxy.set(NewValue)
      //   }
      // },
      DraggableGroup() {
        return {
          name: this.GroupName,
          pull: 'clone',
          put: true,
        }
      }
    },
    methods: {
      onSelectCell() {
        console.log(`New ParentGroup: ${this.cell.meta.ParentGroup}`)
        this.$store.commit('SelectedCell', this.cell)
      },
      deleteChild(idx) {
        console.log(`Splice: ${idx}`)
        this.cell.data.children.splice(idx,1)
        console.log(this.cell.data.children)
      },
      onDragIn(evt) {
        console.log('Something got added')
        console.log(evt)

        // sort children
        this.cell.data.children.sort((a, b) => {
          return a.meta.order - b.meta.order
        })
      }
    }
  }
</script>
