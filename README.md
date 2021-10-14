<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!--
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
 -->



<!-- ABOUT THE PROJECT -->
<!-- [![Product Name Screen Shot][product-screenshot]](https://tac-map.com) -->

  <p align="center">
  </p>
</p>
<p align="center">
TACMap is a navigation system developed for the purpose storing and calculating system coordinates around the Starbase solar system.

<br>


</p>


<!-- GETTING STARTED -->
## Getting Started

To play around with a local copy of <strong>`TACMap`</strong> run these following steps.

### Prerequisites

Ensure you have nodejs installed on your computer (can check by running the command `node -v`). If you don't then go to https://nodejs.org/en/ and follow the instructions.
<br>


### Installation

1. Clone the repo using the command:
   ```sh
   git clone https://github.com/Tactical-Starbase/Starmap-UI
   ```
2. In the new directory <strong>`/Starmap-UI`</strong> run the command:
   ```sh
   npm install
   ```
3. Create a new file called <strong>`.env`</strong> (in the same directory).
   <br>
   Copy this into that file and save:
      ```js
      PORT=80
      ```
4. Create a new file called <strong>`env.js`</strong>, place this file in the <strong>`public\js`</strong> folder.
<br>The content of the file should be:
   ```js
   export const ENV_FROM_ENVJS = "remoteDev";
   export const AUTH_REDIR_FROM_ENVJS = "local";
   ```
5. Start the server by running:
   ```sh
   node index.js
   ```
6. Finally to test that it is working, In your browser type in: <strong>`http:\\localhost\`</strong> and you should now see the TPS Starmap loading.





<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Tactical-Starbase/Starmap-UI/issues) for a list of proposed features (and known issues).






<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
Code forked from The Collective (https://github.com/Collective-SB/Starmap)

### Built With

* [Starmap API](https://github.com/Collective-SB/Starmap)
* [Express](https://expressjs.com/)
* [HTML/CSS](https://www.w3schools.com/)
* [JQuerry](https://jquery.com)
* [ThreeJS](https://threejs.org/)
* [AdobeXD](https://www.adobe.com/nz/products/xd.html)

<!-- LICENSE -->
## License

TACMap is an open source client built on top of
the <strong>`ISAN Starmap`</strong> and <strong>`Starmap API`</strong> made to
allow storage of ISAN locations
<strong>`Copyright (C) 2021 Spedione`</strong>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, orany
later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
