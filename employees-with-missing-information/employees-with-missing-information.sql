# Write your MySQL query statement below

(select emp.employee_id from Employees as emp where emp.employee_id not in ( select s.employee_id from Salaries as s)) union (select s.employee_id from Salaries as s where s.employee_id not in (select emp.employee_id from Employees as emp )) order by employee_id

