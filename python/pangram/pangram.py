import string

def is_pangram(sentence):
    letters = list(string.ascii_lowercase)
    sentence = sentence.lower()
    sentence = list(sentence)
    lettersPresent = []
    
    for i in letters:
        if i in sentence:
            lettersPresent.append(i)
            
    
    if lettersPresent == letters:
        result = True
    else:
        result = False


    return result

sentence = "The quick brown fox jumps over the lazy dog"
print(is_pangram(sentence))

sentence = "five boxing wizards jump quickly at it"
print(is_pangram(sentence))

sentence = "h"
print(is_pangram(sentence))



