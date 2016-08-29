/**
 * Created by itamar on 8/28/16.
 */
import { Template } from 'meteor/templating';
import { Students } from '../api/students.js';
import { Session } from 'meteor/session';
import './templates/studentlist.jade';
import './permit';

Template.studentList.onCreated(function studentListOnCreated() {
    Meteor.subscribe('students');
    Session.set('permitFormOpen', false);

});
Template.studentList.helpers({
    students() {
//        return [
//            {lname: "Abeliovich", fname: "Itamar", phone: "054-6930062", class: "יא2"}
//        ];
        return Students;
    },

    tableFields() {
        return [
            { key: 'lname', label: 'שם משפחה'},
            { key: 'fname', label: 'שם פרטי'},
            { key: 'phone', label: 'טלפון'},
            { key: 'class', label: 'כיתה'}
        ]
    },

    permitFormOpen() {
        return Session.get("permitFormOpen");
    }
});

Template.studentList.events({

});