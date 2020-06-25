// Renames contact based on 'if' conditions
function renameContact() {
  var contactName = ContactsApp.getContactsByName('DELETE');
  var z 
  for (var i in contactName) {
   // Logger.log(contactName[i].getFullName())
      if (contactName[i].getFullName().includes('X - DELETE')) {
        var x = contactName[i].getFullName();
        var n = x.split(" ").slice(3,x.length);
        var newName = 'X DELETE - ' + n.join(" ");
        //Logger.log(newName);
        //contactName[i].setFullName(newName);
    }
    if (contactName[i].getFullName().split(" ")[2] !== '-') {
      var y = contactName[i].getFullName();
      var q = y.split(" ").slice(2,y.length);
      var newName2 = 'X DELETE - ' + q.join(" ");
      contactName[i].setFullName(newName2);
      Logger.log(newName2);
    }
  }
}
