

function prevForm(e){
    
        let thisElement = e.closest('.tab-pane');
        let prevSibling = thisElement.previousElementSibling;
    
        let thisElementId = thisElement.id;
        let thisElementNav = document.querySelectorAll(`[aria-controls*="${thisElementId}"]`)[0];
        let prevElementNav = thisElementNav.previousElementSibling;
    
        thisElement.classList.remove('show');
        thisElement.classList.remove('active');
        thisElementNav.classList.remove('active');
        
        
        if(prevSibling != null){
            prevSibling.classList.add('show');
            prevSibling.classList.add('active');
            prevElementNav.classList.add('active');
        }
       
}

function nextForm(e){
    
    let thisElement = e.closest('.tab-pane');
    let nextSibling = thisElement.nextElementSibling;

    let thisElementId = thisElement.id;
    let thisElementNav = document.querySelectorAll(`[aria-controls*="${thisElementId}"]`)[0];
    let nextElementNav = thisElementNav.nextElementSibling;

    thisElement.classList.remove('show');
    thisElement.classList.remove('active');
    thisElementNav.classList.remove('active');
    
   
    if(nextSibling != null){
        nextSibling.classList.add('show');
        nextSibling.classList.add('active');
        nextElementNav.classList.add('active');
    }
    else{
        document.getElementsByTagName("nav")[0].style.display = "none";
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Başarılı!',
            showConfirmButton: false,
            timer: 1500
          })
    }
}
