console.log("Welcome To The Employee Wage Program With JS")

//UC4- Calculating Wage For 20 Days In A Month

const IS_FULLTIME = 1;
const IS_PARTTIME = 2;
const EMPWAGE_PER_HR = 20;
const MAX_WORKING_DAYS = 20;
let empHrs = 0;
let totalEmpWage = 0;

function GetEmployeeHrs(empCheck)
{
    switch(empCheck)
    {
        case IS_FULLTIME:
            console.log("UC1- Employee Is Present Full Time")
            empHrs = 8;
            return empHrs;
        case IS_PARTTIME:
            console.log("UC1- Employee Is Present Part Time")
            empHrs = 4;
            return empHrs;
        default:
            console.log("UC1- Employee Is Not Present")
            empHrs = 0;
            return empHrs;
    }
}
for(let day=1; day<=MAX_WORKING_DAYS; day++)
{
empCheck = Math.floor(Math.random()*10)%3;
empWage = EMPWAGE_PER_HR * GetEmployeeHrs(empCheck);
console.log("UC2- Employee Wage For day "+ day + " is : "+ empWage);
totalEmpWage += empWage;
}
console.log("UC4- Total Employee Wage : " + totalEmpWage);
 