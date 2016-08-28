/**
 * Created by itamar on 8/28/16.
 */
import { Mongo } from 'meteor/mongo';
export const Permits = new Mongo.Collection('permits');

if(Meteor.isServer) {
    Meteor.publish('permits', function studentsPublication() {
        if (this.userId)
            return Permits.find();
        return [];
    });
}