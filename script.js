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

class Square extends Rectangle {
	constructor(width){
		super(width,width)
		// this.side=side;
	}
	// getArea(){
	// 	return this.side*this.side
	// }
	getPerimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
