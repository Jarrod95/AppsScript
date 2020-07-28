// Prints out file names in specified folder
//NEED TO: 1. get subfolders in folder
function myFunction() {
 var folders = DriveApp.getFoldersByName('Naomi Martin');
  var folder = folders.next();
  Logger.log(folder.getName());
    var files = folder.getFiles();
    while (files.hasNext()) {
      var file = files.next();
      var name = file.getName().split(/[.()]/)[2];
      if (name.includes('Exp')) {
        //Somehow work this into the one 'split'???
        var date = new Date(name.split('Exp')[1]);
        //Boolean: is document older than today?
        if (date <= new Date()) {
          Logger.log(file.getName());
}}}}
