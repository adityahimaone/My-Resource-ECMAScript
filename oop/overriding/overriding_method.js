class Mail {
    _contacts = [];
    constructor(author) {
        this.from = author;
    };
    sendMessage = function (msg, to) {
       
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    };
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = false;
    }
    myProfile = function () {
        return `my name ${this.username}, is ${this.isBussinessAccount? 'Business': 'Personal'}`;
    };

    sendMessage = function (msg, to) {
        //super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('dicoding', true, 089989090898);
console.log(wa1.myProfile());
wa1.sendMessage('halloo', 089000999888);
// my name dicoding, is Business