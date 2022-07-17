const axiosCall = require('axios');
const xml2js = require('xml2js');
const https =require('https');
//const Formatter = require("./unifyuat_xmlformatter");
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

axiosCall.defaults.httpsAgent = httpsAgent;
const UNIFY_URL = 'https://unifyuat.spectra.co/';
const UNIFY_URL_UMP = 'http://20.197.59.63/';
module.exports = class Config {
   
    static async getResultUnify(xml,api=0) {
        var policyURL;
        switch(api){
            case 3:
                   policyURL = UNIFY_URL+'unifyejb/BillingAPI';
                    break;
            case 2:
                    policyURL = UNIFY_URL+'unifyejb/FinanceAPI'; // Live
                    break;
            case 1:
                    policyURL = UNIFY_URL+'unifyejb/CRMAPI';
                    break;
            default:
                    policyURL = UNIFY_URL+'unifyejb/UnifyWS';
                    break;
            }
        var result_res;
       
        console.log(xml);
        await axiosCall.post( policyURL,xml,
            {
                headers: {
                    'Content-Type':'text/xml;charset=utf-8',
                    'Accept-Encoding': 'gzip,deflate',
                    'Content-Length':xml.length,
                    'Connection': 'Keep-Alive',
                    "username": "admin",
                    "password": "admin",
                    "cache-control": "no-cache",
                    "SOAPAction":"",
                    "Authorization": "Basic U3ltYmlvc3lzVXNlcjpQYXNzd29yZC0x"
                }
            })
            .then((response)=>{
                
                 xml2js.parseString(response.data, (err, result) => {
                    //console.log(result);
                    if(err) {
                        throw err;
                    }
                    
                    // var searchResult = result['soap:Envelope']['soap:Body'][0]['ns2:getCustomerAccountDetailResponse'][0]['return'][0];
                    // result_res=(JSON.stringify(searchResult));
                    result_res=result;
                   
                })
                         
            })
            .catch((error)=>{
               
            });
            return result_res;
        }


        static async getResultUnifyUMP(xml,api=0) {
            var policyURL;
            switch(api){
                case 3:
                       policyURL = UNIFY_URL_UMP+'unifyejb/BillingAPI';
                        break;
                case 2:
                        policyURL = UNIFY_URL_UMP+'unifyejb/FinanceAPI'; // Live
                        break;
                case 1:
                        policyURL = UNIFY_URL_UMP+'unifyejb/CRMAPI';
                        break;
                default:
                        policyURL = UNIFY_URL_UMP+'unifyejb/UnifyWS';
                        break;
                }
            var result_res;
           
            console.log(xml);
            await axiosCall.post( policyURL,xml,
                {
                    headers: {
                        'Content-Type':'text/xml;charset=utf-8',
                        'Accept-Encoding': 'gzip,deflate',
                        'Content-Length':xml.length,
                        'Connection': 'Keep-Alive',
                        "username": "admin",
                        "password": "admin",
                        "cache-control": "no-cache",
                        "SOAPAction":"",
                        "Authorization": "Basic U3ltYmlvc3lzVXNlcjpQYXNzd29yZC0x"
                    }
                })
                .then((response)=>{
                    
                     xml2js.parseString(response.data, (err, result) => {
                        //console.log(result);
                        if(err) {
                            throw err;
                        }
                        
                        // var searchResult = result['soap:Envelope']['soap:Body'][0]['ns2:getCustomerAccountDetailResponse'][0]['return'][0];
                        // result_res=(JSON.stringify(searchResult));
                        result_res=result;
                       
                    })
                             
                })
                .catch((error)=>{
                   
                });
                return result_res;
            }
    
    
    };