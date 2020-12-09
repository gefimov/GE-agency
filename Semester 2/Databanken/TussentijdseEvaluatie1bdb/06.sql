use tussentijdseevaluatie1bdb;

SELECT  coalesce(Ontleningen.Leden_Id, 'heeft nog nooit iets uitgeleend') as Boeken_Titel, concat(Voornaam ,' ' , Familienaam ) as naam FROM leden
LEFT JOIN Ontleningen ON Leden.Id = Ontleningen.Leden_Id
WHERE Ontleningen.Leden_Id IS NULL

union

SELECT  coalesce(Ontleningen.Boeken_Id, 'is nog nooit door iemand uitgeleend '), titel 
from Boeken
LEFT JOIN Ontleningen ON Boeken.Id = Ontleningen.Boeken_Id
WHERE Ontleningen.Boeken_Id IS NULL
