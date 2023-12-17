class RelationshipEntity extends Entity {
    constructor(subject1, subject2){
        super(subject1.location,60);
        this.sub1 = subject1.getNearestLinkPoint(subject2);
        this.sub2 = subject2.getNearestLinkPoint(subject1);
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
        
        var st_point = this.sub1.location;
        var en_point = this.sub2.location;

        line(this.sub1.x,this.sub1.y,this.sub2.x,this.sub2.y);


        if(this.multiples > 1){
            line(this.sub1.x+5,this.sub1.y+5,this.sub2.x+5,this.sub2.y+5);
        }
        if(this.multiples > 2){
            line(this.sub1.x-5,this.sub1.y-5,this.sub2.x-5,this.sub2.y-5);
        }
        setLineDash();
    }
}
