
//creating the node/element for doubly link list
var Element = function(val, next, prev){
    this.val = val;
    this.next = next;
    this.prev = prev;
};
//creating the structure for doubly link list
var LinkedList = function(){
    this.head = null;
    this.tail = null;
    this.length = 0;
};
//function for adding the value in the back
LinkedList.prototype.push = function(val){
    this.tail = new Element(val, null ,this.tail);
    if(this.length >= 1){
        this.tail.prev.next = this.tail;
    }else{
        this.head = this.tail;
    }
    this.length++;
};
//function for deleting the value in the back
LinkedList.prototype.pop = function(){
    if(this.length === 0){
        return undefined;
    }
    this.length--;
    var element = this.tail;
    this.tail = element.prev;
    if(this.length === 0)
        this.head = this.tail;
    element.delete();
    return element.val;
};
//function for removing the value from the front
LinkedList.prototype.shift = function(val){
   	if(this.length === 0)
		return undefined;
	this.length--;
	var element = this.head;
	this.head = element.next;
	if(this.length === 0)
		this.tail = this.head
	element.delete();
	return element.val;
};
//function for adding the value from the front
LinkedList.prototype.unshift = function(val){
    this.head = new Element(val, this.head, null);
	if(this.length >= 1)
		this.head.next.prev = this.head;
	else
		this.tail = this.head;
	this.length++;
};

LinkedList.prototype.count = function() {
	return this.length;
};

LinkedList.prototype.delete = function(val) {
	var element = this.head;
	while(element && element.val !== val)
		element = element.next;
	if(element){
		this.length--;
		element.delete();
	}
};

Element.prototype.delete = function() {
	if(this.prev)
		this.prev.next = this.next;
	if(this.next)
		this.next.prev = this.prev;
	this.next = null;
	this.prev = null;
};

module.exports = LinkedList;