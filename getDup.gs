function getDup() {
  var contacts = ContactsApp.getContacts();
  var contactName = ContactsApp.getContactsByName('Emi Furuta');
  for (var i in contactName) {
    i = contactName[i].getFullName();
    Logger.log(i)
  }
  Logger.log('--------------------------------------------------------')
  Logger.log(contactName[1].getFullName());
  Logger.log(contactName[1].getLastUpdated());
  Logger.log(contactName[1].getEmails()[0].getAddress());
  Logger.log(contactName[1].getAddresses()[0].getAddress());
  var contact_id = contactName[1].getCustomFields()[0].getValue();
  Logger.log('Contact ID: %s:', contact_id.toString());
  Logger.log(contactName[1].getNotes());
  var bday = contactName[1].getDates(ContactsApp.Field.BIRTHDAY)[0].getDay();
  var bmonth = contactName[1].getDates(ContactsApp.Field.BIRTHDAY)[0].getMonth();
  var byear = contactName[1].getDates(ContactsApp.Field.BIRTHDAY)[0].getYear();
  Logger.log(bday.toString().concat('/', bmonth.toString(), '/', byear.toString()));
  //Logger.log(bday.concat('/',bmonth,'/',byear));
  // 
//  var fields 
//  for (var x in contactName) {
//    fields = contactName[x].getCustomFields();
//    if (typeof fields == 'object' && fields !== null) {
//      // Logger.log(fields[x].getValue());
//      Logger.log('This was an obj')
//    } else {
//    Logger.log(fields);
//    Logger.log('This was not an obj');
//    }
//  }
  Logger.log('---------------------------------------------');
  var contact_ids = []
  for (var i = 0; i<contactName.length; i++) {
    try {
    var ids = contactName[i].getCustomFields()[0].getValue();
    } catch(e) {
    var ids = 'unknown'
    }
    contact_ids.push(ids);
    var seen = contact_ids.filter((s => v => s.has(v) || !s.add(v))(new Set));
    for (var z = 0; z<seen.length; z++) {
      Logger.log('This is a duplicate:', seen[z]);
    }
  }
  Logger.log('Contact IDs: ', contact_ids);
  var seen = contact_ids.filter((s => v => s.has(v) || !s.add(v))(new Set));
  Logger.log(seen);
  // Extract all contact groups 
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
  
}
