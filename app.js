const app = Vue.createApp({ // have to pass an object as arg to createApp
    // data: function(){ // have to be called 'data' for Vue to recognize; can be re-written as just 'data(){...}'
    //     return {}; // must return an object
    // },
    data() {
        return {
            courseGoal: 'Finish the course!', // the return object can now be used in the Vue-controlled HTML by using a specific syntax called interpolation
        };
    }
});

app.mount('#user-goal'); // mount() determines which part of the webpage to be controlled by Vue; it takes in a CSS selector string as input