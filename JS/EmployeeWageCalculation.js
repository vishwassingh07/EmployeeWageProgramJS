console.log("Welcome To The Employee Wage Program With JS")

//UC1- Checking For Employee Present Or Not

const IS_FULLTIME = 1;
const IS_PARTTIME = 2;
const EMPWAGE_PER_HR = 20;
let empHrs = 0;
empCheck = Math.floor(Math.random()*10)%3;
if (IS_FULLTIME == empCheck)
{
    console.log("UC1- Employee Is Present Full Time")
    empHrs = 8;
}
else if(IS_PARTTIME == empCheck)
{
    console.log("UC1- Employee Is Present Part Time")
    empHrs = 4;
}
else
{
    console.log("UC1- Employee Is Not Present")
    empHrs = 0;
}

// UC2- Checking For The Part Time Or Full Time Working Hours
empWage = empHrs * EMPWAGE_PER_HR;
console.log("UC2- Employee Wage : "+ empWage);

