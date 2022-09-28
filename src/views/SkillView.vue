<template>
    <div class="skills">
      <h1>Skills</h1>
      <div class="my-skills">
        <section id="about" class="wrapper">
          <h2 class="section-title">HTML5</h2>
          <div class="content">
            <img src="@/assets/html.png" alt="my profile pic" />
            <div class="text">
              <meter min="0" max="100" value="65">40 / 100</meter>
              <p>
                Just started learning HTML.<br />
                So I am not that confident.<br />
              </p>
            </div>
          </div>
        </section>
        <section id="about" class="wrapper">
          <h2 class="section-title">CSS3</h2>
          <div class="content">
            <img src="@/assets/css.png" alt="my profile pic" />
            <div class="text">
              <meter min="0" max="100" value="65">30 / 100</meter>
              <p>
                Just started learning CSS.<br />
                I really hate it. So depressing.<br />
              </p>
            </div>
          </div>
        </section>
        <section id="about" class="wrapper">
          <h2 class="section-title">Java</h2>
          <div class="content">
            <img src="@/assets/java.png" alt="my profile pic" />
            <div class="text">
              <meter min="0" max="100" value="60">55 / 100</meter>
              <p>
                I learned Java in University and made a<br />
                couple of simple games.<br />
                I found it pretty interesting but difficult.<br />
              </p>
            </div>
          </div>
        </section>
        <section id="about" class="wrapper">
          <h2 class="section-title">C++</h2>
          <div class="content">
            <img src="@/assets/c.png" alt="my profile pic" />
            <div class="text">
              <meter min="0" max="100" value="40">40 / 100</meter>
              <p>
                I took C++ class in Uni, <br />
                but failed it.<br />
                So I hate.<br />
              </p>
            </div>
          </div>
        </section>
        <section id="about" class="wrapper">
          <h2 class="section-title">Vue.js</h2>
          <div class="content">
            <img src="@/assets/vue.png" alt="my profile pic" />
            <div class="text">
              <meter min="0" max="100" value="60">40 / 100</meter>
              <p>
                I am learning Vue.js and I like it so far.<br />
                So simple.<br />
              </p>
            </div>
          </div>
        </section>
        <section id="about" class="wrapper">
          <h2 class="section-title">Flutter</h2>
          <div class="content">
            <img src="@/assets/flutter.png" alt="my profile pic" />
            <div class="text">
              <meter min="0" max="100" value="70">40 / 100</meter>
              <p>
                I have been learning Flutter <br />
                for a year now.<br />
                I am pretty good at it and <br />
                made some apps already.<br />
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <style scoped>
  html {
    font-size: 100%;
  }
  body {
    color: #383e45;
    font-size: 0.9rem;
  }
  h1 {
    font-size: 40px;
    color: green;
  }
  img {
    max-width: 100%;
  }
  .section-title {
    display: inline-block;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 60px;
    border-bottom: solid 1px #383e45;
  }
  .content-title {
    font-size: 1rem;
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
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 30px;
  }
  #about .text {
    text-align: left;
  }
  
  #follow img {
    width: 100px;
    height: 100px;
    border-radius: 40%;
    margin-right: 30px;
  }
  meter::-webkit-meter-optimum-value {
    background: red; /* Green */
  }
  .my-skills {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
  }
  </style>