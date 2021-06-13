## BDT Hackaton Nuwe - Frontend - Pau Rodríguez
BDT Hackaton assignment frontend in which you are asked to develop a form with email validation for PC and mobile design.

Built with ``` ReactJS & NextJS``` and deployed in ```Vercel```.

🔗 [Live Demo](https://bdt-hackaton-nuwe-frontend.vercel.app/)


## 1- Download

```sh
git clone https://github.com/Silinde87/BDT-Hackaton-Nuwe-frontend.git

cd bdt-hackaton-nuwe-frontend
```

## 2- Usage with CLI
```sh
npm run start 
```
this command will install dependencies, build the app and runs it
- [Open localhost:3000/](http://localhost:3000/)

## 3- Testing
```sh
npm run test
```


## Endpoint Table

### Client
Verb | Endpoint | Result
------------ | ------------- | -------------
GET | "/" | Home Page
GET | "/register/personal-info" | First step of registration Page
GET | "/register/location" | Second step of registration Page
GET | "/register/card" | Third step of registration Page

## Project Structure

    .
    ├── components              # React Component and component styles
    │   ├── Button
    │   ├── FrontInfoText
    │   ├── GoogleButton
    │   ├── HomeCard
    │   ├── NavBar
    │   ├── SecureLabelInfo
    │   └── Title
    ├── pages                   # NextJS Pages
    │   ├── register
    │   │   ├── card.js
    │   │   ├── location.js
    │   │   └── persona-info.js
    │   ├── _app.js
    │   └── index.js
    ├── public                  # Assets
    │   ├── fonts
    │   ├── icons
    │   └── images
    ├── resources               # Resources provided by the hackathon.
    ├── styles                  # Global and pages styles
    ├── utils                   # Support functions and tools
    ├── countries.json
    ├── package.json    
    └── README.md

## Author

👤 **Pau Rodríguez**

* Website:  https://www.linkedin.com/in/paurodriguezmolina/
* Github: [@Silinde87](https://github.com/Silinde87)
* LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)
