function getEmployeedetailsbyObj()
{
    var secondDate =  new Date(1993,07,21); 
    var EmpDet = {name:"Abhishek",Age:24,DateOfBirth:secondDate,PlaceOfBirth:"Gwalior",
                  Address:{city:"Gwalior",state:"Madhya Pradesh",Pincode:411057 }}
    

    console.log("Employee Name:"+EmpDet.name + "\n" + "Age: "+EmpDet.Age + "\n" + "DateOfBirth: "+EmpDet.DateOfBirth
     + "\n" +"PlaceOfBirth: "+ EmpDet.PlaceOfBirth + "\n" +"City: "+ EmpDet.Address.city + "\n" +"State: "+ EmpDet.Address.state + "\n" +"Pincode: "+ EmpDet.Address.Pincode );
}