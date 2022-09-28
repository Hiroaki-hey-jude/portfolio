<template>
    <div class="profile">
      <div class="profile-container">
        <img class="profile-pic" src="@/assets/snow.jpg" alt="" />
      </div>
      <div class="sentences">
        <h1>植田裕朗</h1>
        <p><span>2000年 </span><span>東京生まれ</span></p>
        <p><span>2011年 </span><span>広島に引っ越す</span></p>
        <p><span>2018年 </span><span>マレーシアへ引っ越し</span></p>
        <p><span>2022年 </span><span>bravesoft now</span></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProfileView",
    data() {},
  };
  </script>
  <style scoped>
  .profile {
    margin-right: 170px;
    margin-left: 170px;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
  }
  .profile-container {
    margin-top: 10px;
  }
  img {
    width: 100%;
    max-width: 100%;
    height: 700px;
  }
  .sentences {
    text-align: left;
  }
  </style>