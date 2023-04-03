kurs_euro();
kurs_funta();
kurs_dolara();                          //wywołanie funkcji pobierających kursy walut
kurs_franka();

new Vue({

    data(){

        return{
            quantity: null,
            waluta: "Wybierz",
            counter: 0,
            euro: 'Pobierz kurs',
            funt: 'Pobierz kurs',
            dolar: 'Pobierz kurs',
            frank: 'Pobierz kurs',      //zmienne VUE
            warunek: "false",
            finish: null,
            end: '',
            end_wal: '',

        };
    },

    methods:{

        kurs(){
            
            kurs_euro();
            this.euro = eur;
            kurs_funta();
            this.funt = fun;            //funkcja ustawiająca kursy walut 
            kurs_dolara();
            this.dolar = dol;
            kurs_franka();
            this.frank = fra;

        },

        euro_(){
            this.end = "";
            kurs_euro();
            this.euro = eur;
            this.waluta = "PLN na Euro";
            this.pln = "Euro na PLN";
            this.counter = this.euro;       //funkcja waluty Euro
            this.warunek = "true";
            this.quantity = 1;
            this.end_wal = "Euro";
        },
        funt_brytyjski(){
            this.end = "";
            kurs_funta();
            this.funt = fun;
            this.waluta = "PLN na Funty";
            this.pln = "Funty na PLN";
            this.counter = this.funt;       //funkcja waluty Funt Brytyjski
            this.warunek = "true";
            this.quantity = 1;
            this.end_wal = "Funta";
        },
        dolar_amerykanski(){
            this.end = "";
            kurs_dolara();
            this.dolar = dol;
            this.waluta = "PLN na Dolary";
            this.pln = "Dolary na PLN";
            this.counter = this.dolar;      //funkcja waluty Dolar Amerykański
            this.warunek = "true";
            this.quantity = 1;
            this.end_wal = "Dolara";
        },
        frank_szwajcarski(){
            this.end = "";
            kurs_franka();
            this.frank = fra;
            this.waluta = "PLN na Franki";
            this.pln = "Franki na PLN";
            this.counter = this.frank;      //funkcja waluty Frank szwajcarski
            this.warunek = "true";
            this.quantity = 1;
            this.end_wal = "Franka";
        },
        currency(){
            if(this.quantity <= 0){
                
                this.end = null;
                this.finish = "Liczba nie może być ujemna";     //sprawdzenie czy liczba wpisana przez
            }                                                   //użytkownika nie jest ujemna
            else
            {
            this.quantity = this.quantity * this.counter;
            this.end = 'zł';                                    //przeliczanie wybranej waluty na złotówki
            this.quantity = this.quantity.toFixed(2);
            this.finish = this.quantity;
            }
        },
        fcurrency(){
            if(this.quantity <= 0){
                
                this.end = null;
                this.finish = "Liczba nie może być ujemna";     //sprawdzenie czy liczba wpisana przez
            }                                                   //użytkownika nie jest ujemna
            else
            {
            this.quantity = this.quantity / this.counter;
            this.end = this.end_wal;                            //przeliczanie waluty z złotówek na inną walutę 
            this.quantity = this.quantity.toFixed(2);
            this.finish = this.quantity;
            }
        },
    },
}).$mount('#app');

let eur;
let fun;
let dol;                                                        //zmienne JS
let fra;

function kurs_euro(){

var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {
        let res = JSON.parse(this.responseText);                //pobranie kursu waluty Euro
        eur = res.rates[0].mid;
    }
};
ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/eur/", true);
ajax.send();
}

function kurs_funta(){

var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {
        let res = JSON.parse(this.responseText);                //pobranie kursu waluty Funt Brytyjski
        fun = res.rates[0].mid;
    }
};
ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/gbp/", true);
ajax.send();
}
function kurs_dolara(){

var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {          //pobranie kursu waluty Dolar Amerykański
        let res = JSON.parse(this.responseText);
        dol = res.rates[0].mid;
    }
};
ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/usd/", true);
ajax.send();
}

function kurs_franka(){

var ajax = new XMLHttpRequest();
ajax.onreadystatechange = function() {
    if(ajax.readyState === 4 && ajax.status === 200) {          //pobranie kursu waluty Frank szwajcarski
        let res = JSON.parse(this.responseText);
        fra = res.rates[0].mid;
    }
};
ajax.open("GET", "http://api.nbp.pl/api/exchangerates/rates/a/chf/", true);
ajax.send();
}
