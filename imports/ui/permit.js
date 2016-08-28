import { Template } from 'meteor/templating';
import { Students } from '../api/students';
import { Permits } from '../api/permits';
import './templates/permit.jade';
import './templates/studentpill.jade';

Template.permit.onCreated(function permitOnCreated() {
    Meteor.subscribe('permits');
});

Template.permit.helpers({
    settingsFName() {
        return {
            position: "top",
            limit: 20,
            rules: [
                {
                    collection: Students,
                    field: fname,
                    template: Template.studentPill
                }
            ]
        }
    },
    settingsLName() {
        return {
            position: "top",
            limit: 20,
            rules: [
                {
                    collection: Students,
                    field: lname,
                    template: Template.studentPill
                }
            ]
        }
    }
});

Template.permit.events({
    'submit .new-permit'(e, tmpl) {
        e.preventDefault();

        const target = e.target;
        const fname = target.fname.value;
        const lname = target.lname.value;
        const location = target.location.value;

        var student = Students.findOne({fname: fname, lname: lname});

        Permits.insert({studentID: student._id, location: location})
        }
});