/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.athirapillai.project;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author athirapillai
 * This interface connects to the database for uploaded images
 */
@Repository
public interface ImageRepository extends CrudRepository<Image, Long> {
    
    public List<Image> findByImageAlbum(String imageAlbum);
    public Image findById(Long id);
}
