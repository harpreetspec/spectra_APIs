const { response } = require('express');
const UNIFY = require('./unify_api')
const Formatter = require("./unify_xmlformatter");
const redis = require('redis');
const client = redis.createClient({ socket: { port: 6379 } });

client.connect();

client.on('connect', () => {
	    console.log('connected');

      
}); 

/*client.set('framework', 'ReactJS', function(err, reply) {
  console.log("in"); // OK
});
*/





var g1=client.get('framework').then(data => {
  console.log(data)
});
//console.log(g1);
//process.exit(1);

/*
async function setmydata() {

  console.log("I am going.."); // OK
  await client.set('framework', 'ReactJS', function(err, reply) {
    console.log("in"); // OK
  });


  await client.get('framework', function(err, reply) {
    console.log("in 2"); // OK
  });

  process.exit(1);
  
}


setmydata();
*/


//process.exit();
/*var canid='9079003';   
var result1="testdeep";
client.set("CustomerAccountdetail9079003", result1, (err, stu) => {
  console.log(stu);
  console.log("in set data");
      });

client.get('CustomerAccountdetail9079003', (err, value) => {
  if (err) {
    throw err;
  }
  console.log('Value:', value);
  console.log("in get data");
})

console.log("after all");
*/
/*client.get('CustomerAccountdetail_9079003', (err, stu) => {
  if (err) console.log(err);
  else  console.log(stu);
});
*/





// async function TestTwoFun(canid) {
//     var org;
// //var stu1;
//     await client.get('CustomerAccountdetail_9079003', (err, stu) => {
//       if (err) console.log(err);
//       else  console.log(stu);
      
//   });
//   process.exit(); 
// // if(stu1!=''){
// //   console.log(stu1);
// //   process.exit();
// // }
//     const org1 = await UNIFY.getCustomerAccountDetail(canid).then((result1)=> {
   
//         //x=JSON.parse(result1);
//         console.log(result1);

//       client.set("CustomerAccountdetail_9079003", result1, (err, stu) => {
//         if (err) console.log(err);
//         else console.log(stu);
//     });

//   //   client.get('CustomerAccountdetail_9079003', (err, stu) => {
//   //     if (err) console.log(err);
//   //     else console.log(stu); 
//   // });


//         x=JSON.parse(result1);
//         org=x.orgId;
//         //console.log(orgid1);
//       }).catch(console.error.bind(console))
    
//      const number3 = await UNIFY.searchContact(org).then((result1)=> {
   
//     //x=JSON.parse(result1);
//     console.log(result1);
//   }).catch(console.error.bind(console))


//   const number2 = await UNIFY.getLedgerByOrgNo(org).then((result1)=> {
   
//     //x=JSON.parse(result1);
//     console.log(result1);
//   }).catch(console.error.bind(console))
//  }
//  TestTwoFun(canid);
