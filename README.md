[![Build Status](https://travis-ci.org/ajaycheenath/abs.svg?branch=develop)](https://travis-ci.org/ajaycheenath/abs)


## bestdoctorz.com
The idea came in my mind when my friend was diagnosed with terminal cancer. I spent days scanning through dozens of doctor listing websites, but couldn't spot any website which can suggest a good oncologist doctor. Even today, searching for the best specialized doctors on major search engines doesn’t provide reliable answers. This was when I decided to start work on an application that can help patients to find best doctors.



### First Step (2014)

When I started bestdoctorz.com, the mindset was to concentrate more on idea than the technology to solve it.
The first version of bestdoctorz.com was built using old technologies like Java, Spring, JSP, Servlet, Hibernate.

Idea wise it was big hit, but as expected technically it was disaster.

Below are some reasons why it was a failure

1. Heavy Java + tomcat server + deployed first on RedHat OpenShift free cloud server.  That was one suicidal attempt
2. No SPA (single page architecture). Every time page needs reload (Issue with JSP page / Servlet) – poor customers!

Learning - For any web startup the secret mantra would be – spend most of your energy and time on idea validation, customers and NOT on engineering – but I ended up spending most of my time for Compile Java, restart server, server crash
### From OpenShit to AWS
hmm performance improved so much, but ~$60 per month for deployment. Isn't that too much..

### First Pivot (2015)

There was a long product idea laundry list, and the technology was slowing down everything.
The product code base was becoming a monolith and messy, even for a small change, it was taking hell lot of time.

Re-writing everything to new tech stack? huh almost impossible as so much functionality & code already in place

What else can be done? ROAD BLOCKERRRRRRR

Identify most resource hogging feature, pick one by one and decompose them into a NodeJS ( a relatively light weight server)?

That was an awesome idea. I found notification service consumes most of the resources as client call it every X seconds also requires least processing capacity.

#### Tomcat to NodeJS server
Moved notification service to nodejs, and that was cake walk, new technology, everything so simple and awesome

Then doctor, clinic and all other extra details – all moved one by one to nodejs.

Stop using server side rendering as much as possible. Use JavaScript libraries Jquery, Bootstrap for UI rendering.

#### Advantages?

Wow when you decompose features from core, you are free to change deploy your changes anytime without touching the core. Even if you screw something your product is not completely broken..
I could have done this before….

#### Everything look so cool from outside (2016)

With AWS and NodeJS serving details everything looked great on broadband connection. But when I looked into Google Analytics, most of bestdoctorz.com users are low end mobile phone users with poor data connection.

I checked how bad my site render on mobile.. oh no.. pathetic

Have a look [here](https://www.bestdoctorz.com)


#### How to tackle Mobile issues?

1. Mobile first design - in this era first design your product for Mobile users and then tablet and then only desktop/laptop. - Website needs to be responsive (no compromise), load everything asynchronous if possible! (at least the landing page)

2. Think twice before using frameworks - why ? if you want to use boostrap, you got a dependency on JQuery. So that means you need to load both these frameworks to on your user brower. Think on mobile every penny counts!   


### Modules available

* NodeJS (Express) server
* ReactJS (UI rendering)
* Relay (Data Layer)
* GraphQL (backend single endpoint)
* ~~bootstrap~~
* ~~Jquery~~
* Babel (ES6 to ES5 transpilar)
* eslint (write code right)
* MySQL
* ~~SASS~~
* CSS Module
* Webpack
* CUI (common UI components)
* Unit Testing
* Code Coverage

### Running bestdoctoz.com locally

* npm install
* npm run devStart

### Production deployment

* NODE_ENV=production PORT=8080 npm start
