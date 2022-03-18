function datetoday(day, month, year1, year2)
{
    if(month == 1){                    //zellers rule-consider january and february months as month 11 and 12. Consider month 1 as march and so on .
        year2 = year2-1
        month = 11
    }
    else if(month == 2){
        year2 = year2-1                // If the months in the input are jan and feb subtract one from the year.
        month = 12
    }
    else if(month == 3){
       month = 1
    }
    else if(month == 4){
        month = 2
    }
    else if(month == 5){
        month = 3
    }
    else if(month == 6){
        month = 4
    }
    else if(month == 7){
        month = 5
    }
    else if(month == 8){
        month = 6
    }
    else if(month == 9){
        month = 7
    }
    else if(month == 10){
        month = 8
    }
    else if(month == 11){
        month = 9
    }
    else if(month == 12){
        month = 10
    }
    const F = day + (((13*month)-1)/5) + year2 + (year2/4) +(year1/4) - (2*year1)  //Using this formula, we get F where divided by 7 gets a number
    const F1 = Math.floor(F)
    const ans = F1 % 7
    var res=""
    switch(ans)       //if the number is 0 it is sunday,1 as monday ans so on 
    {
        case 0:
            res = "Sunday"
            break
        case 1:
            res = "Monday"
            break
        case 2:
            res = "Tuesday"
            break
        case 3:
            res = "Wednesday"
            break
        case 4:
            res = "Thursday"
            break
        case 5:
            res = "Friday"
            break
        default:
            res = "Saturday"
            break
    }
    return res
}
console.log(datetoday(9,2,20,22))
console.log(datetoday(8,1,20,22))
console.log(datetoday(14,3,20,22))
console.log(datetoday(24,1,20,22))