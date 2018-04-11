/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.athirapillai.project;

/**
 *
 * @author athirapillai
 */
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class UploadController {
    
     @RequestMapping(value="/api/upload", method=RequestMethod.POST)
     
     public String oto(@RequestParam("caption") String caption, @RequestParam("location") String location,
             @RequestParam("ownerId") String ownerId, @RequestParam("file") MultipartFile file) {
      
        return "index";
    }
     
}
