import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as DATA from "../maps/secondDataSet.json";
//import { ConsoleReporter } from 'jasmine';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

    constructor() {


    }

    ngOnInit() {


        console.log("testong json before");
        //var inputBox = (document.getElementById('chatinput') as HTMLInputElement).value;
        //console.log(inputBox);
        console.log("clicker");

        var mZip_list = new Array();
        //id_list[0] = '10';
        //id_list[1] = '15';
        //id_list = ["10","15"];
        mZip_list = ["42050", "43004", "43011", "43015", "43016", "43017", "43019", "43021", "43026", "43035", "43040",
            "43050", "43051", "43054", "43055", "43058", "43062", "43064", "43065", "43068", "43074",
            "43076", "43078", "43081", "43082", "43085", "43107", "43110", "43119", "43123", "43130",
            "43147", "43162", "43201", "43202", "43203", "43205", "43206", "43207", "43209", "43210",
            "43211", "43212", "43213", "43214", "43215", "43216", "43218", "43219", "43220", "43221",
            "43222", "43223", "43224", "43227", "43228", "43229", "43230", "43231", "43232", "43234",
            "43235", "43236", "43240", "43251", "43275", "43302", "43317", "43320", "43326", "43336",
            "43342", "43402", "43410", "43420", "43438", "43440", "43449", "43451", "43452", "43456",
            "43464", "43517", "43528", "43537", "43551", "43560", "43566", "43567", "43571", "43605",
            "43606", "43614", "43615", "43616", "43617", "43635", "43697", "43699", "43701", "43702",
            "43719", "43749", "43755", "43762", "43773", "43778", "43788", "43843", "43901", "43907",
            "43920", "43945", "43950", "43953", "43964", "43968", "44000", "44001", "44003", "44004",
            "44005", "44010", "44011", "44012", "44013", "44017", "44018", "44020", "44021", "44022",
            "44023", "44024", "44026", "44028", "44030", "44032", "44033", "44035", "44036", "44038",
            "44039", "44040", "44041", "44043", "44044", "44045", "44046", "44047", "44048", "44050",
            "44052", "44053", "44054", "44055", "44056", "44057", "44060", "44061", "44062", "44064",
            "44065", "44067", "44068", "44070", "44072", "44074", "44076", "44077", "44080", "44081",
            "44084", "44085", "44086", "44087", "44089", "44090", "44092", "44094", "44095", "44096",
            "44097", "44099", "4410-", "44101", "44102", "44103", "44104", "44105", "44106", "44107",
            "44108", "44109", "44110", "44111", "44112", "44113", "44114", "44115", "44116", "44117",
            "44118", "44119", "44120", "44121", "44122", "44123", "44124", "44125", "44126", "44127",
            "44128", "44129", "44130", "44131", "44132", "44133", "44134", "44135", "44136", "44137",
            "44138", "44139", "44140", "44141", "44142", "44143", "44144", "44145", "44146", "44147",
            "44149", "44153", "44170", "44181", "44188", "44190", "44193", "44195", "44199", "44201",
            "44202", "44203", "44208", "44210", "44212", "44214", "44215", "44217", "44219", "44221",
            "44222", "44223", "44224", "44230", "44231", "44233", "44234", "44235", "44236", "44237",
            "44240", "44241", "44242", "44250", "44251", "44253", "44254", "44255", "44256", "44258",
            "44260", "44262", "44264", "44266", "44270", "44272", "44273", "44274", "44275", "44276",
            "44278", "44280", "44281", "44282", "44284", "44286", "44287", "44288", "44301", "44302",
            "44303", "44304", "44305", "44306", "44307", "44308", "44309", "44310", "44311", "44312",
            "44313", "44314", "44319", "44320", "44321", "44322", "44333", "44334", "44373", "44401",
            "44402", "44405", "44406", "44410", "44411", "44420", "44422", "44428", "44429", "44432",
            "44436", "44438", "44439", "44440", "44444", "44446", "44450", "44451", "44452", "44460",
            "44470", "44471", "44473", "44481", "44483", "44484", "44485", "44491", "44501", "44503",
            "44504", "44505", "44507", "44511", "44512", "44513", "44514", "44515", "44532", "44601",
            "44609", "44611", "44613", "44614", "44615", "44618", "44621", "44622", "44627", "44632",
            "44637", "44641", "44643", "44646", "44647", "44654", "44662", "44663", "44667", "44676",
            "44685", "44688", "44691", "44699", "44702", "44703", "44705", "44706", "44707", "44708",
            "44709", "44711", "44718", "44720", "44721", "44730", "44735", "44805", "44811", "44820",
            "44826", "44830", "44837", "44839", "44840", "44842", "44846", "44847", "44851", "44857",
            "44859", "44870", "44871", "44875", "44878", "44880", "44883", "44889", "44890", "44901",
            "44903", "44905", "44906", "45011", "45013", "45014", "45018", "45030", "45036", "45040",
            "45042", "45044", "45050", "45051", "45052", "45066", "45069", "45102", "45103", "45113",
            "45137", "45140", "45150", "45177", "45201", "45202", "45207", "45208", "45212", "45214",
            "45220", "45222", "45223", "45224", "45225", "45227", "45231", "45236", "45237", "45238",
            "45240", "45241", "45242", "45243", "45244", "45246", "45247", "45249", "45251", "45255",
            "45262", "45263", "45274", "45314", "45322", "45323", "45324", "45331", "45342", "45356",
            "45365", "45377", "45385", "45387", "45401", "45402", "45406", "45409", "45410", "45417",
            "45419", "45424", "45426", "45429", "45431", "45434", "45439", "45458", "45459", "45482",
            "45501", "45504", "45505", "45640", "45654", "45662", "45701", "45715", "45745", "45750",
            "45769", "45776", "45783", "45784", "45801", "45804", "45807", "45840", "45850", "45873",
            "45895"]
        var options = '';

        for (var i = 0; i < mZip_list.length; i++)
            options += '<option value="' + mZip_list[i] + '" />';

        document.getElementById('mZip_list').innerHTML = options;

        var mCity_list = new Array();
        mCity_list = ["ADENA", "AKRON", "ALLIANCE", "AMELIA", "AMHERST", "ANDOVER", "ASHLAND", "ASHTABULA", "ATHENS", "ATWATER",
            "AUBURN TOWNSHIP", "AUBURN TWSP", "AUBURN", "AUBURYN", "AURORA", "AUSTINBURG", "AUSTINTOWN", "AVON LAKE", "AVON", "Akron",
            "Alliance", "Amherst", "Andover", "Ashtabula", "Athens", "Auburn Township", "Auburn Twp", "Aurora", "Austinburg", "Avon Lake",
            "Avon", "BAINBRIDGE", "BARBERTON", "BATAVIA", "BATH", "BAY VILLAGE", "BEACHWOOD", "BEAVERCREEK", "BECHWOOD", "BEDFORD   HTS",
            "BEDFORD  HEIGHTS", "BEDFORD  HTS", "BEDFORD  HTS.", "BEDFORD CITY", "BEDFORD HEIGHTS", "BEDFORD HTS", "BEDFORD HTS,", "BEDFORD HTS.", "BEDFORD HTS.,", "BEDFORD Heights",
            "BEDFORD Hts", "BEDFORD Hts.", "BEDFORD", "BEFORD", "BELLEVUE", "BELOIT", "BENTLETVILLE", "BENTLEVILLE", "BENTLEY", "BENTLEYVILLE",
            "BERA", "BEREA", "BERLIN CENTER", "BETHESDA", "BEVERLY", "BIG PRAIRIE", "BLACKLICK", "BOARDMAN", "BOSTON HEIGHTS", "BOSTON HTS",
            "BOWLING GREEN", "BRATEHAHL", "BRATENAHAL", "BRATENAHL", "BRATENHAHL", "BRATENHAL", "BRATENHL", "BRECKSVILE", "BRECKSVILLE", "BRECKVILLE",
            "BRECKVILLES", "BREMEN", "BREWSTER", "BRIMFIELD", "BRISTOLVILLE", "BROADVIEW  HEIGHTS", "BROADVIEW  HTS", "BROADVIEW HEIGHTS", "BROADVIEW HTS", "BROADVIEW HTS,",
            "BROADVIEW HTS.", "BROADVIEW HTS.,", "BROADVIEW", "BROKKLYN", "BROKLYN HTS", "BROOK PARK", "BROOKLEYN HTS", "BROOKLN HEIGHTS", "BROOKLY N", "BROOKLYN  HEIGHTS",
            "BROOKLYN  HTS", "BROOKLYN HEIGHTS", "BROOKLYN HGTS", "BROOKLYN HTS", "BROOKLYN HTS.", "BROOKLYN HTS.,", "BROOKLYN HTS.CE", "BROOKLYN VILLAGE", "BROOKLYN", "BROOKPAKR",
            "BROOKPARK", "BROOKPARKI", "BROOKYN HEIGHTS", "BROOKYN HTS", "BROOKYN", "BRUNSWICK", "BUCYRUS", "BURBANK", "BURTON", "Bainbridge",
            "Bay Village", "Beachwood", "Beachwood/Warrensville Csd", "Bedford  Heights", "Bedford Ciry", "Bedford City", "Bedford Heights", "Bedford Hts", "Bedford Hts.", "Bedford",
            "Bellevue", "Bentleyville", "Berea", "Berecksville", "Bexley", "Bowling Green", "Bratenahl", "Bratgenahl", "Brecksville", "Broadview  Hts.",
            "Broadview  Hts.,", "Broadview Heights", "Broadview Hts", "Broadview Hts.", "Broadview Hts.,", "Brook Park", "BrookPark", "Brooklyn  Heights", "Brooklyn Heights", "Brooklyn Hts",
            "Brooklyn hts", "Brooklyn", "Brooklyn,", "Brookpark", "Brunswick", "Burton", "Bya Village", "C;LEVELAND HTS", "CADIZ", "CAMBRIDGE",
            "CAMPBELL", "CANAL FULTON", "CANAL WINCHESTER", "CANFIELD", "CANTON", "CARROLLTON", "CCLEVELAND", "CEDARVILLE", "CENTERBURG", "CHAGIN FALLS",
            "CHAGRIN  FALLS", "CHAGRIN FALL", "CHAGRIN FALLS TWP", "CHAGRIN FALLS VILLAG", "CHAGRIN FALLS VILLAGE", "CHAGRIN FALLS VILLIAGE", "CHAGRIN FALLS VLG", "CHAGRIN FALLS", "CHAGRIN Township", "CHAGRIN VILLAGE",
            "CHAGRINS FALLS", "CHARDON", "CHARGIN FALL", "CHARGIN FALLS", "CHESTERLAND", "CHESTERVILLE", "CHIPPEWA LAKE", "CINCINNATI", "CL;EVELAND HTS", "CLARKSVILLE",
            "CLESOUTH EUCLID", "CLEVALAND", "CLEVE. HTS.", "CLEVE;AND", "CLEVELA ND", "CLEVELALND", "CLEVELAMD", "CLEVELAN D", "CLEVELAND   HTS", "CLEVELAND  HEIGHTS",
            "CLEVELAND  HTS", "CLEVELAND  HTS.", "CLEVELAND HEIGHTS", "CLEVELAND HGTS", "CLEVELAND HTS", "CLEVELAND HTS,", "CLEVELAND HTS,.", "CLEVELAND HTS,.,", "CLEVELAND HTS.", "CLEVELAND HTS.,",
            "CLEVELAND Heights", "CLEVELAND Hts", "CLEVELAND Hts.,", "CLEVELAND hts", "CLEVELAND", "CLEVELAND, HTS", "CLEVELANDHEIGHTS", "CLEVELANDHTS", "CLEVELNAD", "CLEVLAND",
            "CLYDE", "CLeveland Heights", "CLeveland", "COLLINS", "COLUMBIA STATION", "COLUMBUS", "CONCORD TOWNSHIP", "CONCORD TWP", "CONCORD", "CONNEAUT",
            "COPELY", "COPLEY", "CORTLAND", "COTO LAUREL", "CRESTON", "CUYAHOGA FALLS", "CUYAHOGA HEIGHTS", "CUYAHOGA HTS", "CUYAHOGA HTS,", "CUYAHOGA HTS.",
            "CUYAHOGA HTS.,", "CUYOHOGA HTS", "Canal Fulton", "Canal Winchester", "Canfield,", "Canton", "Ccleveland", "Chagrin  Falls", "Chagrin Falls Twp", "Chagrin Falls Villag",
            "Chagrin Falls Village", "Chagrin Falls", "Chardon", "Chargin Fall Twp", "Chargin Falls", "Chargrin Falls", "Chesterland", "Cincinnati", "Cl eveland", "ClLEVELAND",
            "Cleveand", "Clevel;and", "Cleveland           H", "Cleveland           O", "Cleveland  Hts", "Cleveland HTS", "Cleveland Hei", "Cleveland Heights", "Cleveland Heights,", "Cleveland Heigjhts",
            "Cleveland Hts", "Cleveland Hts.", "Cleveland Hts.,", "Cleveland heights", "Cleveland hgts", "Cleveland hts", "Cleveland", "Cleveland,", "Clevelans", "Clevland",
            "Clevleand", "Clveland Heights", "Columbia Station", "Columbus", "Concord", "Conneaut", "Copley", "Cortland", "Cuyahoga Falls", "Cuyahoga Heights",
            "Cuyahoga Hts", "Cuyahoga Hts.", "DAYTON", "DEDFORD", "DEERFIELD", "DELAWARE", "DENNISON", "DORSET", "DOVER", "DOYLESTOWN",
            "DUBLIN", "Dalton", "Dayton", "Deerfield", "Dover", "Doylestown", "Dublin", "E CLEVELAND", "E. CLEVELAND", "E.CLEVELAND",
            "EAST  CLEVELAND", "EAST CLARIDON", "EAST CLEVELAND", "EAST LIVERPOOL", "EASTCLEVELAND", "EASTLAKE", "EDGERTON", "ELYRIA", "ENON", "EUCLID",
            "EUCLIDS", "East  Cleveland", "East CLEVELAND", "East Clevelan", "East Cleveland", "East Clevleand", "Eastlake", "Elyria", "Englewood", "Euclid",
            "Eucllid", "Eulid", "FAAIRVIEW PARK", "FAIIRVIEW PARK", "FAIR VIEW", "FAIRBORN", "FAIRFIELD", "FAIRLAWM", "FAIRLAWN", "FAIRPARK PARK",
            "FAIRPORT HARBOR", "FAIRVIE PARK", "FAIRVIE WPARK", "FAIRVIEW  PARK", "FAIRVIEW P ARK", "FAIRVIEW PARK", "FAIRVIEW PARKD", "FAIRVIEW PARKS", "FAIRVIEW PK", "FAIRVIEW PRK",
            "FAIRVIEW", "FAIRVIEWPARK", "FAIRVIIEW PARK", "FAITVIEW  PARK", "FARIVIEW PARK", "FARVIEW PARK", "FIARVIEW PARK", "FINDLAY", "FOSTORIA", "FREDERICKSBRG",
            "FREDERICKTOWN", "FREMONT", "Fairlawn", "Fairport Harbor", "Fairview PArk", "Fairview Park", "Fairview park", "Fairview", "Faiview Park", "Farivew Park",
            "Felch", "Findlay", "GAHANA", "GAHANNA", "GALENA", "GALLOWAY", "GARFEILD HEIGHTS", "GARFEILD HTS", "GARFEILD", "GARFIEL HTS.",
            "GARFIELD   HTS", "GARFIELD   HTS.", "GARFIELD  HTS", "GARFIELD  HTS.,", "GARFIELD HEIGHTS", "GARFIELD HGTS", "GARFIELD HIEGHTS", "GARFIELD HT.", "GARFIELD HTS", "GARFIELD HTS,",
            "GARFIELD HTS,.,", "GARFIELD HTS.", "GARFIELD HTS.,", "GARFIELD PARK", "GARFIELD", "GARFIFELD HEIGHTS", "GARFILED HTS.", "GARIELD HTS", "GARRETTSVILLE", "GATE MILLS",
            "GATES MILL", "GATES MILLS", "GATES MILS", "GENEVA", "GIRARD", "GLEN WILLOW", "GLENWILLOW VILLAGE", "GLENWILLOW", "GRAFTON", "GRAND RIVER",
            "GREENFORD", "GREENVILLE", "GREENWICH", "GROVE CITY", "Gahanna", "Galloway", "Garfield  Hts.", "Garfield Heig", "Garfield Heights", "Garfield Hts",
            "Garfield Hts.", "Garfield Hts.,", "Garfield hts", "Garrettsville", "Gasrfield Hts", "Gates Mills", "Geneva", "Girard", "Glenwillow", "Grafton",
            "HAMILTON", "HARTVILLE", "HIGHALAND HTS", "HIGHLAND  HEIGHTS", "HIGHLAND  HTS", "HIGHLAND  HTS.", "HIGHLAND HEIGHTS", "HIGHLAND HGTS", "HIGHLAND HILL", "HIGHLAND HILLS VILLAGE",
            "HIGHLAND HILLS", "HIGHLAND HT'S", "HIGHLAND HTS", "HIGHLAND HTS,", "HIGHLAND HTS,.", "HIGHLAND HTS.", "HIGHLAND HTS.,", "HIGHLAND", "HIGHLANDHEIGHTS", "HIGLAND HEIGHTS",
            "HIIGHLAND  HTS", "HIIGHLAND HTS", "HILLIARD", "HINCKLEY", "HIRAM", "HOLLAND", "HOMERVILLE", "HONG GONG", "HUBBARDSTON", "HUDSON",
            "HUNTING FARM", "HUNTING VALLEY", "HUNTSBURG", "HURON", "Harrison", "Highland  Hts", "Highland  Hts.", "Highland HTS", "Highland Heights", "Highland Hills Village",
            "Highland Hills", "Highland Hts", "Highland Hts.", "Highland Hts.,", "Hinckley", "Hiram", "Homerville", "Hudson", "Hunting Valley", "Huron",
            "I NDEPENDENCE", "INDEPEBDENCE", "INDEPENDANCE", "INDEPENDENCE", "ISEVEN HILLS", "IUniversity Hts", "Indepdence", "Independce", "Independence        O", "Independence",
            "Iniversity Hts", "JACKSON", "JEFFERSON", "JEROMESVILLE", "Jefferson", "KENT", "KENTON", "KILLBUCK", "KIMBOLTON", "KINGSVILLE",
            "KINSMAN", "KIRKLAND", "KIRTLAND HILLS", "KIRTLAND", "KYNDHURST", "Kelleys Island", "Kent", "Kirkland", "Kirtland Hills", "Kirtland",
            "LAEKWOOD", "LAGRANGE", "LAKE MILTON", "LAKELINE", "LAKESIDE MARBLEHEAD", "LAKESIDE", "LAKEWODD", "LAKEWOOD", "LANCASTER", "LEBANON",
            "LEROY", "LEW IS   CENTER", "LEWIS CENTER", "LIMA", "LINNDALE", "LISBON", "LITCHFIELD", "LODI", "LORAIN", "LORE CITY",
            "LOUDONVILLE", "LOUISVILLE", "LOVELAND", "LOWELLVILLE", "LUNDHURST", "LYNDHUDST", "LYNDHURSR", "LYNDHURST", "LYNDHURTON", "LYNDHUSRT",
            "LYNDHUST", "LYNHDURST", "LYNHURST", "LYNNDHURST", "Lagrange", "Lakeside Marblehead", "Lakewood", "Lakwood", "Leroy", "Liberty Township",
            "Lima", "Linndale", "Litchfield", "Liyndhurst", "Lodi", "Lorain", "Lower Salem", "LyLYNDHURST", "Lyndhurst", "Lyndhust",
            "Lyndurst", "Lynhurst", "MACEDONIA", "MADISON", "MAFIELD HTS", "MAFIELD VILLAGE", "MAGNOLIA", "MANSFIELD", "MANTUA", "MAPLE HEIGHTS",
            "MAPLE HIEGHTS", "MAPLE HTS", "MAPLE HTS.", "MAPLE HTS.,", "MAPLE, HTS", "MARIETTA", "MARYSVILLE", "MASON", "MASSILLON", "MASURY",
            "MAUMEE", "MAYFEILD HEIGHTS", "MAYFEILD HTS", "MAYFIED HTS", "MAYFIEILD HTS", "MAYFIEL DHTS", "MAYFIELD  HTS", "MAYFIELD  HTS.", "MAYFIELD  VILLAGE", "MAYFIELD HEIGHTS",
            "MAYFIELD HTS", "MAYFIELD HTS,", "MAYFIELD HTS,.", "MAYFIELD HTS.", "MAYFIELD HTS.,", "MAYFIELD HYS", "MAYFIELD VILLAGE", "MAYFIELD VILLGE", "MAYFIELD VLG", "MAYFIELD",
            "MAYFIELDS HTS", "MAYFILED HTS", "MAYFILED VILLAGE", "MAYFILED", "MAyfield Hts", "MEDINA", "MENTOR ON LAKE", "MENTOR", "MESOPOTAMIA", "MIAMISBURG",
            "MIDDBURGH HTS", "MIDDDLEBURG HEIGHTS", "MIDDDLEBURG HTS", "MIDDLBURGH HTS", "MIDDLDEBURG HEIGHTS", "MIDDLEBERG HEIGHTS", "MIDDLEBUG HTS", "MIDDLEBUGH HTS", "MIDDLEBUHRG HTS", "MIDDLEBURG   HTS",
            "MIDDLEBURG  HTS", "MIDDLEBURG  HTS.", "MIDDLEBURG HEIGHT", "MIDDLEBURG HEIGHTS", "MIDDLEBURG HEIGTS", "MIDDLEBURG HEUGHTS", "MIDDLEBURG HGTS", "MIDDLEBURG HTS", "MIDDLEBURG HTS,", "MIDDLEBURG HTS,.",
            "MIDDLEBURG HTS.", "MIDDLEBURG HTS.,", "MIDDLEBURG", "MIDDLEBURGE HTS", "MIDDLEBURGE HTS.", "MIDDLEBURGH HEIGHTS", "MIDDLEBURGH HTS", "MIDDLEBURGH HTS.", "MIDDLEBURGH", "MIDDLEBURH HEIGHTS",
            "MIDDLEBURH HTS", "MIDDLEBURH HTS.", "MIDDLEBURH", "MIDDLEFIELD", "MIDDLEGURG HTS", "MIDDLENBURG", "MIDDLETOWN", "MIDDLOEBURG HTS", "MIDLEBURG HEIGHTS", "MIDLEBURG HTS",
            "MIDLENBURG", "MILAN", "MILFORD", "MILLERSBURG", "MINERAL RIDGE", "MIddleburg Heights", "MMIDDLEBURG HTS", "MOGADORE", "MONROE", "MONROEVILLE",
            "MONTVILLE", "MOORELAND HILLS", "MORELAND HILLS VLG.", "MORELAND HILLS", "MORELAND HILLSCHAGRIN FALLS", "MORELAND HLS", "MORELAND", "MORLAND HILLS", "MORRELAND HILLS", "MORWOOD",
            "MOUNT SAINT JOSEPH", "MOUNT VERNON", "MT. VERNON", "MUNROE FALLS", "MUNSON TOWNSHIP", "MUNSON", "Macedonia", "Madison", "Mantua", "Maple  Heights",
            "Maple  Hts", "Maple Heights", "Maple Hts", "Maple Hts.", "Marblehead", "Marion", "Massillon", "Mayfeild Heights", "Mayfeild Village", "Mayfield  Hts",
            "Mayfield  Hts.", "Mayfield HTS", "Mayfield Height", "Mayfield Heights", "Mayfield Hts", "Mayfield Hts.", "Mayfield VLG", "Mayfield Village", "Mayfield Village,", "Mayfield",
            "Medina", "Mentor On The Lake", "Mentor", "Middburg Heights", "MiddleBurg Hts.", "Middleberg Hts", "Middlebrg Hts", "Middleburg  Heights", "Middleburg  Hts", "Middleburg  Hts.",
            "Middleburg Heights", "Middleburg Hgts", "Middleburg Hteights", "Middleburg Hts", "Middleburg Hts.", "Middleburg Hts.,", "Middleburg hts", "Middleburg", "Middleburgh Hts", "Middleburgs Heights",
            "Middlefield", "Midleburg Hts", "Mineral Ridge", "Mogadore", "Montville", "Moraine", "Moreland  Hills", "Moreland Hiils", "Moreland Hills", "Moreland Hills,",
            "Moreland", "N OLMSTED", "N Olmsted", "N RANDALL", "N RIDGEVILLE", "N ROYALTON", "N. Olmsted", "N. Ridgeville", "N. Royalton", "NELSON TOWNSHIP",
            "NEW ALBANY", "NEW CONCORD", "NEW FRANKLIN", "NEW LONDON", "NEW MALDEN   KT3  6AU", "NEW PHILADELPHIA", "NEWARK", "NEWBURG HEIGHTS", "NEWBURG HTS", "NEWBURG HTS.",
            "NEWBURG", "NEWBURGH  HTS", "NEWBURGH HEIGHTS", "NEWBURGH HTS", "NEWBURGH HTS.", "NEWBURGH HTS.,", "NEWBURGH", "NEWBURY", "NEWPORT BEACH", "NEWTON FALLS",
            "NILES", "NOERTH ROYALTON", "NORT OLMSTED", "NORTH   OLMSTED", "NORTH  OLMSTED", "NORTH  ROYALTON", "NORTH BEND", "NORTH BLOOMFIELD", "NORTH CANTON", "NORTH JACKSON",
            "NORTH KINGSVILLE", "NORTH LIMA", "NORTH OLMESTED", "NORTH OLMSTEAD", "NORTH OLMSTED", "NORTH RANDALL", "NORTH RIDGEVILLE", "NORTH ROAYLTON", "NORTH ROYALTON", "NORTHFIELD CENTER",
            "NORTHFIELD VILLAGE", "NORTHFIELD", "NORWALK", "NOVA", "NOVELTY", "New Plymouth", "Newburg Hts.,", "Newburgh Heights", "Newburgh Hts", "Newburgh Hts,",
            "Newburgh Hts.", "Newburgh Hts.,", "Newbury", "Norh Royalton", "North  Olmstead", "North  Olmsted", "North  Royalton", "North Bloomfield", "North Canton", "North Olmsted",
            "North Randall", "North Randle", "North Ridgeville", "North Royalto", "North Royalton", "North Roylaton", "Northfield", "Norwalk", "Notht Royalton", "Novelty",
            "OAK HARBOR", "OAKWOOD  VILLAGE", "OAKWOOD VILAGE", "OAKWOOD VILLAGE", "OAKWOOD VLG", "OAKWOOD", "OARMA", "OBERLIN", "OHIO", "OLD BROOKLYN",
            "OLMSTEAD FALLS", "OLMSTEAD TOWNSHIP", "OLMSTED   TWP.", "OLMSTED  FALLS", "OLMSTED  TWP", "OLMSTED  TWY", "OLMSTED FALL", "OLMSTED FALLS", "OLMSTED TOWNSHIP", "OLMSTED TWNP",
            "OLMSTED TWNSHP", "OLMSTED TWO", "OLMSTED TWP", "OLMSTED TWP.", "OLMSTED TWSHP", "OLMSTED TWSP", "OLMSTED Township", "OLMSTED", "OLMSTEDTOWNSHIP", "OLMSTEDTWP",
            "ORAGNE", "ORANGE VILLAGE", "ORANGE VILLE", "ORANGE VILLG", "ORANGE", "OREGON", "ORRVILLE", "ORWELL", "Oakwood Village", "Oakwood",
            "Oberlin", "Olmstead  Falls", "Olmstead Falls", "Olmstead Township", "Olmsted Fallls", "Olmsted Falls", "Olmsted Township", "Olmsted Twp", "Olmsted", "Olnmsted Township",
            "Orange Village", "Orange", "Orwell", "P3EPPER PIKE", "PAINESVILLE TWP", "PAINESVILLE", "PAIRVIEW PARK", "PAMA HEIGHTS", "PAMA HTS", "PAMRA HTS",
            "PAR,MA", "PARAM HTS", "PARAMA HEIGHTS", "PARAMA", "PARKMAN", "PARM HEIGHTS", "PARM HTS", "PARMA   HTS", "PARMA   HTS.", "PARMA  HEIGHTS",
            "PARMA  HTS", "PARMA  HTS.", "PARMA HEIGHTS", "PARMA HGTS", "PARMA HTS", "PARMA HTS,", "PARMA HTS,.", "PARMA HTS.", "PARMA HTS.,", "PARMA HTS.,.",
            "PARMA", "PARMS HEIGHTS", "PATASKALA", "PENINSULA", "PEPER PIKE", "PEPPER  PIKE", "PEPPER IOKE", "PEPPER PIKE", "PEPPER P[IKE", "PEPPERPIKE",
            "PERRY", "PERRYSBURG", "PICKERINGTON", "PIQUA", "PLAIN CITY", "POLAND", "POMEROY", "PORT CLINTON", "PORTAGE", "PORTSMOUTH",
            "POWELL", "PRMA HTS", "PROSPECT", "PUT IN BAY", "Painesville", "Pama", "Parma  Hts", "Parma  Hts.", "Parma Heights", "Parma Hgts",
            "Parma Hts", "Parma Hts.", "Parma Hts.,", "Parma", "Parma,", "Parmaeights", "Parna", "Peninsul", "Peninsula", "Pepper Pike",
            "Pepperpike", "Perry", "Pickerington", "Poland", "Port Clinton", "QUAKER CITY", "RAVENNA", "REMIDERVILLE", "REMINDERVILLE", "REYNOLDSBURG",
            "RICHAMOND HTS", "RICHFIELD TOWNSHIP", "RICHFIELD", "RICHMIND HEIGHTS", "RICHMOMD HEIGHTS", "RICHMOND  HEIGHTS", "RICHMOND  HTS", "RICHMOND HEIGHTS", "RICHMOND HIEGHTS", "RICHMOND HTS",
            "RICHMOND HTS,", "RICHMOND HTS.", "RICHMOND HTS.,", "RICHMOND", "RICHMOUND HTS", "RICMOND HTS", "RIDGE", "RITTMAN", "ROAMING SHORES", "ROCK CREEK",
            "ROCK RIVER", "ROCKY RIVER", "ROCKY TIVER", "ROCKYRIVER", "ROME", "ROOTSTOWN", "RUSSELL", "Ravenna", "Reminderville", "Reynoldburg",
            "Richfield", "Richmmond Heights", "Richmon Hts", "Richmond Heighgts", "Richmond Heights", "Richmond Hts", "Richmond Hts.", "Richmond heights", "Ricmond Heights", "Ricmond Hts",
            "Rocky River", "RockyRiver", "Rome", "Russell", "S EUCLID", "S Euclid", "S, Euclid", "S. CLEVELAND", "S. EUCLID", "S. Euclid",
            "S.Euclid", "SAGAMOE HILLS", "SAGAMORE HILLS", "SAGAMORE", "SAGOMORE HILLS", "SAHKER HTS", "SAINT CLAIRSVILLE", "SALEM", "SALESVILLE", "SALINEVILLE",
            "SANDUSKY", "SAOUTH EUCLID", "SCLEVELAND", "SEVEN  HILLS", "SEVEN HIILS", "SEVEN HILL", "SEVEN HILL,S", "SEVEN HILLS", "SEVEN HILS", "SEVENE HILLS",
            "SEVENHILLS", "SEVILLE", "SHADE", "SHAKAER HEIGHTS", "SHAKE HEIGHTS", "SHAKER   HTS", "SHAKER  HEIGHTS", "SHAKER  HTS", "SHAKER  HTS.", "SHAKER HEGHTS",
            "SHAKER HEIEGHTS", "SHAKER HEIGHTS", "SHAKER HGTS", "SHAKER HS.,", "SHAKER HTS", "SHAKER HTS,", "SHAKER HTS,.", "SHAKER HTS.", "SHAKER HTS.,", "SHAKER",
            "SHAKERS HEIGHTS", "SHARON CENTER", "SHEFFIELD LAKE", "SHEFFIELD VILLAGE", "SHELBY", "SHILOH", "SHREVE", "SIDNEY", "SILVER LAKE", "SJAKER HEIGHTS",
            "SKAKER HTS.", "SNAKER HTS", "SO EUCLID", "SOLON", "SOTUH EUCLID", "SOUT EUCLID", "SOUTH  EUCLID", "SOUTH  PARMA", "SOUTH . EUCLID", "SOUTH ELYRIA",
            "SOUTH EUCELID", "SOUTH EUCL;ID", "SOUTH EUCLD", "SOUTH EUCLI D", "SOUTH EUCLID", "SOUTH EULID", "SOUTH RUSSELL", "SOUTHINGTON", "SPENCER", "SPRINGBORO",
            "SPRINGFIELD", "STATE", "STERLING", "STEUBENVILLE", "STONGSVILLE", "STORNGSVILLE", "STOW", "STREETSBORO", "STRONFSVILLE", "STRONGSVIILE",
            "STRONGSVILE", "STRONGSVILLE", "STRONGVILLE", "STRONSVILLE", "STRUTHERS", "STTRONGSVILLE", "SULLIVAN", "SUMMERFIELD", "SUNBURY", "SWILLOUGHBY",
            "SYLVANIA", "Sagamore Hills", "Sandusky", "Seven  Hills", "Seven Hills", "SevenHills", "Seville", "Shaker Heights", "Shaker Hts", "Shaker Hts,",
            "Shaker Hts.", "Shaker Hts.,", "Sheffield Lake", "Sheffield Village", "Silver Lake", "So Euclid", "So. Euclid", "Solon Oh", "Solon", "Solon,",
            "Soth Euclid", "South  Amherst", "South  Euclid", "South Eucild", "South Euclid", "South Eucllid", "Spencer", "Springfield", "Ssolon", "Stow",
            "Streetsboro", "Strongsville", "Strongville", "Strretsboro", "TALLMADGE", "TEL AVIV  ISRAEL", "TEL AVIV, ISRAEL", "THOMPSON", "THORNVILLE", "TIFFIN",
            "TIMBERLAKE", "TIPPECANOE", "TOLEDO", "TORONTO CANADA", "TORONTO", "TUPPERS PLAINS", "TWINSBURG", "Tallmadge", "Timberlake", "Toledo",
            "Twinsburg", "UN IVERSITY  HEIGHTS", "UN IVERSITY HEIGHTS", "UNIONTOWN", "UNIVERAITY HTS.", "UNIVERSITY  HTS", "UNIVERSITY  HTS.", "UNIVERSITY HEIGHTS", "UNIVERSITY HT.", "UNIVERSITY HTS",
            "UNIVERSITY HTS.", "UNIVERSITY HTS.,", "UNIVERSITY HTS.,,", "UNIVERSITY TS.,", "UNIVERSITY", "UNIVESITY HTS", "UNVERSITY HTS", "Uniersity Hts", "Uniontown", "Univeristy hts",
            "University  Hts", "University He", "University Heights  H", "University Heights", "University Hgts", "University Hts", "University Hts.", "University Hts.,", "Universiy Hts", "Universtiy Heights",
            "Urbana", "VALLEY CITY", "VALLEY VIEW", "VALLLEY VIEW", "VERMILION", "VICKERY", "VIENNA", "VINCENT", "Valley City", "Valley View",
            "Vandalia", "Vermilion", "WADSWORTH", "WAIT HILL", "WAITE HILL", "WAKEMAN", "WALTON  HILLS", "WALTON HIILS", "WALTON HILL", "WALTON HILLD",
            "WALTON HILLS", "WAPAKONETA", "WAREENSVILLE HTS", "WARENSVILLE HTS", "WARREN", "WARRENSNILLE HTS", "WARRENSVBILLE HTS", "WARRENSVILE HTS", "WARRENSVILEE HEIGHTS", "WARRENSVILL HEIGHTS",
            "WARRENSVILL HTS", "WARRENSVILLE   HTS", "WARRENSVILLE  HEIGHTS", "WARRENSVILLE  HTS", "WARRENSVILLE CENTER", "WARRENSVILLE HEIGHTS", "WARRENSVILLE HTS", "WARRENSVILLE HTS,", "WARRENSVILLE HTS.", "WARRENSVILLE HTS.,",
            "WARRENSVILLE Hts", "WARRENSVILLE", "WARRENSVILLT HTS", "WARRENVILLE HTS", "WARRNESVILLE HTS", "WARRRENSVILLE HTS", "WATERVILLE", "WATSON HILLS", "WAUSEON", "WAY DUBLIN",
            "WAYNESBURG", "WELLINGTON", "WELLSVILLE", "WEST CHESTER", "WEST FARMINGTON", "WEST JEFFERSON", "WEST SALEM", "WESTERVILLE", "WESTFIELD CENTER", "WESTLAKE",
            "WHITEHOUSE", "WICKLIFFE", "WILLARD", "WILLIOWICK", "WILLOUGHBY HILLS", "WILLOUGHBY HTS.", "WILLOUGHBY Hills", "WILLOUGHBY", "WILLOWICK", "WILMINGTON",
            "WILOUGHBY HILLS", "WINDHAM", "WINDSOR", "WOODMERE VILLAGE", "WOODMERE", "WOOSTER", "WORTHINGTON", "Wadsworth", "Walhonding", "Walton HIlls",
            "Walton Hills", "Warren", "Warrensville  Hts", "Warrensville  Hts.", "Warrensville Heights", "Warrensville Heightsh", "Warrensville Hts", "Warrensville Hts.", "Warrensville hts", "Warrensville",
            "Wasrrensville Heights", "Watlon Hills", "Wellington", "Wellsville", "West Salem", "Westalke", "Westerville", "Westfield Center", "Westlake", "Wickliff",
            "Wickliffe", "Willoughby Hill", "Willoughby Hills", "Willoughby", "Willowick", "Woodmere Village", "Woodmere", "Woodmere,", "Wooster", "Worthington",
            "XENIA", "YELLOW SPRINGS", "YOUNGSTOWN", "Youngstown", "ZANESVILLE", "Zanesville", "`MAPLE HEIGHTS", "`NORTH ROYALTON", "brooklyn", "cleveland",
            "east cleveland", "euclid", "fairview park", "garfield Hts", "garfield hts", "highland hts", "lyndhurst", "mayfield hts", "middleburg hts", "newburgh hts",
            "oakwood village", "parma", "pepper pike", "richmond hts", "rocky river", "seven Hills", "seven hills", "shaker  hts", "shaker Heights", "shaker hts",
            "south euclid", "university hts", "walton hills", "warrensville hts", "willowick"]

        var options2 = '';

        for (var i = 0; i < mCity_list.length; i++)
            options2 += '<option value="' + mCity_list[i] + '" />';

        document.getElementById('mCity_list').innerHTML = options2;
        /*
        $.post('http://127.0.0.1:8080/', function(response) {
                    //console.log(JSON.stringify(response));
                    //console.log(response[0].id);
                    console.log(response.message);
                    console.log("testing5");
                    //data = JSON.stringify(response);
                    //data = response;
                    //console.log(response[0].id);
            });*/
        /*
        //console.log("testong json before");
        var data = DATA.default;
        //$.getJSON( "C:\\Users\\joel\\Desktop\\483JSON\\nodejsfiles\\RealEstate\\RealEstate\\src\\app\\maps\\secondDataSet.json", function(data) {
        //$.getJSON("loop.json", function(date)
        //var data = null;    
        //console.log("testing json");
            var propNames = Object.keys(data[0].properties);
            var x = document.getElementById("mytable");
            var y = document.getElementById("mytable2");
            var n;
            var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = window.location.search.substring(1),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;
        
                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');
        
                        if (sParameterName[0] === sParam) {
                            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                    }
                }
            };
            n = getUrlParameter("radio1");
            
            $.ajax({
                type: 'GET',
                //url: "localhost:4200",
                complete: function(data) {
                   console.log("data found from server");
                  //console.log((data));
                  //console.log(JSON.stringify(data));
                  console.log(data[0].id);
                }
            });
            $.get('http://localhost:4200', {mydata: 'content'}, function(response) {
                console.log(data[0].id);
                console.log("testing2");
            });
            
            
            
            
            //var retrievedObject = localStorage.getItem('testObject');
            //console.log('Value of retrievedObject: ' + retrievedObject);
            ///console.log(data.length);
            //console.log("n: "+n); //n is not changing values
            //console.log(Math.min(data.length, n));
            if (data.length == 0) {
                document.getElementById('resultsReturned').innerHTML = "Either nothing was entered or no matches returned";
            }
            var tr;
            tr = $('<tr/>');
            tr.append("<th>ID</th>");
            tr.append("<th>Mail City</th>");
            tr.append("<th>Mail Address</th>");
            tr.append("<th>Mail Zip</th>");
            tr.append("<th>Parcel Pin</th>");
            tr.append("<th>Parcel ID</th>");
            tr.append("<th>Grantee</th>");
            $(x).append(tr);
            //small input
            for (var i = 0; i < Math.min(data.length, n); i++) {
                tr = $('<tr/>');
                tr.append("<td>" + data[i].id + "</td>");
                tr.append("<td>" + data[i].properties.MAIL_CITY + "</td>");
                tr.append("<td>" + data[i].properties.MAIL_ADDR_ + "</td>");
                tr.append("<td>" + data[i].properties.MAIL_ZIP + "</td>");
                tr.append("<td>" + data[i].properties.PARCELPIN + "</td>");
                tr.append("<td>" + data[i].properties.PARCEL_ID + "</td>");
                tr.append("<td>" + data[i].properties.GRANTEE + "</td>");
                $(x).append(tr);
            }
            tr = $('<tr/>');
            tr.append("<th>ID</th>");
            tr.append("<th>Type</th>");
            for (var k = 0; k < 72; k++) {
                tr.append("<th>"+propNames[k] + "</th>");
            }
            $(y).append(tr);
            //large input
            for (var i = 0; i < Math.min(data.length, n); i++) {
                tr = $('<tr/>');
                tr.append("<td>" + data[i].id + "</td>");
                tr.append("<td>" + data[i].type + "</td>");
                for (var k = 0; k < 72; k++) {
                    tr.append("<td>" + data[i].properties[propNames[k]] + "</td>");
                }
                $(y).append(tr);
            }
            window.history.replaceState(null, null, window.location.pathname);
            document.getElementById('data_length').innerHTML = data.length;       
        //});
        */


        /*
        $.getJSON("loop.json", function (data) {
        $.each(data, function (index, value) {
           console.log(value);
            });
        });
        */

        //console.log("testing script");


        /*
        function showFunction1() { 
            console.log("testing twice");
            
            var x = document.getElementById("showResults");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
      }*/
        /*
        var MongoClient = require('mongodb').MongoClient;
      var url = "mongodb://localhost:27017/";
      MongoClient.connect(url, function (err, db) {
          if (err) throw err;
          
          var dbo = db.db("test2");
          var query = [{ "id": "10"}];
          dbo.collection("test1").find(query).toArray(function (err, result) {
              console.log(result);
          });
          
      });*/
        /*
        var inputBox2 = document.getElementById('dropInput') as HTMLSelectElement;
        var v1 = null;
        inputBox2.onclick = function(){
            //document.getElementById('demo').innerHTML = inputBox.value;
            if (v1 != inputBox2.value) {
                v1 = inputBox2.value;
                console.log(inputBox2.value); 
            } 
            
        }*/



    }





    showFunction2(): void {
        var x = document.getElementsByClassName("showInput1") as HTMLCollectionOf<HTMLElement>;
        var y = document.getElementsByClassName("showInput2") as HTMLCollectionOf<HTMLElement>;
        var i;

        if (y[0].style.display == "none") {
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
                y[i].style.display = "block";
            }
        } else {
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "block";
                y[i].style.display = "none";
            }
        }
    }
    showTable(): void {
        var x = document.getElementById("mytable");
        var y = document.getElementById("mytable2");
        if (x.style.display == "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
    }
    showFunction1(): void {
        console.log("testing twice");

        var x = document.getElementById("showResults");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }




}
