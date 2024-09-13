// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function bbb(){
    const scroll = new LocomotiveScroll({
            el: document.querySelector('#main '),
            smooth: true
        });
        
}
bbb();
    var videocon = document.querySelector('#video-container');
    var playBtn = document.querySelector('#play');
    
    videocon.addEventListener("mouseenter",function(){
        gsap.to(playBtn,{
            scale:1,
            opacity:1
        })
    })
    
    
    videocon.addEventListener("mouseleave",function(){
        gsap.to(playBtn,{
            scale:0,
            opacity:0
        })
    })
    
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playBtn,{
            left:dets.x,
            top:dets.y
            
            
        })
    })
    




// function starting_animation(){


// gsap.from("#page-1",{
//     y:100,
//     opacity:0,
//     delay:0.2,
//     duration:0.5

// })
// }
// starting_animation();