/*
Write a function that returns the largest number in an array
*/

int FindMax(int[] numbers)
{
    int max = numbers[0];

    foreach (int num in numbers)
    {
        if (num > max)
        {
            max = num;
        }
    }

    return max;
}
