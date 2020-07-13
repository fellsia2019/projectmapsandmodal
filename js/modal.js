jQuery(document).ready(function($){
    let bodyFIXED = $("#fixedBody");
    let modal__form = $(".bg_modalForm");
    let openModal = $(".link_writeMesForDirector");
    let closeModal = $(".link_closeTHIS");

    $(openModal).on("click", function(event){
        event.preventDefault();
        
        modal__form.toggleClass("active");
        bodyFIXED.toggleClass("modal-form");
    });

    $(closeModal).on("click", function(event){
        event.preventDefault();
        
        modal__form.toggleClass("active");
        bodyFIXED.toggleClass("modal-form");
    });


   
    
});