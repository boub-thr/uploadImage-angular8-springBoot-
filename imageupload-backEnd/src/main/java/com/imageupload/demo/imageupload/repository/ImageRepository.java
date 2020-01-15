package com.imageupload.demo.imageupload.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.imageupload.demo.imageupload.entites.ImageModel;

public interface ImageRepository extends JpaRepository<ImageModel, Long> {

}
