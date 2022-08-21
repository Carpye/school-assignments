function odliczanie(){
	const dzisiaj = new Date();
	const dzien = dzisiaj.getDate();
	const miesiac = dzisiaj.getMonth()+1;
	const rok = dzisiaj.getFullYear();
	const godzina = dzisiaj.getHours();
    const minuta = dzisiaj.getMinutes();
	const sekunda = dzisiaj.getSeconds();
	document.getElementById("zegar").innerHTML = dzien+"/"+miesiac+"/"+rok+" | "+godzina+":"+minuta+":"+sekunda;	
}
odliczanie()
setInterval(() => {
	odliczanie()
}, 1000);