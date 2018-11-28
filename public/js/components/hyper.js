webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reviewLeftClicked = function reviewLeftClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    }
  };
};

var reviewRightClicked = function reviewRightClicked(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
};

var quotePicker = function quotePicker(state, actions) {
  return {
    quoteStatus: {
      currentQuote: state.quoteStatus.currentQuote + 1
    }
  };
};

var quoteReset = function quoteReset(state, actions) {
  return {
    quoteStatus: {
      currentQuote: 0
    }
  };
};

var actions = exports.actions = {
  reviewLeftClicked: reviewLeftClicked,
  reviewRightClicked: reviewRightClicked,
  quotePicker: quotePicker,
  quoteReset: quoteReset
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(14);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(8);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(12);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(10);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(11);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Promotions = __webpack_require__(9);

var _Promotions2 = _interopRequireDefault(_Promotions);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Map = __webpack_require__(7);

var _Map2 = _interopRequireDefault(_Map);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

var _TopBTN = __webpack_require__(13);

var _TopBTN2 = _interopRequireDefault(_TopBTN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Promotions2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Map2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopBTN2.default, { state: state, actions: actions })
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: "Prime Steak Restaurant",
  phone: "(407) 963 - 7465",
  location: "605 Orange Ave, Orlando, Fl 32806"
};

var specialMenuData = [{
  title: "Super BBQ Grill No Smoke",
  description: "Fried eggs, steak, baked potato or french fries, side of vegetables.",
  price: 25
}, {
  title: "Chicken Fingers",
  description: "Fried eggs, steak, baked potato or french fries, side of vegetables.",
  price: 25
}, {
  title: "All American Hamburger",
  description: "Fried eggs, steak, baked potato or french fries, side of vegetables.",
  price: 25
}];

var reviewsData = [{
  company: "The Food Network",
  author: "Sandra Bennington",
  authorInfo: "#1 Chef in America",
  highlight: "Best Restaurant in Orlando!",
  review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
}, {
  company: "Master Chefs",
  author: "Janice Gillingham",
  authorInfo: "Winner of The Chef Masters",
  highlight: "They know Steak",
  review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
}, {
  company: "The Cooking Channel",
  author: "Aubrey Williams",
  authorInfo: 'Host of "From the Nose to the Tummy"',
  highlight: "#1 guess of the Year",
  review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
}, {
  company: "Grillin' and Chillin'",
  author: "Daryl Courtney",
  authorInfo: "Grill Master 2018",
  highlight: "From the Stove to the Grill These Guys Can Cook",
  review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
}, {
  company: "Masters of Fire",
  author: "Jacob Smith",
  authorInfo: "International Chef",
  highlight: "Best Restaurant in The South East!",
  review: "Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B.n\
    Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman."
}];

var randomQuoteData = [{
  author: "Charles",
  quote: "Good Painting Is Like Good Cooking; It Can Be Tasted, But Not Explained."
}, {
  author: "John",
  quote: "I don't always eat out; but when I do I eat here"
}, {
  author: "Jill",
  quote: "When I eat here I feel so golden"
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  specialMenuData: specialMenuData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  },
  quoteStatus: {
    currentQuote: 0
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'ContactUs', 'class': 'texturebg' },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'div',
        { className: 'head' },
        (0, _hyperapp.h)(
          'h5',
          null,
          'Contact Us'
        ),
        (0, _hyperapp.h)(
          'h2',
          null,
          'We\'re Always Here To Help'
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { className: 'box' },
        (0, _hyperapp.h)(
          'div',
          { className: 'row' },
          (0, _hyperapp.h)(
            'div',
            { className: 'col-md-6' },
            (0, _hyperapp.h)(
              'div',
              { className: 'title' },
              'Orlando, Florida'
            ),
            (0, _hyperapp.h)(
              'h6',
              { className: 'Address' },
              '605 S. Orange Ave, ',
              (0, _hyperapp.h)('br', null),
              'Orlando, Fl 32801'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              (0, _hyperapp.h)(
                'strong',
                null,
                'email: '
              ),
              ' ',
              (0, _hyperapp.h)(
                'a',
                { href: 'mailto:info@primesteak.com' },
                'info@primesteak.com'
              )
            )
          ),
          (0, _hyperapp.h)(
            'div',
            { className: 'col-md-6' },
            (0, _hyperapp.h)(
              'h6',
              null,
              'Phone:'
            ),
            (0, _hyperapp.h)(
              'div',
              { className: 'title' },
              '(407) 586 - 3596'
            ),
            (0, _hyperapp.h)(
              'h6',
              null,
              'Lunch Service:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Friday, Saturday and Sunday ',
              (0, _hyperapp.h)('br', null),
              'from 12pm - 1:30pm'
            ),
            (0, _hyperapp.h)(
              'h6',
              null,
              'Dinner Service:'
            ),
            (0, _hyperapp.h)(
              'p',
              null,
              'Daily ',
              (0, _hyperapp.h)('br', null),
              'from 6pm - 9:30pm'
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        'footer',
        null,
        (0, _hyperapp.h)(
            'div',
            { className: 'container' },
            (0, _hyperapp.h)(
                'nav',
                { className: 'menu' },
                (0, _hyperapp.h)(
                    'a',
                    { href: '#OurStory' },
                    'Our Story'
                ),
                (0, _hyperapp.h)(
                    'a',
                    { href: '#Reviews' },
                    'Reviews'
                ),
                (0, _hyperapp.h)(
                    'a',
                    { href: '#SpecialMenu' },
                    'Special Menus'
                ),
                (0, _hyperapp.h)(
                    'a',
                    { href: '#' },
                    'Reservations'
                ),
                (0, _hyperapp.h)(
                    'a',
                    { href: '#Promotions' },
                    'Promotions'
                ),
                (0, _hyperapp.h)(
                    'a',
                    { href: '#ContactUs' },
                    'Contact Us'
                )
            ),
            (0, _hyperapp.h)(
                'ul',
                { className: 'social-media' },
                (0, _hyperapp.h)(
                    'li',
                    null,
                    (0, _hyperapp.h)(
                        'a',
                        { href: 'http://www.facebook.com', target: 'new' },
                        (0, _hyperapp.h)('i', { 'class': 'fab fa-facebook-f' })
                    )
                ),
                (0, _hyperapp.h)(
                    'li',
                    null,
                    (0, _hyperapp.h)(
                        'a',
                        { href: 'http://www.twitter.com', target: 'new' },
                        (0, _hyperapp.h)('i', { 'class': 'fab fa-twitter' })
                    )
                ),
                (0, _hyperapp.h)(
                    'li',
                    null,
                    (0, _hyperapp.h)(
                        'a',
                        { href: 'http://www.google.com', target: 'new' },
                        (0, _hyperapp.h)('i', { 'class': 'fab fa-google-plus-g' })
                    )
                ),
                (0, _hyperapp.h)(
                    'li',
                    null,
                    (0, _hyperapp.h)(
                        'a',
                        { href: 'http://www.youtube.com', target: 'new' },
                        (0, _hyperapp.h)('i', { 'class': 'fab fa-youtube' })
                    )
                )
            ),
            (0, _hyperapp.h)(
                'div',
                { className: 'copyright' },
                (0, _hyperapp.h)('i', { 'class': 'far fa-copyright' }),
                ' 2018 copyright'
            )
        )
    );
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'header',
    null,
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'div',
        { className: 'logo' },
        'Logo'
      ),
      (0, _hyperapp.h)(
        'nav',
        null,
        (0, _hyperapp.h)(
          'a',
          { href: '#OurStory' },
          'Our Story'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#Reviews' },
          'Reviews'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#SpecialMenu' },
          'Special Menus'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#' },
          'Reservations'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#Promotions' },
          'Promotions'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#ContactUs' },
          'Contact Us'
        ),
        (0, _hyperapp.h)(
          'a',
          { href: '#Map' },
          'Map'
        )
      )
    )
  );
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Map;

var _hyperapp = __webpack_require__(0);

function Map(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        'section',
        { id: 'Map' },
        (0, _hyperapp.h)(
            'div',
            { className: 'full-map' },
            (0, _hyperapp.h)('img', { src: '/img/map.png' })
        )
    );
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        'section',
        { id: 'OurStory' },
        (0, _hyperapp.h)(
            'div',
            { className: 'container' },
            (0, _hyperapp.h)(
                'div',
                { className: 'row' },
                (0, _hyperapp.h)(
                    'div',
                    { className: 'col-md-6' },
                    (0, _hyperapp.h)(
                        'h5',
                        null,
                        'Our Story'
                    ),
                    (0, _hyperapp.h)(
                        'h2',
                        null,
                        'Cooking is the art of adjustment'
                    ),
                    (0, _hyperapp.h)(
                        'p',
                        null,
                        'Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B. Austin hot chicken franzen tumblr glossier chicharrones. Put a bird on it tousled cloud bread gastropub actually banh mi, tumblr lomo everyday carry gentrify. Green juice vape neutra shaman.'
                    ),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'quote' },
                        (0, _hyperapp.h)(
                            'strong',
                            null,
                            'Peter David'
                        ),
                        ' - Master Chef at AI Restaurant'
                    ),
                    (0, _hyperapp.h)(
                        'a',
                        { href: '#', className: 'reserve-btn' },
                        'Reserve'
                    )
                ),
                (0, _hyperapp.h)(
                    'div',
                    { className: 'col-md-6' },
                    (0, _hyperapp.h)('div', { className: 'video-img' })
                )
            )
        )
    );
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Promotions;

var _hyperapp = __webpack_require__(0);

function Promotions(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

    return (0, _hyperapp.h)(
        'section',
        { id: 'Promotions', 'class': 'texturebg' },
        (0, _hyperapp.h)(
            'div',
            { className: 'container' },
            (0, _hyperapp.h)(
                'h5',
                { className: 'comp-title' },
                'Our News'
            ),
            (0, _hyperapp.h)(
                'h2',
                null,
                'Promotions & Events'
            ),
            (0, _hyperapp.h)(
                'div',
                { className: 'row' },
                (0, _hyperapp.h)(
                    'div',
                    { className: 'col-md-4' },
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'promo-img' },
                        (0, _hyperapp.h)('img', { src: '/img/italian.jpg' })
                    ),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'content' },
                        (0, _hyperapp.h)(
                            'h5',
                            null,
                            'Art Photography In ',
                            (0, _hyperapp.h)('br', null),
                            'Foody'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            { className: 'dash' },
                            '--------'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            null,
                            '596 N. Orange Ave, Orlando, FL 32806',
                            (0, _hyperapp.h)('br', null),
                            '10am - 3pm ',
                            (0, _hyperapp.h)('br', null),
                            ' Monday, Feb. 26, 2019'
                        )
                    )
                ),
                (0, _hyperapp.h)(
                    'div',
                    { className: 'col-md-4' },
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'content' },
                        (0, _hyperapp.h)(
                            'h5',
                            null,
                            'Become A Super Chef So ',
                            (0, _hyperapp.h)('br', null),
                            'Easy With Us'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            { className: 'dash' },
                            '--------'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            null,
                            '256 Delaney Ave, Orlando, FL 32806',
                            (0, _hyperapp.h)('br', null),
                            '12pm - 4pm ',
                            (0, _hyperapp.h)('br', null),
                            ' Saturday, Mar. 18, 2019'
                        )
                    ),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'promo-img' },
                        (0, _hyperapp.h)('img', { src: '/img/chef.jpg' })
                    )
                ),
                (0, _hyperapp.h)(
                    'div',
                    { className: 'col-md-4' },
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'promo-img' },
                        (0, _hyperapp.h)('img', { src: '/img/restaurant.jpg' })
                    ),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'content' },
                        (0, _hyperapp.h)(
                            'h5',
                            null,
                            'Best Sauteed ',
                            (0, _hyperapp.h)('br', null),
                            'Onions - Let\'s Enjoy!'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            { className: 'dash' },
                            '--------'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            null,
                            '4512 N. Orange Ave, Orlando, FL 32806',
                            (0, _hyperapp.h)('br', null),
                            '6pm - 9pm ',
                            (0, _hyperapp.h)('br', null),
                            ' Friday, Jun. 21, 2019'
                        )
                    )
                )
            )
        )
    );
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var quotes = function quotes() {
    console.log(state.quoteStatus.currentQuote);
    if (state.quoteStatus.currentQuote <= 2) {
      actions.quotePicker();
    } else if (state.quoteStatus.currentQuote == 2) {
      actions.quoteReset();
    }
  };

  var quoteScroll = setInterval(quotes, 5000);

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote', style: {
        backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, .1) 0, #000 100%), url(https://static01.nyt.com/images/2018/03/01/dining/01COOKING-CHICKEN-CURRY1/01COOKING-CHICKEN-CURRY1-threeByTwoMediumAt2X.jpg)'
      } },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"',
        state.randomQuoteData[state.quoteStatus.currentQuote].quote,
        '"'
      ),
      (0, _hyperapp.h)(
        'span',
        { className: 'author' },
        '- ',
        state.randomQuoteData[state.quoteStatus.currentQuote].author,
        ' -'
      )
    )
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
    var state = _ref.state,
        actions = _ref.actions;


    var currentReview = function currentReview() {
        return (0, _hyperapp.h)(
            'div',
            null,
            (0, _hyperapp.h)(
                'h5',
                { className: 'comp-title' },
                'Reviews'
            ),
            (0, _hyperapp.h)(
                'h2',
                null,
                state.reviewsData[state.reviewStatus.currentReview].company
            ),
            (0, _hyperapp.h)(
                'h4',
                null,
                '"',
                state.reviewsData[state.reviewStatus.currentReview].highlight,
                '"'
            ),
            (0, _hyperapp.h)(
                'p',
                null,
                state.reviewsData[state.reviewStatus.currentReview].review
            ),
            (0, _hyperapp.h)(
                'div',
                { className: 'author' },
                (0, _hyperapp.h)(
                    'strong',
                    null,
                    state.reviewsData[state.reviewStatus.currentReview].author
                ),
                ' - ',
                (0, _hyperapp.h)(
                    'em',
                    null,
                    state.reviewsData[state.reviewStatus.currentReview].authorInfo
                )
            )
        );
    };

    var leftClickBTN = function leftClickBTN() {
        if (state.reviewStatus.currentReview == 0) {} else {
            actions.reviewLeftClicked();
        }
    };

    var rightClickBTN = function rightClickBTN() {
        if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {} else {
            actions.reviewRightClicked();
        }
    };

    return (0, _hyperapp.h)(
        'section',
        { id: 'Reviews' },
        (0, _hyperapp.h)(
            'div',
            { className: 'container' },
            (0, _hyperapp.h)(
                'div',
                { className: 'row' },
                (0, _hyperapp.h)(
                    'div',
                    { className: 'col-md-8' },
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'side-img' },
                        (0, _hyperapp.h)('img', { src: 'https://img-aws.ehowcdn.com/600x600p/photos.demandstudios.com/getty/article/85/121/skd181312sdc.jpg' })
                    )
                ),
                (0, _hyperapp.h)(
                    'div',
                    { className: 'col-md-4' },
                    currentReview(),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'arrows' },
                        (0, _hyperapp.h)('i', { 'class': 'fas fa-arrow-left ' + (state.reviewStatus.currentReview > 0 ? 'ready' : 'cursor'), 'aria-hidden': 'true',
                            onclick: leftClickBTN }),
                        (0, _hyperapp.h)('i', { 'class': 'fas fa-arrow-right ' + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? 'cursor' : 'ready'), 'aria-hidden': 'true',
                            onclick: rightClickBTN })
                    )
                )
            )
        )
    );
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
    var state = _ref.state,
        actions = _ref.actions;


    var loopMenu = function loopMenu() {
        return state.specialMenuData.map(function (item) {
            return (0, _hyperapp.h)(
                'div',
                { className: 'col-md-4' },
                (0, _hyperapp.h)(
                    'div',
                    { className: 'box' },
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'box-img' },
                        (0, _hyperapp.h)(
                            'div',
                            { className: 'price-circle' },
                            item.price
                        )
                    ),
                    (0, _hyperapp.h)(
                        'span',
                        { className: 'title' },
                        item.title
                    ),
                    (0, _hyperapp.h)(
                        'p',
                        { className: 'details' },
                        item.description
                    )
                )
            );
        });
    };

    return (0, _hyperapp.h)(
        'section',
        { id: 'SpecialMenu', className: 'texturebg' },
        (0, _hyperapp.h)(
            'div',
            { className: 'container' },
            (0, _hyperapp.h)(
                'h5',
                { className: 'comp-title' },
                'Special Menu'
            ),
            (0, _hyperapp.h)(
                'h2',
                null,
                'Delicious Flavor of autumn'
            ),
            (0, _hyperapp.h)(
                'div',
                { className: 'row boxes' },
                loopMenu()
            ),
            (0, _hyperapp.h)(
                'a',
                { href: '#', className: 'link' },
                'View Full Menu'
            )
        )
    );
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TopBTN;

var _hyperapp = __webpack_require__(0);

function TopBTN(_ref) {
    var state = _ref.state,
        actions = _ref.actions;


    document.onscroll = function () {
        if (document.documentElement.scrollTop != 0) {
            document.getElementById('top-arrow').style.opacity = .8;
        } else {
            document.getElementById('top-arrow').style.opacity = 0;
        }
    };

    return (0, _hyperapp.h)(
        'div',
        { id: 'topBTN' },
        (0, _hyperapp.h)(
            'a',
            { href: '#TopImg' },
            (0, _hyperapp.h)('i', { id: 'top-arrow', 'class': 'fas fa-arrow-up' })
        )
    );
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'TopImg' },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'div',
        { className: 'title' },
        (0, _hyperapp.h)(
          'h5',
          null,
          'Welcome'
        ),
        (0, _hyperapp.h)(
          'h1',
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        'div',
        { className: 'contact-info' },
        (0, _hyperapp.h)(
          'div',
          { className: 'container' },
          (0, _hyperapp.h)(
            'div',
            { className: 'booking' },
            'Book Table Directly'
          ),
          (0, _hyperapp.h)(
            'h2',
            null,
            '(407) 963 - 7465'
          ),
          (0, _hyperapp.h)(
            'div',
            { className: 'hours' },
            'Opening Hours ',
            (0, _hyperapp.h)(
              'strong',
              null,
              'Mon - Fri:'
            ),
            ' 9am - 9pm',
            (0, _hyperapp.h)(
              'strong',
              null,
              ' weekend:'
            ),
            ' 9am - 11pm'
          )
        )
      )
    )
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: _globalState.globalState,
  view: function view(state, actions) {
    return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
  actions: _actions.actions,
  events: {
    action: function action(state, actions, _ref) {
      var name = _ref.name,
          data = _ref.data;

      console.group("Action Info");
      console.log("Name:", name);
      console.log("Data:", data);
      console.groupEnd();
    },
    load: function load(state, actions) {}
  }
});

/***/ })
],[15]);