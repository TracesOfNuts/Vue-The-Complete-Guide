const app = Vue.createApp({ // have to pass an object as arg to createApp
    // data: function(){ // have to be called 'data' for Vue to recognize; can be re-written as just 'data(){...}'
    //     return {}; // must return an object
    // },
    data() {
        return {
            courseGoal: 'Yay!',
            courseGoalA: '<p>Finish the course!</p>', // the return object can now be used in the Vue-controlled HTML by using a specific syntax called interpolation
            courseGoalB: '<p>Master Vue and build amazing apps!</p>',
            vueLink: 'https://vuejs.org/',
        };
    },
    methods: {  // similarly, 'methods' is a reserved keyword
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA; // 'this' keyword can be used here because Vue takes all the data in data() and merges into a global Vue instance object
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal'); // mount() determines which part of the webpage to be controlled by Vue; it takes in a CSS selector string as input