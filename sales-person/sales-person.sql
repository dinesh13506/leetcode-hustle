# Write your MySQL query statement below

#select sales_id from  Orders where com_id in (select com_id from Company where name not in ("RED"))

select sp.name from SalesPerson as sp where sp.sales_id not in( select orders.sales_id from Orders as orders inner join Company as company on orders.com_id = company.com_id and company.name = "RED");
