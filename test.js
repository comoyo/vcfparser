var Parse = require("./parser.js");
var assert = require("assert");

var fs = require("fs");
var util = require("util")

var file1 = fs.readFileSync("test1.vcf", "utf8")
var file2 = fs.readFileSync("test2.vcf", "utf8")
console.log(file2)
console.log(file1)
describe('VCF Tests', function() {
  it('should return a correct JSON object from VCF 2.1', function() {
    var json = Parse(file1);

    assert.equal("2.1", json.version);
    assert.equal("Forrest Gump", json.fn);
    assert.equal("Bubba Gump Shrimp Co.", json.org);
    assert.equal("Shrimp Man", json.title);
    assert.equal("http://www.example.com/dir_photos/my_photo.gif", json.photo[0].value[0]);
    assert.equal("GIF", json.photo[0].meta.TYPE);
    assert.equal("WORK", json.tel[0].meta.TYPE);
    assert.equal("VOICE", json.tel[0].meta.TYPE1);
    assert.equal("(111) 555-1212", json.tel[0].value[0]);
    assert.equal("HOME", json.tel[1].meta.TYPE);
    assert.equal("VOICE", json.tel[1].meta.TYPE1);
    assert.equal("(404) 555-1212", json.tel[1].value[0]);

    assert.equal("WORK", json.adr[0].meta.TYPE);
    assert.equal("100 Waters Edge", json.adr[0].value[2]);
    assert.equal("Baytown", json.adr[0].value[3]);
    assert.equal("LA", json.adr[0].value[4]);
    assert.equal("30314", json.adr[0].value[5]);
    assert.equal("United States of America", json.adr[0].value[6]);

    assert.equal("HOME", json.adr[1].meta.TYPE);
    assert.equal("42 Plantation St.", json.adr[1].value[2]);
    assert.equal("Baytown", json.adr[1].value[3]);
    assert.equal("LA", json.adr[1].value[4]);
    assert.equal("30314", json.adr[1].value[5]);
    assert.equal("United States of America", json.adr[1].value[6]);
  });

  it('should return a correct JSON object from VCF 3.0', function() {
    var json = Parse(file2);

    assert.equal("3.0", json.version);
    assert.equal("Forrest Gump", json.fn);
    assert.equal("Bubba Gump Shrimp Co.", json.org);
    assert.equal("Shrimp Man", json.title);
    assert.equal("http://www.example.com/dir_photos/my_photo.gif", json.photo[0].value[0]);
    assert.equal("URL", json.photo[0].meta.VALUE);
    assert.equal("GIF", json.photo[0].meta.TYPE);
    assert.equal("WORK,VOICE", json.tel[0].meta.TYPE);
    assert.equal("(111) 555-1212", json.tel[0].value[0]);
    assert.equal("HOME,VOICE", json.tel[1].meta.TYPE);
    assert.equal("(404) 555-1212", json.tel[1].value[0]);

    assert.equal("WORK", json.adr[0].meta.TYPE);
    assert.equal("100 Waters Edge", json.adr[0].value[2]);
    assert.equal("Baytown", json.adr[0].value[3]);
    assert.equal("LA", json.adr[0].value[4]);
    assert.equal("30314", json.adr[0].value[5]);
    assert.equal("United States of America", json.adr[0].value[6]);

    assert.equal("HOME", json.adr[1].meta.TYPE);
    assert.equal("42 Plantation St.", json.adr[1].value[2]);
    assert.equal("Baytown", json.adr[1].value[3]);
    assert.equal("LA", json.adr[1].value[4]);
    assert.equal("30314", json.adr[1].value[5]);
    assert.equal("United States of America", json.adr[1].value[6]);
  })
})
