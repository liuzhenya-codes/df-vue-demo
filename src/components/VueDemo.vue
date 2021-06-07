<template>
  <df-table
    :data="[]"
    style="width: 100%"
    empty-text="这里没有数据了">
    <df-table-column prop="date" label="日期" width="180" />
    <df-table-column prop="name" label="姓名" width="180" />
    <df-table-column prop="address" label="地址" width="1800" />
  </df-table>
</template>
