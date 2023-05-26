// .push();
    /*
        1)
        Decalare an empty array
        Using a for loop add the number 0 - 10 to the array
    */
    let array=[]
    for(let i=0;i<11;i++){
        array.push(i);
    }
    console.log(array);


    /*
        2)
        Add everyone from toBeAdded to the banList array then empty the toBeAdded Array
        !Hint: try looking up: "js how to empty an array"
        */
        let toBeAdded = ["Jomsly", "Henrick", "Darsha"];
        let banList = ["Budly","Gurtrood","dimsly"];
        toBeAdded.push(banList);
        console.log(toBeAdded);
    
    
       //  .pop(); .unshift(); .shift()
       /*
        1) Using only pop(), push(), unshift(), and shift() make weekDays start at monday and end at sunday in the correct order
       */
        let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]

        console.log('ORIGINAL',weekDays)

        weekDays.shift()
        weekDays.unshift('Monday')
       for(let i=0;i<weekDays.length;i++){
        weekDays.pop()
       }
        weekDays.push('Friday')
        weekDays.push('Saturday')
        weekDays.push('Sunday')

        console.log('NEW',weekDays)