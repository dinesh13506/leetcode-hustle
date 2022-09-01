CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      select if((select count(distinct salary) from Employee) < N, null,(select min(B.salary) from (select distinct salary from Employee order by salary desc limit N) as B))
      
  );
END