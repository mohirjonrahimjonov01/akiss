function ValidationIcon(inputName){
    if((document.getElementById(inputName).value == null || document.getElementById(inputName).value === "") || (inputName==='phone' && document.getElementById(inputName).value.length < 13)){
      document.getElementById(inputName).classList.remove('is-valid');
      document.getElementById(inputName).classList.add('is-invalid');
    }else{
      document.getElementById(inputName).classList.remove('is-invalid');
      document.getElementById(inputName).classList.add('is-valid');
    }
  }
function ActiveStatus(){
$('.nav-link').on('click',function(){
  $('.nav-link').removeClass('active');
  $(this).addClass('active');
});
}