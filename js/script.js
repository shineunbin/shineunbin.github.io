console.log("load")


$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg5').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'660px'},1600);
            }
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg4').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'440px'},1400);
            }
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg3').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'220px'},1200);
            }
        }); 
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg2').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'0px'},1000);
            }
        }); 
    });
});


$(document).ready(function() {
    $(window).scroll( function(){
        $('.brandimg1').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'500px'},800);
            }
        }); 
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.coca').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'margin-left':'500px'},500);
            }
        }); 
    });
});

var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".leftbox1title1").text(); // 타이핑될 텍스트를 가져온다 
    typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
       typingBool=true; 
       
       var tyInt = setInterval(typing,400); // 반복동작 
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
         $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
         typingIdx++; 
       } else{ 
         clearInterval(tyInt); //끝나면 반복종료 
       } 
     }  

     $(function(){
        var up = $('.up');
        var down = $('.down');
        var Life = $('.Life');
        up.click(function(){
          Life.slideDown();
        });
        down.click(function(){
          Life.slideUp();
        });
      });
/* 사라지고 나타나고 안쓸랜당
window.addEventListener('scroll', function() {
    var el = document.querySelector('.next');
    
    if(window.scrollY >= 2000) el.classList.add('shown');
    else el.classList.remove('shown');
  });

  */