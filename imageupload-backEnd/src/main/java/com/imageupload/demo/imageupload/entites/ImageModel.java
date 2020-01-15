package com.imageupload.demo.imageupload.entites;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name ;
	private String type ;
	
	@Lob
	private byte[] pic ;
	
	//custom constructor 
	public ImageModel(String theName, String theType, byte[] thePic) {
		this.name = theName ;
		this.type = theType;
		this.pic = thePic ;
	}
}
