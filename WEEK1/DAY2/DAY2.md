DAY 2 — NODE CLI APP + CONCURRENCY + LARGE DATA PROCESSING

1. Generate a corpus text file with 200,000+ words (random lorem or internet scrape)
    Using /usr/share/dict/words (Linux Dictionary File)
    Most Linux distributions have a file called /usr/share/dict/words that contains a list of words. You can use this file to generate a random text corpus with 200,000+ words.

    If dictionary dosent exists install it using the command 
        sudo apt-get install wamerican

    Now generate the file using the command:
        shuf -n 200000 /usr/share/dict/words > corpus.txt
        (
            shuf: A command that shuffles lines randomly.
            -n 200000: Select 200,000 random lines (words) from the dictionary.
            /usr/share/dict/words: Path to the dictionary file containing words.
            > corpus.txt: Redirects the output to a file called corpus.txt
        )

    ![alt text](image.png)