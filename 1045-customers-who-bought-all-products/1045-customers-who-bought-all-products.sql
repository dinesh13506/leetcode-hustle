# Write your MySQL query statement below

select c.customer_id from Customer as c
group by c.customer_id
having count(distinct product_key) = (select count(*) from Product)
