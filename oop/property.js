class Mail{
    from = 'pengirim@dicoding.com';
      contacts = [];
      sendMessage = function(msg, to, from) {
          console.log('you send:', msg, 'to', to, 'from', from); // from di sini merujuk ke `from` parameter, bukan ke `from` dari global value yaitu pengirim@dicoding.com
      this.contacts.push(to);
      };
  }
  
  const mail1 = new Mail();
  mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');