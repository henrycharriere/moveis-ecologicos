var banners = ["Ös melhores do Braisl!", ""Qualidade e preco baixo!"];
var bannerAtual = 0;

function trocaBanner(){

	bannerAtual = (bannerAtual + 1) % 2;
	document.querySelector(''h2#mensagem').textContent = banners[bannerAtual];

}

setInterval(trocaBanner, 2000);
