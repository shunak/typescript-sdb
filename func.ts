//function add(a: number, b: number): number{
//    return a + b;
//}
//
//
//option
//function add(a: number, b?: number): number{
//    if(b){
//        return a+b;
//    }else{
//        return a+a;
//    }
//}
////default arg
function add(a: number, b: number=10): number{
        return a+b;
}





console.log(add(5,6));
console.log(add(5));

