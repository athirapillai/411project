# Oto Photo Sharing Platform | Project Proposal

## **Project Description**
Oto is a photo sharing platform with themes for photographers of all levels of experience. Oto has five shared albums with a 'theme' assigned for each album. Every user can contribute to these shared albums to post images related to each theme, and the images are categorized within each album based on meta data such as location. This way, users can view the categorized images from all over the world.

### Album themes:
1. Sunsets
2. Joy 
3. Adventure
4. Quotes
5. Textures

For example, upon entering the album "Sunsets", users would be able to see photos of sunsets from all over the world. 

## **Project Design**

### Technologies that I will use to develop Oto include:
- Spring MVC
- [Imagga](https://imagga.com/) image categorization API 
- Databases: MySQL to store data, S3 storage on AWS to store image files
- Deploy the final Oto project to my personal domain online

### Use cases:
- User opens Oto to the thumbnails of the five shared themed albums, selects the first themed album "Sunsets", views grid of images of    sunsets and identifies the location of each sunset. 
- User opens Oto to the thumbnails of the five shared themed albums, selects the third themed album "Adventure", and clicks "Upload". The user then selects the image file of the desired photo to upload, adds a caption and additional information, and posts the image to the album for others to view. 
- User opens Oto to the thumbnails of the five shared themed albums, selects the fourth album "Quotes", and scrolls through the images. One particular image in the album piques the user's interest, because it displays one of the user's favorite quotes. The user clicks the heart icon in the corner of the image to favorite this image to view later. 
- User opens Oto to the thumbnails of the five themed albums and selects the button beneath the albums titled "My Favorites". The user scrolls through images that were previously favorited, and these images are also categorized with the Imagga API. 

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
- View "My Favorites" in favorites view
- Ensure multiple users can access site

### Checkpoint 3: April 21, 2018
- Deploy to personal domain online
- Test to ensure multiple users can upload images
- Test to ensure images and data are stored in respective databases

### Interface View Mockups
The first view that users will see is the welcome page, where all the themed albums plus the Favorites album are on display.

![Image](https://raw.githubusercontent.com/athirapillai/OTO-Photo/master/assets/mockup1.png)

## **Project Justification**



**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)


For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/athirapillai/411project/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
