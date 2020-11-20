function randomTruth(){

    document.getElementById("randomTruth").innerHTML = Math.floor(Math.random()*10);
    truth()
    playAudio2()
    stop()
}

function randomDare(){

    document.getElementById("randomDare").innerHTML = Math.floor(Math.random()*10);
    dare()
    playAudio()
    stop1()
    
}
function randomPlayer(){
let numbers = document.getElementById("jmlPlayer").value;
    document.getElementById("number").innerHTML = Math.ceil(Math.random()*numbers);
    
   
}

  function truth(){
  let Truth = document.getElementById("randomTruth").textContent;
  // console.log(Truth);
  var text;
  
  switch(Truth) {
    case "0":
      text = "DI-Circle ini ada lawan jenis yang kamu taksir ga??? hm...";
    break;
    case "1":
    text = "Truth#2 kamu yakin ga sih sama pasangan kamu saat ini??";
    break;
    case "2":
    text = "Truth#3 Siapa menurut kamu yang paling nyebelin diruangan ini";
    break;
    case "3":
    text = "Truth#4 Kapan Terakhir Kali Kamu bokek??";
    break;
    case "4":
    text = "Truth#5 Apa sih ketakutan tervesar kamu saat ini??";
    break;
    case "5":
    text = "Truth#6 Kapan Terakhir kali kamu Nangis bawang??";
    break;
    case "6":
    text = "Truth#7 pernah selingkuh gak ??";
    break;
    case "7":
    text = "Truth#8 Hal terbodoh yang apa kamu lakuin Bulan ini??";
    break;
    case "8":
    text = "Truth#9 Apa yang kamu sembunyiin dari orang sebelah kamu??";
    break;
    case "9":
    text = "Truth#10 Apa penyesalah terbesar kamu dalam hidup ini??";
    break; 
  }
  document.getElementById("hasil").innerHTML = text;
  }

  function dare(){
  let Dare = document.getElementById("randomDare").textContent;
  
  var text;
  
  switch(Dare) {
    case "0":
      text = "Dare#1 Update IG story dan bilang kangen sama mantan, jangan lupa tag juga..";
    break;
    case "1":
    text = "Dare#2 kenalan sama stranger dideket kamu saat ini";
    break;
    case "2":
    text = "Dare#3 Bikin tiktok trs upload di ig story 1x24 jam";
    break;
    case "3":
    text = " Dare#4 kenalan sama orang yang depan yang lewat depan rumah";
    break; 
    case "4":
    text = "Dare#5 pergi ke tengah kerumunan dan nyanyi 'bintang kecil'";
    break;
    case "5":
    text = "Dare#6 minta instagram orang yang ga kamu kenal";
    break;
    case "6":
    text = " Dare#7 pura pura nangis depan oang yang gak kamu kenal";
    break;
    case "7":
    text = "Dare#8 Update IG story pake filter 'CALON MANTU'";
    break;
    case "8":
    text = "Dare#9 makan bawang merah mentah";
    break;
    case "9":
    text = " Dare#10 iris bawang putih tapi ga boleh nangis";
    break; 
  }
  document.getElementById("hasil2").innerHTML = text;
  }



function playAudio() {
  backSound.play();
 }
 function playAudio2() {
  backSound2.play();
 }
 function stop(){
   backSound.pause()
 }
 function stop1(){
  backSound2.pause()
}