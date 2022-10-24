1. It will print 3, because i is var type, we can access to it outside the for loop; since i=3 when the loop terminates, the last i will be 3.
2. It will print 150. Since discountedPrice is var type, we can access to it outside the for loop; since the last discountedPrice is 150, we will print out 150.
3. It will print 150. Since finalPrice is updated inside the for loop, and when the for loop terminates it takes the value of 150, its value will be 150 outside of the for loop.
4. It will return discounted array with value [50,100,150], since the content of discounted array is updated in the for loop inside the function.
5. There will be an error: ReferenceError: i is not defined. This is because i is type let, and its scope is only in for loop, where it's defined.
6. There will be an error: ReferenceError: discountedPrice is not defined. This is because discountedPrice is let type,and its type is only inside for loop.
7. It will print 150. Since finalPrice and the command to access this variable is in the same scope, and this variable's value is updated in the for loop, finalPrice will take the last value updated in for loop. 
8. It will return discounted array with value [50,100,150], since the content of discounted array is updated in the for loop inside the function.
9. There will be an error: ReferenceError: i is not defined. This is because i is type let, and its scope is only in for loop, where it's defined.
10. It will print length of prices array, which is 3. That's because variable "length" and the command to access it are in the same scope. 
11. It will return discounted array with value [50,100,150]. Although the type of this array is const, we can still manipulate it, and three values are pushed into the array with the function call. 
12. A. student.name B. student["Grad year"] C. student.greeting.call() D. student["Favorate Teacher"].name E.student.courseLoad[0]
13. A.'32' 2 is mapped to its string.
    B. 1  Since '3' is mapped to its integer.
    C. 3 Since null is mapped to 0.
    D. '3null' Since null is mapped to its string representation.
    E. 4 Since true is mapped to 1.
    F. 0 Since both false and null are mapped to 0.
    G. '3undefined' Since undefined is converted to its string representation.
    H. NaN Since we cannot convert undefined to 0, so it's converted to NaN.


14. A. true Since '2' is mapped to integer 2
    B. false Since '2' is bigger than '12' when they are mapped to their string representatian. 
    C. true Since '2' is converted to integer 2
    D. false Since '===' compares both value and datatypes.
    E. false Since true is converted to integer 1.
    F. true Since both operands are boolean type, and they are both true. 
    
15. '==' is used when you only compare the value but not the type, since it will return true when the values are the same but types are different; '===' is used when you want to compare both value and type. It returns true only when both values and datatypes of both operends are the same. 

17. It will return the array [2,4,6]. Here we are passing the function doSomething as a parameter, multiplying every element in array parameter before pushing them into the newArr.