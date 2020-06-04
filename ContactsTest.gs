/**
 * Get info about my contacts.
 *
 * @returns  Contact[]    Array of contacts in same domain as user.
 *
 * Adapted from //stackoverflow.com/questions/32477736
 */
function getContactsInfo() {
  // Get all my contacts, just to validate the number.
  var contacts = ContactsApp.getContacts();
  Logger.log("Total contacts: %s",contacts.length.toString());
  
  var group = ContactsApp.getContactGroup('X TO DELETE')
  var deleted = group.getContacts()
  // Logger.log("Names of contacts in X DELETE: %s",
  //           deleted.map(function(group){
  //              return group.getName()}));

  // Get info about my Contact groups (includes System Groups)
  var myGroups = ContactsApp.getContactGroups();
  Logger.log("Contact Groups (%s): %s",
             myGroups.length.toString(),
             myGroups.map(function(group){    // from //stackoverflow.com/a/16607599/1677912
               return group.getName();
             }).join());

  // Get my domain from my email (from //stackoverflow.com/a/5181776/1677912)
  var myDomain = Session.getActiveUser().getEmail().split("@")[1];
  Logger.log("My domain: %s", myDomain);

  // Get all domain users in my contacts
  var users = ContactsApp.getContactsByEmailAddress(myDomain);
  Logger.log("Matches in domain: %s",users.length.toString());
  for(var i=0; i<users.length; i++) {
    Logger.log(users[i].getGivenName());
  }
  return users;
}