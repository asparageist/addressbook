//BL for AddressBook
function AddressBook() {
  this.contacts = {};
  this.currentID = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignID();
  this.contacts[contact.firstName] = contact;
};

AddressBook.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

//BL for Contact
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
};

//UI LOGIC
let addressBook = new AddressBook();

function handleFormSub(event) {
  event.preventDefault();
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
  addressBook.addContact(newContact);
  console.log(addressBook.contacts);
}

window.addEventListener("load", function() {
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSub);
});