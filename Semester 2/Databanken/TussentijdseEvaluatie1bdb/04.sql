use Tussentijdseevaluatie1bdb;

create view BoekenInfo as
select Boeken.Titel, concat(Voornaam ,' ' , Familienaam ) as Naam_auteur, Uitgeverijen.Naam as Naam_Uitgever
from Boeken
left join Auteurs on Boeken.Auteurs_Id = Auteurs.Id
left join Uitgeverijen on Boeken.Uitgeverijen_Id = Uitgeverijen.Id