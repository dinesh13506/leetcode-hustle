# Write your MySQL query statement below


select emp.employee_id , B.team_size from Employee as emp inner join (select team_id, count(*) as team_size 
from Employee
group by team_id) as B
on emp.team_id = B.team_id
