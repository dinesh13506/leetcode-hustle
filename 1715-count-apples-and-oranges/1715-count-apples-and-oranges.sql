# Write your MySQL query statement below


select sum((boxes.apple_count + ifnull(chests.apple_count, 0))) as apple_count,  
sum((boxes.orange_count + ifnull(chests.orange_count, 0))) as orange_count
from Boxes as boxes 
left join
Chests as chests
on boxes.chest_id = chests.chest_id
