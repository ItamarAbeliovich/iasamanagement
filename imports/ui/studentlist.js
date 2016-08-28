/**
 * Created by itamar on 8/28/16.
 */
import { Template } from 'meteor/templating';
import './templates/studentlist.jade';

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