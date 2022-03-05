function Send_Data(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxvVVtST9fMRFuNOOFKhp0ToSnjdPYnyUMrH-qsCvw_bJxwZV4m1OnTOLBXiOodKrY4/exec'
    const form = document.forms['contact-form']
    form.addEventListener('submit',e => {
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

function Send_Admission_Data(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxvVVtST9fMRFuNOOFKhp0ToSnjdPYnyUMrH-qsCvw_bJxwZV4m1OnTOLBXiOodKrY4/exec'
  const form = document.forms['admission-form']
  form.addEventListener('submit', e => {
    e.preventDefault()
  });
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById("res_success").removeAttribute("hidden"))
    .catch(error => document.getElementById("res_error").removeAttribute("hidden"))
    .finally(setTimeout(function(){
      document.getElementById("res_success").setAttribute("hidden","hidden");
      document.getElementById("res_error").setAttribute("hidden","hidden");
    }, 4500))
}