class Mail{
    _contacts = [];
    constructor(author) {
        this.from = "Aku";
    }
    
    sendMessage = function(msg, to) {
        console.log('you send:', msg, 'to', to, 'from', this.from);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
        console.log(this._contacts);
    }
}

mail1 = new Mail();
mail1.sendMessage("Hallooo","Kamu");
mail1.showAllContacts();