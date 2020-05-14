package com.javasampleapproach.springrest.postgresql.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "souvenirs")
public class Souvenir {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "ItemName")
	private String ItemName;

	@Column(name = "ItemPrice")
	private Integer ItemPrice;


	@Column(name = "ItemDesc")
	private String ItemDesc;

	@Column(name = "ItemsBought")
	private Integer ItemsBought;
	
	@Column(name = "ItemImg")
	private String ItemImg;

	

	

	public String getItemImg() {
		return ItemImg;
	}

	public void setItemImg(String itemImg) {
		ItemImg = itemImg;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getItemName() {
		return ItemName;
	}

	public void setItemName(String itemName) {
		ItemName = itemName;
	}

	public Integer getItemPrice() {
		return ItemPrice;
	}

	public void setItemPrice(Integer itemPrice) {
		ItemPrice = itemPrice;
	}

	public String getItemDesc() {
		return ItemDesc;
	}

	public void setItemDesc(String itemDesc) {
		ItemDesc = itemDesc;
	}

	public Integer getItemsBought() {
		return ItemsBought;
	}

	public void setItemsBought(Integer itemsBought) {
		ItemsBought = itemsBought;
	}
	
	@Override
	public String toString() {
		return "Souvenir [id=" + id + ", Item Name=" + getItemName() + ", item desc=" + getItemDesc() + "]";
	}
	
}
