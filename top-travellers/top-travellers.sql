# Write your MySQL query statement below

select 
users.name,
sum(ifnull(rides.distance, 0)) as travelled_distance from
Users as users
left join 
Rides as rides
on users.id = rides.user_id
group by rides.user_id
order by travelled_distance  desc, users.name asc
;

