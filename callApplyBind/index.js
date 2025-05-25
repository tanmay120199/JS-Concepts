let fullName={
    firstName:"Virat",
    lastName:"Kohli"
};

const printFullName=function (hometown, state){
    console.log(this.firstName+" "+this.lastName+" from "+hometown+","+state);
};

let fullName2={
    firstName:"MS",
    lastName:"Dhoni"
};

//call
printFullName.call(fullName,"gurgaon","harayana");

//apply
printFullName.apply(fullName2,["ranchi","jharkhand"]);

//bind
let fullNamePrint=printFullName.bind(fullName,"gurgaon","harayana");
fullNamePrint();
