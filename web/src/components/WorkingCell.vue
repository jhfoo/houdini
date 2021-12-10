<template>
  <draggable v-model="children" :group="DraggableGroup" @change="onDragIn" :sort="false">
    <v-list-item v-for="(item, idx) in children" :key="idx">
      <v-list-item-icon>
        <v-icon>mdi-drag</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon>mdi-delete</v-icon>
      </v-list-item-icon>
    </v-list-item>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

  export default {
    name: 'WorkingCell',
    components: {
      draggable,
    },
    props: ['GroupName', 'ParentChildrenProxy'],
    data: () => ({
      EditableItems: [],
    }),
    computed: {
      children: {
        get() {
          return this.ParentChildrenProxy.get()
        },
        set(NewValue) {
          this.ParentChildrenProxy.set(NewValue)
        }
      },
      DraggableGroup() {
        return {
          name: this.GroupName,
          pull: 'clone',
          put: true,
        }
      }
    },
    methods: {
      onDragIn(evt) {
        console.log('Something got added')
        console.log(evt)
        this.ParentChildrenProxy.sort()
      }
    }
  }
</script>
