$(document).ready(function () {});
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });




const messages = document.querySelectorAll('.message_expand');
const toggleBtns = document.querySelectorAll('.message_show');

toggleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    messages[index].classList.toggle("expanded");

    if (messages[index].classList.contains("expanded")) {
      btn.innerHTML = `Read Less <i class="fa fa-chevron-up"></i>`;
    } else {
      btn.innerHTML = `Read Full Message <i class="fa fa-chevron-down"></i>`;
    }
  });
});



// time line accordion


 document.addEventListener('DOMContentLoaded', function() {
            const collapseElements = document.querySelectorAll('.collapse');
            
            collapseElements.forEach(function(element) {
                element.addEventListener('show.bs.collapse', function() {
                    const button = document.querySelector(`[data-bs-target="#${element.id}"]`);
                    button.classList.remove('collapsed');
                });
                
                element.addEventListener('hide.bs.collapse', function() {
                    const button = document.querySelector(`[data-bs-target="#${element.id}"]`);
                    button.classList.add('collapsed');
                });
            });
        });



});
