# Write your MySQL query statement below

select users.name as NAME, sum(t.amount) as BALANCE 
from Users as users inner join Transactions as t
on users.account = t.account
group by t.account
having BALANCE > 10000
