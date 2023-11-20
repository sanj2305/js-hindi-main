const accountId = 144553;
let accountEmail = "sanj@oogle.com";
var accountPassword = "123";
accountCity = "Jaipur";

// accountId = 2  // not allowed

accountEmail = "hc@hc.com";
accountPassword = "66666";
accountCity = "Bengaluru";
let accountState;
accountCity = "Gokaka";
console.log(accountId);

/* Prefar not to use var
because of issue in block scope and functional scope */
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
