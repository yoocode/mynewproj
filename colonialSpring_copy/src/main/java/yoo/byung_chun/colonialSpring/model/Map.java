package yoo.byung_chun.colonialSpring.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Map {

    @Id
    @GeneratedValue
    @Column(name="ID")
    private Long id;

    @Column(name="SCHOOLNAME")
    private String schoolname;

    @Column(name="STREET1")
    private String street1;

    @Column(name="CITY")
    private String city;

    @Column(name="ZIP")
    private String zip;


    public Map(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSchoolname() {
        return schoolname;
    }

    public void setSchoolname(String schoolname) {
        this.schoolname = schoolname;
    }

    public String getStreet1() {
        return street1;
    }

    public void setStreet1(String street1) {
        this.street1 = street1;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }
}
