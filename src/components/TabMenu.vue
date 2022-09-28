<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key="index">
        <router-link v-bind:to="item.path">
          {{ item.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  data() {
    return {
      items: [
        { title: "profile", path: "/" },
        { title: "skills", path: "/skills" },
        { title: "works", path: "/works"}
      ],
    };
  },
};
</script>

<style scoped>
ol {
  margin-left: auto;
  width: 480px;
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 23px;
  font-weight: bold;
  position: relative;
}

a:active {
  background: #69821b;
}

a:hover {
  opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: green;
  text-decoration: none;
  line-height: 50px;
}

@media all and (max-width: 480px) {
  ol {
    width: 300px;
    justify-content: center;
  }
}
</style>