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
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class UploadController {

    @Autowired
    public ImageRepository imageRepository;
    
    @Autowired
    public FavoritesRepository favoritesRepository;

    public static final String bucketName = "imageuploads-otophoto";

    /**
     *
     * @param caption
     * @param location
     * @param ownerId
     * @param file
     * @return
     * @throws IOException
     */
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/api/upload", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody Image oto(@RequestParam("caption") String caption, @RequestParam("location") String location,
            @RequestParam("ownerId") String ownerId, @RequestParam("file") MultipartFile file) throws IOException {

        if (caption == null || caption.isEmpty() || location == null || location.isEmpty() || ownerId == null || ownerId.isEmpty()
                || file == null) {
            throw new IllegalArgumentException("Fields must not be empty.");
        } else {
            System.out.print(System.getenv("AWS_ACCESS_ID"));
            System.out.println(System.getenv("AWS_SECRET_ACCESS_KEY"));
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
            Image image = new Image(caption, location, "https://s3.us-east-2.amazonaws.com/" + bucketName + "/"
                    + file.getOriginalFilename(), ownerId);
            String album = ImaggaService.categorizeImage(image);
            if (album == null) {
                throw new IllegalArgumentException("Your image did not fit into any of the album categories.");

            } else {
                image.imageAlbum = album;
                Image save = imageRepository.save(image);
                return save;
            }
        }

    }


    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/api/images", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody List<Image> getImages(@RequestParam("album") String imageAlbum) {
        if (imageAlbum == null || imageAlbum.isEmpty()) {
            throw new IllegalArgumentException("Request album not found.");
        } else {
            return imageRepository.findByImageAlbum(imageAlbum);
        }
    }
    
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/api/favorites", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody List<Favorites> getFavorites(@RequestParam("userid") String userid) {
        if (userid == null || userid.isEmpty()) {
            throw new IllegalArgumentException("User Id not found.");
           
        } else {
            return favoritesRepository.findByUserid(userid);
        }
    }
  
    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="/api/favorites", method = RequestMethod.POST, produces = "application/json")
    public @ResponseBody Favorites AddFavorite(@RequestParam("imageId") Long imageId, 
            @RequestParam("userid") String userid) {
        
        if (imageId == null || imageId < 0 || userid == null || userid.isEmpty()) {
            throw new IllegalArgumentException("Image Id/User Id not found.");
            
        } else {
            Favorites favorite = new Favorites(imageId, userid);
                Favorites save = favoritesRepository.save(favorite);
                return save;
            
        }
        
    }

    @ExceptionHandler
    void handleIllegalArgumentException(IllegalArgumentException e, HttpServletResponse response) throws IOException {
        response.sendError(HttpStatus.BAD_REQUEST.value());
    }

}
