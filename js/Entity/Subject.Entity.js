class SubjectEntity extends Entity {
    constructor(location){
        super(location,60);
    }

    update(){
        super.update();
    }

    display(){
        var sizePx = 50;

        // Title Text label
        fill(0);
        noStroke();
        var tmpTxt = "Title";
        text(tmpTxt,this.location.x-textWidth(tmpTxt)/2,this.location.y+sizePx);

        noFill();
        stroke(0);
        strokeWeight(4);

        // Gender
        circle(this.location.x,this.location.y, sizePx);
        rect(this.location.x,this.location.y, sizePx);

        // Dead / Alive
        line(this.location.x-sizePx/2,this.location.y-sizePx/2,this.location.x+sizePx/2,this.location.y+sizePx/2,);
        line(this.location.x+sizePx/2,this.location.y-sizePx/2,this.location.x-sizePx/2,this.location.y+sizePx/2,);
        
        // Miscarrage
        fill(0);
        circle(this.location.x,this.location.y, sizePx*.2);

        // diamond pet
        push();
        noFill();
        translate(this.location.x,this.location.y);
        rotate(45);
        rect(0,0,sizePx*.75);
        pop();

        // question mark unknown gender
        // image or icon

        noStroke();        
        strokeWeight(1);

        //imageMode(CENTER);
        //image(this.image_part,this.location.x,this.location.y);
        //imageMode(CORNER);
    }
}
