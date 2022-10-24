1. It will print 3, because i is var type, we can access to it outside the for loop; since i=3 when the loop terminates, the last i will be 3.
2. It will print 150. Since discountedPrice is var type, we can access to it outside the for loop; since the last discountedPrice is 150, we will print out 150.
3. It will print 150. Since finalPrice is updated inside the for loop, and when the for loop terminates it takes the value of 150, its value will be 150 outside of the for loop.
4. It will return discounted array with value [50,100,150], since the content of discounted array is updated in the for loop inside the function.
5. There will be an error: ReferenceError: i is not defined. This is because i is type let, and its scope is only in for loop, where it's defined.
6. There will be an error: ReferenceError: discountedPrice is not defined. This is because discountedPrice is let type,and its type is only inside for loop.
7. It will print 150. Since finalPrice and the command to access this variable is in the same scope, and this variable's value is updated in the for loop, finalPrice will take the last value updated in for loop. 
8. It will return discounted array with value [50,100,150], since the content of discounted array is updated in the for loop inside the function.