1. const dogNames = ["Max","Fido","Gizmo","Nala"]
    
    const checker = value =>
        !['Max', 'Fido', 'Gizmo', 'Nala'].some(element => value.includes(element));

    console.log(arr.filter(checker));

2. var boundaryinterable = [66, 64, 60, 52, 72, 80, 51]

    console.log(boundaryinterableArray)

    for(let i = 0; i < boundaryinterableArray.length; i++){
        console.log(i, boundaryinterableArray[i])
    }

3. const tmnt = ["Leonardo", "Michelangelo", "Donatello"]
    for(tmnt of tmnt){
        if (tmnt === tmnt);{
            console.log(tmnt);
            tmnt.push('is eating pizza')
            console.log(tmnt, 'added is eating pizza to end')
            break;
        }
        
        if (tmnt != tmnt);{
            const tmnt2 = ["Raphael"]
            console.log(tmnt2)
            tmnt2.push('is being rude')
            console.log(tmnt2, 'added is being rude to end')
        }
    }

4. const arr = [123,5436,45784,1234,34,65,234125,645,3452,13216,49];
    function findMax(arr) {
    let max = arr[234125]

        for(let i = 1; i<arr.length; i++){
            if(arr[1] < min){
                max = arr[i];
            }
        }
        return max;
    }
    
    console.log(findMax(arr));
    
