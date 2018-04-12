/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.athirapillai.project;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

/**
 *
 * @author athirapillai
 */
public class ImaggaService {
    public static final String APIKEY = "acc_b751ff167ffccef";
    public static final String APISECRET = "848f63f5678fec570f59d20e09e985df";
    
    public static String categorizeImage(Image image) throws MalformedURLException, IOException {
        
        String credentialsToEncode = APIKEY + ":" + APISECRET;
        String basicAuth = Base64.getEncoder().encodeToString(credentialsToEncode.getBytes(StandardCharsets.UTF_8));

        String endpoint_url = "https://api.imagga.com/v1/categorizations";
        String categorizerId = "personal_photos";
        String image_url = image.url;

        String url = endpoint_url + "/" + categorizerId + "?url=" + image_url;
        URL urlObject = new URL(url);
        HttpURLConnection connection = (HttpURLConnection) urlObject.openConnection();

        connection.setRequestProperty("Authorization", "Basic " + basicAuth);

        int responseCode = connection.getResponseCode();

        System.out.println("\nSending 'GET' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        String jsonResponse;
        try (BufferedReader connectionInput = new BufferedReader(new InputStreamReader(connection.getInputStream()))) {
            jsonResponse = connectionInput.readLine();
            JSONParser parser = new JSONParser();
            JSONObject json = (JSONObject) parser.parse(jsonResponse);
            JSONArray results = (JSONArray) json.get("results");
            JSONObject result = (JSONObject)results.get(0);
            JSONArray categories =  (JSONArray) result.get("categories");
            JSONObject category =  (JSONObject) categories.get(0);
            String name = (String) category.get("name");
            System.out.println(name);
            switch(name) {
                case "nature landscape":
                    return "nature landscape";
                case "food drinks":
                    return "food drinks";
                case "pets animals":
                    return "pets animals";
                case "paintings art":
                    return "paintings art";
                case "sunrises sunsets":
                    return "sunrises sunsets";
                default:
                    return null;
                 
            }
        } catch (ParseException ex) {
            Logger.getLogger(ImaggaService.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
        
    }
    
}
