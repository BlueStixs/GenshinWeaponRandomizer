var weapons = [
    "bow",
    "catalyst",
    "claymore",
    "polearm",
    "sword",
]

var weaponsUsed = [];

function spin() {
    var randomWeap = weapons[Math.floor(Math.random() * weapons.length)];
    if (weaponsUsed.includes(randomWeap)) {
        var sentinel = 0;
        while (weaponsUsed.includes(randomWeap)) {
            randomWeap = weapons[Math.floor(Math.random() * weapons.length)];
            if (sentinel > 4) {
                weaponsUsed = [];
                console.log(weaponsUsed);
                break;
            }
            sentinel++;
        }
    }
    var video = document.getElementById("myVideo");
    var source = document.getElementById("weaponVid");

    source.setAttribute('src', 'images/spin/' + randomWeap + '.mp4');
    video.style.opacity = "0";
    setTimeout(function () {
        video.style.opacity = "1";
        video.load();
        video.play();
    }, 100);
    weaponsUsed.push(randomWeap);
}