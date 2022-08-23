# Write your MySQL query statement below

select cust.name from Customer as cust where cust.referee_id  not in (2) or cust.referee_id is null