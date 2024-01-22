import Map "mo:base/HashMap";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import List "mo:base/List";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Bool "mo:base/Bool";
import Principal "mo:base/Principal";
import Result "mo:base/Result";
import Option "mo:base/Option";
import Debug "mo:base/Debug";
import Order "mo:base/Order";

import En "types";
import UserStore "user_store";

// Declare a shared actor class
shared({ caller = initializer }) actor class() {

    // ... (existing code)

    // Shared functions for interacting with medical records
    shared actor class RecordManager() {

        type Record = {
            name: Text;
            diagnosis: Text;
            treatment: Text;
        };

        var records : [Record] = [];

        public func storeRecord(record: Record) : async [Record] {
            // Append the new record to the existing records array
            records := Array.append(records, [record]);
            return records;
        };

        public query func getRecords() : async [Record] {
            // Return the list of stored records
            return records;
        };



         public query func greet(name : Text) : async Text {
    return "Recorded  " # name # "!";
  };
         public query func button(name : Text) : async Text {
    return "RECORD ADDED  " # name # "!";
  };
          public query func edit(name : Text) : async Text {
    return "RECORD ADDED  " # name # "!";
  };
     public query ({caller}) func whoami() : async Principal {
         return caller;
    };
    };

    // Instantiate the RecordManager actor
let recordManagerResult : Result<RecordManager, Text> = RecordManager();
// let recordManagerResult : Result<RecordManager, Text> = RecordManager();


// Use a switch statement to handle the different cases of the Result
switch (recordManagerResult) {
  case (#ok(manager)) {
    // Successfully instantiated, and manager holds the instance
    Debug.print("Successfully instantiated RecordManager:", manager);
  };
  case (#err(error)) {
    // There was an error during instantiation, and error contains the error message
    // Handle the error accordingly
    Debug.print("Error:", error);
  };
};

}


    // ... (existing code)

