$("#files").change(function() {
  filename = this.files[0].name;
  console.log(filename);
});

function Send_Data(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz4a8j71O6-2j-EAb8vEBbv28vmgip75OWD-t0K8xmd4f5LYU1TA2_JL1ib_e18L3qMSA/exec'
    const form = document.forms['contact-form']
    form.addEventListener('submit',e => {
      e.preventDefault()
    });
    document.getElementById("compobtn").setAttribute('disabled', 'disabled');
    setTimeout(function () {
      document.getElementById("compobtn").removeAttribute('disabled');
    }, 3000);
 
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => document.getElementById("res_suc").removeAttribute("hidden"))
      .catch(error => document.getElementById("res_err").removeAttribute("hidden"))
      .then(document.getElementById("contact-form").reset())
      .then( document.getElementById("name").classList.remove('is-valid'))
      .then( document.getElementById("email").classList.remove('is-valid'))
      .finally(setTimeout(function(){
        document.getElementById("res_suc").setAttribute("hidden","hidden");
        document.getElementById("res_err").setAttribute("hidden","hidden");
      }, 4500))
}

function Send_Admission_Data(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyY2nR9zmVus0_SWC_V1_dGFXjxlh3nSspBl5-1RQNLYr-_ZjTsJpRBbQCfb3JtPTRg/exec'
  const form = document.forms['admission-form']
  form.addEventListener('submit',e => {
    e.preventDefault()
  });
  document.getElementById("adbtn").setAttribute('disabled', 'disabled');
  setTimeout(function () {
    document.getElementById("adbtn").removeAttribute('disabled');
  }, 3000);

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById("res_success").removeAttribute("hidden"))
    .catch(error => document.getElementById("res_error").removeAttribute("hidden"))
    .then(document.getElementById("admission-form").reset())
    .then( document.getElementById("name").classList.remove('is-valid'))
    .then( document.getElementById("phone").classList.remove('is-valid'))
    .then( document.getElementById("grade").classList.remove('is-valid'))
    .finally(setTimeout(function(){
      document.getElementById("res_success").setAttribute("hidden","hidden");
      document.getElementById("res_error").setAttribute("hidden","hidden");
    }, 4500))
}

function Send_Team_Data(){
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzLlZR6wsfboexUtu3fofPt5DLfEwpjzSO462MuFQ9IDA7pNqS1mL2alQPfORVpjWpt/exec'
  const form = document.forms['teacher-form']
  form.addEventListener('submit', e => {
    e.preventDefault()
  });
  document.getElementById("teachbtn").setAttribute('disabled', 'disabled');
  setTimeout(function () {
    document.getElementById("teachbtn").removeAttribute('disabled');
  }, 3000);
 
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById("res_suc").removeAttribute("hidden"))
    .catch(error => document.getElementById("res_err").removeAttribute("hidden"))
    .finally(setTimeout(function(){
      document.getElementById("res_suc").setAttribute("hidden","hidden");
      document.getElementById("res_err").setAttribute("hidden","hidden");
    }, 4500))

  form.addEventListener("submit", (e) => {
      e.preventDefault();
  });
  
  const file = document.getElementById("uploadfile").files[0];
  const fr = new FileReader();
  fr.readAsArrayBuffer(file);
  fr.onload = (f) => {
    const url = "https://script.google.com/macros/s/AKfycbytdR4ODfVxMH-IJImEPDP1ED8WfTZYQ4CD98JM6VBvSibgN7gms_9cpO5jMEzjem7JQQ/exec"; 
    const qs = new URLSearchParams({
      filename: file.name,
      mimeType: file.type,
    });
    fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)])})
      .then(res =>document.getElementById("teacher-form").reset())
      .then( document.getElementById("name").classList.remove('is-valid'))
      .then( document.getElementById("phone").classList.remove('is-valid'))
      .then( document.getElementById("email").classList.remove('is-valid'))
      .then( document.getElementById("ExperienceInYears").classList.remove('is-valid'))
      .catch(res => console.log("Error"))
      .finally(document)
  };
}

function BlazorScrollToId(id) {
  const element = document.getElementById(id);
  console.log(element);
  console.log(id);
  
  if (element instanceof HTMLElement) {
      element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
      });
  }
}