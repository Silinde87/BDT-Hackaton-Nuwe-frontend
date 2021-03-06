## BDT Hackaton Nuwe - Frontend - Pau RodrΓ­guez
BDT Hackaton assignment frontend in which you are asked to develop a form with email validation for PC and mobile design.

Built with ``` ReactJS & NextJS``` and deployed in ```Vercel```.


## How it looks

π [Live Demo](https://bdt-hackaton-nuwe-frontend.vercel.app/)

<a href="https://github.com/Silinde87/repo-media/blob/main/images/screen1-bdthackaton.png?raw=true" target="_blank">
<img src="https://github.com/Silinde87/repo-media/blob/main/images/screen1-bdthackaton.png?raw=true" width="288px" height="139px">
</a>

<a href="https://github.com/Silinde87/repo-media/blob/main/images/screen2-bdthackaton.png?raw=true" target="_blank">
<img src="https://github.com/Silinde87/repo-media/blob/main/images/screen2-bdthackaton.png?raw=true" width="288px" height="139px">
</a>



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
    βββ components              # React Component and component styles
    β   βββ Button
    β   βββ FrontInfoText
    β   βββ GoogleButton
    β   βββ HomeCard
    β   βββ NavBar
    β   βββ SecureLabelInfo
    β   βββ Title
    βββ pages                   # NextJS Pages
    β   βββ register
    β   β   βββ card.js
    β   β   βββ location.js
    β   β   βββ persona-info.js
    β   βββ _app.js
    β   βββ index.js
    βββ public                  # Assets
    β   βββ fonts
    β   βββ icons
    β   βββ images
    βββ resources               # Resources provided by the hackathon.
    βββ styles                  # Global and pages styles
    βββ utils                   # Support functions and tools
    βββ tests                   # Unit components tests
    βββ countries.json
    βββ package.json    
    βββ README.md

## Author

π€ **Pau RodrΓ­guez**

* Website:  https://www.linkedin.com/in/paurodriguezmolina/
* Github: [@Silinde87](https://github.com/Silinde87)
* LinkedIn: [@paurodriguezmolina](https://linkedin.com/in/paurodriguezmolina)
