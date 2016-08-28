import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import './main.jade';
import '../../../imports/ui/studentlist.js';

Meteor.subscribe('user');
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
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