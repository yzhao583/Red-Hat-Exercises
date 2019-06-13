# Open Ended Questions & Answers

On this page, all questions and answers are shown.

## Section 1 - Design & Development

### Q1 Could you outline what you would consider to be the important considerations If you were asked to develop a web application that could potentially be used by thousands of users?

* Something need to be considered ahead.
    * What is the main functionality of the application?
    * What tool sets or frameworks should I use so the developers can cooperate easily?
    * Is the tool sets or frameworks has greate ecosystem or community, so I can get support easily?
    * What is the design pattern should I choose? MVC? MVVM?
* Security: information should not be leaked in any case.
    * A proper authentication module should be set.
    * A proper permission control module should be set, so different users can see different information.
    * Even users bypass the front-end and call APIs directly, the information should be controled properly.
    * Data need to be encrypt in transit.
* Performance: The application needs to perform perfectly and logically in order to attract and keep consumers.
    * The Application needs to be responsive.
    * Respond time to user actions should be less than 50ms.
    * FPS should be greater than 60.
    * Maximize idle time to increase the odds that the page responds to user input within 50ms.
    * Deliver content and become interactive in under 5 seconds
* Efficiency: Make the most efficient use of resources.
    * Always optimize the use of memory.
    * Event-driven and distributed architectures can significantly increase efficiency.
* Reliability: The application should be robust enough to against hardware, software, network crashes.
    * Proper cache should be set to temporarily store information to against crashes.

### Q2 What techniques do you employ to keep up-to-date with the rapid pace of progress in the field frontend development? How do you choose which technologies are worth taking the time to learn more about?

* Answer for question 1
    * Learn from the offical tutorial, it is always a good resource.
    * Learn from online platforms, for example Udemy, Github, StackOverflow, etc.
    * Follow Google and Facebook, they always publish interesting and advanced stuff. For example, Google I/O 2019.
    * Build small projects to try new things.
* Answer for question 2
    * Big Companies always publish new things to tell you the trend, I follow it.
    * Github, StackOverflow, NPM always publish analytical reports to tell you the trend, I follow it.
    * When I find new and interesting stuff, I try it by building small projects. If it is suck, I through it away... 

## Section 2 - Deployment

### Q1 Describe the approach you take in testing your applications.

* Unit test for sure. Use test cases to test each of the functions in my code.
* Integration test as well. Integrate front-end and back-end to check the features.
* Compatibility test is important. Use some automated test tools like nightwatch, browserStack to make sure the application is      compatible with different browsers,and responsive.
* Security test, make sure users cannot bypass login, or jump into pages by directly change URL, etc.
* Load test, create big amount of fake data, and make sure the application can still work well. For example, render 100k rows of list in a page may cause your browser crash. We have to avoid this.


### Q2 What do you value in a code base?

* Architecture for sure.
    * Design pattern has to be properly chosen, modules have to be logically seperated and structured.
    * Components should have great reusability and extendibility.
* Structure of the code is significant.
    * Files should be properly put into different folders, so it is easy to find the code.
    * Functions should be properly seperated, so it is easy to test and reuse. 
* Readbility is important.
    * Some developers are proud of the complexity of their code, but I value the readbility. If other developers cannot understand your code, why should it exist....
    * Clearly comments of the code is a must, it can save others lots of time.
    * A proper naming convention pattern has to followed, so the varibles or functions can be meaningful, and they can be easier to be understood.
* A README is very necessary so others know what they can do.


## Section 3 - General

### Q1 What do you find most exciting or interesting about working in the software development field?

* The way of thinking
    Working in the software development field changes my way of thinking a lot. To make myself a great developer, I have to think more and more logically, and I have to always think about how to optimise things. I have to be detail-oriented, and always think about how to do things more and more efficient. I have to keep myself updated, and always be patient enough. As a result, I feel like I am becoming better and better, which is very exciting.

### Q2 In your career to date, what are you most proud of and why?

* I always keep learning
    As a engineer, I have to keep myself up-to-date, I have to learn new tecnologies everyday. For example, I learnt to write javascript code and test them, and then I found new tecnologies like Angular or React can do the same thing but more efficient, and then I figured out that Angular or React are just the tools, which is not very important, and what really matters is the thoughs you design your applications. After that, I found that the AI can create web pages themself, then I became more interested in AI...All in all, technologies changes the world so much, and I am learning them everyday.
