const app = new Vue({
    el : '#app',
    data : {
        contacts: [
            {
                name: 'Michele',
                avatar: 'img/avatar1.png',
                visible: true,
                messages: [
                {
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: 'img/avatar2.jpg',
                visible: true,
                messages: [
                {
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    date: '20/03/2020 16:35:00',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: 'img/avatar3.png',
                visible: true,
                messages: [
                {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar4.png',
                    visible: true,
                    messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            }
        ],
        
        currentIndex : 0,
        newMessage: '',
        searchName: '',
        showModal: false,
    },

    methods: {
        respond(i){
            const d = new Date();
            this.contacts[i].messages.push({
                date: `${d.getDay()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
                text: 'ok',
                status : 'received'
            })
        },


        writeMessage(i) {
            const d = new Date();
            if(this.newMessage !== ''){
                this.contacts[i].messages.push({
                    date: `${d.getDay()}/${d.getMonth()+1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
                    text: this.newMessage,
                    status : 'sent'
                })
                setTimeout(() => {
                    this.respond(i);
                  }, 3000);
                
            }
            this.newMessage = '';
            this.searchName = '';
        },

        getHours(date){
            const ora = date.split(' ')[1];
            return ora.substring(0,5); 
        },

        chatFilter() {
            //input vuoto tutti i visible a true
            if(this.searchName === "") {
               this.contacts.forEach( el => {
                  el.visible = true;
               })
            }else{
               this.contacts.forEach( el => {
                    const nome = el.name.toLowerCase();
                    const nomeInput = this.searchName.toLowerCase();
                    if(nome.includes(nomeInput)) {
                        el.visible = true;
                    }else{
                        el.visible = false;
                    }
               });
            }
        },

        deleteMessage(i){
            console.log(i,this.contacts[this.currentIndex].messages);
            
            let messaggio = this.contacts[this.currentIndex].messages;
            messaggio.splice(i,1);
        },

        toggleMenu(){
            if(this.showModal){
                this.showModal = false;    
            }else{
                this.showModal = true;
            }
        },
    }
    
})    