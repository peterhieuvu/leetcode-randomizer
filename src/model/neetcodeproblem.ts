export enum Difficulty {
    Easy, Medium, Hard,
}

export interface NeetcodeProblem {
    blind75: string,
    pattern: string,
    problem: string,
    link: string,
    videoSolution: string,
    difficulty: Difficulty,
    python: string,
    java: string,
    cpp: string,
    javascript: string,
    key: string | undefined,
}
