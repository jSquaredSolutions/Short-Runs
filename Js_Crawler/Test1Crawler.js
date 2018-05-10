var Crawler = require("js-crawler");
var crawler = new Crawler().configure({
    shouldCrawl: function (url) {
        return url.indexOf("www.google.com") > 0;
    }, 
    maxRequestsPerSecond: 0.5,
    depth: 2
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