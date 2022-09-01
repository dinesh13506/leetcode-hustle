# Write your MySQL query statement below

select
if( calls.from_id < calls.to_id,calls.from_id,calls.to_id)   as person1,
if( calls.from_id > calls.to_id,calls.from_id,calls.to_id)   as person2,
count(*) as call_count,
sum(calls.duration) as total_duration
from Calls as calls
group by person1, person2

