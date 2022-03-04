function Send_Data(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycby_HCrx8RTyylqfgb3L20296hmQWpZ-qNigjkYXgHWO9QKd8TO_IsqUyRa1MqpMNQTH/exec'
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
      document.getElementById("compobtn").disabled = true;
      document.getElementById("name").value = '';
      document.getElementById("email").value = '';
      document.getElementById("subject").value = '';
      document.getElementById("message").value = ''; 
  }