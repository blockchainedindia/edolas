var accounts;
var edolasAccount;

var TokenContract;

var balances = {};

//function refreshBalance() {
//  showBalance(accountName,  "balance_account_name");
//}

//function showBalance(account, element) {
//  TokenContract.balanceOf(account).then(function(value) {
//    var balance_element = document.getElementById(element);
//    balance_element.innerHTML = value.valueOf();
//    balances[account] = value;
//  });
//}


function setupWeb3Filter() {
  var filter = web3.eth.filter({});

  filter.watch(function (error, log) {
    console.log(log);
//    console.log("Transaction hash: " + log.transactionHash);
  });
}

window.onload = function() {
  EdolasToken.deployed()
    .then(function (instance) {
      TokenContract = instance;
      console.log(TokenContract);
      return;
  });

  setupWeb3Filter();

}
