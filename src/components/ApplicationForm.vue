<template>
  <form
    method="post"
    action="http://mercury.swin.edu.au/it000000/formtest.php"
    @submit="validateForm"
  >
    <fieldset>
      <legend>Personal Details</legend>

      <div>
        <label for="firstName">First Name</label>
        <input id="firstName" name="firstName" v-model="form.firstName" type="text">
        <p class="error" v-if="errors.firstName">{{ errors.firstName }}</p>
      </div>

      <div>
        <label for="lastName">Last Name</label>
        <input id="lastName" name="lastName" v-model="form.lastName" type="text">
        <p class="error" v-if="errors.lastName">{{ errors.lastName }}</p>
      </div>

      <div>
        <label for="dob">Date of Birth</label>
        <input id="dob" name="dob" v-model="form.dob" type="date">
        <p class="error" v-if="errors.dob">{{ errors.dob }}</p>
      </div>
    </fieldset>

    <fieldset>
      <legend>Account Details</legend>

      <div>
        <label for="username">Username</label>
        <input id="username" name="username" v-model="form.username" type="text">
        <p class="error" v-if="errors.username">{{ errors.username }}</p>
      </div>

      <div>
        <label for="password">Password</label>
        <input id="password" name="password" v-model="form.password" type="password">
        <p class="error" v-if="errors.password">{{ errors.password }}</p>
      </div>

      <div>
        <label for="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" name="confirmPassword" v-model="form.confirmPassword" type="password">
        <p class="error" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</p>
      </div>

      <div>
        <label for="email">Email</label>
        <input id="email" name="email" v-model="form.email" type="email">
        <p class="error" v-if="errors.email">{{ errors.email }}</p>
      </div>
    </fieldset>

    <fieldset>
      <legend>Address and Contact</legend>

      <div>
        <label for="streetAddress">Street Address</label>
        <input id="streetAddress" name="streetAddress" v-model="form.streetAddress" type="text">
        <p class="error" v-if="errors.streetAddress">{{ errors.streetAddress }}</p>
      </div>

      <div>
        <label for="suburb">Suburb</label>
        <input id="suburb" name="suburb" v-model="form.suburb" type="text">
        <p class="error" v-if="errors.suburb">{{ errors.suburb }}</p>
      </div>

      <div>
        <label for="postcode">Postcode</label>
        <input id="postcode" name="postcode" v-model="form.postcode" type="text">
        <p class="error" v-if="errors.postcode">{{ errors.postcode }}</p>
      </div>

      <div>
        <label for="mobile">Mobile Number</label>
        <input id="mobile" name="mobile" v-model="form.mobile" type="text">
        <p class="error" v-if="errors.mobile">{{ errors.mobile }}</p>
      </div>
    </fieldset>

    <fieldset>
      <legend>Job Preference</legend>

      <div>
        <label for="category">Preferred Job Category</label>
        <select id="category" name="category" v-model="form.category">
          <option value="">Please select</option>
          <option value="AI">AI</option>
          <option value="Data Science">Data Science</option>
          <option value="Software Development">Software Development</option>
          <option value="DevOps">DevOps</option>
          <option value="Cybersecurity">Cybersecurity</option>
        </select>
        <p class="error" v-if="errors.category">{{ errors.category }}</p>
      </div>
    </fieldset>

    <button type="button" @click="showTerms = !showTerms">
      Terms and Conditions
    </button>

    <p v-if="showTerms">
      By submitting this form, you confirm that the information provided is accurate
      and agree to be contacted about job opportunities.
    </p>

    <br><br>

    <button type="submit">Submit Application</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      showTerms: false,
      form: {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        streetAddress: '',
        suburb: '',
        postcode: '',
        mobile: '',
        dob: '',
        category: ''
      },
      errors: {}
    }
  },
  methods: {
    validateForm(event) {
      this.errors = {}

      const lettersOnly = /^[A-Za-z]+$/
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const postcodePattern = /^\d{4}$/
      const mobilePattern = /^04\d{8}$/
      const specialCharPattern = /[$%^&*]/

      if (!this.form.firstName) {
        this.errors.firstName = 'First name is required.'
      } else if (!lettersOnly.test(this.form.firstName)) {
        this.errors.firstName = 'First name must contain letters only.'
      }

      if (!this.form.lastName) {
        this.errors.lastName = 'Last name is required.'
      } else if (!lettersOnly.test(this.form.lastName)) {
        this.errors.lastName = 'Last name must contain letters only.'
      }

      if (!this.form.username) {
        this.errors.username = 'Username is required.'
      } else if (this.form.username.length < 3) {
        this.errors.username = 'Username must be at least 3 characters.'
      }

      if (!this.form.password) {
        this.errors.password = 'Password is required.'
      } else if (this.form.password.length < 8) {
        this.errors.password = 'Password must be at least 8 characters.'
      } else if (!specialCharPattern.test(this.form.password)) {
        this.errors.password = 'Password must include at least one special character: $, %, ^, &, *.'
      }

      if (!this.form.confirmPassword) {
        this.errors.confirmPassword = 'Please confirm your password.'
      } else if (this.form.confirmPassword !== this.form.password) {
        this.errors.confirmPassword = 'Passwords do not match.'
      }

      if (!this.form.email) {
        this.errors.email = 'Email is required.'
      } else if (!emailPattern.test(this.form.email)) {
        this.errors.email = 'Please enter a valid email address.'
      }

      if (this.form.streetAddress.length > 40) {
        this.errors.streetAddress = 'Street address must be 40 characters or less.'
      }

      if (this.form.suburb.length > 20) {
        this.errors.suburb = 'Suburb must be 20 characters or less.'
      }

      if (!this.form.postcode) {
        this.errors.postcode = 'Postcode is required.'
      } else if (!postcodePattern.test(this.form.postcode)) {
        this.errors.postcode = 'Postcode must be 4 digits.'
      }

      if (!this.form.mobile) {
        this.errors.mobile = 'Mobile number is required.'
      } else if (!mobilePattern.test(this.form.mobile)) {
        this.errors.mobile = 'Mobile number must be 10 digits and start with 04.'
      }

      if (!this.form.dob) {
        this.errors.dob = 'Date of birth is required.'
      } else if (!this.isAtLeast16(this.form.dob)) {
        this.errors.dob = 'Applicant must be at least 16 years old.'
      }

      if (!this.form.category) {
        this.errors.category = 'Please select a preferred job category.'
      }

      if (Object.keys(this.errors).length > 0) {
        event.preventDefault()
      }
    },

    isAtLeast16(dob) {
      const birthDate = new Date(dob)
      const today = new Date()

      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDifference = today.getMonth() - birthDate.getMonth()

      if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--
      }

      return age >= 16
    }
  }
}
</script>

<style scoped>
form {
  max-width: 900px;
}

fieldset {
  margin-bottom: 24px;
  padding: 22px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
}

legend {
  float: none;
  width: auto;
  padding: 0 8px;
  font-size: 1.25rem;
  font-weight: 700;
}

div {
  margin-bottom: 14px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}

input,
select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  box-sizing: border-box;
}

input:focus,
select:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

button {
  padding: 10px 14px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #2563eb;
  color: white;
}

button[type="button"] {
  background-color: #374151;
  color: white;
}

.error {
  color: #dc2626;
  margin: 6px 0 0;
  font-size: 0.9rem;
}
</style>