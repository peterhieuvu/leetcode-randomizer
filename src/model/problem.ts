export enum Difficulty {
    easy, medium, hard,
}

export enum Category {
    cat1, cat2,
}

export interface Problem {
    problemName: string,
    link: string,
    difficulty: Difficulty,
    category: Category,
    key: string | undefined,
}
