# Write your MySQL query statement below


select name from Employee inner join (select
managerId
from 
Employee
where managerId is not null
group by managerId
having count(*) >= 5) as B
on id = B.managerId