
module.exports = function(table) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed Host");
      return table.create({ email: "anna@gmail.com", name: "anna", zipCode:"11209",length:"12",width:"12",height:"12"});
   }
   return Promise.resolve();
};
// module.exports = function(table) {
//    if (process.env !== "production") {
//       console.log("\n🚀 init table seed Renter");
//       return table.create({ email: "anna@gmail.com", name: "anna" });
//    }
//    return Promise.resolve();
// };
// module.exports = function(table) {
//    if (process.env !== "production") {
//       console.log("\n🚀 init table seed Object");
//       return table.create({ RenterId: "1", name: "box", length:"12",width:"12",height:"12"});
//    }
//    return Promise.resolve();
// };

