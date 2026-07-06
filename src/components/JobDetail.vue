<template>
  <div v-if="job">
    <h3>{{ job.job_title }}</h3>

    <p><strong>Job ID:</strong> {{ job.job_id }}</p>
    <p><strong>Company:</strong> {{ job.company }}</p>
    <p><strong>Category:</strong> {{ job.category }}</p>
    <p><strong>Location:</strong> {{ job.location }}</p>
    <p><strong>Employment Type:</strong> {{ job.employment_type }}</p>
    <p><strong>Salary Range:</strong> {{ job.salary_range }}</p>
    <p><strong>Job Level:</strong> {{ job.job_level }}</p>
    <p><strong>Description:</strong> {{ job.job_description }}</p>

    <p>
      <strong>Required Skills:</strong>
      {{ job.required_skills.join(', ') }}
    </p>

    <p>
      <strong>Preferred Qualifications:</strong>
      {{ job.preferred_qualifications.join(', ') }}
    </p>

    <p><strong>Application Deadline:</strong> {{ job.application_deadline }}</p>
    <p><strong>Posted Date:</strong> {{ job.posted_date }}</p>
    <p><strong>Supervisor:</strong> {{ job.supervisor }}</p>
    <p><strong>Positions Available:</strong> {{ job.positions_available }}</p>
    <p><strong>Start Date:</strong> {{ job.start_date }}</p>

    <p>
      <strong>Tags:</strong>
      {{ job.tags.join(', ') }}
    </p>
  </div>

  <div v-else>
    <h3>Job Not Found</h3>
    <p>The selected job could not be found.</p>
  </div>
</template>

<script>
import { jobs } from '../data/jobs.js'

export default {
  computed: {
    job() {
      const id = this.$route.params.id
      return jobs.find(job => job.job_id === id)
    }
  }
}
</script>

<style scoped>
h3 {
  margin-bottom: 18px;
  font-weight: 700;
}

p {
  margin-bottom: 10px;
  line-height: 1.5;
}

strong {
  color: #111827;
}
</style>