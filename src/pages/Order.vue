<template>
<div class="field is-horizontal keep-center" style="margin-top: 8%;">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name" v-model="name" v-bind:class="{'is-danger': !nameIsValid}" @input="checkName">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
      <p class="help is-danger" v-if="!nameIsValid">
        Invalid Name
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input v-bind:class="{ 'is-danger': !emailIsValid }" class="input" type="email" placeholder="Email" @input="checkEmail" v-model="email">
         <p class="help is-danger" v-if="!emailIsValid">
        Invalid Email
      </p>
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
       
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal keep-center">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +977
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="tel" v-bind:class="{ 'is-danger': !phoneIsValid }" placeholder="Your phone number" @input="checkPhone" v-model="phone">
        </p>
         
      </div>
      <p class="help is-danger" v-if="!phoneIsValid">
        Invalid Phone Number
      </p>
    </div>
  </div>
</div>


<div class="field is-horizontal keep-center">
  <div class="field-label is-normal">
    <label class="label">Comapany</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Company Name" v-model="subject" v-bind:class="{ 'is-danger': !subjectIsValid }" @input="checkSubject">
      </div>
<p class="help is-danger" v-if="!subjectIsValid">
        Very Few Characters
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal keep-center">
  <div class="field-label is-normal">
    <label class="label">Project</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Project Name" v-model="project" v-bind:class="{ 'is-danger': !projectIsValid }" @input="checkProject">
      </div>
<p class="help is-danger" v-if="!projectIsValid">
        Invalid Project Name
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal keep-center">
  <div class="field-label is-normal">
    <label class="label">Amount</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Amount You are willing to pay" v-model="amount" v-bind:class="{ 'is-danger': !amountIsValid }" @input="checkAmount">
      </div>
<p class="help is-danger" v-if="!amountIsValid">
        Invalid amount (The amount should be greater than 5000)
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal keep-center">
  <div class="field-label is-normal">
    <label class="label">Description</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea v-model="content" class="textarea" v-bind:class="{ 'is-danger': !contentIsValid }" @input="checkContent" placeholder="Describe the project" ></textarea>
      </div>
      <p class="help is-danger" v-if="!contentIsValid">
        Write this more than 100 characters
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal keep-center" style="margin-bottom: -150px">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary" style="background: #042454; margin: 1%;">
          Order
        </button>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
	import {useRef} from "vue"
	interface Data{
		emailIsValid : boolean,
		phoneIsValid : boolean,
		nameIsValid: boolean,
		subjectIsValid : boolean,
		email : string,
		phone : string,
		name : string,
		subject : string,
		content : string
	}
	export default {
		name : "Order",
		data() : Data{
			return {
				emailIsValid : true,
				phoneIsValid: true,
				nameIsValid: true,
				subjectIsValid : true,
				contentIsValid : true,
				projectIsValid: true,
				amountIsValid : true,
				email : "",
				phone : "",
				name : "",
				subject: "",
				content : "",
				project : "",
				amount : ""
			}
		},
		methods: {
			checkEmail(){
				this.emailIsValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)

			},
			checkPhone(){
				this.phoneIsValid = this.phone.substring(0, 2) == "98" && this.phone.length == 10 && String(parseInt(this.phone)).length == this.phone.length
			},
			checkName(){
				this.nameIsValid = this.name.length > 4
			},
			checkSubject(){
				this.subjectIsValid = this.subject.length > 4
			},
			checkContent() {
				this.contentIsValid = this.content.length > 100
			},
			checkAmount(){
				this.amountIsValid = parseInt(this.amount) != NaN && String(parseInt(this.amount)).length == this.amount.length && parseInt(this.amount) > 5000
			},
			checkProject(){
				this.projectIsValid = this.project.length > 4
			}
		}
	}
</script>

<style scoped>
	.keep-center {
		width: 50%;
		margin-left: 23%;
	}
</style>
