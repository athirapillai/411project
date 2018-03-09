# Oto Photo Sharing Platform | Project Proposal

## **Project Description**
Oto is a photo sharing platform with themes for photographers of all levels of experience. Oto has five shared albums with a 'theme' assigned for each album. Most of these themes are related to nature. Every user can contribute to these shared albums to post images related to each theme, and the images are categorized within each album based on meta data such as location. This way, users can view the categorized images from all over the world.

### Album themes:
1. Sunsets
2. Forests
3. Mountains
4. Water
5. Landmarks

For example, upon entering the album "Sunsets", users would be able to see photos of sunsets from all over the world. 

## **Project Design**

### Technologies that I will use to develop Oto include:
- Spring MVC
- [Imagga](https://imagga.com/) image categorization API 
- Databases: MySQL to store data, S3 storage on AWS to store image files
- Deploy the final Oto project to my personal domain online

### Use cases:
- User opens Oto to the thumbnails of the five shared themed albums, selects the first themed album "Sunsets", views grid of images of    sunsets and identifies the location of each sunset. 
- User opens Oto to the thumbnails of the five shared themed albums, selects the third themed album "Mountains", and clicks "Upload". The user then selects the image file of the desired photo to upload, adds a caption and additional information, and posts the image to the album for others to view. 
- User opens Oto to the thumbnails of the five shared themed albums, selects the fourth album "Water", and scrolls through the images. One particular image in the album piques the user's interest, because it displays one of the user's favorite lakes. The user clicks the heart icon in the corner of the image to favorite this image to view later. 
- User opens Oto to the thumbnails of the five themed albums and selects the button beneath the albums titled "Favorites". The user scrolls through images that were previously favorited, and these images are also categorized with the Imagga API. 

## **Project Schedule**
There will be a total of three checkpoints, one for every two weeks for the rest of the semester.

### Checkpoint 1: March 24, 2018
- Start new Spring MVC project
- Instantiate interface view files
- Set up initial five themed albums to databases
- Set up photo upload (including caption and description) for each album

### Checkpoint 2: April 7, 2018
- Integrate Imagga API for gathering meta data
- Set up favoriting capability
- View "Favorites" in favorites view
- Ensure multiple users can access site

### Checkpoint 3: April 21, 2018
- Deploy to personal domain online
- Test to ensure multiple users can upload images
- Test to ensure images and data are stored in respective databases

### Interface View Mockups
The first view that users will see is the welcome page, where all the themed albums plus the Favorites album are on display:

![Image](https://raw.githubusercontent.com/athirapillai/OTO-Photo/master/assets/mockup1.png)

Once the user selects a particular album, they will be able to view the images posted to the album with location details:

![Image](https://raw.githubusercontent.com/athirapillai/OTO-Photo/master/assets/mockup2.png)

The user is able to select the Favorites album to view images they previously favorited, along with its respective themed album and location:

![Image](https://raw.githubusercontent.com/athirapillai/OTO-Photo/master/assets/mockup3.png)


## **Project Justification**
The beauty of nature is often breathtaking and leaves viewers speechless, and there can never be enough photos taken of the world's best landmarks. Often, those who are lucky enough to take a photo of that perfect sunset or the mountain peak surrounded by clouds want to share their photographs proudly. Oto Photo allows photographers and travelers of all experience levels to do just this.  
Traveling the world to see the best of what nature has to offer is an expensive and difficult pursuit for many people. Users of Oto may also be those who would like to view beautiful images of waterfalls from around the world. Oto allows users to view images of their favorite landmarks and landscapes from all over the world. Imagine being able to view a beautiful sunset taken at the perfect time at a location across the world from you - that's what Oto Photo provides its users. 

**Novelty:** Most similar photo-sharing platforms focus on the user rather than the photo itself. Oto is novel in the way that it brings the focus back onto the photos themselves - on what they display and where they were taken. Themed albums allow users to view exactly what they want - from colorful sunsets to tall mountains and backyard creeks - emphases placed on the photograph itself. This allows users to truly appreciate the photograph in all its beauty. 

**Complexity:** This project will be a challenging one, but it will enable me to learn and showcase plenty of new skills. Creating the views with Thyme Leaf documentation, integrating the image categorization API, instantiating an image upload, and saving favorited images for later viewing are all challenging steps in the overall process of this project. I have never used AWS before either, so using such a popular cloud platform as my primary database will be a complex but rewarding point in the process. I expect to struggle through some parts more than others, but I will try my best to complete the project as planned. 
