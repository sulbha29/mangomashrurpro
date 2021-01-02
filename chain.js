class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        
        this.pointB= pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
       
    }
    fly(){
        this.chain.bodyA=null;
    }
 
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(6);
        stroke("black")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}