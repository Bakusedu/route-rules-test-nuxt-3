<script setup>
const { data, pending, error } = await useFetch(
  "https://worldtimeapi.org/api/timezone/Africa/Lagos"
);

console.log(data);
</script>
<template>
  <div>
    <h1>Static template</h1>
    <h2>{{ new Date() }}</h2>
  </div>
</template>
