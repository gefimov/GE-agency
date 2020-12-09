use tussentijdseevaluatie1bdb;


select Titel 
from Boeken
inner join Ontleningen on Boeken.Id = Ontleningen.Boeken_Id 
group by Boeken_Id 
having count(Ontleningen.Boeken_Id ) > 3;