<script setup>
const { data, pending, error } = await useFetch(
  "http://worldtimeapi.org/api/timezone/Africa/Lagos"
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
