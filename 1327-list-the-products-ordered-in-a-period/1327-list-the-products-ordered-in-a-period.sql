# Write your MySQL query statement below


select products.product_name, sum(orders.unit) as unit from Products as products inner join Orders as orders on products.product_id = orders.product_id and orders.order_date >= '2020-02-01' and orders.order_date <= '2020-02-29' group by products.product_name having sum(orders.unit) >= 100 