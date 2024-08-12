const all_buttons = document.querySelectorAll('.picker-item');
const embedded_video = document.querySelector('.ytvid');

const lecture1 = document.getElementById('lec1');
const lecture2 = document.getElementById('lec2');
const lecture3 = document.getElementById('lec3');
const lecture4 = document.getElementById('lec4');
const lecture5 = document.getElementById('lec5');

lecture1.classList.add('active');

lecture1.addEventListener('click',() => {
    
    if(lecture1.classList.contains('active')){return;}

    embedded_video.src = "https://www.youtube.com/embed/Y1BlT4_c_SU?si=WFFamDR5NlcIfzXL";

   for (let i = 0; i < all_buttons.length; i++){
    if (all_buttons[i] != lecture1){
        all_buttons[i].classList.remove('active');
    }
}
   lecture1.classList.add('active');
})



lecture2.addEventListener('click',() => {
   
    if(lecture2.classList.contains('active')){return;}
    
    embedded_video.src = "https://www.youtube.com/embed/cZCq8lQ-vZ0?si=zKR-o87Zj9CcH1RY";
 
    for (let i = 0; i < all_buttons.length; i++){
        if (all_buttons[i] != lecture2){
            all_buttons[i].classList.remove('active');
    }
   }
   lecture2.classList.add('active');
})




lecture3.addEventListener('click',() => {

    if(lecture3.classList.contains('active')){return;}
    
    embedded_video.src = "https://www.youtube.com/embed/IJWcX2EDAKg?si=qYBVwH9gG-yc-P7U";
    
    for (let i = 0; i < all_buttons.length; i++){
        if (all_buttons[i] != lecture3){
            all_buttons[i].classList.remove('active');
        }
    }
       lecture3.classList.add('active');
})


lecture4.addEventListener('click',() => {

    if(lecture4.classList.contains('active')){return;}
    
    embedded_video.src = "https://www.youtube.com/embed/MnaKa7igX7k?si=375LnJLOY-QIVd3e";

    for (let i = 0; i < all_buttons.length; i++){
        if (all_buttons[i] != lecture4){
            all_buttons[i].classList.remove('active');
        }
    }
       lecture4.classList.add('active');
})



lecture5.addEventListener('click',() => {

    if(lecture5.classList.contains('active')){return;}

    embedded_video.src = "https://www.youtube.com/embed/mNRzWMH5xK0?si=K7lT9jjw846LEJEU";

    for (let i = 0; i < all_buttons.length; i++){
        if (all_buttons[i] != lecture5){
            all_buttons[i].classList.remove('active');
        }
    }
       lecture5.classList.add('active');
})

