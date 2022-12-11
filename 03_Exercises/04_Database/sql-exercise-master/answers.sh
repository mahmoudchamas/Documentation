select * from students ;
SELECT Name from students ;
SELECT Name from students WHERE (Age >30) ;
SELECT name from students Where (Age == 30) AND  (Gender == 'F');
SELECT Points FROM students Where (Name == 'Alex');
INSERT INTO students VALUES (7,'Mahmoud Chamas' , 29 , 'M',300); 
UPDATE   students SET Points = 400 WHERE Name = 'Basma';
UPDATE   students SET Points = 100 WHERE Name = 'Alex';