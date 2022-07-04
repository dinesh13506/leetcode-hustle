# Write your MySQL query statement below


SELECT students.id, students.name from Students as students left join Departments as departments on 
students.department_id = departments.id where departments.id is NULL