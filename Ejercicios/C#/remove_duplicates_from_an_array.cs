/*
Write a function that removes duplicate numbers from an array
*/

int[] RemoveDuplicates(int[] numbers)
{
    HashSet<int> unique = new HashSet<int>(numbers);
    return unique.ToArray();
}
