//test
setTimeout(function() {
    console.log("Bonjour après cinq seconde !");
  }, 5000);

import { allWorks } from './galleryJs/displayAllWorks.js';
allWorks();

import { filterButtonManagement } from './galleryJs/filterButtons.js';
filterButtonManagement ();

import { editionModeManagement } from './galleryJs/editionMode.js';
editionModeManagement ();

import { modalManagement } from './galleryJs/modalManagement.js'
modalManagement ();

import { addingNewWorkManagement } from './galleryJs/addingWork.js'
addingNewWorkManagement ();