# Write your MySQL query statement below


SELECT users.user_id, CONCAT(UPPER(SUBSTRING(users.name,1,1)),LOWER(SUBSTRING(users.name,2,CHAR_LENGTH(users.name)))) as name FROM Users as users order by users.user_id ASC