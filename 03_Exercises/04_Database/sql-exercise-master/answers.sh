1/select * from students ;
 
 2/SELECT Name from students ;

3/SELECT Name from students WHERE (Age >30) ;

4/SELECT name from students Where (Age == 30) AND  (Gender == 'F');

5/SELECT Points FROM students Where (Name == 'Alex');

6/INSERT INTO students VALUES (7,'Mahmoud Chamas' , 29 , 'M',300); 

7/UPDATE   students SET Points = 400 WHERE Name = 'Basma';

8/UPDATE   students SET Points = 100 WHERE Name = 'Alex';
 CREATE TABLE "graduates"(
       "ID"  INTEGER Not NULL ,
	   "Name" TEXT NOT NULL UNIQUE ,
	   "Age" TEXT ,
	   "Gender" TEXT,
	   Points TEXT,
	   "Graduation" text,
	   PRIMARY key ("ID" AUTOINCREMENT)
	   );
SELECT * from students ;
	
    12/   INSERT INTO graduates VALUES (1,'Layal' , 18 , 'M',300, 08/09/2018) ; 
	
       13 /DELETE  FROM students WHERE (name = 'layla');

14/SELECT emloyees.name,companies.name as company , companies.date ,
FROM companies,emloyees ,
Where companies.name=emloyees.company ,

15/ SELECT emloyees.name 
FROM companies.emloyees 
WHERE companies.name = emloyees.company AND companies.date <2000

 16/ SELECT company
    FROM emloyees
    WHERE Role = 'Graphic Designer '

    18/ SELECT Name FROM students 
    WHERE max(Points)

    19/ SELECT AVG(Points) FROM students

    20 / SELECT name from students WHERE (Points>500)

    21/ SELECT COLUMUN names LIKE %s% FROM students 

    22/  


    20/


    21/



    22/





