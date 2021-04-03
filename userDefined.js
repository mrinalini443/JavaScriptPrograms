/*function Employee() {
    this.id = 101
    this.dis = function() {
        document.write('Welcome to user-defined function')
    }
}

var emp = new Employee()
emp.dis()
document.write('\t'+emp.id)*/

function Employee(id,name,salary) {
    this.id = id
    this.name = name
    this.salary = salary

    this.dis = function() {
        document.write('<br/>'+this.id)
        document.write('<br/>'+this.name)
        document.write('<br/>'+this.salary)
    }
}
var emp1 = new Employee(101,'Ram',20000)
var emp2 = new Employee(102,'Ravi',25000)
Employee.prototype.skillSet = 'JavaScript'
emp2.skillSet = 'HTML/CSS'
Employee.prototype.info = function() {
    document.write('<br/>'+this.skillSet)
}
emp1.dis()
emp1.info()
emp2.dis()
emp2.info()