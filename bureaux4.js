var rezeall = new Array();
$.ajax({
  url: "reze.geojson",
  dataType: 'json',
  async: false,
  success: function(data) {
  $.each(data["features"], function(i, elem) {
    elem["properties"]["ASSOCIANT"] = elem["properties"]["name"];
    rezeall.push(elem);
  });
  }
});
var saintseball = new Array();
$.ajax({
  url: "saintseb.geojson",
  dataType: 'json',
  async: false,
  success: function(data) {
  $.each(data["features"], function(i, elem) {
    elem["properties"]["ASSOCIANT"] = elem["properties"]["name"];
    saintseball.push(elem);
  });
  }
});
var bouguenaisall = new Array();
$.ajax({
  url: "bouguenais.geojson",
  dataType: 'json',
  async: false,
  success: function(data) {
  $.each(data["features"], function(i, elem) {
    elem["properties"]["ASSOCIANT"] = elem["properties"]["name"];
    bouguenaisall.push(elem);
  });
  }
}); 


var brains = {"geometry": {"coordinates": [[[[-1.7731667526808972, 47.17003921515929], [-1.7653496130784894, 47.17670089187219], [-1.7630232459872048, 47.18350008200793], [-1.739327215928115, 47.18521140447728], [-1.7215325782965198, 47.18318461386669], [-1.7031031012536375, 47.17643728635376], [-1.68025939273612, 47.173302496935094], [-1.6771248113837132, 47.17020361456108], [-1.6792326183663715, 47.166665311938175], [-1.6844451826340032, 47.16346007333362], [-1.6848190614552538, 47.16065636927597], [-1.7016275285679425, 47.160534208142195], [-1.713819463604013, 47.15471107192606], [-1.7367513866824307, 47.156953784882575], [-1.74295515203456, 47.15448010022425], [-1.7430335749588635, 47.15787627881794], [-1.7482003251470053, 47.16020699816161], [-1.7523531468739617, 47.16446649510997], [-1.7557544380342234, 47.16509307129099], [-1.756521509455333, 47.16699596331526], [-1.7640555000801867, 47.16946130936041], [-1.7731667526808972, 47.17003921515929]]]], "type": "MultiPolygon"}, "id": "fr/town/44024", "properties": {"area": 1550.0, "code": "44024", "keys": {"insee": "44024", "postal": ["44830"]}, "level": "fr/town", "logo": "https://www.data.gouv.fr/s/logos/Blason_brains44.svg", "ASSOCIANT": "Brains", "parents": ["country/fr", "country-group/ue", "country-group/world", "fr/epci/244400404", "fr/region/52", "fr/county/44", "fr/district/442", "country-subset/fr/metro"], "population": 2587}, "type": "Feature"};
var saintaignangrandlieu = {"geometry": {"coordinates": [[[[-1.661532124176552, 47.1263242134505], [-1.6594844144864014, 47.130450261625555], [-1.65292383830342, 47.13530130500043], [-1.6533197258491312, 47.13707987133312], [-1.6482243018945484, 47.139027090339944], [-1.6485457191032062, 47.14179906266441], [-1.6519124251250294, 47.143471586128186], [-1.6496819082745606, 47.14432356119304], [-1.649080306528786, 47.14682087414352], [-1.618956022128065, 47.15046221709754], [-1.6176688261574503, 47.149009790923], [-1.6137289949843587, 47.14958529220313], [-1.593581310297541, 47.1571672756662], [-1.5765055045562981, 47.15168789608224], [-1.5764639125586435, 47.14519959532544], [-1.582406627489208, 47.149009302171926], [-1.5882101035507334, 47.14913601073935], [-1.586865595064992, 47.14465380172819], [-1.5911138178751216, 47.144213887888085], [-1.5917216179963567, 47.13864731918099], [-1.5987761777540759, 47.13342746709025], [-1.6039590077858032, 47.12634071583598], [-1.6031073150649295, 47.12501769723287], [-1.607017681496702, 47.12542568139304], [-1.6062912139264345, 47.123125587764804], [-1.6090984491893079, 47.12100211045062], [-1.609242179634767, 47.116498517729795], [-1.6158102118346072, 47.115904318714314], [-1.6243959499941076, 47.10957617669021], [-1.6414475012226792, 47.10234615909106], [-1.646950490821667, 47.10647596229318], [-1.629964247114251, 47.12059427574449], [-1.6330506787674286, 47.12171196277284], [-1.6363527060887955, 47.11903149169294], [-1.644566451889142, 47.11848206738463], [-1.6492503576120698, 47.121609088869164], [-1.6555611123145377, 47.119925180439644], [-1.6597672041378422, 47.12093450497359], [-1.6585073169518647, 47.122585985615004], [-1.661532124176552, 47.1263242134505]]]], "type": "MultiPolygon"}, "id": "fr/town/44150", "properties": {"area": 1807.0, "code": "44150", "keys": {"insee": "44150", "postal": ["44860"]}, "level": "fr/town", "logo": "https://www.data.gouv.fr/s/logos/Blason_ville_44_Saint-Aignan-Grandlieu.svg", "ASSOCIANT": "Saint Aignan de Grandlieu", "parents": ["country/fr", "country-group/ue", "country-group/world", "fr/epci/244400404", "fr/region/52", "fr/county/44", "fr/district/442", "country-subset/fr/metro"], "population": 3590}, "type": "Feature"};
var bouaye = {"geometry": {"coordinates": [[[[-1.7052834022797239, 47.136576586788735], [-1.7003053881327754, 47.14237800259833], [-1.7013258742955353, 47.1451854816245], [-1.6989086875290262, 47.1471778592151],
[-1.6993603604538816, 47.15060517268936], [-1.69758933187124, 47.153942465564604], [-1.6916498508756985, 47.1586853872514], [-1.6842433311896614, 47.15889630561194], [-1.6844451826340032, 47.16346007333362],
[-1.6792326183663715, 47.166665311938175], [-1.677149155727913, 47.170796962701274], [-1.6746529172164015, 47.16868735888028], [-1.6723371502454698, 47.172463016595444], [-1.6680308962679862, 47.172348699194714],
[-1.6636349904251473, 47.170539373719755], [-1.6624823620840934, 47.16844118004768], [-1.6573812787432207, 47.167310061895186], [-1.6562372742288944, 47.164582661756], [-1.6581832047973541, 47.16001239369689],
[-1.6536325192310615, 47.15536549647722], [-1.641877255254602, 47.14977290916106], [-1.636491316137135, 47.151480797844584], [-1.6319484459138143, 47.14864395948121], [-1.6496061802961095, 47.146639784102845],
[-1.6496819082745606, 47.14432356119304], [-1.6519124251250294, 47.143471586128186], [-1.6485457191032062, 47.14179906266441], [-1.6482243018945484, 47.139027090339944], [-1.6533197258491312, 47.13707987133312],
[-1.65292383830342, 47.13530130500043], [-1.6594844144864014, 47.130450261625555], [-1.6614646606987145, 47.1256547012425], [-1.6664246187084522, 47.123814568870344], [-1.670596394887903, 47.12671660211881],
[-1.6703871772582317, 47.12979510248923], [-1.673223787430896, 47.13175976120893], [-1.673630724254602, 47.13461290044818], [-1.679809516441833, 47.13260978500707], [-1.6862878967763175, 47.13507079893816],
[-1.6911472434742336, 47.13235738882031], [-1.6978101377680765, 47.13212399767272], [-1.7030471362114366, 47.13330536558666], [-1.7052834022797239, 47.136576586788735]]]], "type": "MultiPolygon"}, "id": "fr/town/44018",
"properties": {"area": 1408.0, "code": "44018", "keys": {"insee": "44018", "postal": ["44830"]}, "level": "fr/town", "logo": "https://www.data.gouv.fr/s/logos/Blason_ville_44_Bouaye.svg", "ASSOCIANT": "Bouaye", "parents":
["country/fr", "country-group/ue", "country-group/world", "fr/epci/244400404", "fr/region/52", "fr/county/44", "fr/district/442", "country-subset/fr/metro"], "population": 6160}, "type": "Feature"};
var pontsaintmartin = {"geometry": {"coordinates": [[[[-1.6091356394420704, 47.11974711629383], [-1.6085200239778634, 47.12206948318822], [-1.6062912139264345, 47.123125587764804], [-1.607017681496702, 47.12542568139304], [-1.6031073150649295, 47.12501769723287], [-1.6039590077858032, 47.12634071583598], [-1.5987761777540759, 47.13342746709025], [-1.5917216179963567, 47.13864731918099], [-1.5911138178751216, 47.144213887888085], [-1.586865595064992, 47.14465380172819], [-1.5882101035507334, 47.14913601073935], [-1.582406627489208, 47.149009302171926], [-1.5764639125586435, 47.14519959532544], [-1.5765055045562981, 47.15168789608224], [-1.5636482772208091, 47.152764671729926], [-1.559641521559051, 47.15496299548342], [-1.558836900559065, 47.153907889623724], [-1.5580426101848466, 47.1558196121656], [-1.5525483342441149, 47.153829879865285], [-1.548462077679712, 47.15003896854387], [-1.5476658110118684, 47.14871928870639], [-1.5503247344213336, 47.14509181787788], [-1.5389392170158176, 47.13404640373307], [-1.5415336413878833, 47.125189509370706], [-1.532879092277619, 47.1226367798432], [-1.5291479397450285, 47.11853671665203], [-1.531102943297858, 47.115361708961416], [-1.527291032221225, 47.10997749286489], [-1.5447407167837184, 47.102598575378515], [-1.55146703213662, 47.10146727879887], [-1.5542414788916232, 47.09734271313364], [-1.5669478790909086, 47.108076105358975], [-1.5694811281921255, 47.10760421764753], [-1.5755943433636157, 47.110608379740334], [-1.5742533383074822, 47.112296679137835], [-1.5846168424142555, 47.1104603644097], [-1.5897927554182953, 47.11484330240699], [-1.6003040323893063, 47.11795036498313], [-1.602580542982322, 47.11538359441005], [-1.6089958615838615, 47.11572238978776], [-1.6091356394420704, 47.11974711629383]]]], "type": "MultiPolygon"},
    "id": "fr/town/44130",
    "properties": {"ASSOCIANT": "Pont Saint Martin"},
    "type": "Feature"};
var saintseb = {
  "geometry": {"coordinates": [[[[-1.531036198472248, 47.19704726344829], [-1.5266224161552546, 47.20027586551845], [-1.5301529748849017, 47.20362468559052], [-1.5226435082673042, 47.20721776879186], [-1.5109553484425684, 47.216989906869124], [-1.480987550564341, 47.22633571260396], [-1.4800100937036906, 47.22436527715908], [-1.484949210798837, 47.21740548319544], [-1.4828891043577652, 47.215915287414425], [-1.4850912344452558, 47.212670978500746], [-1.4812746521291458, 47.21189546109912], [-1.4815522315519387, 47.20778110554952], [-1.4791193242679577, 47.20620696983545], [-1.4794951793828335, 47.20331470782486], [-1.4759887853343296, 47.20029637325213], [-1.4735553390611782, 47.19041799122521], [-1.4741290930331452, 47.18674361096683], [-1.5187297282374523, 47.18977401018498], [-1.5255539599563233, 47.19197916564815], [-1.5246224968382198, 47.196517506381966], [-1.531036198472248, 47.19704726344829]]]], "type": "MultiPolygon"},
  "id": "fr/town/44190",
  "properties": {
    "ASSOCIANT": "Saint S\u00e9bastien sur Loire"
  },
  "type": "Feature"};

var saintlegerlesvignes = {
  "geometry": {"coordinates": [[[[-1.7397470884919126, 47.13529488848782], [-1.7359250264525692, 47.13931996751629], [-1.735974793119309, 47.14115711936267], [-1.707179296686858, 47.15824186346124], [-1.7016275285679425, 47.160534208142195], [-1.6910002790937517, 47.161464274862674], [-1.6841860186745348, 47.159774115256994], [-1.6916498508756985, 47.1586853872514], [-1.6987989134013068, 47.15225646517729], [-1.6989086875290262, 47.1471778592151], [-1.7013258742955353, 47.1451854816245], [-1.7003053881327754, 47.14237800259833], [-1.7052552850113307, 47.13736939833587], [-1.7030471362114366, 47.13330536558666], [-1.7104074824918698, 47.13255851139926], [-1.7259721422621668, 47.1260873119747], [-1.7317075260251562, 47.131247870311256], [-1.7397470884919126, 47.13529488848782]]]], "type": "MultiPolygon"},
  "id": "fr/town/44171",
  "properties": {
    "ASSOCIANT": "Saint L\u00e9ger les Vignes"
  },
  "type": "Feature"};
var reze = {
  "geometry": {"coordinates": [[[[-1.5964107339479323, 47.188322475493116], [-1.5962339455000176, 47.19247771355224], [-1.5785401886748291, 47.19726370605097], [-1.548422192481097, 47.198082712961835], [-1.547002405174546, 47.1941346023681], [-1.5443459970478761, 47.19514947692164], [-1.5386275914437566, 47.19160807497351], [-1.5316268407715563, 47.18326587746689], [-1.518109261870711, 47.18058557836242], [-1.5217839103719302, 47.1773775771838], [-1.5235036451518487, 47.1730893152529], [-1.5192193100672975, 47.16659300076058], [-1.5229828019501164, 47.16226886991735], [-1.5278566115241066, 47.16064219859886], [-1.5348049904152425, 47.152486896734715], [-1.5476658110118684, 47.14871928870639], [-1.5521167835816239, 47.15353549431865], [-1.5580426101848466, 47.1558196121656], [-1.556981160845131, 47.15784256060886], [-1.560207190693461, 47.1617997838695], [-1.5588206410524226, 47.162359693781596], [-1.5601090048329067, 47.16832031932007], [-1.5624723825138969, 47.17112080975955], [-1.574157757561252, 47.179386088627616], [-1.5755647887907684, 47.19127086185196], [-1.579671257449064, 47.19282047396525], [-1.5834530749636786, 47.18964068333969], [-1.5964107339479323, 47.188322475493116]]]], "type": "MultiPolygon"},
  "id": "fr/town/44143",
  "properties": {"ASSOCIANT": "Rez\u00e9"}, "type": "Feature"};
var bouguenais = {"geometry": {"coordinates": [[[[-1.679201356994484, 47.17260066125892], [-1.6668680271326934, 47.187447762753074], [-1.669062521540269, 47.18983749904121], [-1.667297691333088, 47.19332865874911], [-1.6281507282186705, 47.1891545014749], [-1.6077681340850554, 47.18438670412502], [-1.602721847976514, 47.185528203716046], [-1.5957913455595318, 47.190261712536376], [-1.5964107339479323, 47.188322475493116], [-1.5903337208823922, 47.189876508021946], [-1.5853995445213087, 47.18917599027018], [-1.579671257449064, 47.19282047396525], [-1.5755647887907684, 47.19127086185196], [-1.574157757561252, 47.179386088627616], [-1.5601090048329067, 47.16832031932007], [-1.5588206410524226, 47.162359693781596], [-1.560207190693461, 47.1617997838695], [-1.556981160845131, 47.15784256060886], [-1.558836900559065, 47.153907889623724], [-1.559641521559051, 47.15496299548342], [-1.5732380623733704, 47.15103067712194], [-1.583957748490297, 47.153156376601416], [-1.585782047169287, 47.15540837923843], [-1.593581310297541, 47.1571672756662], [-1.6137289949843587, 47.14958529220313], [-1.6176688261574503, 47.149009790923], [-1.618956022128065, 47.15046221709754], [-1.6319484459138143, 47.14864395948121], [-1.636491316137135, 47.151480797844584], [-1.641877255254602, 47.14977290916106], [-1.6569929370458958, 47.15765130710136], [-1.6581832047973541, 47.16001239369689], [-1.6562372742288944, 47.164582661756], [-1.6578951150857373, 47.16777030487498], [-1.6624823620840934, 47.16844118004768], [-1.6636349904251473, 47.170539373719755], [-1.6680308962679862, 47.172348699194714], [-1.6723371502454698, 47.172463016595444], [-1.6746529172164015, 47.16868735888028], [-1.679201356994484, 47.17260066125892]]]], "type": "MultiPolygon"},
   "properties": {"ASSOCIANT": "Bouguenais"}, "type": "Feature"};
var allbureaux = [pontsaintmartin,
    saintlegerlesvignes,
    saintaignangrandlieu,
    bouaye, brains];
var mallbureaux = $.merge($.merge([], allbureaux), rezeall);
var mallbureaux = $.merge($.merge([], mallbureaux), saintseball);
var mallbureaux = $.merge($.merge([], mallbureaux), bouguenaisall);
var bureaux = {
"type": "FeatureCollection",
  "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  "features": mallbureaux
}
