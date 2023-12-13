class SubjectEntity extends Entity {
    constructor(location, elementList){
        super(location,60);
        this.sizePx = 50;
        this.fillColor = color(0);
        this.strokeColor = color(0);
        this.strokeWeight = 4;
        this.label = "Title";
        this.image_path = undefined;
        this.elementList = elementList || ["Label", "GenderMale"];

        this.isAlive = true;
    }

    update(){
        super.update();
    }

    display(){
        var sizePx = this.sizePx;

        // Title Text label
        fill(this.fillColor);
        if(this.strokeWeight>0){
            stroke(this.strokeColor);
            this.strokeWeight = this.strokeWeight;
        }else{
            noStroke();
        }

        if(this.elementList.includes("Label")){
            var tmpTxt = this.label;
            text(tmpTxt,this.location.x-textWidth(tmpTxt)/2,this.location.y+sizePx);    
        }

        noFill();
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeight);

        // Gender
        if(this.elementList.includes("GenderFemale")){
            circle(this.location.x,this.location.y, sizePx);
        }
        if(this.elementList.includes("GenderMale" )){
            rect(this.location.x,this.location.y, sizePx);
        }

        // Dead / Alive
        if(!this.isAlive){
            line(this.location.x-sizePx/2,this.location.y-sizePx/2,this.location.x+sizePx/2,this.location.y+sizePx/2,);
            line(this.location.x+sizePx/2,this.location.y-sizePx/2,this.location.x-sizePx/2,this.location.y+sizePx/2,);
        }
        
        // Miscarrage
        fill(this.fillColor);
        if(this.elementList.includes("Miscarrage")){
            circle(this.location.x,this.location.y, sizePx*.2);
        }

        // diamond pet
        if(this.elementList.includes("Pet")){
            push();
            noFill();
            translate(this.location.x,this.location.y);
            rotate(45);
            rect(0,0,sizePx*.75);
            pop();
        }

        // question mark unknown gender
        // image or icon

        noStroke();        
        strokeWeight(1);

        if(this.image_path){
            imageMode(CENTER);
            image(this.image_path,this.location.x,this.location.y);
            imageMode(CORNER);
        }
    }
}
