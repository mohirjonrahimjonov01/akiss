function Send_Data(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycby_HCrx8RTyylqfgb3L20296hmQWpZ-qNigjkYXgHWO9QKd8TO_IsqUyRa1MqpMNQTH/exec'
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
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz4ojYoPN3RCIKv-Z0Y4Ph7xV9B1ZTAx6Qp-aRRkl21ZcbquaAhwfyGuiX-PmGlx2Iy/exec'
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

function Send_Team_Data(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycbziWrCrohkUSA5a_2r3pp9xFeELLFQq4fk_ROlCt2vd2MlpwdinlOuwRxrvK6Df3dv-ig/exec'
  const form = document.forms['teacher-form']
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