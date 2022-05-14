class Human extends Path{
    constructor(canvas){
        super(canvas);
        this.createHuman();
    }
    createHuman(){
        this.updatePath("M477,160.27196051349875m-32.85714285714287,0a32.85714285714287,38.271512526507216,0,1,0,65.71428571428574,0a32.85714285714287,38.271512526507216,0,1,0,-65.71428571428574,0M477,198.92618816527073L477,259.5253010997427M477,211.04294903116312L431,211.04294903116312M477,211.04294903116312L523,211.04294903116312M477,259.5253010997427L431,307.99999886581634M477,259.5253010997427L523,307.99999886581634");
        this.fill("white");
        this.stroke("black")
        this.strokeWidth(5);
    }
}