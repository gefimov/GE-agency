use Tussentijdseevaluatie1bdb;

create view OnpopulaireBoeken as
select Titel
from Boeken
left join Ontleningen on Boeken.Id = Ontleningen.Boeken_Id
where Ontleningen.Boeken_Id is null;
