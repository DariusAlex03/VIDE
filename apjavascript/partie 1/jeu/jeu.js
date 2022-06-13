let tux = document.querySelector('#tux');
let score = 0;

document.addEventListener('keydown',function(event){
    //console.log(event.key);
    let rect=tux.getBoundingClientRect();
    console.log(rect);


    let rlecw = rect.width;   //obtenir la largeur 
    let rlech = rect.height;   //obtenir la longueur 
    let posx = rect.x;      //obtenir la position 
    let posy = rect.y;      //obtenir la position y
    console.log("LA POSITION X : " + posx);
    console.log("LA POSITION Y : " + posy);
    console.log("la largeur : " + rlech);
    console.log("la longueur : " + rlecw);

    if (posx-rlecw >= 100 || posy-rlech >= 100)
    {posx==posx}
    let left=rect.left;
    let top=rect.top;

    left=Math.max(10,left);
    top =Math.max(10,top);
    left=Math.min(510-rect.width ,left);
    top =Math.min(510-rect.height,top);

    let i=event.key;
    if(i==="ArrowUp"){
        tux.style.top=top-10+'px';
    }
    else if(i==="ArrowDown"){
        tux.style.top=top+10 +'px';
    }
    else if(i==="ArrowRight"){
        tux.style.left=left+10+'px';
    }
    else if(i==="ArrowLeft"){
        tux.style.left=left-10+'px';
    }
  })

  document.addEventListener('mousemove',ajouter_splat);
  function ajouter_splat(event)
  {
    // Petit détail: éviter la sélection 
    event.preventDefault();

    if (event.pageX-16<=10 || event.pageY-16<=10 || event.pageX>=500+10 || event.pageY>= 500+10)
    {return}

    let i=document.createElement('img');
    i.src='https://moodle.iutv.univ-paris13.fr/img/bjs/splat.png';
    i.className='splat';
    document.body.append(i);
    
    // Forcer le navigateur à prendre en compte la situation actuelle (position, scale).
    // Ceci permettra au navigateur de s'apercevoir d'un changement futur des propriétés CSS.
    window.getComputedStyle(i).top;
    // Changer les propriétés CSS qui transitionnent. 
    // Le navigateur s'aperçoit du changement et déclenche la transition.
    
    i.style.top =(event.pageY-16)+'px';
    i.style.left=(event.pageX-16)+'px';
    i.style.transform='scale(1)';
    
    setTimeout(function(){
        let rectTux=tux.getBoundingClientRect();
	    let rectSplat=i.getBoundingClientRect();
	    let touche=
		rectSplat.top +rectSplat.height >= rectTux.top                  &&
		rectSplat.top                   <  rectTux.top  +rectTux.height &&
		rectSplat.left+rectSplat.width  >= rectTux.left                 &&
		rectSplat.left                  <  rectTux.left +rectTux.width  ;
        
        if(touche){
            score= score + 10;
            i.remove()
          }
          else
          {
            score = score - 5;
            i.style.zIndex = '-1'
          }
        document.getElementById('score').textContent=score;
      },1000);
  }
  
