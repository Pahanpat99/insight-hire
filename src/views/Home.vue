<template>
  <section class="home-page">
    <div class="home-hero">
      <div>
        <h2>Welcome to Insight Hire</h2>

        <p>
          Insight Hire is a platform where users can explore
          job opportunities, submit an application form, and manage their application
          tasks in one place.
        </p>

        <div class="home-actions">
          <router-link to="/jobs">Explore Jobs</router-link>
          <router-link to="/application">Apply Now</router-link>
        </div>
      </div>

      <img src="../assets/handshake.jpeg" alt="Professional handshake">
    </div>

    <div class="home-grid">
      <div class="home-card">
        <h3>Job Explorer</h3>
        <p>
          Browse job IDs and view detailed information such as job title, company,
          required skills, salary range, location, and application deadline.
        </p>
      </div>

      <div class="home-card">
        <h3>Application Form</h3>
        <p>
          Complete a validated job application form with personal details, account
          information, contact details, and preferred job category.
        </p>
      </div>

      <div class="home-card">
        <h3>To-Do List</h3>
        <p>
          Manage application tasks according to priority.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-page {
  overflow: hidden;
}

.home-hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 28px;
  align-items: center;
}

.home-hero p {
  max-width: 720px;
  line-height: 1.6;
}

.home-hero img {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  border-radius: 8px;
}

.home-actions {
  display: flex;
  gap: 12px;
  margin-top: 18px;
}

.home-actions a {
  padding: 10px 14px;
  border-radius: 6px;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  font-weight: 700;
}

.home-actions a:last-child {
  background-color: #facc15;
  color: #111827;
}

.home-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin-top: 28px;
}

.home-card {
  padding: 18px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
}

.home-card h3 {
  margin-bottom: 10px;
}

.home-card p {
  margin: 0;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .home-hero,
  .home-grid {
    grid-template-columns: 1fr;
  }
}
</style>