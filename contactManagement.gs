/* Probable program steps:
1. Sort through contacts and determine who is a therapist and who is a regular contact
2. Find duplicate contacts (fuzzy match(?) due to changing name/status
3. Merge across to old(?) contact
4. Would be nice: Send us an email summary of the merged contacts so we can check for errors
5. Would be nice to log changes so we can check the logs as well 

**Contact tagging logic:

if client's state == 'X' and name does not contain ('X Delete', 'X Unavailable') Then:
	add tags: 'All CONTRACTORS', 'X State'
elif client's name contains ('X - DELETE'):
	remove all exisiting tags
	add 'X TO DELETE' tag
elif client's name contains ('X EXPIRED'):
	remove all existing tags
	add to 'X EXPIRED'

if client is a duplicate:
	- find which one was most recently modified
	- merge fields correctly

Notes:
- Need program to be able to determine whether contact is a therapist or sophie's contacts 
- Doesn't look like we can extract photo and add to newer contact, will have to compensate and merge
across to older contact and THEN fix tagging on that contact 
- Need to somehow(?) get data into a datatable(?) and sort through it 
*/
function findDuplicates() {
  let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
  var contacts = ContactsApp.getContacts();
  Logger.log(typeof contacts)
  // Prints individual update and full names to console
  for (y in contacts) {
    y = contacts[y].getLastUpdated();
    Logger.log(y)
  }
  
  for (var i in contacts) {
    i = contacts[i].getFullName();
    Logger.log(y)
  }
}
