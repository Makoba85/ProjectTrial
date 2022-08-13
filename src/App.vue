<template>

      <div id="div">
        
    <router-link to="/Login"><button > Login</button></router-link>
    <router-link to="/AboutUs"><button>About Us</button></router-link>
    <router-link to="/Services"><button>Services</button></router-link>
    <router-link to="Contact"><button>Contact Us</button></router-link>
<!-- Routers go below here -->
<br>
<br>
  <router-view></router-view>
    <footer>
      Makoba Ngulube Made in 2022 
    </footer>
  </div>

</template>

<style>
  #div{
    position: fixed;
    width: 100%;
    text-align: center;
    background-color: lightseagreen;
    height: 50px;
  }

  button{
    margin-top: 19px;
    margin-left: 20px;
    border-radius: 9px;
    

  }
  footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: lightseagreen;
  color: black;
  text-align: center;
  height: 30px;
}
footer:before{
  content: ' \00A9';
}
  
</style>
