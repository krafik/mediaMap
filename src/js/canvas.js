let sudak = document.querySelector('#sudak');
let sudakDistr = document.querySelector('#l17');
let infoSudak = document.querySelector('.infoSudak');
let closeBtnS = infoSudak.querySelector('.close');


let simf = document.querySelector('#simf');
let simfDistr = document.querySelector('#l15');
let infoSimf = document.querySelector('.infoSimf');
let closeBtnSimf = infoSimf.querySelector('.close');

let yalta =  document.querySelector('#yalta');
let yDistr = document.querySelector('#l18');
let infoYalta = document.querySelector('.infoYalta');
let closeBtnY = infoYalta.querySelector('.close');

let alushta =document.querySelector('#alushta');
let aDistr = document.querySelector('#l16');
let infoAlushta = document.querySelector('.infoAlushta');
let closeBtnA = infoAlushta.querySelector('.close');


let feo = document.querySelector('#feo');
let fDistr = document.querySelector('#l12');
let infoFeo = document.querySelector('.infoFeo');
let closeBtnF = infoFeo.querySelector('.close');

let kerch= document.querySelector('#kerch');
let kDistr = document.querySelector('#l27');
let infoKerch = document.querySelector('.infoKerch');
let closeBtnK = infoKerch.querySelector('.close');

let Djank= document.querySelector('#Djank');
let dDistr= document.querySelector('#l4');
let infoDjank = document.querySelector('.infoDjank');
let closeBtnD = infoDjank.querySelector('.close');

let bahch= document.querySelector('#bahch');
let bDistr = document.querySelector('#l21');
let infoBahch = document.querySelector('.infoBahch');
let closeBtnB = infoBahch.querySelector('.close');

let sevas= document.querySelector('#sevas');
let sDistr = document.querySelector('#l22');
let infoSevas = document.querySelector('.infoSevas');
let closeBtnSevas = infoSevas.querySelector('.close');

let evpa= document.querySelector('#evpa');
let eDistr = document.querySelector('#l24');
let infoEvpa = document.querySelector('.infoEvpa');
let closeBtnE = infoEvpa.querySelector('.close');

let saki= document.querySelector('#saki');
let sakiDistr = document.querySelector('#l25');
let infoSaki = document.querySelector('.infoSaki');
let closeBtnSaki = infoSaki.querySelector('.close');



sudak.addEventListener('mouseover',function(){addClass(sudakDistr); });
sudak.addEventListener('mouseout',function(){rClass(sudakDistr);  });
sudak.addEventListener('click',function(){
infoSudak.classList.add('active');
sudakDistr.classList.add('activeDistr');
console.log('success');
});
closeBtnS.addEventListener('click',function(){
  sudakDistr.classList.remove('activeDistr');
  infoSudak.classList.remove('active');
})

// 
simf.addEventListener('mouseover',function(){ addClass(simfDistr);});
simf.addEventListener('mouseout',function(){  rClass(simfDistr);});
simf.addEventListener('click',function(){
  infoSimf.classList.add('active');
  simfDistr.classList.add('activeDistr');
  console.log('success');
  });
closeBtnSimf.addEventListener('click',function(){
    simfDistr.classList.remove('activeDistr');
    infoSimf.classList.remove('active');
  })

// 
yalta.addEventListener('mouseover',function(){ addClass(yDistr);});
yalta.addEventListener('mouseout',function(){  rClass(yDistr);});
yalta.addEventListener('click',function(){
  infoYalta.classList.add('active');
  yDistr.classList.add('activeDistr');
  console.log('success');
  });
closeBtnY.addEventListener('click',function(){
    yDistr.classList.remove('activeDistr');
    infoYalta.classList.remove('active');
  })
// 
alushta .addEventListener('mouseover',function(){  addClass(aDistr);});
alushta .addEventListener('mouseout',function(){  rClass(aDistr);});
alushta.addEventListener('click',function(){
  infoAlushta.classList.add('active');
  aDistr.classList.add('activeDistr');
  console.log('success');
  });
  closeBtnA.addEventListener('click',function(){
    aDistr.classList.remove('activeDistr');
    infoAlushta.classList.remove('active');
  })
//
feo.addEventListener('mouseover',function(){  addClass(fDistr);});
feo.addEventListener('mouseout',function(){  rClass(fDistr);});
feo.addEventListener('click',function(){
  infoFeo.classList.add('active');
  fDistr.classList.add('activeDistr');
  console.log('success');
  });
  closeBtnF.addEventListener('click',function(){
    fDistr.classList.remove('activeDistr');
    infoFeo.classList.remove('active');
  })
//
kerch.addEventListener('mouseover',function(){  addClass(kDistr);});
kerch.addEventListener('mouseout',function(){  rClass(kDistr);});
kerch.addEventListener('click',function(){
  infoKerch.classList.add('active');
  kDistr.classList.add('activeDistr');
  console.log('success');
  });
  closeBtnK.addEventListener('click',function(){
    kDistr.classList.remove('activeDistr');
    infoKerch.classList.remove('active');
  });

//
Djank.addEventListener('mouseover',function(){  addClass(dDistr);});
Djank.addEventListener('mouseout',function(){  rClass(dDistr);});
Djank.addEventListener('click',function(){
  infoDjank.classList.add('active');
  dDistr.classList.add('activeDistr');
  console.log('success');
  });
  closeBtnD.addEventListener('click',function(){
    dDistr.classList.remove('activeDistr');
    infoDjank.classList.remove('active');
  })

//
bahch.addEventListener('mouseover',function(){  addClass(bDistr);});
bahch.addEventListener('mouseout',function(){  rClass(bDistr);});
bahch.addEventListener('click',function(){
  infoBahch.classList.add('active');
  bDistr.classList.add('activeDistr');
  console.log('success');
  });
  closeBtnB.addEventListener('click',function(){
    bDistr.classList.remove('activeDistr');
    infoBahch.classList.remove('active');
  })
//
sevas.addEventListener('mouseover',function(){  addClass(sDistr);});
sevas.addEventListener('mouseout',function(){  rClass(sDistr);});
sevas.addEventListener('click',function(){
  infoSevas.classList.add('active');
  sDistr.classList.add('activeDistr');
  console.log('success');
  });
  closeBtnSevas.addEventListener('click',function(){
    sDistr.classList.remove('activeDistr');
    infoSevas.classList.remove('active');
  })
//
evpa.addEventListener('mouseover',function(){  addClass(eDistr);});
evpa.addEventListener('mouseout',function(){  rClass(eDistr);});
evpa.addEventListener('click',function(){
  infoEvpa.classList.add('active');
  eDistr.classList.add('activeDistr');
  console.log('success');
  });
  closeBtnE.addEventListener('click',function(){
    eDistr.classList.remove('activeDistr');
    infoEvpa.classList.remove('active');
  })

//
saki.addEventListener('mouseover',function(){  addClass(sakiDistr);});
saki.addEventListener('mouseout',function(){  rClass(sakiDistr);});
saki.addEventListener('click',function(){
  infoSaki.classList.add('active');
  sakiDistr.classList.add('activeDistr');
  console.log('success');
  });
  closeBtnSaki.addEventListener('click',function(){
    sakiDistr.classList.remove('activeDistr');
    infoSaki.classList.remove('active');
  })
// saki
function addClass(d){
  d.classList.add('some');
}
function rClass(d){
  d.classList.remove('some');
}





var acc = document.getElementsByClassName("accordion");
var i;
for(i = 0; i < acc.length; i++){
  acc[i].addEventListener('click',function(){
    this.classList.toggle("activeAcc");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}