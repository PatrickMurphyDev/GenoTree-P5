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
        
        // Miscarrage
        fill(this.fillColor);
        if(this.elementList.includes("Miscarrage")){
            circle(this.location.x,this.location.y, this.sizePx*.2);
        }

        // diamond pet
        if(this.elementList.includes("Pet")){
            push(); // push transformation matrix
            noFill();
            translate(this.location.x,this.location.y);
            rotate(45);
            rect(0,0,sizePx*.75);
            pop(); // restore transformation matrix
        }
        
        // question mark unknown gender
    }

    // Dead / Alive
    drawDeceasedStatus(){
        if(!this.isAlive){
            line(this.location.x-this.sizePx/2,this.location.y-this.sizePx/2,this.location.x+this.sizePx/2,this.location.y+this.sizePx/2,);
            line(this.location.x+this.sizePx/2,this.location.y-this.sizePx/2,this.location.x-this.sizePx/2,this.location.y+this.sizePx/2,);
        }
    }

    drawImage(){
        noStroke();        
        strokeWeight(1);

        if(this.image_path){
            imageMode(CENTER);
            image(this.image_path,this.location.x,this.location.y);
            imageMode(CORNER);
        }
    }

    drawLinkPoints(){
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
