<template>
  <div>
    <h3>Jobs</h3>

    <ul>
      <li>
        <router-link to="/jobs">Overview</router-link>
      </li>

      <li v-for="job in jobs" :key="job.job_id">
        <router-link :to="'/jobs/' + job.job_id">
          {{ job.job_id }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { jobs } from '../data/jobs.js'

export default {
  data() {
    return {
      jobs
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 14px;
  font-weight: 700;
}

ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

li {
  margin-bottom: 8px;
}

a {
  display: block;
  padding: 8px 10px;
  border-radius: 6px;
  text-decoration: none;
  color: #2563eb;
  font-weight: 600;
}

a:hover {
  background-color: #e0ecff;
}

a.router-link-active {
  background-color: #2563eb;
  color: white;
}
</style>