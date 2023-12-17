const SUBJECT_SHAPE_LIST = ['GenderMale','GenderFemale','Pet','Miscarriage'];
const SUBJECT_DECEASED_STATUS_LIST = [true,false];

class SubjectEntity extends Entity {
    constructor(location, elementList){
        super(location,60);
        this.sizePx = 50;
        
        this.fillColor = color(0);
        this.strokeColor = color(0);
        this.strokeWeight = 4;

        this.label = "Title";
        this.image_path = undefined;
        this.elementList = elementList || ["Label"];
        this.elementList.push(random(SUBJECT_SHAPE_LIST));

        //this.isAlive = true;
        this.isAlive = random() > 0.5;

        var linkCoordOffset = 1;
        this.linkCoords = [createVector(this.location.x,this.location.y+this.sizePx*linkCoordOffset),
                            createVector(this.location.x+this.sizePx*linkCoordOffset,this.location.y),
                            createVector(this.location.x,this.location.y-this.sizePx*linkCoordOffset),
                            createVector(this.location.x-this.sizePx*linkCoordOffset,this.location.y)];
    }

    /*
        input subject entity
        output nearest linkpoint on this object to inobj
    */
    getNearestLinkPoint(SubIn){
        var lowestDist = 9999;
        var lowestObj;
        for(var i = 0; i < this.linkCoords.length; i++){
            var p = this.linkCoords[i];
            var testDist = p.dist(SubIn.location);
            if(testDist < lowestDist){
                lowestDist = testDist;
                lowestObj = p;
            }
        }
        return lowestObj;
    }

    update(){
        super.update();
    }

    drawLabel(){
        if(this.elementList.includes("Label")){
            noStroke();
            var tmpTxt = this.label;
            text(tmpTxt,this.location.x-textWidth(tmpTxt)/2,this.location.y+this.sizePx);    
        }

    }

    drawShape(){
        noFill();
        stroke(this.strokeColor);
        strokeWeight(this.strokeWeight);

        // Gender
        if(this.elementList.includes("GenderFemale")){
            circle(this.location.x,this.location.y, this.sizePx);
        }
        if(this.elementList.includes("GenderMale" )){
            rect(this.location.x,this.location.y, this.sizePx);
        }
        
        // diamond pet
        if(this.elementList.includes("Pet")){
            push(); // push transformation matrix
            noFill();
            translate(this.location.x,this.location.y);
            rotate(45);
            rect(0,0,this.sizePx*.75);
            pop(); // restore transformation matrix
        }
        
        // Miscarriage
        if(this.elementList.includes("Miscarriage")){
            fill(this.fillColor);
            circle(this.location.x,this.location.y, this.sizePx*.2);
        }

        
        // question mark unknown gender
    }

    // Dead / Alive
    drawDeceasedStatus(){
        if(!this.isAlive){
            noFill();
            stroke(this.strokeColor);
            strokeWeight(this.strokeWeight);
            line(this.location.x-this.sizePx/2,this.location.y-this.sizePx/2,this.location.x+this.sizePx/2,this.location.y+this.sizePx/2,);
            line(this.location.x+this.sizePx/2,this.location.y-this.sizePx/2,this.location.x-this.sizePx/2,this.location.y+this.sizePx/2,);
        }
    }

    drawImage(){
        if(this.image_path){
            noStroke();     
            noFill();
            imageMode(CENTER);
            image(this.image_path,this.location.x,this.location.y);
            imageMode(CORNER);
        }
    }

    drawLinkPoints(){
        noFill();
        stroke(color(255,0,0));
        rect(this.linkCoords[0].x,this.linkCoords[0].y,2);
        rect(this.linkCoords[1].x,this.linkCoords[1].y,2);
        rect(this.linkCoords[2].x,this.linkCoords[2].y,2);
        rect(this.linkCoords[3].x,this.linkCoords[3].y,2);
    }

    // set style based on this var state
    setDrawStyle(){
        fill(this.fillColor);
        if(this.strokeWeight>0){
            stroke(this.strokeColor);
            this.strokeWeight = this.strokeWeight;
        }else{
            noStroke();
        }
    }

    display(){
        this.setDrawStyle();
        this.drawLabel();
        this.drawShape();
        this.drawImage(); // move Image into shape so it can be contained in shape
        this.drawDeceasedStatus();
        this.drawLinkPoints();
    }
}
