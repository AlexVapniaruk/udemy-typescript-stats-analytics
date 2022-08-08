import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
const reader = new MatchReader('football.csv');
reader.read();

let matUnitedWins = 0;

for(let match of reader.data) {
    if(match[1] == 'Man United' && match[5] === MatchResult.HomeWin) {
        matUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        matUnitedWins++;
    }
}

console.log(`Man United won ${matUnitedWins} games`);