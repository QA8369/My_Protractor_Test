describe("My first protractor test", function(){
    it("open angular application", function(){
        browser.get("http://juliemr.github.io/protractor-demo");
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(4).then(function(){
      // browser.sleep(2000); 
        });
        element(by.id('gobutton')).click();
       // browser.sleep(5000);
      // expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("6");
       // element(by.css("h2[class='ng-binding']")).getText().then(function(text){
          // console.log(text);
        //});
        element(by.repeater('result in memory')).
        element(by.css('td:nth-child(2)')).getText().
        then(function(text){
            console.log(text);
        });
    });
});