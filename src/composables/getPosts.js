import { ref } from "vue"

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let res = await fetch('https://dummyjson.com/posts?limit=5')
        if (!res.ok) {
          throw Error("no data available")
        }
        let data = await res.json()
        posts.value = data.posts
      } catch (err) {
        error.value = err.message;
        console.log(err.message);
      }
    }

    return { posts, error, load}
}

export default getPosts