
#### Version 0.1 (2014)

When I started bestdoctorz.com, the mindset was to concentrate more on idea than the technology to solve it.
The first version of bestdoctorz.com was built using technologies like Java, Spring, JSP, Servlet, Hibernate.

Idea wise it was a big hit, but as expected technically it was disaster.

Below are few reasons why it was a failure

1. Heavy Java + tomcat server app, deployed first on RedHat OpenShift free cloud server.  Oh yea, that was one suicidal attempt
2. No SPA (single page architecture). Every time page needs a reload (Issue with JSP page / Servlet) – poor customers!

Learning - For any web startup the secret mantra would be – spend most of your energy and time on idea validation, customers and NOT on engineering – but I ended up spending most of my time for Compile Java, restart server, managing server crash


#### Version 0.2 (2015)

There was a long product idea laundry list, and the technology was slowing down everything.
The product code base was becoming a monolith and messy, even for a small change, it was taking a lot time.

Re-writing everything to new tech stack? huh almost impossible as so much functionality & code already in place

What else can be done? ROAD BLOCKERRRRRRR

Identify most resource hogging feature, pick one by one and decompose them into a NodeJS ( a relatively light weight server)?

That was an awesome idea. I found notification service consumes most of the resources as client call it every X seconds also requires least processing capacity.

#### Version 0.3 - Tomcat to NodeJS server
Moved notification service to nodejs, and that was cake walk, new technology, everything so simple and awesome

Then doctor, clinic and all other extra details – all moved one by one to nodejs.

Stop using server side rendering as much as possible. Use JavaScript libraries Jquery, Bootstrap for UI rendering.

#### Advantages?

Wow when you decompose features from core, you are free to change deploy your changes anytime without touching the core. Even if you screw something your product is not completely broken..
I could have done this before….


#### Version 0.4 - From OpenShit --> Heroku --> AWS
If you are serious about your idea, opt for a reliable, scalable, available cloud deployment service. I used OpenShit and then Heroku free service to begin with. But how much ever you optimize, as your app grows free servers will start crying.
Remember - if your site traffic is coming (99% thats the usual case) from search engines, make sure your web app is up and running all the time. "If your server is down the time google trying to index your files, trust me google will belt you in search ranking - and consider you lost 6 months of your hard work"
That is when I moved my app to AWS. Thumps up, I dont think I had to restart my tomcat server in sometime. (100% availability)

hmm performance improved so much, but ~$60 per month for deployment. Isn't that too much.. (TODO How to reduce deployment cost?)

#### Everything look so cool from outside (2016)

With AWS and NodeJS serving details everything looked great on 10+ mbps broadband connection. But when I looked into Google Analytics, most of bestdoctorz.com users were low end mobile phone users with poor data connection.

I checked how bad my site render on mobile.. oh no.. pathetic

Have a look [here](http://www.bestdoctorz.com)

Google Developer Tools is an awesome tool to verify your website performance.
Check page loading time when accessed in 2G 150kb/s  
![Alt text](/bds_2g.png?raw=true "Title")

Almost ~7 seconds page was just blank, and thats enough for any user to get frustrated.

#### How to tackle Mobile rendering issues?

1. Mobile first design - in this era first design your product for Mobile users and then tablet and then only desktop/laptop. - Website needs to be responsive (no compromise)

2. Think twice before using frameworks - why ? if you want to use boostrap, you got a dependency on JQuery. So both these js files need to load on user brower. Think on mobile every byte counts!   

3. Load everything asynchronous if possible! (at least the landing page). As I mentioned earlier, users tend to exit from a webpage if the initial page load time is > few seconds (ideally 2 seconds on low end mobile phones, yea I know 2 secs load time requires a lots of engineering and infrastructure)

#### Version 0.5 - Dynamically render content using JavaScript.

That is one great idea. And avoid heavy frameworks whenever possible and write your own light weight javascript.

Drawback - It does the job, but when you write your own framework, if you don't design it well(AMD modular - re-usable, MVC patterns etc), there is a decent chance at some point your code can look really messy, and nightmare to maintain

Have a look at bestdoctorz.com custom JS file [here](http://bestdoctorz.com/js/util.mini.js)  

#### Version 0.6 - React JS, Redux

###### Why React JS?

TODO - React JS can solve most the problems mentioned above. It is also "Declarative", "Component-Based", "Learn Once, Write Anywhere", "Virtual DOM to improve performance" and so on.

https://facebook.github.io/react/

###### Why Redux?
TODO - When you have slightly complex requirements, the state management in reactjs projects go for a toss. It become callback hell for back and forth state management. Redux is an awesome library to handle your state requirements globally without messing your reactjs code.   

http://redux.js.org/


Drawback - Wow ReactJS reduced the page loading time almost half thats around 3.5 seconds. Also development & maintaince became more fun and super easy. But that still not meeting our < 2seonds initial page load time target? What could be wrong?

#### Version 0.7 - Load landing page as fast as possible.

When we bundle all JS resources as one JS bundle, the bundle was getting bigger and bigger in size, and then when we add new features size also will be keep increasing. And if that bundle is also responsible for rendering initial screen, the page load time will be depending on the size of your bundle size.

But this issue is only for the first time page loading, afterwards rendering will be super fast.

###### Is this okay?
Usually this is not a big issue for "returning" users, as they already aware of the your website and okay to wait till the page loads, also decent chance resources might have already cached in their browers and loading files again may not be required.

But this is BIG BIG problem when a new user land on your website, and wait long time for seeing the landing page. Trust me, users get pissed off for this..

###### Possible solution?

How about the landing page is designed very light weight, and all other resources are asynchronously loaded after displaying the landing page? So that user will get to see landing page within 2 seconds which gives a feeling that the site is super fast, and engage the user while we are loading other resources ?

Wow thats an awesome idea.

Have a look [here](http://bestdoctorz.com:8082/) , I am sure you will love it!

Check page loading time when accessed in 2G 150kb/s  
![Alt text](/react_async.png?raw=true "Title")

It takes less than 2 seconds to load initial page, yea you guessed it right, the content loading time depend on the size of the bundle / features which is loaded asynchronously and that can take its own sweet time

#### SASS VS CSS modules
TODO

### Modules available

* NodeJS (Express) server
* ReactJS (UI rendering)
* Redux (Global State management library)
* ~~bootstrap~~
* ~~Jquery~~
* Babel (ES6 to ES5 transpilar)
* eslint (write code right)
* ~~MySQL~~
* ~~SASS~~
* CSS Module
* Webpack
* CUI (common UI components)
* Unit Testing
* Code Coverage

### Running bestdoctoz.com locally

* npm install
* npm start

### Production deployment

* NODE_ENV=production PORT=8080 npm start

