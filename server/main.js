import { Meteor } from 'meteor/meteor';
import { Students } from '../imports/api/students.js'

Meteor.startup(() => {
  // code to run on server at startup
    ServiceConfiguration.configurations.upsert({service: 'github'}, {
       $set: {
           clientId: 'e360584356e4a8c5b757',
           secret: 'd812c0a13f020a32c08ad18525b4fb2495bd61e1',
           loginStyle: 'popup'
       }
    });

    function getUserInfo(accessToken) {
        let result = HTTP.get("https://api.github.com/user", {
            headers: {
                'User-Agent': 'Meteor'
            },

            params: {
                access_token: accessToken
            }
        });

        return _.pick(result.data, 'login', 'email');
    }

    Accounts.onCreateUser((options, user) => {
        user.profile = getUserInfo(user.services.github.accessToken);
        user.login = user.profile.login;
        user.email = user.profile.email;
        return user;
    });

    Accounts.onLogin((loginInfo)=> {
        let user = loginInfo.user;
        let accessToken = user.services.github.accessToken;
        let userInfo = getUserInfo(accessToken);
        Meteor.users.update({_id: user._id}, {
            $set: {
                profile: userInfo,
                login: userInfo.login,
                email: userInfo.email
            }
        });
    });

    Meteor.publish('user', function() {
        return Meteor.users.find({_id: this.userId}, {fields: {_id: 1, profile: 1, login: 1, email: 1}}
        )
    })
});
