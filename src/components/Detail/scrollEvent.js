var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
	// build scene
	var scene = new ScrollMagic.Scene({
		triggerElement: "#animate",
		triggerHook: 0,
		// reverse: false
	})
		.setPin("#animate")
	 	.setClassToggle("#animate", 'fade-in')
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	});








// var controller = new ScrollMagic.Controller();
//
// 	// build scenes
// 	new ScrollMagic.Scene({triggerElement: ".info-button"})
// 					.setClassToggle(".info-button", "fade-in") // add class toggle
// 					.addIndicators() // add indicators (requires plugin)
// 					.addTo(controller);
//
//
//
//
//
//
//




				// scene_pin
		    //  .setPin('.info-button')
		    //  .setClassToggle('.info-button', 'fade-in')
		    //  .addIndicators()
		    //  .addTo(controller);
// $(function () { // wait for document ready
// 		// init controller
// 		var controller = new ScrollMagic.Controller();
//
// 		// build tween
// 		var tween = TweenMax.to("#animate", 0.5, {ease: Linear.easeNone});
// 		console.log('tween:', tween);
// 		// build scene
// 		var scene = new ScrollMagic.Scene({triggerElement: "#multiDirect", duration: 400, offset: 250})
// 						.setTween(tween)
// 						.setPin("#animate")
// 						.addIndicators({name: "resize"}) // add indicators (requires plugin)
// 						.addTo(controller);
// 						console.log('scene:', scene);
		// init controller horizontal
		// var controller_h = new ScrollMagic.Controller({vertical: false});
		//
		// // build tween horizontal
		// var tween_h = TweenMax.to("#animate", 0.5, {rotation: 360, ease: Linear.easeNone});
		//
		// // build scene
		// var scene_h = new ScrollMagic.Scene({duration: 700})
		// 				.setTween(tween_h)
		// 				.setPin("#animate")
		// 				.addIndicators({name: "rotate"}) // add indicators (requires plugin)
		// 				.addTo(controller_h);
	// });

// var parallaxClass = $(this).data('parallax');
//  var element = $(this).find('.info-button');
// console.log(element);
// console.log(parallaxClass);
//  if (parallaxClass === 'bouble') {
//    new ScrollMagic.Scene({
//        triggerElement: this,
//        triggerHook: 0.7
//      })
//      .addIndicators()
//      .setClassToggle(element, parallaxClass)
//      .addTo(controller);
//  }
//
//
//
//
//
// init
// var ctrl = new ScrollMagic.Controller({
//     globalSceneOptions: {
//         triggerHook: 0.2
//     }
// });
//
// // Create scene
// $("info-button").each(function() {
//
//     new ScrollMagic.Scene({
//         triggerElement: this,
//         duration: '50%'
//     })
//     .setPin(this)
//     .addTo(ctrl);
// });






// if (window.matchMedia("(min-width: 780px)").matches) {
  // 780px 이상에서 사용할 JavaScript
// (function(global) {
//     'use strict';
//
//     window.Detectizr.detect();
//   })(this);
//
// (function (global, $) {
//     'use strict';
//
//   var ctrl = new ScrollMagic.Controller();
//   //info-button
//   var scene_pin = new ScrollMagic.Scene({
//     'triggerElement': '.info-button',
//     'triggerHook': 0,
//     // 'duration': 10,
//     // 'location': 10
//   });
//   console.log('scene_pin:', scene_pin);
//
//   scene_pin
//     .setPin('.info-button')
//     .setClassToggle('.info-button', 'fade-in')
//     .addIndicators()
//     .addTo(ctrl);
//
//   console.log('scene_pin2:', scene_pin);
//
//     // var scene = new ScrollMagic.Scene({
//     //   'triggerElement': '.map-section',
//     //   'triggerHook': 0,
//     //   // 'duration': 1000
//     //   // 'location': 600
//     // })
//     //   .setClassToggle('.map-section')
//     //   .addIndicators()
//     //   .addTo(ctrl);
//     //
//
// })(window, window.jQuery);
//
// console.log('this:', this);
// console.log('jquery:', window.jQuery);
//
// //
// // } else {
// //   // 1024px 미만에서 사용할 JavaScript
// //
// // }
