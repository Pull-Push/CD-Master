public class BankAccountTest {
    public static void main(String[] args){
        BankAccount account1 = new BankAccount(100.00, 500.00);
        BankAccount account2 = new BankAccount(10000.00, 50000.00);

        // System.out.println(account1.getChecking());
        // System.out.println(account1.getSaving());
        // System.out.println(BankAccount.totalAccounts);

        // account1.depositCheck(50.00);
        // account1.depositSave(25.50);

        // System.out.println(BankAccount.totalMoney);

        // account1.withdrawCheck(10.50);
        // System.out.println(account1.getChecking());

        // System.out.println(account1.myMoney());
        // System.out.println(account2.myMoney());

        System.out.println(account1.myAccount());
        System.out.println(account2.myAccount());

    }

    
}
