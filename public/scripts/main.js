// main.js - client behaviors
document.addEventListener('DOMContentLoaded', function(){
  var btn = document.getElementById('mobile-open');
  if(btn){
    btn.addEventListener('click', function(){ alert('Open mobile menu (implement as needed)'); });
  }
  var form = document.getElementById('booking-form');
  if(form){
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      var data = new FormData(form);
      var obj = {};
      data.forEach((v,k)=>obj[k]=v);
      var status = document.getElementById('status');
      status.textContent = 'Sending...';
      try{
        await fetch('/webhook/demo', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(obj)});
        status.textContent = 'Thanks — your demo request was received. We will contact you shortly.';
      }catch(err){
        status.textContent = 'Could not submit form. You can also book via WhatsApp.';
      }
    });
  }
});
