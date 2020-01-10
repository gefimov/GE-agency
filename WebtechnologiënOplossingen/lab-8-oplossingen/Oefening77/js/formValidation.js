/*
 * In dit javascript bestand plaats je de code om met behulp van cleave.js formvalidatie toe te passen op de ticketForm.
 * Gebruik hiervoor de documentatie op https://nosir.github.io/cleave.js/ 
 */
let cleavedate = new Cleave('.dateField', {
    date: true,
    delimiter: '-',
    datePattern: ['d', 'm', 'Y']
});

let cleavecc = new Cleave('.creditCardField', {
    creditCard: true,
    onCreditCardTypeChanged: function (type) {
        // update UI ...
    }
});

let cleavepn = new Cleave('.phoneNrField', {
    phone: true,
    phoneRegionCode: 'BE'
});

