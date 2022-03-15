const items = [100,"iSMael",55,45,"sANyiA",66,"JaMEs","eLAmIn",23,"IsMael",67,19,"ElaMIN",];

function esUnString (item){
    return typeof item === 'string'
}

function soloStrings(array){
    return items.filter(esUnString).map(item => item.toUpperCase() + "!")
}

console.log(soloStrings(items));