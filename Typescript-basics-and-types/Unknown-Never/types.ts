// Unknown type

let val:unknown;
val=12;
val="MAX";

/*case use to show difference between unknown and any*/
// let name1:string;
// name1 = val;


//Never type
function action():never{
    let i = 0;
    while(true){
        i++;
    }
}

