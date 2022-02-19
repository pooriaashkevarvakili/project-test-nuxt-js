<template>
  <div>
      about page
  </div>
</template>

<script>
export default {
    middleware:'test',
head(){
    return{
        title:'about-page',
      meta:[
          {
              name:"myID",
              content:"two",
              hid:"description"
          }
      ]
    }
}
}
</script>

<style>

</style>