const stringArray = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO',
    'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];


function groupString(stringArray){
    let groupArray = [];
    for(var i =0;i < stringArray.length;i++){
        let splitString = stringArray[i].split("");
        console.log("character array",splitString);
        let localText = stringArray[i];
        let check = groupArray.filter((group)=> group.includes(localText));
        console.log("check",check);
        if(check.length == 0){
            for (var j =stringArray.length -i-1; j>0;j--){
                let matchArray = splitString.filter((char)=> stringArray[j].includes(char));
                if(matchArray.length == splitString.length){
                    localText += "-"+stringArray[j]
                }
                
              }
        }
        
        if(localText!== stringArray[i]){
            groupArray.push(localText); 
        }
          
       
       
       }
    return groupArray;   
}

console.log("group",groupString(stringArray));

  