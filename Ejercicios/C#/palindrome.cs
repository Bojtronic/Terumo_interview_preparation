/*
Write a function that determines if a string is a palindrome

A palindrome is a word that reads the same forward and backward
*/

bool IsPalindrome(string text)
{
    text = text.ToLower();

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

