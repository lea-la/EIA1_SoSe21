var africa = "Afrika";
var southamerica = "Südamerika";
var europe = "Europa";
var northamerica = "Nordamerika";
var asia = "Asien";
var australia = "Australien";
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
console.log("Die Emission von " + africa + " ist: " + africa2018 + " kg CO2");
console.log("Die Emission von " + southamerica + " ist: " + samerica2018 + " kg CO2");
console.log("Die Emission von " + europe + " ist: " + europe2018 + " kg CO2");
console.log("Die Emission von " + northamerica + " ist: " + namerica2018 + " kg CO2");
console.log("Die Emission von " + asia + " ist: " + asia2018 + " kg CO2");
console.log("Die Emission von " + australia + " ist: " + australia2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + africa + " damit " + Math.round((africa2018 / world2018 * 100) * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + southamerica + " damit " + Math.round((samerica2018 / world2018 * 100) * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + europe + " damit " + Math.round((europe2018 / world2018 * 100) * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + northamerica + " damit " + Math.round((namerica2018 / world2018 * 100) * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + asia + " damit " + Math.round(asia2018 / world2018 * 100 * 100) / 100 + " %");
console.log("Relativ zur Gesamtemission der Welt verursacht " + australia + " damit " + Math.round((australia2018 / world2018 * 100) * 100) / 100 + " %");
console.log("Für " + africa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((africa2018 - africa2008) / africa2008 * 100) * 100) / 100 + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((africa2018 - africa2008) * 100) / 100 + " kg CO2");
console.log("Für " + southamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((samerica2018 - samerica2008) / samerica2008 * 100) * 100) / 100 + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((samerica2018 - samerica2008) * 100) / 100 + " kg CO2");
console.log("Für " + europe + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((europe2018 - europe2008) / europe2008 * 100) * 100) / 100 + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((europe2018 - europe2008) * 100) / 100 + " kg CO2");
console.log("Für " + northamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((namerica2018 - namerica2008) / namerica2008 * 100) * 100) / 100 + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((namerica2018 - namerica2008) * 100) / 100 + " kg CO2");
console.log("Für " + asia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((asia2018 - asia2008) / asia2008 * 100) * 100) / 100 + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((asia2018 - asia2008) * 100) / 100 + " kg CO2");
console.log("Für " + australia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((australia2018 - australia2008) / australia2008 * 100) * 100) / 100 + " % verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((australia2018 - australia2008) * 100) / 100 + " kg CO2");
//# sourceMappingURL=script.js.map