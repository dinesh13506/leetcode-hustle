# Write your MySQL query statement below

select orders.customer_number from Orders as orders group by orders.customer_number order by count(*) desc limit 1; 
