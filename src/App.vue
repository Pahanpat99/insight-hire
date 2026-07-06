<template>
  <div>
    <header class="app-header">
      <div class="container">
        <h1>Insight Hire</h1>
        <p>Browse jobs, apply online, and manage your application tasks.</p>

        <nav class="nav-links">
          <router-link to="/">Home</router-link>
          <router-link to="/jobs">Job Explorer</router-link>
          <router-link to="/application">Application Form</router-link>
          <router-link to="/todo">To-Do List</router-link>
        </nav>
      </div>
    </header>

    <main class="container page-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.app-header {
  background-color: #1f2937;
  color: white;
  padding: 30px 0;
}

.app-header h1 {
  margin: 0;
  font-weight: 700;
}

.app-header p {
  margin: 8px 0 18px;
  color: #d1d5db;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  background-color: #374151;
  padding: 8px 14px;
  border-radius: 6px;
}

.nav-links a.router-link-active {
  background-color: #facc15;
  color: #111827;
}

.page-content {
  padding-top: 30px;
  padding-bottom: 40px;
}
</style>