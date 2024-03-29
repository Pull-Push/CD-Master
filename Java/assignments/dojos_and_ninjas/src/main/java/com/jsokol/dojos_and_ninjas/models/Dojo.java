package com.jsokol.dojos_and_ninjas.models;

import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="dojos")
public class Dojo {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank
	private String name;
	
	@Column(updatable=false)
	 private Date createdAt;
	 private Date updatedAt;
	  
	@OneToMany(mappedBy="dojo", fetch = FetchType.LAZY)
	private List<Ninja> ninjas;
	 
	public Dojo() {};
	 
	public Dojo(Long id, @NotBlank String name) {
		this.id = id;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	@PrePersist
	public void onCreate() {
		this.createdAt = new Date();
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}
	@PreUpdate
	public void onUpdate() {
		this.updatedAt = new Date();
	}

	public List<Ninja> getNinjas() {
		return ninjas;
	}

	public void setNinjas(List<Ninja> ninjas) {
		this.ninjas = ninjas;
	}
	
}
