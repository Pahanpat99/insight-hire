<template>
  <section>
    <h2>Job Explorer</h2>

    <div class="job-layout">
      <aside class="job-sidebar">
        <JobList />
      </aside>

      <div class="job-content">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
import JobList from '../components/JobList.vue'

export default {
  components: {
    JobList
  }
}
</script>

<style scoped>
.job-layout {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.job-sidebar {
  width: 230px;
  padding: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
}

.job-content {
  flex: 1;
  padding: 18px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: white;
}

@media (max-width: 768px) {
  .job-layout {
    flex-direction: column;
  }

  .job-sidebar {
    width: 100%;
  }
}
</style>