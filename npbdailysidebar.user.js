// ==UserScript==
// @name         Neopets Beta Dailies
// @version      0.1
// @description  replaces the Album section of the Beta sidebar with a Daily section
// @author       @crystalstories#6013
// @match        *://www.neopets.com/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle ('.nav-profile-dropdown__2020 { overflow: scroll; overflow-x: hidden; -ms-overflow-style: none; scrollbar-width: none;}');
addGlobalStyle ('.nav-profile-dropdown__2020::-webkit-scrollbar { width: 0; background: transparent;  }');

var DailySidebar = document.getElementById('profileAlbumSection');
DailySidebar.innerHTML = (//Coltzans Shrine
    '<a href="/desert/shrine.phtml"><li class="profile-dropdown-subsection"><div class="nav-petcentral-icon profile-dropdown-link-icon"></div><h4>Coltzan\'s Shrine</h4></li></a>' +
                          //Qasalan Expellibox
    '<a href="http://ncmall.neopets.com/games/giveaway/process_giveaway.phtml"><li class="profile-dropdown-subsection"><div class="nav-ncalbum-icon profile-dropdown-link-icon"></div><h4>Qasalan Expellibox</h4></li></a>' +
                          //Fruit Machine
    '<a href="/desert/fruit/index.phtml"><li class="profile-dropdown-subsection"><div class="nav-tcg-icon profile-dropdown-link-icon"></div><h4>Fruit Machine</h4></li></a>' +
                          //TDMBGPOP
    '<a href="/faerieland/tdmbgpop.phtml"><li class="profile-dropdown-subsection"><div class="nav-adopt-icon profile-dropdown-link-icon"></div><h4>Grundo Prosperity</h4></li></a>' +
                          //Anchor Management
    '<a href="/pirates/anchormanagement.phtml"><li class="profile-dropdown-subsection"><div class="nav-gallery-icon profile-dropdown-link-icon"></div><h4>Anchor Management</h4></li></a>' +
                          //Forgotten Shore
    '<a href="/pirates/forgottenshore.phtml"><li class="profile-dropdown-subsection"><div class="nav-inventory-icon profile-dropdown-link-icon"></div><h4>Forgotten Shore</h4></li></a>' +
                          //Negg Cave
    '<a href="/shenkuu/neggcave/"><li class="profile-dropdown-subsection"><div class="nav-createpet-icon profile-dropdown-link-icon"></div><h4>Negg Cave</h4></li></a>' +
                          //Quests
    '<a href="/quests.phtml"><li class="profile-dropdown-subsection"><div class="nav-transferlog-icon profile-dropdown-link-icon"></div><h4>Faerie Quests</h4></li></a>' +
                          //Battledome
    '<a href="/dome/"><li class="profile-dropdown-subsection"><div class="nav-sdb-icon profile-dropdown-link-icon"></div><h4>Battledome</h4></li></a>' +
                          //Training - change to your trainer of choice
    '<a href="/pirates/academy.phtml"><li class="profile-dropdown-subsection"><div class="nav-profile-icon profile-dropdown-link-icon"></div><h4>Training</h4></li></a>')

var DailyTitle = document.getElementsByTagName('h3'),
    i = DailyTitle.length,
    title,
    text;

while (i--)
{
    title = DailyTitle[i];
    text = title.textContent;
    if (text === 'My Albums')
    {
        title.textContent = 'Dailies' ;
        break;
    }
}