let a=2;
if(a%2==0)
{
    console.log("even");
}
else{
    console.log("output");
}


//garding system .....
let a=prompt("Enter marks");
a=parseInt(a);

if(a<=100 && a>90)
{
    console.log("O grade");
}
else if(a<=90 && a>70)
{
    console.log(" A+ grade");
}
else if(a<=70 && a>60)
{
    console.log(" A grade");
}
else if(a<=60 && a>=50)
{
    console.log(" B grade");
}
else{
    console.log("fail");
}

