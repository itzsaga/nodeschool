function foo() {
    var bar;
    quux = 13;
    function zip() {
        var quux = 7;
        bar = true;
    }
    return zip;
}
