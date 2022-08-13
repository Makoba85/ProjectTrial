<template>
    I am the services page
    <button @click="check">Click Me</button>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
        methods:{
            check(){
                alert('I have been clicked')
            }
        }
    }
</script>