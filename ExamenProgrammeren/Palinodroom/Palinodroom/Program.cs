using System;

namespace Palinodroom
{
    class Program
    {
        static string TekstOmgekeerd(string input)
        {
            char[] charArray = input.ToCharArray();
            Array.Reverse(charArray);
            string result = new string(charArray);
            return result;
        }
        static void Main(string[] args)
        {
            Console.WriteLine("De applicatie controleert of een ingegeven woord een palindroom is of niet...");
            Console.WriteLine("Als je vijf palindromen hebt ingegeven, dan eindigt de applicatie.");
            int palinodroomCounter = 0;
            string[] palinodroom = new string[5];
            do
            {
                Console.Write("Geef een woord op om te controleren of het een palindroom is of niet: ");
                palinodroom[palinodroomCounter] = Console.ReadLine();
                if (TekstOmgekeerd(palinodroom[palinodroomCounter]) == palinodroom[palinodroomCounter])
                {
                    palinodroomCounter++;
                    Console.ForegroundColor = ConsoleColor.Green;
                    Console.WriteLine("Het ingegeven woord is een palinodroom");
                    Console.ResetColor();
                }
                else
                {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.WriteLine("Het ingegeven woord is geen palinodroom");
                    Console.ResetColor();
                }
            } while (palinodroomCounter != 5);

            Console.WriteLine("Applicatie werd beeëindigt.");
            Console.WriteLine($"Jij hebt {palinodroomCounter} palinodromen ingegeven: ");
            PrintStringArray(palinodroom);

            PrintSystemInfo();
            Console.WriteLine("Druk op een toets om u programma af te sluiten. ");
            Console.ReadKey();


        }
        private static void PrintSystemInfo()
        {
            Console.WriteLine("De naam van uw pc is: "+Environment.MachineName);
            Console.WriteLine("Uw gebruikersnaam is: "+Environment.UserName);
        }
        private static void PrintStringArray(string[] array)
        {
            
            for (int i = 0; i < array.Length; i++)
            {
                Console.WriteLine(array[i]);
            }
        }
    }
}
