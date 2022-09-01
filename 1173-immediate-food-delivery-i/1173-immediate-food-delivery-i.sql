# Write your MySQL query statement below


select 
CAST((select count(*) as im from Delivery where order_date = customer_pref_delivery_date) * 100 / 
count(*) AS DECIMAL(5,2))
as immediate_percentage
from 
Delivery
