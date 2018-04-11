# Oto Photo Sharing Platform | Project Proposal
Athira Pillai

## **Project Description**
Oto is a photo sharing platform with themes for photographers of all levels of experience. Oto has five shared albums with a 'theme' assigned for each album. Most of these themes are related to nature. Every user can contribute to these shared albums to post images related to each theme, and the images are categorized within each album based on meta data such as location. This way, users can view the categorized images from all over the world.

### Album themes:
1. Sunsets
2. Nature
3. Food
4. Animals
5. Art

For example, upon entering the album "Sunsets", users would be able to see photos of sunsets from all over the world. 

## **Project Design**

### Technologies that I will use to develop Oto include:
- Spring MVC
- [AWS Cognito](https://aws.amazon.com/cognito/) API to handle user accounts and authentication
- [Imagga](https://imagga.com/) image categorization API 
- Front-end: Angular
- Databases: MySQL to store data, S3 storage on AWS to store image files
- Deploy the final Oto project to my personal domain online

### Use cases:
- User successfully logs into Oto to the thumbnails of the five shared themed albums, selects the first themed album "Sunsets", views grid of images of sunsets and identifies the location of each sunset. 
- User successfully logs into Oto to the thumbnails of the five shared themed albums, selects the "Upload" button, and selects the image file of the desired photo to upload. The user adds a caption, location, and description, and the Imagga API identifies the image as "painting". After the user clicks "Submit", the image is posted to the Art album for others to view.
- User successfully logs into Oto to the thumbnails of the five shared themed albums, selects the fourth album "Animals", and scrolls through the images. One particular image in the album piques the user's interest, so the user clicks the heart icon in the corner of the image to favorite this image to view later. 
- User successfully logs into Oto to the thumbnails of the five themed albums and selects the button beneath the albums titled "Favorites". The user scrolls through images that were previously favorited, and these images are also categorized with the Imagga API. 

## **Project Schedule**
There will be a total of three checkpoints, one for every two weeks for the rest of the semester.

### Checkpoint 1: March 29, 2018
- Start new Spring MVC project
- Instantiate interface view files: Login, Sign-up, Homepage, and each album page
- Set up user account authentication with AWS Cognito API
- Set up Imagga API account and API keys

### Checkpoint 2: April 12, 2018
- Set up initial five themed albums to databases
- Integrate Imagga API for gathering meta data
- Set up photo upload (including caption and description) for each album

### Checkpoint 3: April 26, 2018
- Set up favoriting capability
- Ensure multiple users can access site
- Test to ensure images and data are stored in respective databases
- Deploy to personal domain online


### Interface View Mockups
The first view that users will see after logging in successfully is the welcome page, where all the themed albums plus the Favorites album are on display:

![Image](https://raw.githubusercontent.com/athirapillai/OTO-Photo/master/assets/mockup1.png)

Once the user selects a particular album, they will be able to view the images posted to the album with location details:

![Image](https://raw.githubusercontent.com/athirapillai/OTO-Photo/master/assets/mockup2.png)

The user is able to select the Favorites album to view images they previously favorited, along with its respective themed album and location:

![Image](https://raw.githubusercontent.com/athirapillai/OTO-Photo/master/assets/mockup3.png)


## **Project Justification**
The world is a large place, and most of us have seen very little of it. Often, those who are lucky enough to take a photo of that perfect sunset or complex presentation of international food on the plate in front of them want to share their photographs proudly. Oto Photo allows photographers and travelers of all experience levels to do just this.  
Traveling the world to see the best of what the world has to offer, from nature to landmarks and animals, is an expensive and difficult pursuit for many people. Users of Oto may also be those who would like to view beautiful images of sunsets from around the world. Oto allows users to view images of all kinds of landscapes, art, animals, and more from all over the world. Imagine being able to view a beautiful sunset taken at the perfect time at a location across the world from you - that's what Oto Photo provides its users. 

**Novelty:** Most similar photo-sharing platforms focus on the user rather than the photo itself. Oto is novel in the way that it brings the focus back onto the photos themselves - on what they display and where they were taken. Themed albums allow users to view exactly what they want - from colorful sunsets to exotic animals and unique art - emphasis placed on the photograph itself. This allows users to truly appreciate the photograph in all its beauty. 

**Complexity:** This project will be a challenging one, but it will enable me to learn and showcase plenty of new skills. Creating the views with the Angular framework, integrating the image categorization API, instantiating an image upload, and saving favorited images for later viewing are all challenging steps in the overall process of this project. I have never used AWS before either, so using such a popular cloud platform as my primary database will be a complex but rewarding point in the process. I expect to struggle through some parts more than others, but I will try my best to complete the project as planned. 
