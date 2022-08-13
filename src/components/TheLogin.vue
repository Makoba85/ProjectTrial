<template>
    <div>
        <form>
            <input type="text" placeholder="Enter your Name">
            <br>
            <input type="Email" placeholder="Enter your Email">
        </form>
        <button type="Submit" @click="check">Submit</button>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            check(e){
                e.preventDefault();
                alert('form data has been submitted')
            }
        }
    }
</script>