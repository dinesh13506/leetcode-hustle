# Write your MySQL query statement below

 



select 
dep.name `Department` ,
emp.name `Employee`,
emp.salary `Salary`
from Employee as emp
inner join 
(select
max(emp.salary) as salary,
emp.departmentId
from Employee as emp
group by emp.departmentId) as B
on emp.departmentId = B.departmentId and emp.salary = B.salary
inner join Department as dep on emp.departmentId = dep.id
