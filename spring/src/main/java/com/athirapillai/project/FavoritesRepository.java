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
 * This interface connects to the database for the favorited images
 */
@Repository
public interface FavoritesRepository extends CrudRepository<Favorites, Long> {
    
    public List<Favorites> findByUserid(String userid);
}
