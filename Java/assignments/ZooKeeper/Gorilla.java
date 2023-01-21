public class Gorilla extends Mammal {
    

    public Gorilla(){
    }
    
    protected int throwSomething(){
        this.energy -= 5;
        System.out.println("The Gorilla threw something!");
        return energy;
    }

    protected int eatBanana(){
        this.energy += 10;
        System.out.println("The Gorilla just had a snack");
        return energy;
    }
    protected int climb(){
        this.energy -= 10;
        System.out.println("There be gorilla in these trees...");
        return energy;
    }
}

