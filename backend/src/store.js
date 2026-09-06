import { randomUUID } from 'node:crypto';
import { questionDeck, categories } from './questions.js';
export const games = new Map();
export const id = () => randomUUID();
export const code = () => Math.random().toString(36).slice(2,8).toUpperCase();
export function answerOptions(question, team, nickname) {
  if (question.answerType === 'YES_NO') return [{value:'YES',label:'Oui'},{value:'NO',label:'Non'}];
  const other = team.members.find(member => member.toLowerCase() !== nickname.toLowerCase());
  const values = [{value:nickname,label:'Moi'},{value:other,label:'Toi'}];
  if (question.answerType === 'PARTNER_OR_BOTH') values.push({value:'BOTH',label:'Nous deux'});
  return values;
}
export function publicGame(game) {
  return {code:game.code,name:game.name,status:game.status,teams:game.teams,
    currentQuestion:game.currentQuestion ? {...game.currentQuestion,answers:undefined,scoredTeams:undefined}:null,
    questionNumber:game.questionNumber,totalQuestions:game.questions.length,categories,
    ranking:[...game.teams].sort((a,b)=>b.score-a.score || b.matches-a.matches || a.name.localeCompare(b.name,'fr'))};
}
export function createGame(name){let gameCode;do gameCode=code();while(games.has(gameCode));
 const game={code:gameCode,name:name?.trim()||'Quiz Couple',status:'WAITING',teams:[],questions:[...questionDeck],questionNumber:0,currentQuestion:null};games.set(gameCode,game);return game;}
