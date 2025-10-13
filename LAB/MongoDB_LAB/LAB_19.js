// Lab 19

// Perform following queries using use, drop, createcollection, dropcollection, insertOne and insertMany method. 
// Part - A 

// 1. Create a new database named “Darshan”. 
use Darshan

// 2. Create another new database named “DIET”. 
use DIET

// 3. List all databases. 
show databases
show dbs

// 4. Check the current database. 
db

// 5. Drop “DIET” database. 
db.dropDatabase("DIET")

// 6. Create a collection named “Student” in the “Darshan” database. 
db.createCollection("Student")

// 7. Create a collection named “Department” in the “Darshan” database. 
db.createCollection("Department")

// 8. List all collections in the “Darshan” database. 
show collections

// 9. Insert a single document using insertOne into “Department” collection. (Dname:’CE’, HOD:’Patel’) 
db.Department.insertOne({Dname:'CE',HOD:'Patel'})

// 10.  Insert two document using insertMany into “Department” collection. (Dname:’IT’ and Dname:’ICT’) 
db.Department.insertMany([
  {Dname:'IT'},
  {Dname:'ICT'}
])

// 11.  Drop a collection named “Department” from the “Darshan” database. 
db.Department.drop()

// 12.  Insert a single document using insertOne into “Student” collection.  
// (Fields are Name, City, Branch, Semester, Age) Insert your own data. 
db.Student.insertOne({name:"keval",city:"rajkot",branch:"EC",Semester:3,age:21})

// 13.  Insert three documents using insertMany into “Student” collection. 
// (Fields are Name, City, Branch, Semester, Age) Insert your three friend’s data. 
db.Student.insertMany([
  {name:"Mohit",City:"Rajkot",Branch:'EC',Semester:2,age:20},
  {name:"Raj",city:"Gondal",branch:"IT",Semester:4,age:20},
  {name:"Tony",city:"Surat",branch:"ICT",Semester:6,age:23}                     
])

// 14.  Check whether “Student” collection exists or not. 
db.Student.exists()

if (db.getCollectionNames().includes("Student")) {
    print("Student collection exists");
} else {
    print("Student collection does not exist");
}

// 15.  Check the stats of “Student” collection. 
db.Student.stats()

// 16.  Drop the “Student” collection.  
db.Student.drop()

// 17.  Create a collection named “Deposit”. 
db.createCollection("Deposit")

// 18.  Insert following data in to “Deposit” collection.
db.Deposit.insertMany([
    { ACTNO: 101, CNAME: "ANIL", BNAME: "VRCE", AMOUNT: 1000.00, CITY: "RAJKOT" },
    { ACTNO: 102, CNAME: "SUNIL", BNAME: "AJNI", AMOUNT: 5000.00, CITY: "SURAT" },
    { ACTNO: 103, CNAME: "MEHUL", BNAME: "KAROLBAGH", AMOUNT: 3500.00, CITY: "BARODA" },
    { ACTNO: 104, CNAME: "MADHURI", BNAME: "CHANDI", AMOUNT: 1200.00, CITY: "AHMEDABAD" },
    { ACTNO: 105, CNAME: "PRMOD", BNAME: "M.G. ROAD", AMOUNT: 3000.00, CITY: "SURAT" },
    { ACTNO: 106, CNAME: "SANDIP", BNAME: "ANDHERI", AMOUNT: 2000.00, CITY: "RAJKOT" },
    { ACTNO: 107, CNAME: "SHIVANI", BNAME: "VIRAR", AMOUNT: 1000.00, CITY: "SURAT" },
    { ACTNO: 108, CNAME: "KRANTI", BNAME: "NEHRU PLACE", AMOUNT: 5000.00, CITY: "RAJKOT" }
]);

// 19.  Display all the documents of “Deposit” collection. 
db.Deposit.find()

// 20.  Drop the “Deposit” collection.
db.Deposit.drop()

// Part – B 

// 1. Create a new database named “Computer”. 
use Computer

// 2. Create a collection named “Faculty” in the “Computer” database. 
db.createCollection("Faculty")

// 3. Insert a below document using insertOne into “Faculty” collection. 
db.Faculty.insertOne({
  FID:1,
  FNAME:"ANIL",
  BNAME:"CE",
  SALARY:10000,
  JDATE:"1-3-95"
})

// 4. Insert below documents using insertMany into “Faculty” collection. 
db.faculty.insertMany([
  {
    FID: 2,
    FNAME: "SUNIL",
    BNAME: "CE",
    SALARY: 50000,
    JDATE: new Date("1996-01-04")
  },
  {
    FID: 3,
    FNAME: "MEHUL",
    BNAME: "IT",
    SALARY: 35000,
    JDATE: new Date("1995-11-17")
  },
  {
    FID: 4,
    FNAME: "MADHURI",
    BNAME: "IT",
    SALARY: 12000,
    JDATE: new Date("1995-12-17")
  },
  {
    FID: 5,
    FNAME: "PRMOD",
    BNAME: "CE",
    SALARY: 30000,
    JDATE: new Date("1996-03-27")
  },
  {
    FID: 6,
    FNAME: "SANDIP",
    BNAME: "CE",
    SALARY: 20000,
    JDATE: new Date("1996-03-31")
  },
  {
    FID: 7,
    FNAME: "SHIVANI",
    BNAME: "CE",
    SALARY: 10000,
    JDATE: new Date("1995-09-05")
  },
  {
    FID: 8,
    FNAME: "KRANTI",
    BNAME: "IT",
    SALARY: 50000,
    JDATE: new Date("1995-07-02")
  }
])

// 5. Display all the documents of “Faculty” collection. 
db.faculty.find()

// 6. Drop the “Faculty” collection. 
db.faculty.drop()

// 7. Drop the “Computer” database.
db.dropDatabase("Computer")

// Part – C (Perform following operation using UI) 

// 1. Create a new database named “Computer”. 

// 2. Create a collection named “Faculty” in the “Computer” database. 

// 3. Insert a below documents into “Faculty” collection.

// 4. Display all the documents of “Faculty” collection. 

// 5. Drop the “Faculty” collection. 

// 6. Drop the “Computer” database.
