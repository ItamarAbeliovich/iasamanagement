import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Session } from 'meteor/session';
import './main.jade';
import '../../../imports/ui/studentlist.js';
import '../../../imports/ui/loginmenu.js';

Meteor.subscribe('user');

Meteor.startup(() => {
    GoogleMaps.load({
        key: 'AIzaSyDddDGSpx4zZxpNoaAScTYN22YfMRi2ooE',
        libraries: 'places'
    });
});