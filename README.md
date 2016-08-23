# Nodebeats
![alt tag](https://raw.githubusercontent.com/ShrawanLakhe/heroku_deploy_button_test/master/homepage_m0guov.png)

###### Nodebeats is an Open source Content Management System built using MEAN framework.

**Nodebeats** makes it easy to create web sites and applications and comes with beautiful admin UI.

Check out the [**Nodebeats Getting Started Guide**](http://nodebeats.herokuapp.com/doc) to start using Nodebeats

## About
**Nodebeats** provides following features:
* Two factor authentication
* Token based authentication
* Real time Google Analytics data
* Host of options for email service providers like [**Mailgun**](https://www.mailgun.com/), [**Postmark**](https://postmarkapp.com/), [**Sendgrid**](https://sendgrid.com/), [**Mandrill**](https://www.mandrill.com/), [**Google SMTP**](https://mail.google.com) etc.
* Integration with [**Cloudinary**](http://cloudinary.com/) for Image management
* Commenting system using Disqus
* And many more features that you will love to have around.



## Usage

For detailed usage documentation, Check out the [**Nodebeats Getting Started Guide**](http://nodebeats.herokuapp.com/docs) to start using Nodebeats

For api documentation, Check out the  [**API Documentation**](http://nodebeats.herokuapp.com/apidoc/)

**Installation**
* Install Node.js and MongoDB if not already installed

    * Recommended Node version: v5.10.1
    * Recommended MongoDB shell version: 3.2.9

* Clone the project repository

    * git clone https://github.com/ShrawanLakhe/heroku_deploy_button_test.git
    * cd heroku_deploy_button_test


* Install gulp, webpack and webpack dev server

    * npm install gulp webpack webpack-dev-server -g


* Go to the cloned project's root directory and run the following command to install required depenencies:

    * npm install

* If you have changed code and rebuid everything, then run the following commands

    * webpack -p
    * webpack --config webpack-client.config.js
    * gulp service-worker


* Edit the database configuration file in **/lib/configs/database.config.js** and enter the appropriate MongoDB credentials.

```
production: {
    username: '',
    password: '',
    host: '',
    port: '',
    dbName: ''
},
```

Once this is done, you are ready to start the application.

* Run the server
    * npm start
    * gulp if you are on local machine

* Browse [**http://localhost:3000**](http://localhost:3000/) if you are in local machine.

## Community
"**Knowledge is power, Community is strength and positive attitude is everything**" by **Lance Armstrong**.

"**Alone We can do so little, Together we can do so much**" by **Hellen Keller**.

The above quotes shows us that how much the community is important to us. We also want to create a community that is friendly, engaging and most of all where everybody helps each other.

So to get involved, following are the ways that will connect us:
* Chat with us at [**gitter.im**](https://gitter.im/nodebeats/nodebeats)
* Follow  [**@Nodebeats**](https://twitter.com/shrawanlakhe) for news and announcements
* Regarding existing product features and new features, do give us your feedbacks and suggestiosn at   [**ProductPains**](https://productpains.com/user/nodebeats)
* Ask any technical question regarding Nodebeats at [**Stackoverflow**](http://stackoverflow.com/questions/tagged/nodebeats) and tagged them **nodebeats**
* Report the issues at our github repo's [**issue**](https://github.com/ShrawanLakhe/heroku_deploy_button_test/issues) tracker page


So do send us your feedbacks and suggestions. You can also email us at **nodebeats@gmail.com**

## Maintainers

[**Shrawan Lakhe**](https://np.linkedin.com/in/shrawanlakhe)

[**Sandeep Ranjitkar**](https://np.linkedin.com/in/sandeepranjit)


## Contributing

We aim to make this software upto date, secured and at the same time provide more features. So, We need your help to make this possible. You can contribute to this project by reporting issues, discussing ideas and submitting pull requests with patches and new features.

If you can make some donations, then that will be great.

## Sponsors

No sponsors yet! Will you be the first?

## Deploying Nodebeats


You can host your website built using Nodebeats in any of the available hosting providers. Some of the most popular cloud computing platforms are [**Redhat Openshift**](https://www.openshift.com/), [**Heroku**](https://www.heroku.com/), [**DigitalOcean**](https://www.digitalocean.com/) and [**Modulus.io**](https://modulus.io/)

Or, you can use the following button to directly deploy the application to the Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ShrawanLakhe/heroku_deploy_button_test/tree/master)

## Staying Up to Date

We will be adding new features regularly and also keep the project's npm dependencies upto date so that there will not be any security vulnerabilities due to the npm packages. We will release the next version as soon as the planned features are completed. We aim to make this software as secured as possible and announce the new version releases on our twitter account. So, to get the information about the latest releases, follow us on Twitter [**@Nodebeats**](https://twitter.com/ShrawanLakhe). You can also contact us at **nodebeats@gmail.com** regarding anything about the software.


## License


MIT License

Copyright (c) 2016 [**BitsBeat IT Solution**](http://www.bitsbeat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
