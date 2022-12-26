function smoothScroll(){
    let x = document.querySelectorAll('a[href*="#"]');
    for(let i = 0; i < x.length ; i++){
    x[i].onclick=function(){
    let  target = this.hash;
      target.scrollIntoView({
      behavior:'smooth',
      alignToTop:true,
      block:'start'
          });
         }
       }
    }
    smoothScroll();