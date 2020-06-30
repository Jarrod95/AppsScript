function addToGroup() {
  // Firstly load all groups
  var in_progress = ContactsApp.getContactGroup('0. In Progress');
  var all_contractors = ContactsApp.getContactGroup('1. ALL CONTRACTORS');
  var act_contractors = ContactsApp.getContactGroup('2. ACT CONTACTORS');
  var nsw_contractors = ContactsApp.getContactGroup('3. NSW Contractors');
  var nt_contractors = ContactsApp.getContactGroup('4. NT Contractors');
  var qld_contractors = ContactsApp.getContactGroup('5. QLD Contractors');
  var sa_contractors = ContactsApp.getContactGroup('6. SA Contractors');
  var tas_contactors = ContactsApp.getContactGroup('7. TAS (Hobart) Contractors');
  var vic_contractors = ContactsApp.getContactGroup('8. VIC Contractors');
  var wa_contractors = ContactsApp.getContactGroup('9. WA Contractors')
  var x_delete = ContactsApp.getContactGroup('X TO DELETE');
  var x_unavailable = ContactsApp.getContactGroup('X UNAVAILABLE');
  var x_expired = ContactsApp.getContactGroup('X EXPIRED');
  
  // Now load all contractors that match naming conventions
  var deleted = ContactsApp.getContactsByName('DELETE');
  var expired = ContactsApp.getContactsByName('EXPIRED');
  var progress = ContactsApp.getContactsByName('In Progress');
  var unavailable = ContactsApp.getContactsByName('UNAVAILABLE');
  
  // Now try states
  var act = ContactsApp.getContactsByName('(ACT)');
  var nsw = ContactsApp.getContactsByName('(NSW)');
  var vic = ContactsApp.getContactsByName('(VIC)');
  var qld = ContactsApp.getContactsByName('(QLD)');
  var tas = ContactsApp.getContactsByName('(TAS)'); 
  var wa = ContactsApp.getContactsByName('(WA)');
  var nt = ContactsApp.getContactsByName('(NT)');
  var sa = ContactsApp.getContactsByName('(SA)');
  
  // Add to In Progress & 1. ALL CONTRACTORS
  for (var x in progress) {
    all_contractors.addContact(progress[x]);
    in_progress.addContact(progress[x]);
  }
    // Add to X DELETE & 1. ALL CONTRACTORS
  for (var x in deleted) {
    all_contractors.addContact(deleted[x]);
    x_delete.addContact(deleted[x]);
  }
  // Add to X EXPIRED & 1. ALL CONTRACTORS
  for (var x in expired) {
    all_contractors.addContact(expired[x]);
    x_expired.addContact(expired[x]);
  }
  // Add to X UNAVAILABLE & 1. ALL CONTRACTORS
  for (var x in unavailable) {
    all_contractors.addContact(unavailable[x]);
    x_unavailable.addContact(unavailable[x]);
  }
    // Add to VIC & 1. ALL CONTRACTORS
  for (var x in vic) {
    all_contractors.addContact(vic[x]);
    vic_contractors.addContact(vic[x]);
  }
  // Add to NSW & 1. ALL CONTRACTORS
  for (var y in nsw) {
    all_contractors.addContact(nsw[y]);
    nsw_contractors.addContact(nsw[y]);
  }
  // Add to ACT & 1. ALL CONTRACTORS
  // ERRORING OUT FOR SOME REASON
  for (var x in act) {
    Logger.log(act[x].getFullName());
    all_contractors.addContact(act[x]);
    act_contractors.addContact(act[x]);
  }
  //Add to SA & 1. ALL CONTRACTORS
  for (var x in sa) {
    all_contractors.addContact(sa[x]);
    sa_contractors.addContact(sa[x]);
  }
  Logger.log('Completed');
}
