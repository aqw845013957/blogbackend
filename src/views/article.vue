<template>
  <div>
    <Table stripe :columns="columns1" :data="data1">
      <template slot="action">
        <Button type="primary" size="small" style="margin-right: 5px"
          >编辑</Button
        >
        <Button type="error" size="small">删除</Button>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name",
        },
        {
          title: "Age",
          key: "age",
        },
        {
          title: "Address",
          key: "address",
        },
        {
          title: "Action",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03",
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01",
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02",
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04",
        },
      ],
    };
  },
};
</script>

<style>
</style>