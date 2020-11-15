module.exports = function(table) {
   if (process.env !== "production") {
      console.log("\n🚀 init table seed");
      return table.create({ renter: {name:"Anna", email: "annaTest"} });

   }
   return Promise.resolve();
};

