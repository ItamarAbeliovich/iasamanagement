/**
 * Created by itamar on 8/28/16.
 */
import { Template } from 'meteor/templating';
import { Students } from '../api/students.js';
import './templates/studentlist.jade';

Template.studentList.onCreated(function studentListOnCreated() {
    Meteor.subscribe('students')
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
    }
});

Template.studentList.events({

});