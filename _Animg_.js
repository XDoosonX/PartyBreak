var Cnt=0;
var slect; 
var imgs = Array(
"https://c.tenor.com/K7IyX8aukNsAAAAd/anime.gif", 
"https://cdn-ak.f.st-hatena.com/images/fotolife/s/shanonim/20161201/20161201002351.gif", 
"https://fanblogs.jp/digiani-world/file/d541ff07.gif", 
"https://i.pinimg.com/originals/1a/13/c1/1a13c111736f868f9abab76e8ac9009d.gif", 
"https://66.media.tumblr.com/d55f63de5a8c194549a6a548e7937967/tumblr_pqjc86vHqr1th206io1_1280.gif", 
"https://cdn.wallpapersafari.com/7/36/uOV7Nd.gif", 
"https://gifdownload.net/wp-content/uploads/2019/01/cenario-gif-6.gif", 
"https://blog-imgs-60.fc2.com/s/h/o/shocolate02/ugoku.gif", 
"https://i.ytimg.com/vi/GHapiUYLPNg/maxresdefault.jpg", 
"https://i.gifer.com/7ASf.gif", 
"https://emoji.discord.st/emojis/c3b82c46-d244-4826-85ee-3a8ca537e3ef.gif",
"https://img.gifmagazine.net/gifmagazine/images/871766/original.gif",
"https://c.tenor.com/KO6BR15mTv0AAAAC/anime.gif",
"https://c.tenor.com/bPTaCJs1EJMAAAAC/ijiranaide-nagatoro-anime.gif",
"https://giffiles.alphacoders.com/130/13036.gif",
"https://giffiles.alphacoders.com/339/33944.gif",
"https://c.tenor.com/de-RU_ClWNgAAAAC/yuno-anime.gif",
"https://i.imgur.com/5RVFadg.gif",
"https://media2.giphy.com/media/XYTWZg47umh1K/200.gif",
"https://camo.githubusercontent.com/71ad14c30a37c8106e48b1459763197d8c6605a8/68747470733a2f2f692e696d6775722e636f6d2f626139567044652e676966",
"https://c.tenor.com/vuMDJNZY76sAAAAj/jumping-blushing.gif",
"https://c.tenor.com/YyXLxsf811QAAAAC/edens-zero-rebecca.gif",
"https://media2.giphy.com/media/12bF3AWU423YeA/giphy.gif",
"https://j.gifs.com/jRwlEY.gif",
"https://c.tenor.com/hgYjasCnSGoAAAAC/anime-ecchi.gif",
"https://c.tenor.com/9sekOQS3MjAAAAAd/anime-ecchi.gif",
"https://loginportal.funnyjunk.com/gifs/Ecchianimegif_a3908d_5167428.gif",
"https://data.whicdn.com/images/183431032/original.gif",
"https://c.tenor.com/Blf2wCL8FMkAAAAC/anime-ecchi.gif",
"https://thumbs.gfycat.com/AjarBrownKentrosaurus-max-1mb.gif",
"https://ahegao.b-cdn.net/wp-content/uploads/2021/09/EDENS-ZERO-.gif",
"http://25.media.tumblr.com/eb62882196cf32683907dddf7dedf27f/tumblr_mivwgnrxJ11s0am14o1_500.gif",
"https://i0.wp.com/gifimage.net/wp-content/uploads/2017/08/seikon-no-qwaser-gif-15.gif?w=780",
"http://i.imgur.com/DKjvXk3.gif",
"https://i.kym-cdn.com/photos/images/original/001/425/594/a43.jpg",
"https://c.tenor.com/uU7q1ugUnJcAAAAC/another-death.gif",
"https://www.icegif.com/wp-content/uploads/laser-girl-death-icegif.gif",
"https://qph.fs.quoracdn.net/main-qimg-444ebb2d2a4eb3bb37109a2723dc47b4",
"https://64.media.tumblr.com/e053ba3216f9853db6bf8cc6050d6187/04a14ccbd271648b-65/s540x810/cf47bf15a1cb05a827870f5b35492bffa87273f1.gifv",
"https://qph.fs.quoracdn.net/main-qimg-16ac42b877020a4745a3c895662e4137",
"https://c.tenor.com/AKwhCmqXhj4AAAAC/hot-anime-sexy.gif",
"https://c.tenor.com/EniuXoS8ILUAAAAC/kissing-sexy.gif",
"https://64.media.tumblr.com/ef3f578d3b9594549fcb25f738254ae3/tumblr_oubwphWGV01sb5ftro1_540.gifv",
"http://i.imgur.com/JEItnHr.gif",
"https://cutewallpaper.org/21/anime-night-sky-gif/Describe-your-mood-with-a-gif-MaiOtaku-Anime.gif",
"https://66.media.tumblr.com/a322c35cc6f4111d32a3fddfe2d73728/tumblr_pql9i0PAAM1th206io1_1280.gif",
"https://i.pinimg.com/originals/6c/0b/5f/6c0b5f75fb4c2b85802d3188fafec218.gif",
"https://img.gifmagazine.net/gifmagazine/images/4219564/original.gif",
"https://64.media.tumblr.com/1921bcd13e12643771410200a322cb0e/tumblr_ogs5bcHWUc1udh5n8o1_500.gifv",
"https://c.tenor.com/Wwkw29Ix5HEAAAAd/anime-fun.gif",
"https://c.tenor.com/fqY4JGWBdbgAAAAj/uwu-cat.gif",
"https://i.pinimg.com/originals/a3/d6/97/a3d69709008b07c99616d5c78df28bd7.gif",
"https://i.ppy.sh/3a9ea08496c7c557ffe1e488adaa49a690b1a510/68747470733a2f2f6d657765616f73752e732d756c2e65752f4d4e64785359514e",
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1f7a97e0-4854-4e9f-977b-308882062c7c/dcnk0mk-3630b3c9-010f-467e-b1a8-56278270d000.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmN2E5N2UwLTQ4NTQtNGU5Zi05NzdiLTMwODg4MjA2MmM3Y1wvZGNuazBtay0zNjMwYjNjOS0wMTBmLTQ2N2UtYjFhOC01NjI3ODI3MGQwMDAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UYCzgwCsyPmI2eSYeQcS7bf9XgRfsB8ixVa28OT8fkk",
"https://static.wikia.nocookie.net/ee397afe-3b47-4372-83d1-9d04e52d7ff4/scale-to-width/755",
"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6840d414-c479-49c1-903a-ed33705e63d9/dcm6qj2-86c36880-8a11-489c-b4f5-c8bee9fd8dd7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY4NDBkNDE0LWM0NzktNDljMS05MDNhLWVkMzM3MDVlNjNkOVwvZGNtNnFqMi04NmMzNjg4MC04YTExLTQ4OWMtYjRmNS1jOGJlZTlmZDhkZDcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.fImoYT_E3CNelxJ5KXB0oogWWkpxpRNMYkYppTVmghU",
"https://c.tenor.com/Fg2zDZB8ghsAAAAC/yosh-yoshi.gif",
"https://i.pinimg.com/originals/a4/02/03/a40203e9c4879145fe037ce8f33b6107.gif",
"https://i.pinimg.com/originals/ff/98/6c/ff986c4116c1551007ff0152e2a4d85e.gif",
"https://i.pinimg.com/originals/da/c8/37/dac837d45841cbbbd5ddcad94efbf473.gif",
"https://i.pinimg.com/originals/6a/1b/2d/6a1b2d46b2af9707c840e85c1bc93447.gif",
"https://www.fgbg.art/static/ss2_hanzo-2ef35e16c2076ebe38ede0f6f7667f60.gif",
""

);

(function AnImg()
{
	requestAnimationFrame(AnImg);
	if(Cnt++ < 500)
	{
		return;
	}
	Cnt=0;
	Array.prototype.slice.call(document.querySelectorAll("img,iframe,a,p,body,video")).map(function(el)
	{
		slect=[Math.floor(Math.random()*imgs.length)];el.src=imgs[slect];el.href=imgs[slect];
	});
}())
	