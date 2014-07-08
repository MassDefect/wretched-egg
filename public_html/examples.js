$(document).ready(function() {

// the basics
// ----------

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp("^" + q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });

    cb(matches);
  };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

var tags = [ "ACFX", "AGLX", "BBSX", "BRSX", "BTRX", "CTCX", "CBTX", "CFL", "CGTX", "CONX", "CRPX", "DBUX", "EPCX",
             "GATX", "GAMX", "GLNX", "HOMX", "JJJX", "JJRX", "MBLX", "NATX", "PROX", "PLMX", "PPRX", "PVIX", "SAUX",
             "SHPX", "SHQX", "SRIX", "TACX", "TEIX", "TILX", "TJRX", "UTLX"];

var tags1 = [ "C3", "C3O", "IC8"];

var tags2 = [ "C3", "C3O", "IC8", "FC4", "NC4", "OC4", "IC4", "NGL", "C3/C3O", "C3/C3", "C3/FC4", "FC4/C3O", "FC4/C3", "FC4/FC4",
             "NC4/C3O", "NC4/C3", "NC4/FC4", "OC4/C3O", "OC4/C3", "OC4/FC4"];

var tags3 = [ "C3", "C3O", "IC8", "FC4", "NC4", "OC4", "IC4", "NGL"];

var tags4 = [ "IC8", "FC4", "NC4", "OC4", "IC4" ];

var tags5 = [ "Load", "Offload", "Empty", "Bad Order - MT", "Bad Order - LD" ];

var tags6 = [ "Load", "Empty", "Bad Order - MT", "Bad Order - LD" ];

var tags7 = [ "Load", "Offload", "Empty", "Bad Order - MT", "Bad Order - LD", "Offload/Reload" ];

$('.typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'states',
  displayKey: 'value',
  source: substringMatcher(states)
});

$('.typeaheadID').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'tags',
  displayKey: 'value',
  source: substringMatcher(tags)
});

$('.prodabf').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'tags1',
  displayKey: 'value',
  source: substringMatcher(tags1)
});

$('.prodabr').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'tags2',
  displayKey: 'value',
  source: substringMatcher(tags2)
});

$('.prodcdf').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'tags3',
  displayKey: 'value',
  source: substringMatcher(tags3)
});

$('.prodcdr').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'tags4',
  displayKey: 'value',
  source: substringMatcher(tags4)
});

$('.statcd').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'tags5',
  displayKey: 'value',
  source: substringMatcher(tags5)
});

$('.statabf').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'tags6',
  displayKey: 'value',
  source: substringMatcher(tags6)
});

$('.statabr').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'tags7',
  displayKey: 'value',
  source: substringMatcher(tags7)
});

});