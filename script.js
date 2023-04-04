new Vue({

    data(){

        return{
         
            loading: true,
            quantity: null,
            waluta: "Wybierz",
            counter: 0,
            euro: 0,
            funt: 0,
            dolar: 0,
            frank: 0,
            dataLoaded: false,     //zmienne VUE
            warunek: "false",
            finish: null,
            end: '',
            end_wal: '',

        };
    },
    async mounted() {

        await this.getData();
        this.loading = false;

      },
    methods:{

        async getData() {
            const responseEur = await fetch('https://api.nbp.pl/api/exchangerates/rates/A/eur/');
            const dataEur = await responseEur.json();                                                   //pobranie kursu waluty Euro
            this.euro = dataEur.rates[0].mid;
      
            const responseGbp = await fetch('https://api.nbp.pl/api/exchangerates/rates/A/gbp/');
            const dataGbp = await responseGbp.json();                                                   //pobranie kursu waluty Funt Brytyjski
            this.funt = dataGbp.rates[0].mid;
      
            const responseUsd = await fetch('https://api.nbp.pl/api/exchangerates/rates/A/usd/');
            const dataUsd = await responseUsd.json();                                                   //pobranie kursu waluty Dolar Amerykański
            this.dolar= dataUsd.rates[0].mid;
      
            const responseChf = await fetch('https://api.nbp.pl/api/exchangerates/rates/A/chf/');
            const dataChf = await responseChf.json();                                                   //pobranie kursu waluty Frank szwajcarski
            this.frank = dataChf.rates[0].mid;
          },

        euro_(){
            this.end = "";
            this.waluta = "PLN na Euro";
            this.pln = "Euro na PLN";
            this.counter = this.euro;       //funkcja waluty Euro
            this.warunek = "true";
            this.quantity = 1;
            this.end_wal = "Euro";
            this.finish = null;
        },
        funt_brytyjski(){
            this.end = "";
            this.waluta = "PLN na Funty";
            this.pln = "Funty na PLN";
            this.counter = this.funt;       //funkcja waluty Funt Brytyjski
            this.warunek = "true";
            this.quantity = 1;
            this.end_wal = "Funta";
            this.finish = null;
        },
        dolar_amerykanski(){
            this.end = "";
            this.waluta = "PLN na Dolary";
            this.pln = "Dolary na PLN";
            this.counter = this.dolar;      //funkcja waluty Dolar Amerykański
            this.warunek = "true";
            this.quantity = 1;
            this.end_wal = "Dolara";
            this.finish = null;
        },
        frank_szwajcarski(){
            this.end = "";
            this.waluta = "PLN na Franki";
            this.pln = "Franki na PLN";
            this.counter = this.frank;      //funkcja waluty Frank szwajcarski
            this.warunek = "true";
            this.quantity = 1;
            this.end_wal = "Franka";
            this.finish = null;
        },
        currency(){
            if(this.quantity <= 0){
                
                this.end = null;
                this.finish = "Liczba nie może być ujemna";     //sprawdzenie czy liczba wpisana przez
            }                                                   //użytkownika nie jest ujemna
            else
            {
            this.finish = this.quantity * this.counter;
            this.end = 'zł';                                    //przeliczanie wybranej waluty na złotówki
            this.finish = this.finish.toFixed(2);
            
            }
        },
        fcurrency(){
            if(this.quantity <= 0){
                
                this.end = null;
                this.finish = "Liczba nie może być ujemna";     //sprawdzenie czy liczba wpisana przez
            }                                                   //użytkownika nie jest ujemna
            else
            {
            this.finish = this.quantity / this.counter;
            this.end = this.end_wal;                            //przeliczanie waluty z złotówek na inną walutę 
            this.finish = this.finish.toFixed(2);
            
            }
        },
    },
}).$mount('#app');

let eur;
let fun;
let dol;                                                        //zmienne JS
let fra;
