<template>
  <div class="home">
    <div  class="vue-image">
      <parallax :speed-factor="0.3">
        <img alt="top logo" src="../assets/beautiful.jpg" />
      </parallax>
    </div>

    <section id="about" class="wrapper">
      <h2 class="section-title">About Me</h2>
      <div class="content">
        <img src="@/assets/me.jpg" alt="my profile pic" />
        <div class="text">
          <h3 class="content-title">{{ myName }}</h3>
          <p>
            Highly motivated web and mobile developer,<br />
            currently learning Vue.js and Nuxt.js.<br />
            Sponsor me! <br />
            Vamos!!
          </p>
        </div>
      </div>
    </section>

    <section id="follow" class="wrapper">
      <h2 class="section-title">Follow Me</h2>
      <div class="content">
        <a href="https://www.instagram.com/_zou_san_hi/"
          ><img src="@/assets/in.png" alt="insta pic"
        /></a>
        <a href="https://github.com/Hiroaki-hey-jude"
          ><img src="@/assets/git.png" alt="gitHub pic"
        /></a>
        <a href="https://www.facebook.com/profile.php?id=100011625511264"
          ><img src="@/assets/facebook.png" alt="facebook pic"
        /></a>
      </div>
    </section>
  </div>
</template>

<script>
import Parallax from "vue-parallaxy";
export default {
  components: {
    Parallax
  },
  data() {
    return {
      myName: "Hiroaki Ueda",
    };
  },
};
</script>

<style scoped>
html {
  font-size: 100%;
}
body {
  color: #383e45;
  font-size: 0.9rem;
}
img {
  max-width: 100%;
}

.vue-image {
  margin-left: 10%;
  margin-right: 10%;
}
.section-title {
  display: inline-block;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 60px;
  border-bottom: solid 1px #383e45;
  color: green;
}
.content-title {
  font-size: 2rem;
  margin: 10px 0;
}
.wrapper {
  max-width: 960px;
  margin: 0 auto 100px auto;
  padding: 0 4%;
  text-align: center;
}
#about .content {
  display: flex;
  justify-content: center;
  align-items: center;
}
#about img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 30px;
}
#about .text {
  text-align: left;
  font: 1em sans-serif;
}

#follow img {
  width: 100px;
  height: 100px;
  border-radius: 40%;
  margin-right: 30px;
}

@media screen and (max-width: 480px) {
	.vue-image {
  margin-left: 3%;
  margin-right: 3%;
}
}
</style>
