let heathScore = [89,120,103]
let zanScore = [116,94,123]

let hSum=0
let zSum=0

 for(i of heathScore){
     hSum=hSum+i
 }

 for(i of zanScore){
     zSum=zSum+i
 }
 
 let hAvg = hSum/3
 let zAvg= zSum/3
 

 if(hAvg>zAvg){
     console.log(`heath teams win and the average score is ${hAvg}`)
 }
 else{
        console.log(`zan teams win and the average score is ${zAvg}`)
    
 }
  // score changes
   heathScore = [116,94,123]
   zanScore = [90,130,130]
   hSum=0
   zSum=0


  for(i of heathScore){
    hSum=hSum+i
}

for(i of zanScore){
    zSum=zSum+i
}
 hAvg = hSum/3
 zAvg= zSum/3
if(hAvg>zAvg){
    console.log(`heath teams win and the average score is ${hAvg}`)
}
else{
       console.log(`zan teams win and the average score is ${zAvg}`)
   
}
//same score condition

let heathScore1 = [20,20,20]
let zanScore1 = [20,20,20]
hSum=0
zSum=0

for(i of heathScore1){
 hSum=hSum+i
}

for(i of zanScore1){
 zSum=zSum+i
}
hAvg = hSum/3
zAvg= zSum/3
if(hAvg>zAvg){
 console.log(`heath teams win and the average score is ${hAvg}`)
}
else if(zAvg>hAvg){

    console.log(`zan teams win and the average score is ${zAvg}`)
}
else{
    console.log('both teams win there is a draw')
}

// new team 
 heathScore = [89,120,103]
 zanScore = [116,94,123]
 let mariahScore = [97,134,105]
 hSum=0
 zSum=0
 let mSum=0

 for(i of heathScore){
    hSum=hSum+i
}

for(i of zanScore){
    zSum=zSum+i
}
for(i of mariahScore){
    mSum=mSum+i
}
hAvg = hSum/3
zAvg= zSum/3
let mAvg= mSum/3

if(hAvg>zAvg&&hAvg>mAvg){
    console.log(`heath teams win and the average score is ${hAvg}`)
   }
   else if(zAvg>hAvg&&zAvg>hAvg){
   
       console.log(`zan teams win and the average score is ${zAvg}`)
   }
   else{
       console.log(`mirah teams win and the average score is ${mAvg}`)
   }
   