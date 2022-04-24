# Write your MySQL query statement below

select em.employee_id, case when (mod(em.employee_id,2) = 1 and em.name not like 'M%') then em.salary else 0 end as bonus
from employees as em