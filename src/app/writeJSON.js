var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const fs = require('fs');
var jsonfile = require('jsonfile');
app.use(bodyParser.urlencoded({ extended: true }));


//app.listen(8080, function () {
app.listen(8080, function () {
    console.log('Server running at http://127.0.0.1:8080/');
});
app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });
app.get('/results', function (req,res) {
    //console.log("sending results");
    res.sendFile(__dirname + '/results.html');
    //res.json({ message: 'Hello World' });
});

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test2");
    app.post('/myaction', function (req, res) {
       
        //res.send('You sent the name "' + req.body + '".');
        //res.send("This is a test script");
        //console.log("testing every click");
        //var query = null;
        var s1;
        var arr = [];
        var query;
        /*
        split string into two seperate data sets
        req.body.id.toString() //1
        req.body.id.toString() //2
        */
        
        
        if (req.body.id.toString() !== "") {
            console.log("you've entered id");
            //s1 = parseInt(req.body.id);
            s1 = req.body.id.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = parseInt(s1);
            //console.log(s1);
            //s1 = s1.substr(0, s1.length-1);
            arr[0] = { "id": { $in: s1 } };
        } else {
            arr[0] = {};
        }
        
        if (req.body.type.toString() != 0 && req.body.type.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.type.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[1] = { "type": { $in: s1 } };
        } else {
            arr[1] = {};
        }
        
        if (req.body.p_pin.toString() != 0 && req.body.p_pin.toString() != ',') {
            console.log("you've entered pin");
            s1 = req.body.p_pin.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(1, s1.length);
            arr[2] = { "properties.PARCELPIN": { $in: s1 } };
        } else {
            arr[2] = {};
        }
        if (req.body.p_pk.toString() != 0 && req.body.p_pk.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_pk.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[3] = { "properties.PARCEL_PK": { $in: s1 } };
        } else {
            arr[3] = {};
        }
        if (req.body.p_type.toString() != 0 && req.body.p_type.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_type.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[4] = { "properties.PARCEL_TYP": { $in: s1 } };
        } else {
            arr[4] = {};
        }
        if (req.body.p_id.toString() != 0 && req.body.p_id.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_id.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(1, s1.length);
            arr[5] = { "properties.PARCEL_ID": { $in: s1 } };
        } else {
            arr[5] = {};
        }
        
        if (req.body.b_page.toString() != 0 && req.body.b_page.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.b_page.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[6] = { "properties.BOOK_PAGE": { $in: s1 } };
        } else {
            arr[6] = {};
        }
        if (req.body.p_year.toString() !== "" && req.body.p_year.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_year.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[7] = { "properties.PARCEL_YEA": { $in: s1 } };
        } else {
            arr[7] = {};
        }
        arr[7] = {}
        if (req.body.p_own.toString() != 0 && req.body.p_own.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_own.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[8] = { "properties.PARCEL_OWN": { $in: s1 } };
        } else {
            arr[8] = {};
        }
        if (req.body.d_own.toString() != 0 && req.body.d_own.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.d_own.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[9] = { "properties.DEEDED_OWN": { $in: s1 } };
        } else {
            arr[9] = {};
        }
        if (req.body.grantor.toString() != 0 && req.body.grantor.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.grantor.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[10] = { "properties.GRANTOR": { $in: s1 } };
        } else {
            arr[10] = {};
        }
        if (req.body.grantee.toString() != 0 && req.body.grantee.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.grantee.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(1, s1.length);
            arr[11] = { "properties.GRANTEE": { $in: s1 } };
        } else {
            arr[11] = {};
        }
        if (req.body.t_d.toString() != 0 && req.body.t_d.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.t_d.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[12] = { "properties.TRANSFER_D": { $in: s1 } };
        } else {
            arr[12] = {};
        }
        
        if (req.body.s_amnt.toString() !== "" && req.body.s_amnt.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.s_amnt.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[13] = { "properties.SALES_AMOU": { $in: s1 } };
        } else {
            arr[13] = {};
        }
        if (req.body.p_add.toString() != 0 && req.body.p_add.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_add.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[14] = { "properties.PAR_ADDR": { $in: s1 } };
        } else {
            arr[14] = {};
        }
        if (req.body.p_street.toString() != 0 && req.body.p_street.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_street.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[15] = { "properties.PAR_STREET": { $in: s1 } };
        } else {
            arr[15] = {};
        }
        if (req.body.p_suf.toString() != 0 && req.body.p_suf.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_suf.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[16] = { "properties.PAR_SUFFIX": { $in: s1 } };
        } else {
            arr[16] = {};
        }
        if (req.body.p_city.toString() != 0 && req.body.p_city.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_city.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[17] = { "properties.PAR_CITY": { $in: s1 } };
        } else {
            arr[17] = {};
        }
        if (req.body.p_zip.toString() != 0 && req.body.p_zip.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_zip.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[18] = { "properties.PAR_ZIP": { $in: s1 } };
        } else {
            arr[18] = {};
        }
        if (req.body.p_add_a.toString() != 0 && req.body.p_add_a.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.p_add_a.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[19] = { "properties.PAR_ADDR_A": { $in: s1 } };
        } else {
            arr[19] = {};
        }
        if (req.body.m_name.toString() != 0 && req.body.m_name.toString() != ',') {
            console.log("you've entered city");
            s1 = req.body.m_name.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[20] = { "properties.MAIL_NAME": { $in: s1 } };
        } else {
            arr[20] = {};
        }
        if (req.body.m_add.toString() != 0 && req.body.m_add.toString() != ',') {
            //console.log("you've entered address");
            s1 = req.body.m_add.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[21] = {"properties.MAIL_ADDR_": { $in: s1 } };
        } else {
            arr[21] = {};
        }
        if (req.body.m_city.toString() != 0 && req.body.m_city.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.m_city.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(1, s1.length);
            arr[22] = { "properties.MAIL_CITY": { $in: s1 } };
        } else {
            arr[22] = {};
        }
        if (req.body.m_state.toString() != 0 && req.body.m_state.toString() != ',') {
            //console.log("you've entered city");
            s1 = req.body.m_state.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[23] = { "properties.MAIL_STATE": { $in: s1 } };
        } else {
            arr[23] = {};
        }        
        if (req.body.m_zip.toString() != 0 && req.body.m_zip.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.m_zip.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(1, s1.length);
            arr[24] = {"properties.MAIL_ZIP": { $in: s1 } };
        } else {
            arr[24] = {};
        }
        
        if (req.body.t_luc.toString() != 0 && req.body.t_luc.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_luc.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[25] = {"properties.TAX_LUC": { $in: s1 } };
        } else {
            arr[25] = {};
        }
        if (req.body.t_luc_de.toString() != 0 && req.body.t_luc_de.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_luc_de.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[26] = {"properties.TAX_LUC_DE": { $in: s1 } };
        } else {
            arr[26] = {};
        }
        if (req.body.z_code.toString() != 0 && req.body.z_code.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.z_code.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[27] = {"properties.ZONING_COD": { $in: s1 } };
        } else {
            arr[27] = {};
        }
        if (req.body.z_use.toString() != 0 && req.body.z_use.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.z_use.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[28] = {"properties.ZONING_USE": { $in: s1 } };
        } else {
            arr[28] = {};
        }
        if (req.body.p_cat.toString() != 0 && req.body.p_cat.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.p_cat.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[29] = {"properties.PROPERTY_C": { $in: s1 } };
        } else {
            arr[29] = {};
        }
        if (req.body.t_dis.toString() != 0 && req.body.t_dis.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_dis.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[30] = {"properties.TAX_DISTRI": { $in: s1 } };
        } else {
            arr[30] = {};
        }
        if (req.body.neigh.toString() != 0 && req.body.neigh.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.neigh.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[31] = {"properties.NEIGHBORHO": { $in: s1 } };
        } else {
            arr[31] = {};
        }
        if (req.body.r_type.toString() != 0 && req.body.r_type.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.r_type.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[32] = {"properties.ROAD_TYPE": { $in: s1 } };
        } else {
            arr[32] = {};
        }
        if (req.body.water.toString() != 0 && req.body.water.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.water.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[33] = {"properties.WATER": { $in: s1 } };
        } else {
            arr[33] = {};
        }
        if (req.body.sewer.toString() != 0 && req.body.sewer.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.sewer.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[34] = {"properties.SEWER": { $in: s1 } };
        } else {
            arr[34] = {};
        }
        if (req.body.gas.toString() != 0 && req.body.gas.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.gas.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[35] = {"properties.GAS": { $in: s1 } };
        } else {
            arr[35] = {};
        }
        if (req.body.elec.toString() != 0 && req.body.elec.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.elec.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[36] = {"properties.ELECTRICIT": { $in: s1 } };
        } else {
            arr[36] = {};
        }
        if (req.body.t_year.toString() !== "" && req.body.t_year.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_year.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[37] = {"properties.TAX_YEAR": { $in: s1 } };
        } else {
            arr[37] = {};
        }
        if (req.body.cert1.toString() !== "" && req.body.cert1.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert1.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[38] = {"properties.CERT1": { $in: s1 } };
        } else {
            arr[38] = {};
        }
        
        if (req.body.cert2.toString() !== "" && req.body.cert2.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert2.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[39] = {"properties.CERT2": { $in: s1 } };
        } else {
            arr[39] = {};
        }
        if (req.body.cert3.toString() !== "" && req.body.cert3.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert3.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[40] = {"properties.CERT3": { $in: s1 } };
        } else {
            arr[40] = {};
        }
        if (req.body.cert4.toString() !== "" && req.body.cert4.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert4.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[41] = {"properties.CERT4": { $in: s1 } };
        } else {
            arr[41] = {};
        }
            arr[42] = {};

        if (req.body.cert6.toString() !== "" && req.body.cert6.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert6.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[43] = {"properties.CERT6": { $in: s1 } };
        } else {
            arr[43] = {};
        }
        if (req.body.cert7.toString() !== "" && req.body.cert7.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert7.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[44] = {"properties.CERT7": { $in: s1 } };
        } else {
            arr[44] = {};
        }
        
        if (req.body.cert8.toString() !== "" && req.body.cert8.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert8.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[45] = {"properties.CERT8": { $in: s1 } };
        } else {
            arr[45] = {};
        }
        if (req.body.cert10.toString() !== "" && req.body.cert10.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert10.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[46] = {"properties.CERT10": { $in: s1 } };
        } else {
            arr[46] = {};
        }
        if (req.body.cert11.toString() !== "" && req.body.cert11.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert11.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[47] = {"properties.CERT11": { $in: s1 } };
        } else {
            arr[47] = {};
        }
        
        if (req.body.cert12.toString() !== "" && req.body.cert12.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.cert12.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[48] = {"properties.CERT12": { $in: s1 } };
        } else {
            arr[48] = {};
        }
        if (req.body.gcert1.toString() !== "" && req.body.gcert1.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.gcert1.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[49] = {"properties.GCERT1": { $in: s1 } };
        } else {
            arr[49] = {};
        }
        
        if (req.body.gcert2.toString() !== "" && req.body.gcert2.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.gcert2.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[50] = {"properties.GCERT2": { $in: s1 } };
        } else {
            arr[50] = {};
        }
        
        if (req.body.gcert3.toString() !== "" && req.body.gcert3.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.gcert3.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[51] = {"properties.GCERT3": { $in: s1 } };
        } else {
            arr[51] = {};
        }
        if (req.body.r_bld_c.toString() !=="" && req.body.r_bld_c.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.r_bld_c.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[52] = {"properties.RES_BLDG_C": { $in: s1 } };
        } else {
            arr[52] = {};
        }
        if (req.body.t_res.toString() !== "" && req.body.t_res.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_res.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[53] = {"properties.TOTAL_RES_": { $in: s1 } };
        } else {
            arr[53] = {};
        }
        if (req.body.t_res1.toString() !== "" && req.body.t_res1.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_res1.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[54] = {"properties.TOTAL_RES1": { $in: s1 } };
        } else {
            arr[54] = {};
        }
        if (req.body.c_bld_c.toString() !== "" && req.body.c_bld_c.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.c_bld_c.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[55] = {"properties.COM_BLDG_C": { $in: s1 } };
        } else {
            arr[55] = {};
        }
        if (req.body.t_com.toString() != "" && req.body.t_com.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_com.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[56] = {"properties.TOTAL_COM_": { $in: s1 } };
        } else {
            arr[56] = {};
        }
        if (req.body.com_liv.toString() !== "" && req.body.com_liv.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.com_liv.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[57] = {"properties.COM_LIVING": { $in: s1 } };
        } else {
            arr[57] = {};
        }
        if (req.body.t_leg.toString() !== "" && req.body.t_leg.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_leg.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[58] = {"properties.TOTAL_LEGA": { $in: s1 } };
        } else {
            arr[58] = {};
        }
        if (req.body.t_square.toString() !== "" && req.body.t_square.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.t_square.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[59] = {"properties.TOTAL_SQUA": { $in: s1 } };
        } else {
            arr[59] = {};
        }
        if (req.body.t_acre.toString() !== "" && req.body.t_acre.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = parseFloat(req.body.t_acre.toString());
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[60] = {"properties.TOTAL_ACRE": { $in: s1 } };
        } else {
            arr[60] = {};
        }
        if (req.body.ourcode.toString() != 0 && req.body.ourcode.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.ourcode.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[61] = {"properties.OurCode": { $in: s1 } };
        } else {
            arr[61] = {};
        }
        if (req.body.sitecat1.toString() != 0 && req.body.sitecat1.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.sitecat1.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[62] = {"properties.SiteCat1": { $in: s1 } };
        } else {
            arr[62] = {};
        }
        if (req.body.sitecat2.toString() != 0 && req.body.sitecat2.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.sitecat2.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[63] = {"properties.SiteCat2": { $in: s1 } };
        } else {
            arr[63] = {};
        }
        if (req.body.descrip.toString() != 0 && req.body.descrip.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.descrip.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[64] = {"properties.Descrip": { $in: s1 } };
        } else {
            arr[64] = {};
        }
        if (req.body.s_name.toString() != 0 && req.body.s_name.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.s_name.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[65] = {"properties.SPA_NAME": { $in: s1 } };
        } else {
            arr[65] = {};
        }
        if (req.body.p_city2.toString() != 0 && req.body.p_city2.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.p_city2.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[66] = {"properties.PAR_CITY2": { $in: s1 } };
        } else {
            arr[66] = {};
        }
        if (req.body.units.toString() !== "" && req.body.units.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.units.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[67] = {"properties.Units": { $in: s1 } };
        } else {
            arr[67] = {};
        }
        if (req.body.units2.toString() !== "" && req.body.units2.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.units2.toString();
            s1 = s1.split(', ').map(Number);
            //s1 = s1.substr(0, s1.length-1);
            arr[68] = {"properties.Units2": { $in: s1 } };
        } else {
            arr[68] = {};
        }
        if (req.body.p_own2.toString() != 0 && req.body.p_own2.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.p_own2.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[69] = {"properties.PARCL_OWN2": { $in: s1 } };
        } else {
            arr[69] = {};
        }
        if (req.body.p_own3.toString() != 0 && req.body.p_own3.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.p_own3.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[70] = {"properties.PARCL_OWN3": { $in: s1 } };
        } else {
            arr[70] = {};
        }
        if (req.body.mail2.toString() != 0 && req.body.mail2.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.mail2.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[71] = {"properties.MAIL2": { $in: s1 } };
        } else {
            arr[71] = {};
        }
        if (req.body.paren2.toString() != 0 && req.body.paren2.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.paren2.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[72] = {"properties.PAREN2": { $in: s1 } };
        } else {
            arr[72] = {};
        }
        if (req.body.spa_cod.toString() != 0 && req.body.spa_cod.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.spa_cod.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[73] = {"properties.SPA_COD": { $in: s1 } };
        } else {
            arr[73] = {};
        }
        if (req.body.p_loc.toString() != 0 && req.body.p_loc.toString() != ',') {
            //console.log("you've entered zip code");
            s1 = req.body.p_loc.toString();
            s1 = s1.split(", ");
            //s1 = s1.substr(0, s1.length-1);
            arr[74] = {"properties.PARCELLOC": { $in: s1 } };
        } else {
            arr[74] = {};
        }
        
        

        
        query = {$and: [ 
            arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], 
            arr[8], arr[9], arr[10], arr[11], arr[12], arr[13], arr[14],
            arr[15], arr[16], arr[17], arr[18], arr[19], arr[20], arr[21], 
            arr[22], arr[23], arr[24], arr[25], arr[26], arr[27], arr[28],
            arr[29], arr[30], arr[31], arr[32], arr[33], arr[34], arr[35], 
            arr[36], arr[37], arr[38], arr[39], arr[40], arr[41], arr[42],
            arr[43], arr[44], arr[45], arr[46], arr[47], arr[48], arr[49], 
            arr[50], arr[51], arr[52], arr[53], arr[54], arr[55], arr[56],
            arr[57], arr[58], arr[59], arr[60], arr[61], arr[62], arr[63], 
            arr[64], arr[65], arr[66], arr[67], arr[68], arr[69], arr[70],
            arr[71], arr[72], arr[73], arr[74]
        ]};
        //console.log(query);
        
        
        
        //query = {$and: [arr[0], arr[1]]};
        //query = {$and: [ arr[0], arr[1]]};
        //query = {$and: [ { "id" : 1 }, { } ] };
        //console.log(query);
        
        
        
        

            dbo.collection("test1").find(query).toArray(function (err, result) {
            //dbo.collection("test").findOne(query,function (err, result) {
            //res.send('You sent the name "' + result + '".');
            //res.json(result);
            //res.send(result);
            //res.redirect('http://localhost:4200');
            res.redirect('/results');
            if (err) throw err;
            if (result == null) {
                console.log("You've entered nothing");
    
            }
            r1 = result;
            //console.log(r1);
            app.post('/results',function(req,res) {
                //console.log("send 4");
                //res.write('Hello World');
                res.json({r1,  message: 'Hello World' });
                //res.sendFile(__dirname + '/results.html');
                //res.json({ message: 'Hello World' });
            });
            app.get('/',function(req,res) {
                console.log("send 6");
                if (req.params.mydata === 'content') {
                    res.end("you sent content");
                } else {
                    //res.end("you sent something else");
                    //res.json({ message: 'Hello World' });
                    //console.log("send 3");
                    //console.log(r1);
                    res.json(r1);
                }
            });
            //console.log(result);
            /*
            fs.writeFile("testWrite.", "Hey there!", function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            });*/
            /*
            if(typeof(Storage) !== "undefined"){
                //use the local storage
                localStorage.setItem('testObject', result);
             }
             var retrievedObject = localStorage.getItem('testObject');
            console.log('Value of retrievedObject: ' + retrievedObject);
            */
           
            /*
            jsonfile.writeFile('maps\\secondDataSet.json', result, {spaces:2}, function(err){
                console.log(err);
                //db.close();
            });
            */
            
            
            
        });
        
    });
    

});


/*
app.post('/',function(req,res) {
    console.log("send 4");
    console.log(req.body.test);
    //res.write('Hello World');
    res.json({message: 'Hello World' });
    //res.sendFile(__dirname + '/results.html');
    //res.json({ message: 'Hello World' });
});*/


