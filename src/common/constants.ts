import neetcode150 from './data/neetcode150.json';
import neetcoderaw from './data/neetcoderaw.json';
import { Problem } from '../model/problem';
import { NeetcodeProblem } from '../model/neetcodeproblem';

const NEETCODE_RAW = (neetcoderaw as any as NeetcodeProblem[]).map(entry => {
    entry.key = entry.problem; 
    return entry;
})

// TODO: change this to fetch from public
export const PROBLEM_DATA = {
    neetcode150: (neetcode150 as any as Problem[]).map(entry => {
        entry.key = entry.problemName; 
        return entry;
    }),
    neetcoderaw: NEETCODE_RAW,
    blind75: NEETCODE_RAW.filter(problem => problem.blind75)
}
