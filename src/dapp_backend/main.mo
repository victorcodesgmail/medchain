actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
  public query func good(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
