const {createApp} = Vue;

createApp({
	data(){
		return{
			apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
			emails: [],
			n: 10
		}
	},
	methods: {
		getApi(n){
			for(let i = 0; i < n; i++){
				axios.get(this.apiUrl)
				.then((result) => {
					this.emails.push(result.data.response)
				})
			}
		}
	},
	mounted() {
		this.getApi(this.n);
		console.log(this.emails)
	},
}).mount('#app')