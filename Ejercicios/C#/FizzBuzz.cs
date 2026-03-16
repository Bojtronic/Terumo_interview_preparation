/*
Print numbers from 1 to 100.

If divisible by 3 → print Fizz

If divisible by 5 → print Buzz

If divisible by both → print FizzBuzz
*/

for (int i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
        Console.WriteLine("FizzBuzz");
    else if (i % 3 == 0)
        Console.WriteLine("Fizz");
    else if (i % 5 == 0)
        Console.WriteLine("Buzz");
    else
        Console.WriteLine(i);
}

