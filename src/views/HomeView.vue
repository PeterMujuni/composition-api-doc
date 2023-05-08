<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <PostList v-if="posts.length" :posts="posts"/>
    <div v-else>
      <p>Loading posts...</p>
    </div>
    <!-- <button @click="showPosts = !showPosts">Toggle posts</button>
    <button @click="posts.pop()">delete a post</button> -->
    <!-- <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div> -->
    <!-- <h2>Refs</h2>
    <p ref="para">{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update ninja one</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">update ninjs two</button> -->
  </div>
</template>

<script>
import { reactive, computed, watch, watchEffect } from 'vue';
import getPosts from "@/composables/getPosts"
import PostList from "../components/PostList.vue"

// @ is an alias to /src

export default {
  name: "HomeView",
  components: { PostList},
  setup() {
    
    const {load, posts, error} = getPosts()
    load()
    console.log(posts);
    // const showPosts = ref(true)
    // const search = ref('')
    // const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])

    // const stopWatch = watch(search, () => {
    //   console.log('watch function ran');
    // })

    // const stopEffect = watchEffect(() => {
    //   console.log('watchEffect funtion initially', search.value);
    // })
    
    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value ))
    // })

    // const name = computed(() => {
    //   return 'shaun'
    // })
    // const ninjaOne = ref({name: 'mario', age: 37})
    // const ninjaTwo = reactive({name: 'luigi', age: 40})

    // const updateNinjaOne = () => {
    //   ninjaOne.value.age = 40
    // }
    // const updateNinjaTwo = () => {
    //   ninjaTwo.age = 37
    // }

    return {posts, error}
  }
};
</script>
