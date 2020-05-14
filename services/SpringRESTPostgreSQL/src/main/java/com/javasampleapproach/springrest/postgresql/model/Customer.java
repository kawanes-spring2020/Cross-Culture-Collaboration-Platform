package com.javasampleapproach.springrest.postgresql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "usertable")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "username")
	private String username;

	@Column(name = "password")
	private String password;


	@Column(name = "firstname")
	private String firstname;

	@Column(name = "lastname")
	private String lastname;
	
	@Column(name = "year")
	private String year;
	
	@Column(name = "profile")
	private String profile;
	
	@Column(name = "souvenirbought")
	private String souvenirbought;
	

	public String getSouvenirbought() {
		return souvenirbought;
	}

	public void setSouvenirbrought(String souvenirbought) {
		this.souvenirbought = souvenirbought;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public Customer() {
	}

	public Customer(String name, String password, String firstname, String lastname, String year) {
		this.username = name;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.year = year;
	}

	public long getId() {
		return id;
	}



	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	
	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", username=" + username + ", password=" + password + ",firstname=\" + firstname + \",lastname=\" + lastname + \",]";
	}
}
