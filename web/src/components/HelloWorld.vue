<template>
  <div class="BigContainer">
    <div class="Col1">
      <SelectableCol></SelectableCol>
    </div>
    <div class="Col2">
      <WorkingCol :onSelectCell="onSelectCell"></WorkingCol>
    </div>
    <div class="Col3">
      <CellEditorCol></CellEditorCol>
      <!--
      <div class="ColContainer">
        <div id="content">
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
          <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
            <p>Dynamic size with scrollbar</p>
        </div>
      </div>
      -->
    </div>
  </div>
</template>

<style scoped>
.BigContainer {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row !important; 
}

.FlexContainer {
  display: flex;
  overflow: hidden;
  flex: 1 1 auto;
  flex-direction: column;
}

.ColContainer {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.Col1 {
  flex-grow: 2;
}
.Col2 {
  flex-grow: 3;
}
.Col3 {
  flex-grow: 7;
}
#head {
    border: green solid 1px;
    flex-shrink: 0;
}

#content{
    border: red solid 1px;
    overflow-y: auto;
    /*height: 100%;*/
}

#foot {
    border: blue solid 1px;
    height: 100px;
    flex-shrink: 0;
}

</style>

<script>
import SelectableCol from '@/components/SelectableCol'
import WorkingCol from '@/components/WorkingCol'
import CellEditorCol from '@/components/CellEditorCol'

export default {
  name: 'HelloWorld',
  components: {
    SelectableCol,
    WorkingCol,
    CellEditorCol,
  },
  data: () => ({
  }),
  mounted() {
    this.$store.commit('SelectedCell', {
      meta: {
        name: 'Root',
        group: 'root',
      }
    })
  },
  methods: {
    onSelectCell(cell) {
      console.log('HelloWorld: onSelectCell')
      console.log(cell)
    }
  }
}
</script>
