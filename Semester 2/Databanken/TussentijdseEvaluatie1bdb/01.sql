use Tussentijdseevaluatie1bdb;

select Boeken.Titel, concat(Voornaam ,' ' , Familienaam ) as Naam
from Ontleningen
inner join Boeken on Ontleningen.Boeken_Id = Boeken.Id
inner join Leden on Ontleningen.Leden_Id = Leden.Id;

