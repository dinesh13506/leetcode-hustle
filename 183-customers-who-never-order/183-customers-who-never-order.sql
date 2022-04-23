# Write your MySQL query statement below

select cust.name as Customers  from customers as cust where cust.id not in (select ord.customerId from orders as ord)