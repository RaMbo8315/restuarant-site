webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  up: up,
  intro: intro,
  showMenu: showMenu
};

function up(state, actions) {
  return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
  console.log('Just ran my first action');
  return { count: state.count + 1 };
}

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

var _TopImg = __webpack_require__(11);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(7);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(10);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(8);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _Reviews = __webpack_require__(9);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Footer = __webpack_require__(5);

var _Footer2 = _interopRequireDefault(_Footer);

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
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
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
        'h5',
        null,
        'Contact Us'
      ),
      (0, _hyperapp.h)(
        'h2',
        null,
        'Delicious Flavors of Autumn'
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
              '605 Orange Ave, ',
              (0, _hyperapp.h)('br', null),
              'Orlando, Fl 32806'
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
          { href: '#ContactUs' },
          'Contact Us'
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),
/* 7 */
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
/* 8 */
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
        '"Good painting is like good cooking; it can be tasted, but not explained."'
      ),
      (0, _hyperapp.h)(
        'span',
        { className: 'author' },
        '- Charles -'
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
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

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
                    (0, _hyperapp.h)(
                        'h5',
                        { className: 'comp-title' },
                        'Reviews'
                    ),
                    (0, _hyperapp.h)(
                        'h2',
                        null,
                        'The Food Masters Say About Us'
                    ),
                    (0, _hyperapp.h)(
                        'h4',
                        null,
                        '"The Best Restaurant in Orlando!"'
                    ),
                    (0, _hyperapp.h)(
                        'p',
                        null,
                        'Lorem ipsum dolor amet church-key kinfolk tote bag, beard green juice tousled selfies helvetica PBR&B. Austin hot chicken franzen tumblr glossier chicharrones. Green juice vape neutra shaman.'
                    ),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'author' },
                        (0, _hyperapp.h)(
                            'strong',
                            null,
                            'Sandra Bennington'
                        ),
                        ' - ',
                        (0, _hyperapp.h)(
                            'em',
                            null,
                            'winner of the chef masters'
                        )
                    ),
                    (0, _hyperapp.h)(
                        'div',
                        { className: 'arrows' },
                        (0, _hyperapp.h)('i', { 'class': 'fas fa-arrow-left', 'aria-hidden': 'true' }),
                        (0, _hyperapp.h)('i', { 'class': 'fas fa-arrow-right ready', 'aria-hidden': 'true' })
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
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
    var state = _ref.state,
        actions = _ref.actions;

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
                (0, _hyperapp.h)(
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
                                '$25'
                            )
                        ),
                        (0, _hyperapp.h)(
                            'span',
                            { className: 'title' },
                            'Super BBQ Grill No Smoke'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            { className: 'details' },
                            'Fried eggs, steak, bake potatoe or french fries, side of vegetables'
                        )
                    )
                ),
                (0, _hyperapp.h)(
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
                                '$25'
                            )
                        ),
                        (0, _hyperapp.h)(
                            'span',
                            { className: 'title' },
                            'Super BBQ Grill No Smoke'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            { className: 'details' },
                            'Fried eggs, steak, bake potatoe or french fries, side of vegetables'
                        )
                    )
                ),
                (0, _hyperapp.h)(
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
                                '$25'
                            )
                        ),
                        (0, _hyperapp.h)(
                            'span',
                            { className: 'title' },
                            'Super BBQ Grill No Smoke'
                        ),
                        (0, _hyperapp.h)(
                            'p',
                            { className: 'details' },
                            'Fried eggs, steak, bake potatoe or french fries, side of vegetables'
                        )
                    )
                )
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
/* 11 */
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
          'Prime Steak',
          (0, _hyperapp.h)('br', null),
          'Restaurant'
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
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
    load: function load(state, actions) {
      actions.intro();
    }
  }
});

/***/ })
],[12]);