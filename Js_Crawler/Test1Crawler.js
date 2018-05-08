var Crawler = require("js-crawler");
var crawler = new Crawler().configure({
    maxRequestsPerSecond: 0.5,
    depth: 1000
});
crawler.crawl({
    url: "http://www.google.com",
    success: function (page) {
        console.log(page.url);
    },
    failure: function (page) {
        console.log(page.status);
    }
});

/*
var Crawler = require("js-crawler");
 
var crawler = new Crawler().configure({
  shouldCrawl: function(url) {
    return url.indexOf("reddit.com") < 0;
  }
});
 
crawler.crawl("http://www.reddit.com/r/javascript", function(page) {
  console.log(page.url);
}); */