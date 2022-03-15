$("#files").change(function() {
  filename = this.files[0].name;
  console.log(filename);
});

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
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwZc62D4ylk4Wis_i4ggMugGYCcwwpZ0xQE-GSv3tvZknVZkeClotFySKBbBSwBqiY/exec'
  const form = document.forms['admission-form']
  form.addEventListener('submit',e => {
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
    console.log("keldi");
  form.addEventListener("submit", (e) => {
      e.preventDefault();
  });
  
  const file = document.getElementById("uploadfile").files[0];
  const fr = new FileReader();
  fr.readAsArrayBuffer(file);
  fr.onload = (f) => {
    const url = "https://script.google.com/macros/s/AKfycbww_fwTeA1DYXpKfcXuk39UREnBSEVpkKWafaFGFQ_iYbgjwKrH7aR-4LNdVyrXNTbI/exec"; 
    const qs = new URLSearchParams({
      filename: file.name,
      mimeType: file.type,
    });
    fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)])})
      .then(res => console.log("Succes"))
      .catch(res => console.log("Error"));
  };
}