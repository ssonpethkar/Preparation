# create database
CREATE DATABASE database_name;

# Use database
USE database_name;

# create table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);

# insert data 
INSERT INTO employees (name, department, salary) 
VALUES ('John Doe', 'HR', 5000.00);


# retrive all data 
SELECT * FROM employees;

# retrive specific column
SELECT name, salary FROM employees;

# Filtering data using where clause 
SELECT * FROM employees WHERE department = 'HR';

# update data in a table 
UPDATE employees SET salary = 6000.00 WHERE id = 1;

# delete data from a table
DELETE FROM employees WHERE id = 1;

# Drop a table 
DROP TABLE employees;

# 1. Find number of records in a table 
SELECT COUNT(*) FROM employees;

# 2. sort data
select * from employees order by salary desc;

# 3. GRoup data 
SELECT department, COUNT(*) AS employee_count 
FROM employees 
GROUP BY department;

# 4. Filter groups using having clause 
SELECT department, AVG(salary) AS avg_salary 
FROM employees 
GROUP BY department 
HAVING avg_salary > 5000;

# 5. join two tables
SELECT e.name, e.salary, d.department_name 
FROM employees e
INNER JOIN departments d ON e.department = d.id;

# 6. find duplicate records 
SELECT name, COUNT(*) 
FROM employees 
GROUP BY name 
HAVING COUNT(*) > 1;

# 7. find employees earning highest salary 
SELECT * 
FROM employees 
WHERE salary = (SELECT MAX(salary) FROM employees);

# 8. find 2nd highest salary 
SELECT MAX(salary) 
FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);

# 9. retrived employees join in the last 30 days 
SELECT * 
FROM employees 
WHERE join_date >= CURDATE() - INTERVAL 30 DAY;

# 10. find employes not belonging to a specific department 
SELECT * 
FROM employees 
WHERE department != 'HR';

# 11. find employees with a salary greater than average salary 
SELECT * 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

# 12. delete duplicate rows 
DELETE e1 
FROM employees e1 
INNER JOIN employees e2 
WHERE e1.id > e2.id AND e1.name = e2.name;

# 13. pagination query ( get 10 records per page )
SELECT * 
FROM employees 
LIMIT 10 OFFSET 20;  
-- For page 3 (offset = (page-1)*10)

# 14. find employees without any manager 
SELECT * 
FROM employees 
WHERE manager_id IS NULL;

# 15. use case statements
SELECT name, 
       department, 
       CASE 
           WHEN salary > 7000 THEN 'High'
           WHEN salary BETWEEN 4000 AND 7000 THEN 'Medium'
           ELSE 'Low'
       END AS salary_grade
FROM employees;

# 16. find the total salary department wise 
SELECT department, SUM(salary) AS total_salary 
FROM employees 
GROUP BY department;

# 17 retrive common records between tw tables
SELECT * 
FROM table1 
INNER JOIN table2 ON table1.common_column = table2.common_column;

# 18. retrive employees who earn more than their managers 
SELECT e.name 
FROM employees e 
JOIN employees m ON e.manager_id = m.id 
WHERE e.salary > m.salary;

# 19 find the employees with the maximum salary in each department 
SELECT department, MAX(salary) AS max_salary 
FROM employees 
GROUP BY department;

# 20 find the top 3 salaries 
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 3;



## Performance and Optimization Queries
# 1. add an index to a table
CREATE INDEX idx_department ON employees(department);

# 2. Optimize a query using EXPLAIN
EXPLAIN SELECT * FROM employees WHERE department = 'HR';


# 3. backup a database 
mysqldump -u username -p database_name > backup.sql

# 4. find the slowest running query 
SHOW FULL PROCESSLIST;



