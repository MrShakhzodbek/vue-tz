<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="container">
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/create">User Create</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;800;900&display=swap);

.navbar {
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
}

.navbar a {
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-size: 20px;
  cursor: pointer;
  background: rgb(92, 92, 174);
  color: white;
  padding: 10px 15px;
  border-radius: 20px;
  transition: 500ms;
}

.navbar a:hover {
  color: black;
  background: yellowgreen;
}</style>
