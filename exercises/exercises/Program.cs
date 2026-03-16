using System;

class Program
{
    static void Main()
    {
        int option = -1;

        while (option != 0)
        {
            Console.WriteLine("\n===== ALGORITHM PRACTICE MENU =====");
            Console.WriteLine("1 - Count words in a sentence");
            Console.WriteLine("2 - Find largest number in array");
            Console.WriteLine("3 - FizzBuzz");
            Console.WriteLine("4 - Check palindrome");
            Console.WriteLine("5 - Remove duplicates from array");
            Console.WriteLine("6 - Reverse a string");
            Console.WriteLine("0 - Exit");

            Console.Write("Select option: ");
            option = int.Parse(Console.ReadLine());

            switch (option)
            {
                case 1:
                    RunCountWords();
                    break;

                case 2:
                    RunFindMax();
                    break;

                case 3:
                    RunFizzBuzz();
                    break;

                case 4:
                    RunPalindrome();
                    break;

                case 5:
                    RunRemoveDuplicates();
                    break;

                case 6:
                    RunReverse();
                    break;

                case 0:
                    Console.WriteLine("Goodbye!");
                    break;

                default:
                    Console.WriteLine("Invalid option");
                    break;
            }
        }
    }

    /*
    Write a function that counts the number of words in a sentence
    */

    static void RunCountWords()
    {
        Console.WriteLine("\nEnter a sentence:");
        string sentence = Console.ReadLine();

        int count = CountWords(sentence);

        Console.WriteLine("Number of words: " + count);
    }

    static int CountWords(string sentence)
    {
        if (sentence == null || sentence.Length == 0)
            return 0;

        int words = 0;
        bool insideWord = false;

        for (int i = 0; i < sentence.Length; i++)
        {
            char c = sentence[i];

            if (c != ' ')
            {
                if (!insideWord)
                {
                    words++;
                    insideWord = true;
                }
            }
            else
            {
                insideWord = false;
            }
        }

        return words;
    }

    /*
    Write a function that returns the largest number in an array
    */

    static void RunFindMax()
    {
        int[] numbers = { 3, 7, 2, 9, 5, 1 };

        int max = FindMax(numbers);

        Console.WriteLine("\nArray:");
        PrintArray(numbers);

        Console.WriteLine("Largest number: " + max);
    }

    static int FindMax(int[] numbers)
    {
        int max = numbers[0];

        for (int i = 1; i < numbers.Length; i++)
        {
            if (numbers[i] > max)
            {
                max = numbers[i];
            }
        }

        return max;
    }

    /*
    Print numbers from 1 to 100

    If divisible by 3 → Fizz
    If divisible by 5 → Buzz
    If divisible by both → FizzBuzz
    */

    static void RunFizzBuzz()
    {
        Console.WriteLine();

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
    }

    /*
    Write a function that determines if a string is a palindrome
    A palindrome reads the same forward and backward
    */

    static void RunPalindrome()
    {
        Console.WriteLine("\nEnter a word:");
        string text = Console.ReadLine();

        bool result = IsPalindrome(text);

        if (result)
            Console.WriteLine("It is a palindrome");
        else
            Console.WriteLine("It is NOT a palindrome");
    }

    static bool IsPalindrome(string text)
    {
        int left = 0;
        int right = text.Length - 1;

        while (left < right)
        {
            if (text[left] != text[right])
                return false;

            left++;
            right--;
        }

        return true;
    }

    /*
    Write a function that removes duplicate numbers from an array
    */

    static void RunRemoveDuplicates()
    {
        int[] numbers = { 1, 2, 2, 3, 4, 4, 5 };

        Console.WriteLine("\nOriginal array:");
        PrintArray(numbers);

        int[] unique = RemoveDuplicates(numbers);

        Console.WriteLine("Array without duplicates:");
        PrintArray(unique);
    }

    static int[] RemoveDuplicates(int[] numbers)
    {
        int[] temp = new int[numbers.Length];
        int count = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            bool exists = false;

            for (int j = 0; j < count; j++)
            {
                if (numbers[i] == temp[j])
                {
                    exists = true;
                    break;
                }
            }

            if (!exists)
            {
                temp[count] = numbers[i];
                count++;
            }
        }

        int[] result = new int[count];

        for (int i = 0; i < count; i++)
        {
            result[i] = temp[i];
        }

        return result;
    }

    /*
    Write a function that reverses a string
    */

    static void RunReverse()
    {
        Console.WriteLine("\nEnter text:");
        string text = Console.ReadLine();

        string reversed = Reverse(text);

        Console.WriteLine("Reversed: " + reversed);
    }

    static string Reverse(string text)
    {
        char[] result = new char[text.Length];

        int index = 0;

        for (int i = text.Length - 1; i >= 0; i--)
        {
            result[index] = text[i];
            index++;
        }

        return new string(result);
    }

    static void PrintArray(int[] arr)
    {
        for (int i = 0; i < arr.Length; i++)
        {
            Console.Write(arr[i] + " ");
        }

        Console.WriteLine();
    }
}