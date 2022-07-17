const axiosCall = require('axios');
const xml2js = require('xml2js');
const https =require('https');
const Formatter = require("./unify_xmlformatter");
const Config = require("./config");
const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})

axiosCall.defaults.httpsAgent = httpsAgent;
//const UNIFY_URL = 'https://unifyuat.spectra.co/';
module.exports = class UNIFY {
   
   
        static async getCustomerAccountDetail(canid) {
        var result_res11;
        var xml = Formatter.getCustomerAccountDetail(canid);
            await Config.getResultUnifyUMP(xml,1).then((result11)=> {
   
                //x=JSON.parse(result1);
                //console.log(result11);
                 var searchResult = result11['soap:Envelope']['soap:Body'][0]['ns2:getCustomerAccountDetailResponse'][0]['return'][0];
                    result_res11=searchResult;
              }).catch(console.error.bind(console))
                return result_res11;
            }

    static async searchContact(orgid) {
        var xml = Formatter.searchContact(orgid);
        var result_res11;
            await Config.getResultUnifyUMP(xml,1).then((result11)=> {
    
                //x=JSON.parse(result1);
                //console.log(result11);
                    var searchResult = result11['soap:Envelope']['soap:Body'][0]['ns2:searchContactResponse'][0]['contactList'][0]['return'];
    //var searchResult = result11['soap:Envelope']['soap:Body'][0]['ns2:searchContactResponse'];
                    
                    result_res11=searchResult;
                }).catch(console.error.bind(console))
             
                return result_res11;
            }


    static async getLedgerByOrgNo(orgid) {
        var xml = Formatter.getLedgerByOrgNo(orgid);
        var result_res11;
            await Config.getResultUnifyUMP(xml,2).then((result11)=> {
    
                //x=JSON.parse(result1);
                //console.log(result11);
                    var searchResult = result11['soap:Envelope']['soap:Body'][0]['ns2:getLedgerByOrgNoResponse'][0]['ledgerAccountList'][0]['return'];
    //var searchResult = result11['soap:Envelope']['soap:Body'][0]['ns2:searchContactResponse'];
                    
                    result_res11=searchResult;
                }).catch(console.error.bind(console))
                return result_res11;
            }

           
    
    





    
    };