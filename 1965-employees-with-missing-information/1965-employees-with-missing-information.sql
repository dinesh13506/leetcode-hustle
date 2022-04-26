# Write your MySQL query statement below

select * from (select employee_id from Employees UNION ALL select employee_id from Salaries) as t group by t.employee_id having count(t.employee_id) = 1 order by t.employee_id