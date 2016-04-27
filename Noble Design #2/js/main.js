$(document).ready(function() {
    console.log("jQuery is All Good");
    $('.mainNav__mobile-nav').click(function(){
        $('.mainNav__nav-ul').slideToggle();
    });


    $(".main").tiltedpage_scroll({
   sectionContainer: "> section",     // In case you don't want to use <section> tag, you can define your won CSS selector here
   angle: 50,                         // You can define the angle of the tilted section here. Change this to false if you want to disable the tilted effect. The default value is 50 degrees.
   opacity: true,                     // You can toggle the opacity effect with this option. The default value is true
   scale: false,                       // You can toggle the scaling effect here as well. The default value is true.
   outAnimation: false,                 // In case you do not want the out animation, you can toggle this to false. The defaul value is true.
 });

 $('.contact__letter-form').submit(function(e){

     var errors = 0;

     $('.required').each(function(){

         if( $(this).val() === '' ){

             errors = errors + 1;
             $(this).addClass('error');

         }else{

             $(this).removeClass('error');

         }

     });

     if( errors > 0 ){

         swal({   title: "Hold Your Horses",   text:'Seems You Forgot ' + errors + ' Fields',   timer: 2500,   showConfirmButton: false });
         e.preventDefault();

     } else {

         swal({   title: "Great You're Making A Decision You Won't Regret",   text: "Are you ready to hire the greatest developer ever, to make your amazing project",   type: "warning",   showCancelButton: true,   confirmButtonColor: "#DD6B55",   confirmButtonText: "Hell Yeah",   cancelButtonText: "No, You Suck",   closeOnConfirm: false,   closeOnCancel: false }, function(isConfirm){   if (isConfirm) {     swal("Fantastic", "Your message was sent, expect a response soon.", "success");   } else {     swal("Cancelled", "Fine then continue on your way, I'll be here trying to rebuild my self esteem.", "error");   } });
         e.preventDefault();
     }

 });
});
