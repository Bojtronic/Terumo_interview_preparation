/*
Write a function that counts the number of words in a sentence
*/

int CountWords(string sentence)
{
    if (string.IsNullOrWhiteSpace(sentence))
        return 0;

    string[] words = sentence.Split(' ');
    return words.Length;
}
