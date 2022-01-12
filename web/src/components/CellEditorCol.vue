<template>
  <div class="ColContainer">
    <v-toolbar flat dense style="background-color: rgba(0,0,0,0.2)">
      <span>Cell Attributes</span>
      <v-spacer></v-spacer>
      <v-btn small fab href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-text-field label="Type" v-model="CellType" disabled>
          </v-text-field>
        </v-col>
        <v-col cols="6">
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-subheader>PROPERTIES ({{CellProperties.length}})</v-subheader>
          <template v-for="(prop, idx) in CellProperties">
            <v-text-field v-if="prop.type === 'string'" :key="'prop' + idx" :label="prop.name" v-model="CellData[prop.name]"></v-text-field>
            <v-text-field v-if="prop.type === 'int'" :key="'prop' + idx" :label="prop.name" v-model="CellData[prop.name]"></v-text-field>
            <v-select v-if="prop.type === 'dropdown'" :key="'prop' + idx" :label="prop.name" v-model="CellData[prop.name]" :items="prop.data" item-text="name" item-value="value"></v-select>
          </template>
        </v-col>
      </v-row>
    </v-container>
    <!-- flex-grow: 10000 to keep toolbar height as styled -->
    <v-list style="background-color: transparent; flex-grow: 10000; overflow-y: auto" dense>

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
// eslint-disable-next-line
import Const from '@/Const'
import axios from 'axios'

  export default {
    name: 'CellEditorCol',
    components: {
    },
    props: [],
    data: () => ({
      CellType: 'NA',
      CellProperties: [],
      CellData: {},
    }),
    mounted() {
    },
    methods: {
      clone(OrigObj) {
        return JSON.parse(JSON.stringify(OrigObj))
      },
      async getRemoteDropdown(RemoteDropdownStr) {
        if (RemoteDropdownStr.startsWith('local@')) {
          console.log(`Loading local KV file: ${RemoteDropdownStr}`)
          const re = RegExp(/^local@(.+):(.+)$/g)
          const matches = re.exec(RemoteDropdownStr)
          if (matches) {
            try {
              // eslint-disable-next-line
              const resp = await axios.get(matches[1])
              return eval('resp.data.' + matches[2])
            } catch (err) {
              console.error(err)
            }
          }
          return []
        }
        console.log(RemoteDropdownStr)

        return [{
          name: 'IAD1',
          value: 'IAD1',
        }, {
          name: 'ABC1',
        }]
      },
      async expandProperties(RawProperties) {
        const ret = []
        const CloneProps = this.clone(RawProperties) 
        while (CloneProps.length > 0) {
          const RawProp = CloneProps.shift()
          if (RawProp.type === 'DynDropdown') {
            // transform property
            RawProp.type = 'dropdown'
            RawProp.data = await this.getRemoteDropdown(RawProp.data)
          } 
          
          ret.push(RawProp)
        }

        return ret
      }
    },
    watch: {
      '$store.getters.SelectedCell': async function(NewVal, OldVal) {
        console.log(`OldVal: ${JSON.stringify(OldVal, null, 2)}`)
        console.log(`NewVal: ${JSON.stringify(NewVal, null, 2)}`)
        this.CellType = NewVal.meta.name
        this.CellProperties = await this.expandProperties(NewVal.meta.properties ? NewVal.meta.properties : [])
        this.CellData = NewVal.data
      },
    }
  }
</script>
