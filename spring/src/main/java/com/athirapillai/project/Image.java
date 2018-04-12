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
 */
@Entity
public class Image implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public String id;
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

}
