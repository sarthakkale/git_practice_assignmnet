let a=13;
let count=0;
for(let i=2;i<=Math.sqrt(a);i++){
    if(a%i==0){
        count++;
    }
}
if(count==0)
console.log("yes");
else
console.log("no");