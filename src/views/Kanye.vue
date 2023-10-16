<template>
  <main>
    <div>
      <i>"{{ quote }}"</i>
      <p>Kanye West</p>
      <p>
        <button @click="createPost">CreatePost</button>
      </p>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import KanyeAPI from '../services/KanyeAPI';

export default {
  setup() {


    const quote = ref("");

    const loadQuote = async ()  => {
        try {

            const response = await KanyeAPI.getQuote()
            quote.value = response.data.quote
        } catch (err) {
            console.log(err)
        }
        
        // try {

        //     const response = await axios.get('https://api.kanye.rest/')
        //     quote.value = response.data.quote
        // } catch (err) {
        //     console.log(err)
        // }
    }

    loadQuote()

    const createPost = async () => {
        const response = await KanyeAPI.createPost(JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }))
        console.log(response)
    }

    // const createPost = () => {
    //     axios.post('https://jsonplaceholder.typicode.com/posts',
    //     JSON.stringify({
    //         title: 'foo',
    //         body: 'bar',
    //         userId: 1,
    //     })).then(response => {
    //         console.log(response)
    //     })
    // }

    return {
      quote,
      createPost,
    };


    // const quote = ref("");

    // axios.get("https://api.kanye.rest/").then((response) => {
    //   quote.value = response.data.quote;
    // });
    // return {
    //   quote,
    // };
  },
};
</script>

<style>
</style>