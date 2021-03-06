/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.athirapillai.project;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

/**
 *
 * @author athirapillai
 * This class handles each image and its id, album, caption, location, url, owner id
 */
@Entity
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    public String imageAlbum;
    public String caption;
    public String location;
    public String url;
    public String ownerId;

    protected Image() {
    }

    public Image(String imageAlbum, String caption, String location, String url, String ownerId) {
        this.imageAlbum = imageAlbum;
        this.caption = caption;
        this.location = location;
        this.url = url;
        this.ownerId = ownerId;

    }

    public Image(String caption, String location, String url, String ownerId) {
        this.caption = caption;
        this.location = location;
        this.url = url;
        this.ownerId = ownerId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    
    public String getImageAlbum() {
        return imageAlbum;
    }

    
    public void setImageAlbum(String imageAlbum) {
        this.imageAlbum = imageAlbum;
    }

    
    public String getCaption() {
        return caption;
    }

    
    public void setCaption(String caption) {
        this.caption = caption;
    }

    
    public String getLocation() {
        return location;
    }

    
    public void setLocation(String location) {
        this.location = location;
    }

    
    public String getUrl() {
        return url;
    }

    
    public void setUrl(String url) {
        this.url = url;
    }

    
    public String getOwnerId() {
        return ownerId;
    }

    
    public void setOwnerId(String ownerId) {
        this.ownerId = ownerId;
    }

}
