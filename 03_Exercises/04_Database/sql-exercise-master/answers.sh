select * from students ;
SELECT Name from students ;
SELECT Name from students WHERE (Age >30) ;
SELECT name from students Where (Age == 30) AND  (Gender == 'F');
SELECT Points FROM students Where (Name == 'Alex');
INSERT INTO students VALUES (7,'Mahmoud Chamas' , 29 , 'M',300); 
UPDATE   students SET Points = 400 WHERE Name = 'Basma';
UPDATE   students SET Points = 100 WHERE Name = 'Alex';
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
	   INSERT INTO graduates VALUES (1,'Layal' , 18 , 'M',300, 08/09/2018) ; 
	   DELETE  FROM students WHERE (name = 'layla');