const app = Vue.createApp({
    // "template": "<h1>Olá {{nome}}</h1>",
    data() {
        return {
            frase: 'Frase do Chuck Norris',
            url: 'https://chucknorris.io/',
            imagem: 'https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png'
        }
    },
    methods: {
        async gerarFrase() {

            const res = await fetch('https://api.chucknorris.io/jokes/random')
            const result = await res.json()

            this.frase = result.value
            this.url = result.url
            this.imagem = result.icon_url

            console.log(result)

        }
    }
})

app.mount('#app')