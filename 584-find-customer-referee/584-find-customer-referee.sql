# Write your MySQL query statement below

select cust.name from Customer as cust where cust.referee_id is null or  cust.referee_id != 2