import { createContext } from 'react';

export type quizI = {
    gamestate : string;
    setGamestate : (c: string) => void;
    score: number;
    setscore:(c: number) => void;

}
export const QuizContext = createContext <quizI>({
        gamestate:"welcome",
        setGamestate: () => {},
        score: 0,
        setscore:() => {}
});