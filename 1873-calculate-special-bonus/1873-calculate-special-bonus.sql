# Write your MySQL query statement below

select em.employee_id, if(mod(em.employee_id,2) = 1 and em.name not like 'M%', em.salary, 0) as bonus
from employees as em