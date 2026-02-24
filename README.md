
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> To get a Specific IDName, we use the getElementByID() method in JavaScript. Again, to get a class defind with the some name in JavaScript,we can use the getElementsByClassName() method. With the help of this method, multiple classes can be found. The querySelector() method returns the first element that matches the CSS selector. And the querySelectorAll() method returns all the classes and IDs that match the CSS selector.
Example: querySelectorAll('.className','#IdName');




### 2. How do you create and insert a new element into the DOM?
=> If we want to create a new element in the DOM, we will use the createElement() method, and if we want to insert any data or element into that element, we can use the innerHTML or innerText method depending on the created element.



### 3. What is Event Bubbling? And how does it work?
=> Event Bubbling is when we click on a button, it doesn't just stop at that button but gradually goes to its parent and consoles it in the browser. It starts from the target element and continues to the html document.



### 4. What is Event Delegation in JavaScript? Why is it useful?
=> Event Delegation is a method by which the element we click on will be deleted. There are 3 main reasons for using it: 
(i) It works dynamically, 
(ii) it has good performance, for example, instead of setting 100 addEventListeners for 100 elements, the work can be done by delegation.
(iii) the code can be kept clean.




### 5. What is the difference between preventDefault() and stopPropagation() methods?
=> The preventDefault() method prevents the website from using its default behavior, meaning that when this method is used, the browser cannot do what it normally would.
The stopPropagation() method basically works on event bubbling, meaning that if you use stopPropagation, the event cannot go towards the parent by bubbling.
The main difference between these two methods, preventDefault() and stopPropagation(), is that preventDefault() stops the browser while stopPropagation() stops event bubbling.

