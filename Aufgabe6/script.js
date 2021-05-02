var africa = "Africa";
var southamerica = "South America";
var europe = "Europe";
var northamerica = "North America";
var asia = "Asia";
var australia = "Australia";
var africa2018 = 1235.5;
var samerica2018 = 1261.5;
var europe2018 = 4209.3;
var namerica2018 = 6035.6;
var asia2018 = 16274.1;
var australia2018 = 2100.5;
var africa2008 = 1028;
var samerica2008 = 1132.6;
var europe2008 = 4965.7;
var namerica2008 = 6600.4;
var asia2008 = 12954.7;
var australia2008 = 1993;
var world2018 = africa2018 + samerica2018 + europe2018 + namerica2018 + asia2018 + australia2018;
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener("click", function () {
        allFunction(europe, europe2018, europe2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".northamerica").addEventListener("click", function () {
        allFunction(northamerica, namerica2018, namerica2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".southamerica").addEventListener("click", function () {
        allFunction(southamerica, samerica2018, samerica2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".africa").addEventListener("click", function () {
        allFunction(africa, africa2018, africa2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".asia").addEventListener("click", function () {
        allFunction(asia, asia2018, asia2008);
    });
});
window.addEventListener('load', function () {
    document.querySelector(".australia").addEventListener("click", function () {
        allFunction(australia, australia2018, australia2008);
    });
});
function allFunction(continent, continent2018, continent2008) {
    document.querySelector("#region").innerHTML = continent;
    document.querySelector("#continent").innerHTML = continent;
    document.querySelector("#absolute").innerHTML = continent2018 + "kg CO2";
    document.querySelector("#relative").innerHTML = Math.round((continent2018 / world2018 * 100) * 10) / 10 + "%";
    document.querySelector("#growth").innerHTML = Math.round(((continent2018 - continent2008) / continent2008 * 100) * 10) / 10 + "%";
    document.querySelector("#growthAbsolute").innerHTML = Math.round((continent2018 - continent2008) * 100) / 100 + "kg CO2";
    document.querySelector('.chart').setAttribute('style', 'height:' + ((continent2018 / world2018) * 100) + '%');
}
//# sourceMappingURL=script.js.map