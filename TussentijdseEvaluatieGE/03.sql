USE TussentijdseEvaluatie1C;

SELECT Personen.Voornaam, Personen.Familienaam FROM Baasje 
Left join Personen ON Personen_id =  Baasje.Personen_id 