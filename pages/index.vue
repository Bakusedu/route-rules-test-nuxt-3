<script setup>
const { data, pending, error } = await useFetch(
  "https://worldtimeapi.org/api/ip"
);

console.log(data);
</script>
<template>
  <!-- <div>
    <h1>Static template</h1>
    <h2>{{ data.datetime }}</h2>
    <h2>{{ data.unixtime }}</h2>
  </div> -->
</template>
