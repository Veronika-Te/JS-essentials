class ValidationError extends Error{
  printCustomerMessage(){
    return `Validation failed:- details: ${this.message}`;
  }
}

//Inherited
/*class ValidationError extends Error{
  constructor(message){
    super(message);
    this.name="ValidationError";
    this.code="42";
  }
  printCustomerMessage(){
    return `Validation failed:-details: ${this.message}, code: ${this.code}`;
  }
}*/

try{
  throw new ValidationError("Not a valid phone number")
} catch(error){
  if(error instanceof ValidationError){
    console.log(error.name);
    console.log(error.printCustomerMessage());
    // 1) Validation failed:- details: Not a valid phone number
    // 2) Inherited version: Validation failed:-details: Not a valid phone number, code: 42
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}