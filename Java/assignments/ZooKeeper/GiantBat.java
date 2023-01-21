public class GiantBat extends Mammal{
    
    public GiantBat(){
        this.energy = 300;
    }

    protected int fly(){
        System.out.println("flap flap flap flap");
        this.energy -= 50;
        return energy;
    }

    protected int attackTown(){
        System.out.println("Oh God!! There's so much blood!");
        this.energy -= 100;
        return energy;
    }

    protected int eatHuman(){
        this.energy += 25;
        return energy;
    }
}
