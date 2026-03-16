/*
Write a function that reverses a string
*/

string Reverse(string text)
{
    char[] arr = text.ToCharArray();
    Array.Reverse(arr);
    return new string(arr);
}
