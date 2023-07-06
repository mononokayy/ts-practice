import { MatchResult } from "./MatchResult";

// We create a tuple to define the return value of read()
export type MatchData = [
    Date, 
    string, 
    string, 
    number, 
    number, 
    MatchResult, 
    string
];