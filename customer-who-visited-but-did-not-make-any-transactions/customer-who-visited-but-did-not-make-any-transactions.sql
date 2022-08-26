# Write your MySQL query statement below

# select vs.customer_id, count(vs.customer_id) as count_no_trans  from  Visits as vs left join Transactions as trs on vs.visit_id = trs.visit_id and trs.transaction_id is NULL group by vs.customer_id;


select vs.customer_id, count(vs.customer_id) as count_no_trans  from  Visits as vs left join Transactions as trs on vs.visit_id = trs.visit_id where trs.transaction_id is null group by vs.customer_id;