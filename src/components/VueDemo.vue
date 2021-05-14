<template>
  <div class="custom-tree-container">
    <div class="div df-bg-primary df-half-width">13456</div>
    <div class="block">
      <p>使用 select-tree</p>
      <df-tree-select
        :value="value"
        :data="data"
        :multiple="multiple"
        :valueType="valueType"
        :filterNodeMethod="filterNode"
      >
      </df-tree-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const data = [{
      id: 1,
      label: '一级 1',
      children: [{
        id: 4,
        label: '二级 1-1',
        children: [{
          id: 9,
          label: '三级 1-1-1'
        }, {
          id: 10,
          label: '三级 1-1-2'
        }]
      }]
    }, {
      id: 2,
      label: '一级 2',
      children: [{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 6,
        label: '二级 2-2'
      }]
    }, {
      id: 3,
      label: '一级 3',
      children: [{
        id: 7,
        label: '二级 3-1'
      }, {
        id: 8,
        label: '二级 3-2'
      }]
    }];
    return {
      value: '',
      data: JSON.parse(JSON.stringify(data)),
      multiple: false,
      defaultExpand: false,
      valueType: 'id'
    }
  },

  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    }
  }

};
</script>