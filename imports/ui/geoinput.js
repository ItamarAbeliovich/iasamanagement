/**
 * Created by itamar on 8/29/16.
 */
import './templates/geoinput.jade';

Template.geoInput.onRendered(function() {
    this.autorun(function () {
        if (GoogleMaps.loaded()) {
            $("input[data-action='geocomplete']").geocomplete();
        }
    })
})