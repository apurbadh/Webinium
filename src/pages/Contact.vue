<template>
<div class="field is-horizontal keep-center" style="margin-top: 8%;">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Email" @input="checkEmail" v-model="email">
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
          <input class="input" type="tel" placeholder="Your phone number" @input="checkPhone" v-model="phone">
        </p>
      </div>
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
        <input class="input" type="text" placeholder="e.g. Partnership opportunity">
      </div>

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
        <textarea class="textarea" placeholder="Explain how we can help you" ></textarea>
      </div>
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
		email : string,
		phone : string
	}
	export default {
		name : "Contact",
		data() : Data{
			return {
				emailIsValid : true,
				phoneIsValid: true,
			}
		},
		methods: {
			checkEmail(){
				console.log(this.email)
			},
			checkPhone(){

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