<template>
  <div>
    <h1>HI!! Ke</h1>
    <!-- 綁定 -->
    <router-link :to="{name:'Ke-youtuber'}">youtuber</router-link> |
    <!-- 無綁定，手打 -->
    <router-link to="/Ke/info">info</router-link>
    <router-view></router-view>
  </div>
</template>

