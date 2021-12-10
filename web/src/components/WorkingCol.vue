<template>
  <div>
    <v-toolbar flat dense style="background-color: rgba(0,0,0,0.2)">
      <span>Editor</span>
      <v-spacer></v-spacer>
      <v-btn small fab href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list style="background-color: transparent" dense>
      <WorkingCell group="all" :ParentChildrenProxy="getChildrenProxy()"></WorkingCell>
    </v-list>
  </div>
</template>

<script>
import WorkingCell from '@/components/WorkingCell'

  export default {
    name: 'WorkingCol',
    components: {
      WorkingCell,
    },
    data: () => ({
      children: [],
    }),
    methods: {
      getChildrenProxy() {
        return {
          get: this.getChildren,
          set: this.setChildren,
          sort: this.sortChildren,
        }
      },
      sortChildren() {
        console.log('Sorting children')
        this.children.sort((a, b) => {
          return a.order - b.order
        })
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
