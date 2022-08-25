# Write your MySQL query statement below

# where orders.order_date >= '2019-01-01' and orders.order_date <= '2019-12-31'

select users.user_id as buyer_id, users.join_date , ifnull(count(orders.order_date),0) as orders_in_2019   from Users as users left join Orders as orders  on users.user_id = orders.buyer_id  and year(orders.order_date) = '2019' group by users.user_id
