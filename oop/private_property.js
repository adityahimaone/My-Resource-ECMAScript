/** 
cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
var contacts = [];
// contoh
function Mail(){
  this.from = 'pengirim@dicoding.com';
    var contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
                      contacts.push(to);
    };
}
 
 
/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
_contacts = []
// contoh
class Mail{
  from = 'pengirim@dicoding.com';
    _contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    this._contacts.push(to);
    };
}
 
 
/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
this.#contacts = [];
// contoh
class Mail{
  from = 'pengirim@dicoding.com';
    #contacts = [];
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
    this.#contacts.push(to);
    };
}