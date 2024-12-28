# Tracking International Space Station (ISS) 🛰️

Hi! I have created this project to track the current coordinates (lattitude and longitude) of the International Space Station (ISS). This is done using the API request. 
I have used the **[WTIA REST API](https://wheretheiss.at/w/developer)** and fetched the live coordinates of the ISS and displayed it on the webpage.

## Live URL

Live URL: [gargajit.github.io/whereisiss/](https://gargajit.github.io/whereisiss/ "https://gargajit.github.io/whereisiss/")

# Highlights

Following are the major highlights of the following project:

- **API request** (To get the current coordinates of ISS)
- **Animation** (on ISS moving on page load)
- **Dynamic Content** (title and coordinates on every button click)

## Frontend Project

The project uses HTML, CSS and frontend JS using JQuery syntax.

### UI
![image](https://github.com/user-attachments/assets/5213d77d-166e-4de8-aef6-9da0388bf848)
![image](https://github.com/user-attachments/assets/33b1ddc1-db73-4e4d-a2e9-278fae1075e9)


## Version 2: Reverse Geocoding
Earlier we were displaying only the *latitude* and *longitude* of the ISS. In Version 2, I have added more information. 

Now, I have Integrated Reverse Geocoding that converts latitude and longitude into human-readable locations like countries, continents, or oceans.

### Nominatim(OpenStreetMap)
I have used the **OpenStreetMap's** free geocoding API **Nominatim**.
- URL: `https://nominatim.openstreetmap.org/reverse?lat=<LATITUDE>&lon=<LONGITUDE>&format=json`

The limitation with this api is it throws error if the latitude and longitude value passed is of ocean as it has not been geocoded.
So I have handled the error by displaying the output as `ISS is over Ocean`. 
And in the rest of the case accessing the country from the address we display the name of the country.

### Results:


