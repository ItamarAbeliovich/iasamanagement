/**
 * Created by itamar on 8/28/16.
 */
// Login Menu
import './templates/loginmenu.jade';
import { Session } from 'meteor/session';

Template.loginMenu.onCreated(function loginMenuOnCreated() {
    Meteor.subscribe('user');
    Session.set('loginFailed', false);
})

Template.loginMenu.events({
    'click [data-action=login]'(e, tmpl) {
        e.preventDefault();
        Meteor.loginWithGithub({requestPermissions: ['email']});
    },

    'click [data-action=logout]'(e, tmpl) {
        e.preventDefault();
        Meteor.logout();
    },

    'submit #login-form'(e, tmpl) {
        e.preventDefault();

        var email = tmpl.find('#login-email').value;
        var password = tmpl.find('#login-password').value;

        Meteor.loginWithPassword(email, password, function(err) {
            if (err) {
                Session.set('loginFailed', true);
                console.log('LoginError: ' + err);
            }
            else
                Session.set('loginFailed', false);
        });
        return false;
    }
});

Template.loginMenu.helpers({
    isLoginServicesConfigured() {
        return Accounts.loginServicesConfigured();
    },

    loginFailed() {
        return Session.get('loginFailed');
    },

    user() {
        return Meteor.users.findOne();
    },

    email() {
        return Meteor.users.findOne().emails[0].address;
    }
});