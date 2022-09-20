const person = {
    firstName : 'Nitsha',
    lastName : 'Holkar',
    get fullName (){
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value){
        const arr= value.split(" ");
        console.log(arr);
        this.lastName =  arr[1];
       this.firstName =  arr[0];
    }

}


person.fullName = "Manish Kumar";

console.log(person);