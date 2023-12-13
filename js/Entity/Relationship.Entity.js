class RelationshipEntity extends Entity {
    constructor(subject1, subject2){
        super(subject1.location,60);
        this.sub1 = subject1;
        this.sub2 = subject2;
        this.sizePx = 50;
        this.fillColor = color(0);
        this.strokeColor = color(0);
        this.strokeWeight = 3;
        this.label = "Title";
        this.image_path = undefined;
        this.multiples = 3;
    }

    update(){
        super.update();
    }

    display(){
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeight);
        setLineDash([5, 5]);
        
        line(this.sub1.location.x,this.sub1.location.y,this.sub2.location.x,this.sub2.location.y);
        if(this.multiples > 1){
            line(this.sub1.location.x,this.sub1.location.y+5,this.sub2.location.x,this.sub2.location.y+5);
        }
        if(this.multiples > 2){
            line(this.sub1.location.x,this.sub1.location.y-5,this.sub2.location.x,this.sub2.location.y-5);
        }
        setLineDash();
    }
}
