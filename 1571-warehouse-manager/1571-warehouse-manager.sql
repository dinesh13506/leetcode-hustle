# Write your MySQL query statement below

select wh.name as warehouse_name
, sum( (pd.Width * pd.Length * pd.Height) * wh.units) as volume
from Warehouse wh
inner join Products pd
on wh.product_id = pd.product_id
group by wh.name
