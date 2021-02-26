<template>
  <nav class="nav">
    <div class="nav__inner card">
      <router-link class="nav__item" :to="{ name: 'Home' }" title="Home"
        ><i class="fas icon fa-home"></i
      ></router-link>
      <router-link class="nav__item" :to="{ name: 'TodoApp' }" title="Todo App"
        ><i class="fab icon fa-vuejs"></i
      ></router-link>
      <router-link class="nav__item" :to="{ name: 'Oscarfaeh' }" title="Oscarfaeh.ch"> 
        <i class="fab icon fa-wordpress-simple"></i>
      </router-link>
      <router-link class="nav__item" :to="{ name: 'Contact' }" title="Kontakt"
        ><i class="far icon fa-envelope"></i
      ></router-link>
    </div>
  </nav>
</template>
