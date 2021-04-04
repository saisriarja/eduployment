$(document).ready(function(){
  
    $('input[name="genderOption"]').on('change', function(){
        if($(this).prop('checked')){
            // console.log($(this).val())
            $('.form-check-label').removeClass('checked');
            $(this).closest('.form-check-label').addClass('checked');
        }
    });

    $('.toggle-form').on('click', function(event){
        if($(window).width() > 992){
            event.preventDefault();
            
            $('.bottom-form-section').toggleClass('regular-form-section sticky-form-section');
            if($('.bottom-form-section').hasClass('sticky-form-section')){
                $('body').addClass('sticky-form-has-opened');
            }else{
                $('body').removeClass('sticky-form-has-opened');
            }
            $('.form-layout .form-group').parent().toggleClass('col-lg-6 col-lg-12');
        }
    });
});