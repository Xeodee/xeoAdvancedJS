'use strict';                                                                           // Always use strict mode for best practices

var database = (function(){                                                             // CLASS - Database

    var customerDatabase;                                                               // Database is not accessible outside the class scope
                                                                                        // This is by design so the database cannot be pulled unless we extend a method
    var setDatabase = (function(){
        customerDatabase = [{firstName:"John",lastName:"Smith",age:32,country:"USA"}];  // TODO: Convert to an Ajax call or database call
    })();                                                                               // This method is also left private as it only needs

    var getCustomers = function(){
        console.log(customerDatabase);                                                  // private function exposed as database.getCustomer()
    };

    var addCustomer = function(fName,lName,cAge,cCountry){                              // private function exposed as database.addCustomer("string","string",int,"string")
        if(!fName || !lName || !cAge || !cCountry){                                     // TODO: Change so the error thrown is more specific, perhaps switch?
            console.log("Missing an item!");
        } else {
            customerDatabase.push({                                                     // TODO: Needs a method to write to database
                firstName: fName,                                                       // TODO: ? maybe instead of pushing to memory write to db
                lastName: lName,
                age: cAge,
                country: cCountry});
        }
    };

    return {getCustomers : getCustomers, addCustomer : addCustomer};                    // this is the best way to expose a function, it wont run until invoked

})();                                                                                   // Use 'IIFE' this so there is no call to the function,
                                                                                        // less lines of code.



