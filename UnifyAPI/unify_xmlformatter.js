
module.exports = class Formatter {
  static getCustomerAccountDetail(can_id) {
   //let soapBody = Parser.parseJSONBodyToXML();

    return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.unifyv4.com/">
     <soapenv:Header/>
    <soapenv:Body>
       <ws:getCustomerAccountDetail>
          <!--Optional:-->
          <serviceGroupNo></serviceGroupNo>
         <!--Optional:-->
         <serviceGroupId>`+can_id+`</serviceGroupId>
      </ws:getCustomerAccountDetail>
    </soapenv:Body>
    </soapenv:Envelope>`;
  }
  static searchContact(orgid) {
    //let soapBody = Parser.parseJSONBodyToXML();
 
     return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.unifyv4.com/">
     <soapenv:Header/>
     <soapenv:Body>
        <ws:searchContact>
           <!--Optional:-->
           <searchCriteria>
              <!--Optional:-->
              <firstName></firstName>
              <!--Optional:-->
              <lastName></lastName>
              <!--Optional:-->
              <contactNo></contactNo>
              <!--Optional:-->
              <orgNo>`+orgid+`</orgNo>
              <!--Optional:-->
              <start></start>
              <!--Optional:-->
              <limit></limit>
           </searchCriteria>
        </ws:searchContact>
     </soapenv:Body>
  </soapenv:Envelope>`;
   }


   static getLedgerByOrgNo(orgid) {
      //let soapBody = Parser.parseJSONBodyToXML();
   
       return `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.unifyv4.com/">
       <soapenv:Header/>
       <soapenv:Body>
          <ws:getLedgerByOrgNo>
             <orgNo>`+orgid+`</orgNo>
          </ws:getLedgerByOrgNo>
       </soapenv:Body>
    </soapenv:Envelope>`;
     }
};