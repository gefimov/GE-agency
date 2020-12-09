USE TussentijdseEvaluatie1C;

CREATE VIEW BeginnendeArtsen AS 
SELECT Artsen.Voornaam FROM Praktijken
LEFT JOIN Artsen ON Artsen_id = Praktijken.Artsen_id 