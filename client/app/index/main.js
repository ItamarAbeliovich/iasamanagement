import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import './main.jade';

Meteor.subscribe('user');
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

Accounts.config({
    forbidClientAccountCreation : true
});

Template.studentList.onCreated(function ListTestOnCreated() {
  this.students = new ReactiveVar(
      [
        {name: "Itamar Abeliovich", class: "יא2"},
        {name: "Eden Ben-Elya", class: "יא2"}
      ]
  );
});

Template.studentList.helpers({
  students() {
    return Template.instance().students.get();
  },
});

Template.studentList.events({

});

// Login Menu
Template.loginMenu.events({
   'click [data-action=login]'(e, tmpl) {
       e.preventDefault();
       Meteor.loginWithGithub({requestPermissions: ['email']});
    },

    'click [data-action=logout]'(e, tmpl) {
        e.preventDefault();
        Meteor.logout();
    }
});

Template.loginMenu.helpers({
    isLoginServicesConfigured() {
        return Accounts.loginServicesConfigured();
    }
});