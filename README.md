# calculator
A calculator project to showcase JS / HTML / CSS foundations

# initial approach
In terms of the actual calculations, my initial approach involved storing clicked numbers in an empty array called `currentNum`. Then everytime an operator is clicked, I would then store the operator in an `operator` array and also trigger the appropriate calculation to be done based on the operator clicked. The result of this calculation would then be stored in an array called `total`. I also implemented a function whenever `enter` was hit to use the current `total` and `currentNum` to output the final total based on the operator in the array. 

I thought I had got this working perfectly until I performed calculations in a row that weren't being output correctly. After reminiscing for a bit, I realized that the way I had implemented my calculating functions were essentially using the most recent operator, but that meant I was skipping already inputted operators. 

Example: 3 + 11 - 12
1) type in 3 = currentNum
2) hit + (operator[0]), total = 3
3) type in 11 = currentNum
4) hit - (operator[1]), total = -8 when it should be 12

# final approach
I essentially used the same concept as my original approach, but started utilizing the 2nd to last operator in the operator array to perform the correct calculations. I also switched some of my if / then statements into switch statements as well. 
