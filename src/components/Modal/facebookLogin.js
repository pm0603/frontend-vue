function setLogin(token, id){
        console.log('setLogin!');
        console.log("token:",token);
        console.log("id:",id);
        // axios.post('/member',
        //     {
        //       "email" : token,
        //       "password" : id
        //     }).then(function(response) {
        //         'use strict';
        //         console.log("response:",response.data[0]);
        //         var data = response.data[0];
        //         if(data){
        //             // 아이디와 비번이 맞으면 첫번째 페이지로 이동하기
        //             console.log('환영합니다.');

        //         } else {
        //             // 다르다고 알람 띄워주기
        //             console.log('회원정보가 없습니다.');
        //         }
        //     })
        //     .catch(function(error) {
        //         console.error(error.message);
        //     });

    }
  function statusChangeCallback(response) {
    console.log('statusChangeCallback()');
    if (response.status === 'connected') {
        let accessToken =   response.authResponse.accessToken;
        let userID      =   response.authResponse.userID;
        setLogin(accessToken, userID);
    } else {
        console.log('please log into this app');
    }
  }

  function checkLoginState() {
    console.log('checkLoginState-function');
    FB.getLoginStatus(function(response) {
        // 응답을 처리하는 함수
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '1309084449153190',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

    FB.getLoginStatus(function(response) {
        // 응답을 처리하는 함수
        statusChangeCallback(response);
    });

    FB.login(function(response){
    // Handle the response object, like in statusChangeCallback() in our demo
        console.log('login!');

    });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/ko_KR/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
//   function testAPI() {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me', function(response) {
//       console.log('Successful login for: ' + response.name);
//       document.getElementById('status').innerHTML =
//         'Thanks for logging in, ' + response.name + '!';
//     });
//   }