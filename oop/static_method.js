class Mail{
    static isValidPhone(phone) {
      return typeof phone === 'number';
    }
  }

  console.log(Mail.isValidPhone(089000000000))  //true
