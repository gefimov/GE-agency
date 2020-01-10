using System;

namespace BottlessOfSpa
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Bottles of spa song: ");
            while (true)
            {
                for (int i = 99; i >= 0; i--)
                {
                    if (i == 2)
                    {
                        Console.WriteLine($"{i} bottles of spa on the wall, {i} bottles of spa" +
                        $"\ntake one down and pass it around, {i - 1}bottle of spa on the wall");
                    }
                    else if (i == 1)
                    {
                        Console.WriteLine($"{i} bottle of spa on the wall, {i} bottle of spa" +
                        $"\ntake it down and pass it around, no more bottles of spa on the wall");
                    }
                    else if (i == 0)
                    {
                        Console.WriteLine($"no more bottles of spa on the wall, no more bottles of spa" +
                        $"\ngo to the store and buy some more {i + 99}bottles of spa on the wall");
                    }
                    else
                    {
                        Console.WriteLine($"{i} bottles of spa on the wall, {i} bottles of spa" +
                        $"\ntake one down and pass it around, {i - 1}bottles of spa on the wall");
                    }
                    System.Threading.Thread.Sleep(10000);

                    Console.WriteLine();
                    
                }
            }
        }
    }
}
