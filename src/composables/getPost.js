import { ref } from "vue";

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        let res = await fetch('https://dummyjson.com/posts/'+id)
        if (!res.ok) {
          throw Error("that post does not exist")
        }
        let data = await res.json()
        post.value = data
      } catch (err) {
        error.value = err.message;
        console.log(err.message);
      }
    }

    return { post, error, load}
}

export default getPost