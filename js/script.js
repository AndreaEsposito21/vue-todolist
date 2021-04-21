// Descrizione:
// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

var app = new Vue({
    el: '#root',
    data: {
        utenteNuovoTodo: '',
        todoArray: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
        ],
    },
    methods: {
        
        nuovoTodo() {
            if (this.utenteNuovoTodo.length > 0) {
                this.todoArray.push(this.utenteNuovoTodo);
                this.utenteNuovoTodo = '';
            }
        }
    }
});