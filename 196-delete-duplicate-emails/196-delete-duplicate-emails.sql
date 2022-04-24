# Please write a DELETE statement and DO NOT write a SELECT statement.
# Write your MySQL query statement below

# delete from Person where id not in (select A.id from ( select min(id) as id from Person group by email) as A)


delete from Person where id not in (select A.id from (select min(id) as id from Person group by email) as A)