var options = {'image_urls':{}};
var canvas_element;

var images = {};
var entities; // type: EntityCollection

var bttnClickCount = 0;
/*
var params_to_options_map = [
    {from:'move_hat',to:''}
]*/

var params;
var uielements;

var timelineUIInstance;

/* Setup Methods */
function preload(){

}

function setup() {
    drawingContext.shadowOffsetX = 7;
    drawingContext.shadowOffsetY = -7;
    drawingContext.shadowBlur = 14;
    drawingContext.shadowColor = 'black';
    
    entities = new EntityCollection();
    uielements = new UIElementCollection();

    params = getURLParams();
    canvas_element = createCanvas(1280, 720);
    rectMode(CENTER);
    angleMode(DEGREES);
    
    frameRate(60);
    noStroke();
}

/* Display Methods */
function draw() {
    background(255);
    entities.update();
    entities.display();
    uielements.update();
    uielements.display();
}

/* UI Methods */
function touchStarted() {
}

function mouseClicked(){
    console.log(entities.getLength());
    if(entities.getLength() < 2){
        entities.addEntity(new SubjectEntity(createVector(mouseX,mouseY)));
    }else{
        entities.addEntity(new RelationshipEntity(entities.getEntities()[0],entities.getEntities()[1]));
    }
    
}

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function setLineDash(list) {
    drawingContext.setLineDash(list);
  }