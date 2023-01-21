public class TestZoo {
    public static void main(String [] args){

        Mammal monkey = new Mammal();
        System.out.println("The deafult energy level is " + monkey.displayEnergy());

        Gorilla coco = new Gorilla();
        coco.throwSomething();
        coco.throwSomething();
        coco.throwSomething();
        coco.eatBanana();
        coco.eatBanana();
        coco.climb();
        System.out.println("Coco the Gorilla's energy is " + coco.displayEnergy());

        GiantBat vlad = new GiantBat();
        System.out.println("Starting energy " + vlad.displayEnergy());
        vlad.attackTown();
        vlad.attackTown();
        vlad.attackTown();
        vlad.eatHuman();
        vlad.eatHuman();
        vlad.attackTown();
        vlad.fly();
        vlad.fly();
        System.out.println(vlad.displayEnergy());
        }

}
