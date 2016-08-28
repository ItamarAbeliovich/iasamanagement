/**
 * Created by itamar on 8/28/16.
 */
import { Mongo } from 'meteor/mongo';
 export const Students = new Mongo.Collection('students');

if(Meteor.isServer) {
    Meteor.publish('students', function studentsPublication() {
        if (this.userId)
            return Students.find();

        return null;
    });
}
