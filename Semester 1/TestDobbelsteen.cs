using System;

namespace TestDobbelsteen
{
    class Program
    {
        static void Main(string[] args)
        {
            
            Console.WriteLine("╔═══════════════╗");
            Console.WriteLine("║               ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║       .       ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("╚═══════════════╝");

            Console.WriteLine("╔═══════════════╗");
            Console.WriteLine("║             . ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║ .             ║");
            Console.WriteLine("╚═══════════════╝");

            Console.WriteLine("╔═══════════════╗");
            Console.WriteLine("║            .  ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║       .       ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║ .             ║");
            Console.WriteLine("╚═══════════════╝");

            Console.WriteLine("╔═══════════════╗");
            Console.WriteLine("║ .          .  ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║ .          .  ║");
            Console.WriteLine("╚═══════════════╝");

            Console.WriteLine("╔═══════════════╗");
            Console.WriteLine("║ .          .  ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║      .        ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║ .          .  ║");
            Console.WriteLine("╚═══════════════╝");

            Console.WriteLine("╔═══════════════╗");
            Console.WriteLine("║  .   .    .   ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║               ║");
            Console.WriteLine("║  .   .    .   ║");
            Console.WriteLine("╚═══════════════╝");

            Random random = new Random();
            int dobbelsteen = random.Next(1, 6);

            if (dobbelsteen == 1) 
            { Console.WriteLine(dobbelsteen);
                Console.WriteLine("╔═══════════════╗");
                Console.WriteLine("║               ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║       .       ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("╚═══════════════╝");
            }
            else if (dobbelsteen == 2)
            { Console.WriteLine(dobbelsteen);
                Console.WriteLine("╔═══════════════╗");
                Console.WriteLine("║             . ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║ .             ║");
                Console.WriteLine("╚═══════════════╝");
            }

            else if (dobbelsteen == 3)

            { Console.WriteLine(dobbelsteen);
                Console.WriteLine("╔═══════════════╗");
                Console.WriteLine("║            .  ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║       .       ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║ .             ║");
                Console.WriteLine("╚═══════════════╝");
            }

            else if (dobbelsteen == 4)
            { Console.WriteLine(dobbelsteen);
                Console.WriteLine("╔═══════════════╗");
                Console.WriteLine("║ .          .  ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║ .          .  ║");
                Console.WriteLine("╚═══════════════╝");
            }

            else if (dobbelsteen == 5)
            { Console.WriteLine(dobbelsteen);
                Console.WriteLine("╔═══════════════╗");
                Console.WriteLine("║ .          .  ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║      .        ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║ .          .  ║");
                Console.WriteLine("╚═══════════════╝");
            }
            
            else if (dobbelsteen == 6)
            { Console.WriteLine(dobbelsteen);
                Console.WriteLine("╔═══════════════╗");
                Console.WriteLine("║  .   .    .   ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║               ║");
                Console.WriteLine("║  .   .    .   ║");
                Console.WriteLine("╚═══════════════╝");
            }
            Console.WriteLine(dobbelsteen);

           

            



        }
    }
}
