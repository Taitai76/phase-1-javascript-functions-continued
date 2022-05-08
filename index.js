function saturdayFun(x= 'roller-skate'){

    return `This Saturday, I want to ${x}!`;
}
function mondayWork(x='go to the office'){

    return `This Monday, I will ${x}.`;

}
function wrapAdjective(x="*"){
    const innerFunction = function (st="special"){
        return `You are ${x}${st}${x}!`;
    }
    return innerFunction;
}