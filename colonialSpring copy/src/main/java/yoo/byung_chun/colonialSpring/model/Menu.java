package yoo.byung_chun.colonialSpring.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Menu {

    @Id
    @GeneratedValue
    @Column(name="ID")
    private Long id;

    @Column(name="SERVINGDATE")
    @NotEmpty
    private String date;

    @Column(name="ENTREE")
    @NotEmpty
    private String entree;

    @Column(name="FRUITOPTION")
    @NotEmpty
    private String fruitOption;

    @Column(name="VEGIEOPTION")
    @NotEmpty
    private String vegieOption;

    @Column(name="MILKOPTION")
    @NotEmpty
    private String milkOption;

    public Menu(){

    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getEntree() {
        return entree;
    }

    public void setEntree(String entree) {
        this.entree = entree;
    }

    public String getFruitOption() {
        return fruitOption;
    }

    public void setFruitOption(String fruitOption) {
        this.fruitOption = fruitOption;
    }

    public String getVegieOption() {
        return vegieOption;
    }

    public void setVegieOption(String vegieOption) {
        this.vegieOption = vegieOption;
    }

    public String getMilkOption() {
        return milkOption;
    }

    public void setMilkOption(String milkOption) {
        this.milkOption = milkOption;
    }
}
