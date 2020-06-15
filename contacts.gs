function contactTest() {
  var contacts = ContactsApp.getContacts();
  Logger.log("Total contacts: %s",contacts.length.toString());
  var alessandro = ContactsApp.getContactsByName('Alessandro');
 // for (var i in alessandro) {
 //   Logger.log(alessandro[i].getFullName());
//}
  var note = alessandro[0].getNotes();
  Logger.log(note);
  
  var j = alessandro[0].getFullName();
  Logger.log(j)
  
  var add = alessandro[0].getAddresses();
  add[0].setLabel('Home');
  
  var group = alessandro[0].getContactGroups()
  for (var x in group) {
  Logger.log(group[x].getName());
  }
  for (var z in contacts) {
    var address = contacts[z].getAddresses();
    Logger.log(address)
  }
  
  var melb = ContactsApp.getContactGroup("Melbourne")
  for (var i in add) {
    var x = add[i].getAddress();
    if (x.includes("VIC")) {
        alessandro.addToGroup(melb);
      }
  }
}
