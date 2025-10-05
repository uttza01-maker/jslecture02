let score = 20

if(score >= 80){ // 50 >= 80 (False)
    console.log ('A')
} else if (score >= 70){ // 50 >= 70 (False)
    console.log('B')
} else if (score >= 60){ // 50 >= 60 (False)
    console.log('C')
} else if (score >= 50){ // 50 >= 50 (True)
    console.log('D') // This would be the output: 'D'
} else if (score >= 40){ 
    console.log('F')
}