// get color depending on the candidate
var colors = {
  'amadou': '#FB7102'
  , 'nicolas': '#FB7132'
  , 'avello': '#1B2638'
  , 'calonne': '#1B2640'
  , 'scales': '#7AB42D'
  , 'egron': '#E50000'
  , 'pernot': '#FF0011'
  , 'raimbourg': '#8297BE'
  , 'rebora': '#8297CE'
  , 'barrely': '#8297DE'
  , 'rineau': '#8297EE'
  , 'koriat': '#8298EE'
  , 'raynaud': '#4299EE'
  , 'legeay': '#8299EE'
  , 'semsar_behague': '#8291EE'
  , 'magaud': '#8292EE'
  , 'merand': '#8293EE'
  , 'cram': '#8294EE'
};
var fullNames = {
  'amadou': 'Aude Amadou'
  , 'avello': 'avellot'
  , 'nicolas': 'nicolas'
  , 'calonne': 'calonne'
  , 'scales': 'scales'
  , 'egron': 'Vincent Egron'
  , 'pernot': 'pernot'
  , 'raimbourg': 'raimbourg'
  , 'raynaud': 'raynaud'
  , 'rebora': 'rebora'
  , 'barrely': 'barrely'
  , 'rineau': 'rineau'
  , 'koriat': 'koriat'
  , 'legeay': 'legeay'
  , 'magaud': 'magaud'
  , 'semsar_behague': 'semsar_behague'
  , 'merand': 'merand'
  , 'cram': 'cram'
};
var partis = {
  'amadou': 'LREM'
  , 'avello': 'FN'
  , 'cram': 'UPR'
  , 'raynaud': 'LO'
  , 'nicolas': 'EELV'
  , 'calonne': 'DLF'
  , 'scales': 'LCPHAP'
  , 'egron': 'FI'
  , 'pernot': 'PCF'
  , 'raimbourg': 'PS'
  , 'rebora': 'PFE'
  , 'koriat': 'blancs'
  , 'barrely': 'REG'
  , 'rineau': 'Pchrétien'
  , 'legeay': 'animalistes'
  , 'magaud': 'PCR'
  , 'semsar_behague': 'RDG'
  , 'merand': 'UDI'
};
//
var resultsd = {};
var resultsdreze = {};
var resultsg = {};
var geojson;
var map;
var legend;
var osmAttrib = '<a href="http://data.nantes.fr/donnees/detail/decoupage-geographique-des-bureaux-de-vote-de-la-ville-de-nantes/" target="_blank">D&eacute;coupage</a>';
var osm;
//
$.ajax({
  url: "results_1detail.json",
  dataType: 'json',
  async: false,
  success: function(data) {resultsd = data;}
});
$.ajax({
  url: "reze.json",
  dataType: 'json',
  async: false,
  success: function(data) {resultsdreze = data;}
});
$.ajax({
  url: "results_1general.json",
  dataType: 'json',
  async: false,
  success: function(data) {resultsg = data;}
})
$.extend(resultsd, resultsdreze);

function resetHighlight(e) {
    geojson.setStyle(bureauxStyle);
    legend.update();
}

function onEachFeature(feature, layer) {
    layer.on({mouseover: highlightFeature, mouseout: resetHighlight});
}

function highlightFeature(e) {
    var layer = e.target;
    legend.update(layer.feature.properties);
    layer.setStyle({weight: 4});
}

function launchmap() {
    map = L.map('map', {maxZoom: 17, minZoom: 11}).setView([47.22, -1.55], 12);
    map.attributionControl.setPrefix(osmAttrib);
    map.setMaxBounds(new L.LatLngBounds(new L.LatLng(47.210635, -1.714549),new L.LatLng(47.126744, -1.455216)));
    L.tileLayer("https://tilestream.makina-corpus.net/v2/nantes-desaturate/{z}/{x}/{y}.png",{attribution:'&copy; Contributeurs <a href="http://osm.org/copyright">OpenStreetMap</a>'}).addTo(map)
    if (L.Browser.touch) { L.control.touchHover().addTo(map); }
    geojson = L.geoJson(
        bureaux,
        {style: bureauxStyle, onEachFeature: onEachFeature}).addTo(map);
    legend = L.control({position: 'topright'});
    legend.onAdd = function (map) {
      this._div = L.DomUtil.create('div', 'legend info');
      this.update();
      return this._div;
    };
};
