
-- Return all users created today

SELECT *
FROM Users
WHERE CAST(created_at AS DATE) = CAST(GETDATE() AS DATE);



-- Count the number of users in the table

SELECT COUNT(*) 
FROM Users;



-- Find duplicate emails in a table

SELECT email, COUNT(*)
FROM Users
GROUP BY email
HAVING COUNT(*) > 1;



-- Return orders with the user name

SELECT Users.name, Orders.total
FROM Orders
JOIN Users ON Orders.user_id = Users.id;




