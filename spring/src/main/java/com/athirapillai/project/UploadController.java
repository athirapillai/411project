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
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.ObjectMetadata;
import java.io.IOException;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class UploadController {
    
    @Autowired
    public ImageRepository imageRepository;
    
    public static final String bucketName = "imageuploads-otophoto";
    
     @RequestMapping(value="/api/upload", method=RequestMethod.POST, produces="application/json")
     
     public String oto(@RequestParam("caption") String caption, @RequestParam("location") String location,
             @RequestParam("ownerId") String ownerId, @RequestParam("file") MultipartFile file) throws IOException {
         
        if (caption == null || caption.isEmpty() || location == null || location.isEmpty() || ownerId == null || ownerId.isEmpty()
                || file == null) {
            throw new IllegalArgumentException("Fields must not be empty.");
        } else {
            AWSCredentials credentials = new BasicAWSCredentials(
              System.getenv("AWS_ACCESS_ID"), 
              System.getenv("AWS_SECRET_ACCESS_KEY")
            );
            AmazonS3 s3client = AmazonS3ClientBuilder
              .standard()
              .withCredentials(new AWSStaticCredentialsProvider(credentials))
              .withRegion(Regions.US_EAST_2)
              .build(); 
            s3client.putObject(
              bucketName, 
              file.getOriginalFilename(), 
              file.getInputStream(),
              new ObjectMetadata()
            );
            Image image = new Image(caption, location, "https://s3."+Regions.US_EAST_2+".amazonaws.com/"+bucketName+"/"
            +file.getOriginalFilename(), ownerId);
            String album = ImaggaService.categorizeImage(image);
            if (album == null) {
                throw new IllegalArgumentException("Your image did not fit into any of the album categories.");
                
            } else {
                image.imageAlbum = album;
                imageRepository.save(image);
                return "{'response':'"+album+"'}";
            }
        }
        
    }
     
     @ExceptionHandler
        void handleIllegalArgumentException(IllegalArgumentException e, HttpServletResponse response) throws IOException {
        response.sendError(HttpStatus.BAD_REQUEST.value());
}
     
}
