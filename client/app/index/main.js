import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import './main.jade';
import '../../../imports/ui/studentlist.js';
import '../../../imports/ui/loginmenu.js';

Meteor.subscribe('user');
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

