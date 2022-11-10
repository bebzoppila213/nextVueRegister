<template>
  <div class="mb-3">
    <label :for="getRandId()" class="form-label">{{label}}</label>
    <input @input="onInput" :id="getRandId()" :type="typeInput" class="form-control" />
  </div>
</template>


<script>
export default {
    props:{
        label:{
            type: String,
            required: true
        },
        typeInput: {
            type: String,
            required: true
        }
    },

    methods:{
        getRandId(){
            return "id" + Math.floor(Math.random() * 100) + Math.floor(Math.random() * 100)
        },

        onInput(event){
            this.$emit('onInput', event.target.value)
        }
    }

}
</script>