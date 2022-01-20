const test = (questions)=>{
    return questions.forEach(item=>item.usersAnswer = null);
}

test(questions);

questions[0].usersAnswer === null;
