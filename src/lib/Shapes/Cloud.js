class Cloud extends Path{
    constructor(canvas){
        super(canvas);
        this.createCloud();
    }
    createCloud(){
        this.addPath("M472.25358731623794,127.23909029296324c-1.3337071502332212,0,-2.680244015072969,0.0454417536329728,-4.039027425673494,0.130374555066029c-3.2779920819680513,-40.02931619133118,-39.435626856240084,-71.67246494434876,-83.42113704703175,-71.67246494434876c-46.125739854698985,0,-83.65557092302375,34.81054717588727,-83.65557092302375,77.60477768648187c0,0.25425743104163334,0.002332675383005194,0.50580999579559,0.010497039223523384,0.7606084000947584C281.4774806236945,143.90809927740125,269,163.06666719301697,269,183.9806933293352c0,31.286106403044215,27.435761517215614,56.74430790265963,61.165664386624925,56.74430790265963h142.0879229296124c33.723488012106095,0,61.16741389316222,-25.455496633327776,61.16741389316222,-56.74430790265963C533.4210012093995,152.69350497977615,505.97707532834374,127.23909029296324,472.25358731623794,127.23909029296324z");
        this.fill("gray");
        this.stroke("black")
        this.strokeWidth(4);
    }
}