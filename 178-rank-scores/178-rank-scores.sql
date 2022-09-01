# Write your MySQL query statement below

select s.score, 
(select count(distinct score) from Scores where score >= s.score) 'rank'
from Scores as s
order by s.score desc
