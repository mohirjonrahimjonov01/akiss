function Send_Data(){
   const scriptURL = 'https://script.google.com/macros/s/AKfycbweIh6TTeQ7ICsVA_fSXivU-m87oJd0yQL-KLhlzOxXhwWTi6akzji8JZMIBgDpL9ZWvQ/exec'
   const form = document.forms['contact-form']
   form.addEventListener('submit', e => {
     e.preventDefault()
   });
   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response => document.getElementById("res_suc").removeAttribute("hidden"))
     .catch(error => document.getElementById("res_err").removeAttribute("hidden"))
     .finally(setTimeout(function(){
       document.getElementById("res_suc").setAttribute("hidden","hidden");
       document.getElementById("res_err").setAttribute("hidden","hidden");
     }, 4500))
}

function doGet() {
   var html = HtmlService.createHtmlOutputFromFile('teacher-form');
   return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
} 

function uploadFiles(data) {
   var file = data.myFile;
   var folder = DriveApp.getFolderById('1mZCRkN4pvdNGGkvurC2bBsB7ncQ_Nn93');
   var createFile = folder.createFile(file);
   return createFile.getUrl();
}