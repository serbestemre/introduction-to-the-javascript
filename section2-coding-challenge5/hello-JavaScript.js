/* 
defining 2 objects john and mark
stores bills prices in an array
calculates the tips according to person
stores total paid amounts in an array
calculates the average of each person average paid tips
compare those averages and prints the result
*/

var john = {
    name:'John\'s family',
    bills: [124, 48, 268, 180, 42],
    allThePaidTips:[],
    totalPaidAmount:[],
    tipsCalculator:function(){
    
    for(var i = 0; i<this.bills.length;i++){
    
    if(this.bills[i]<50){
    tips=this.bills[i]*0.2;
    this.allThePaidTips.push(tips);
    
    totalPrice=tips+this.bills[i];
    this.totalPaidAmount.push(totalPrice);
        
}else if(this.bills[i]>=50 && this.bills[i]< 200){
    tips=this.bills[i]*0.15;
    this.allThePaidTips.push(tips);
    totalPrice=tips+this.bills[i];
    this.totalPaidAmount.push(totalPrice);
}else if(this.bills[i]>=200){
    tips=this.bills[i]*0.1;
    this.allThePaidTips.push(tips);
    totalPrice=tips+this.bills[i];
    this.totalPaidAmount.push(totalPrice);
}else{
    console.log('Wrong ATTEMPT!');
}
}//loop end
    
    }//function end
}//object end

var mark = {
    name:'Mark\'s family',
    bills: [77, 475, 110, 45],
    allThePaidTips:[],
    totalPaidAmount:[],
    tipsCalculator:function(){
    var bills=this.bills;
    console.log('typeof bills = ' + typeof bills);
    for(var i = 0; i<bills.length;i++){

    if(bills[i]<100){
    tips=bills[i]*0.2;
    this.allThePaidTips.push(tips);
    totalPrice=tips+bills[i];
    this.totalPaidAmount.push(totalPrice);
}else if(bills[i]>=100 && bills[i]< 300){
    tips=bills[i]*0.1;
    this.allThePaidTips.push(tips);
    totalPrice=tips+bills[i];
    this.totalPaidAmount.push(totalPrice);
}else if(bills[i]>=300){
    tips=bills[i]*0.25;
    this.allThePaidTips.push(tips);
    totalPrice=tips+bills[i];
    this.totalPaidAmount.push(totalPrice);
}else{
    console.log('Wrong ATTEMPT!')
}
}//loop end
    
    }//function end
}//object end

function averagePaidTips(tipsArray){
    var totalTips = 0;
    for(var i = 0; i<tipsArray.length;i++){
        console.log('Döngü');
    totalTips=totalTips + tipsArray[i];    
    }
    var avgoftips = totalTips/tipsArray.length;
    return avgoftips;
}

john.tipsCalculator();
mark.tipsCalculator();

console.log(john);
console.log(mark);

avgTipsForJohnsFamily=averagePaidTips(john.allThePaidTips);
avgTipsForMarksFamily=averagePaidTips(mark.allThePaidTips);

if(avgTipsForJohnsFamily>avgTipsForMarksFamily){
    console.log('John Smiths family pays higher tips, with an average of '+ avgTipsForJohnsFamily);
}else{
    console.log('Marks\'s Family pays higher tips, with an average of '+ avgTipsForMarksFamily);            
    }