//complete this code
class Rectangle {
	constructor(width,height){
		this._width=width;
		this._height=height
	}
	get height(){
		return this._height;
	}
	get width(){
		return this._width;
	}
	getArea(){
		return ( this.width*this.height)
	}
}

class Square extends Animal {
	constructor(side){
		super()
		this.side=side;
	}
	getPerimeter(){
		return this.side*this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
