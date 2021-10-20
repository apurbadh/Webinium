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
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="e.g. Partnership opportunity" v-model="subject" v-bind:class="{ 'is-danger': !subjectIsValid }" @input="checkSubject">
      </div>
<p class="help is-danger" v-if="!subjectIsValid">
        Subject Must Be More Than 8 Characters
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal keep-center">
  <div class="field-label is-normal">
    <label class="label">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea v-model="content" class="textarea" v-bind:class="{ 'is-danger': !contentIsValid }" @input="checkContent" placeholder="Explain how we can help you" ></textarea>
      </div>
      <p class="help is-danger" v-if="!contentIsValid">
        Write this more than 100 characters
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal keep-center">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary" style="background: #042454; margin: 1%;">
          Send message
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
		name : "Contact",
		data() : Data{
			return {
				emailIsValid : true,
				phoneIsValid: true,
				nameIsValid: true,
				subjectIsValid : true,
				contentIsValid : true,
				email : "",
				phone : "",
				name : "",
				subject: "",
				content : ""
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
				this.subjectIsValid = this.subject.length > 8
			},
			checkContent() {
				this.contentIsValid = this.content.length > 100
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