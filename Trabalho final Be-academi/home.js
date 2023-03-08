function apagarTexto(){
    const campo = document.querySelector('#texto');
    texto.value ='';
}



const MyNameApp = {
    data() {
        return {
            texto:"",
            input_texto: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();

            this.texto = this.input_texto;
        
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");