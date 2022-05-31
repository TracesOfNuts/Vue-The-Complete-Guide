const app = Vue.createApp({
    data() {
        return {
            myName: 'AZ',
            age: '32',
            imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png',
        };
    },
    methods: {
        ageInNYears(n) {
            return parseInt(this.age) + 5;
        },
        favNum() {
            return Math.random();
        },
    }
});

app.mount('#assignment')