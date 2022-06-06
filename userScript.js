class Employee{
    constructor(name,email,age,phone,aadhar,address,date){
        this.name = name;
        this.email = email;
        this.age = age;
        this.phone = phone;
        this.aadhar = aadhar;
        this.address = address;
        this.date = date;
    }
};

const arr = [];

if(!localStorage.getItem('employees')){
    localStorage.setItem('employees',JSON.stringify(arr));
}

const add = () => {
    const name = document.querySelector("#name").value;
    if(name === ''){
        alert("Name must be Filled")
        return false;
    }
    const email = document.querySelector("#email").value;
    if(email === ''){
        alert("Email must be Filled")
        return false;
    }
    const age = document.querySelector("#age").value;
    if(age === ''){
        alert("Age must be Filled")
        return false;
    }

    const phone = document.querySelector("#phone").value;
    if(phone === ''){
        alert("Phone number must be Filled")
        return false;
    }

    const aadhar = document.querySelector("#aadhar").value;
    if(aadhar === ''){
        alert("Aadhar Number must be Filled")
        return false;
    }
    const address = document.querySelector("#address").value;
    if(address === ''){
        alert("Address must be Filled")
        return false;
    }
    const date = document.querySelector("#date").value;
    


    var emp = new Employee(name,email,age,phone,aadhar,address,date);

    arr.push(emp);

    document.querySelector("#emp").reset();
    alert("Submitted Successfully"); 
}

const disp = () =>{
    var json1 = JSON.parse(localStorage["employees"]);
    arr.forEach((item)=>{
        json1.push(item);
    });
    localStorage["employees"] = JSON.stringify(json1);
    location.replace("admin.html");
}