<script lang='ts'>
export default{
    name:"Second",
}
</script> 

<template> 
<section class='second-section'>
    <span class="header-container"><h2 class="second-header">Technologies We Work With</h2></span>
    <div class='technologies' >
        <div v-for="technology in technologies" :key="technology" >
            <h3 class="technology-name"> {{ technology.name }} </h3>
            <span class="technology-icon">{{ technology.icon }} </span>
            <div class="technology-description">
                {{technology.description}}
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
@import './style.css';
</style>