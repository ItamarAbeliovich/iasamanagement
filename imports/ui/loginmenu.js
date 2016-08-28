/**
 * Created by itamar on 8/28/16.
 */
// Login Menu
import './templates/loginmenu.jade';

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