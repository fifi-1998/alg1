BEGIN CHEKPOINT_ALGO
VAR
    nbreOfVowels, nbreOfWords, sentenceLength, i :=0;
    sentence : STRING;
BEGIN
    REPEAT
        Write("Enter a valid sentence that ends with a point")
        Read(sentence)

    UNTIL (sentence = "")
    WHILE ( sentence[i] <> "." ) DO
    sentenceLength = sentenceLength + 1;
    IF (
        sentence[i]="a" OR sentence[i]="A" OR sentence[i]="e" OR sentence[i]="E" OR sentence[i]="y" OR sentence[i]="Y" OR sentence[i]="u" OR sentence[i]="U" OR sentence[i]="i" OR sentence[i]="I" OR sentence[i]="o" OR sentence[i]="O" 
    ) THEN
        nbreOfVowels = nbreOfVowels +1;
    ELSE_IF (sentence[i]= " ") THEN
        nbreOfWords = nbreOfWords +1;
    END_IF
    i = i + 1;
    END_WHILE
    sentenceLength = sentenceLength + 1;
    IF (sentence[i-1] <> " ") THEN
        nbreOfWords = nbreOfWords +1
    END_IF
    Write("Nombre of vowels" , nbreOfVowels)
    Write("Nombre of words" , nbreOfWords)
    Write("Length of the sentence" , sentenceLength)
END

