import wordsArr from "../assets/words";
import { useState, useEffect } from "react";
import ArticleBtn from "../components/ArticleBtn";
import "./Play.css"

function Play({setTries, setCorrectAnswers}) {
    const [words, setWords] = useState(wordsArr);
    const [article, setArticle] = useState("");
    const [isCorrect, setCorrect] = useState(Boolean);
    const [isClicked, setIsClicked] = useState("");
    const [randomWord, setRandomWord] = useState<{
        word: string;
        article: string;
    } | null>(null);

    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random()*words.length);
        setRandomWord(words[randomIndex]);
    };

    useEffect(() => {
        getRandomWord()
    }, []);

    
    const handleSubmit = (article: string) => {
        setArticle(article);
        setIsClicked(article);
        setTries((prevTries: number) => prevTries + 1);


        if(randomWord?.article === article) {
            setCorrect(true);
            setCorrectAnswers((prevCorrectAnswers: number) => prevCorrectAnswers + 1);
        } else {
            setCorrect(false);
        }

        setTimeout(() => {
            setIsClicked("");
            setCorrect(false);
            const index = words.findIndex((wordObj) => wordObj.word === randomWord?.word);
            if (index !== -1) {
                const newWords = [...words];
                newWords.splice(index, 1);
                setWords(newWords);
      }
            getRandomWord();
    }, 500);
    }

    return ( 
    <>
    <h1>{randomWord?.word}</h1>
    <div className="btns-container">
        <ArticleBtn
        handleClick={handleSubmit} 
        btnArticle={"der"} 
        isCorrect={isCorrect}
        isClicked={isClicked}
        />
        <ArticleBtn
        handleClick={handleSubmit} 
        btnArticle={"die"} 
        isCorrect={isCorrect}
        isClicked={isClicked}
        />
        <ArticleBtn
        handleClick={handleSubmit} 
        btnArticle={"das"} 
        isCorrect={isCorrect}
        isClicked={isClicked}
        /> 
    </div>
    </>
    );
}

export default Play;