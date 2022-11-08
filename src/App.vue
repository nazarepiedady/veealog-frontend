<template>
  <div id="app">
    <header>
      <router-link to='/'><h1>Veealog</h1></router-link>
    </header>
    <router-view/>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 1.5rem;
}

* + * {
  margin-top: 1.5rem;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
