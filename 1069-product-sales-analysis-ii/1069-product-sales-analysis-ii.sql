# Write your MySQL query statement below

Select s.product_id, sum(s.quantity) as total_quantity
from Sales as s
group by s.product_id
