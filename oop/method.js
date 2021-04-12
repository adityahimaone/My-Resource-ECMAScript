class Mail{
    from = 'pengirim'
        _contacts = []
         sendMessage = function(msg, to){
            console.log ('You send : ', msg, 'To : ', to, 'from ', this.from);
    this._contacts.push(to)
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
/**
output-nya berhasil:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/