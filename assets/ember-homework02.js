"use strict";



define('ember-homework02/app', ['exports', 'ember-homework02/resolver', 'ember-load-initializers', 'ember-homework02/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('ember-homework02/components/book-item', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('ember-homework02/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _bsAccordion) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
define('ember-homework02/components/bs-accordion/item', ['exports', 'ember-bootstrap/components/bs-accordion/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-homework02/components/bs-accordion/item/body', ['exports', 'ember-bootstrap/components/bs-accordion/item/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-homework02/components/bs-accordion/item/title', ['exports', 'ember-bootstrap/components/bs-accordion/item/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ember-homework02/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _bsAlert) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
define('ember-homework02/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _bsButtonGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
define('ember-homework02/components/bs-button-group/button', ['exports', 'ember-bootstrap/components/bs-button-group/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-homework02/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _bsButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
define('ember-homework02/components/bs-carousel', ['exports', 'ember-bootstrap/components/bs-carousel'], function (exports, _bsCarousel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
define('ember-homework02/components/bs-carousel/slide', ['exports', 'ember-bootstrap/components/bs-carousel/slide'], function (exports, _slide) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
define('ember-homework02/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _bsCollapse) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
define('ember-homework02/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _bsDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
define('ember-homework02/components/bs-dropdown/button', ['exports', 'ember-bootstrap/components/bs-dropdown/button'], function (exports, _button) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
define('ember-homework02/components/bs-dropdown/menu', ['exports', 'ember-bootstrap/components/bs-dropdown/menu'], function (exports, _menu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
define('ember-homework02/components/bs-dropdown/menu/divider', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/divider'], function (exports, _divider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
define('ember-homework02/components/bs-dropdown/menu/item', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-homework02/components/bs-dropdown/menu/link-to', ['exports', 'ember-bootstrap/components/bs-dropdown/menu/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-homework02/components/bs-dropdown/toggle', ['exports', 'ember-bootstrap/components/bs-dropdown/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ember-homework02/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _bsForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
define('ember-homework02/components/bs-form/element', ['exports', 'ember-bootstrap/components/bs-form/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/control', ['exports', 'ember-bootstrap/components/bs-form/element/control'], function (exports, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/control/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/control/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/control/input', ['exports', 'ember-bootstrap/components/bs-form/element/control/input'], function (exports, _input) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/control/radio', ['exports', 'ember-bootstrap/components/bs-form/element/control/radio'], function (exports, _radio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/control/textarea', ['exports', 'ember-bootstrap/components/bs-form/element/control/textarea'], function (exports, _textarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/errors', ['exports', 'ember-bootstrap/components/bs-form/element/errors'], function (exports, _errors) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/feedback-icon', ['exports', 'ember-bootstrap/components/bs-form/element/feedback-icon'], function (exports, _feedbackIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/help-text', ['exports', 'ember-bootstrap/components/bs-form/element/help-text'], function (exports, _helpText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/label', ['exports', 'ember-bootstrap/components/bs-form/element/label'], function (exports, _label) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/layout/horizontal', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal'], function (exports, _horizontal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/layout/horizontal/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/layout/inline', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline'], function (exports, _inline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/layout/inline/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/inline/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/layout/vertical', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical'], function (exports, _vertical) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
define('ember-homework02/components/bs-form/element/layout/vertical/checkbox', ['exports', 'ember-bootstrap/components/bs-form/element/layout/vertical/checkbox'], function (exports, _checkbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
define('ember-homework02/components/bs-form/group', ['exports', 'ember-bootstrap/components/bs-form/group'], function (exports, _group) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
define('ember-homework02/components/bs-modal-simple', ['exports', 'ember-bootstrap/components/bs-modal-simple'], function (exports, _bsModalSimple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
define('ember-homework02/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _bsModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
define('ember-homework02/components/bs-modal/body', ['exports', 'ember-bootstrap/components/bs-modal/body'], function (exports, _body) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
define('ember-homework02/components/bs-modal/dialog', ['exports', 'ember-bootstrap/components/bs-modal/dialog'], function (exports, _dialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
define('ember-homework02/components/bs-modal/footer', ['exports', 'ember-bootstrap/components/bs-modal/footer'], function (exports, _footer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
define('ember-homework02/components/bs-modal/header', ['exports', 'ember-bootstrap/components/bs-modal/header'], function (exports, _header) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
define('ember-homework02/components/bs-modal/header/close', ['exports', 'ember-bootstrap/components/bs-modal/header/close'], function (exports, _close) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
define('ember-homework02/components/bs-modal/header/title', ['exports', 'ember-bootstrap/components/bs-modal/header/title'], function (exports, _title) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
define('ember-homework02/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _bsNav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
define('ember-homework02/components/bs-nav/item', ['exports', 'ember-bootstrap/components/bs-nav/item'], function (exports, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
define('ember-homework02/components/bs-nav/link-to', ['exports', 'ember-bootstrap/components/bs-nav/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-homework02/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _bsNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
define('ember-homework02/components/bs-navbar/content', ['exports', 'ember-bootstrap/components/bs-navbar/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('ember-homework02/components/bs-navbar/link-to', ['exports', 'ember-bootstrap/components/bs-navbar/link-to'], function (exports, _linkTo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
define('ember-homework02/components/bs-navbar/nav', ['exports', 'ember-bootstrap/components/bs-navbar/nav'], function (exports, _nav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
define('ember-homework02/components/bs-navbar/toggle', ['exports', 'ember-bootstrap/components/bs-navbar/toggle'], function (exports, _toggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
define('ember-homework02/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _bsPopover) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
define('ember-homework02/components/bs-popover/element', ['exports', 'ember-bootstrap/components/bs-popover/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-homework02/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _bsProgress) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
define('ember-homework02/components/bs-progress/bar', ['exports', 'ember-bootstrap/components/bs-progress/bar'], function (exports, _bar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
define('ember-homework02/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _bsTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
define('ember-homework02/components/bs-tab/pane', ['exports', 'ember-bootstrap/components/bs-tab/pane'], function (exports, _pane) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
define('ember-homework02/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _bsTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
define('ember-homework02/components/bs-tooltip/element', ['exports', 'ember-bootstrap/components/bs-tooltip/element'], function (exports, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
define('ember-homework02/components/edit-book-header', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        titlePhrase: Ember.computed('modelID', function () {
            return typeof this.get('modelID') == "undefined" ? "Новая книга:" : 'Редактирование книги:';
        }),
        didInsertElement: function didInsertElement() {
            this._super.apply(this, arguments);
        }
    });
});
define('ember-homework02/components/ember-popper-targeting-parent', ['exports', 'ember-popper/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('ember-homework02/components/ember-popper', ['exports', 'ember-popper/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define('ember-homework02/components/input-file', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    isFileChoosen: Ember.computed('uploadData', function () {
      return this.get('uploadData') && this.get('uploadData').files.length;
    }),

    ifRemoveButtonDisabled: Ember.computed('isFileChoosen', function () {
      return !this.get('isFileChoosen');
    }),

    fileName: Ember.computed('isFileChoosen', function () {
      return this.get('isFileChoosen') ? this.get('uploadData').files[0].name : 'Выберите файл';
    }),

    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var onFileAdd = function onFileAdd(e, uploadData) {
        // const hasFiles = uploadData.files.length > 0;
        // const fileName = hasFiles ? uploadData.files[0].name : 'Выберите файл';
        // this.set('fileName', fileName);
        _this.get('uploadDataChanged')(uploadData);
      };

      if (!this.$('.custom-file-input').fileupload('instance')) {
        // Initialize jQuery fileupload plugin (https://github.com/blueimp/jQuery-File-Upload/wiki/API).
        this.$('.custom-file-input').fileupload({
          // Disable autoUpload.
          autoUpload: false,

          // Type of data that is expected back from the server.
          dataType: 'json',

          // Maximum number of files to be selected and uploaded.
          maxNumberOfFiles: 1,

          // Enable single file uploads.
          singleFileUploads: true,

          // Disable drag&drop file adding.
          dropZone: null,

          // File add handler.
          add: onFileAdd
        });
      }
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      if (this.$('.custom-file-input').fileupload('instance')) {
        this.$('.custom-file-input').fileupload('destroy');
      }
    },


    actions: {
      removeFile: function removeFile() {
        Ember.set(this, 'uploadData', null);
      }
    }
  });
});
define('ember-homework02/components/input-tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports.default = Ember.Component.extend({
    didInsertElement: function didInsertElement() {
      var _this = this;

      this._super.apply(this, arguments);

      var el = this.$();

      Ember.set(this, 'addTag', function (e) {
        _this.tagAdded(e.item);
      });

      Ember.set(this, 'removeTag', function (e) {
        _this.tagRemoved(e.item);
      });

      el.on('itemAdded', this.addTag);
      el.on('itemRemoved', this.removeTag);
    },
    didReceiveAttrs: function didReceiveAttrs() {
      var tags = Ember.get(this, 'tags');
      //console.log('didReceiveAttrs: ', tags);
      (true && !(Ember.typeOf(tags) === 'array') && Ember.assert('Passed tags must be an array', Ember.typeOf(tags) === 'array'));

      Ember.set(this, '_tags', [].concat(_toConsumableArray(tags)));
    },
    didRender: function didRender() {
      var arraysAreEqual = function arraysAreEqual(arr1, arr2) {
        arr2 = arr2.itemsArray ? arr2.itemsArray : arr2;
        return Ember.$(arr1).not(arr2).length === 0 && Ember.$(arr2).not(arr1).length === 0;
      };

      var el = this.$();

      var currentValues = el.tagsinput('items');
      var tags = Ember.get(this, '_tags');

      if (!arraysAreEqual(tags, currentValues)) {
        el.tagsinput('removeAll');
        tags.forEach(function (tag) {
          el.tagsinput('add', tag);
        });
      }
    },
    tagAdded: function tagAdded(newTag) {
      Ember.get(this, '_tags').push(newTag);
      this.get('onChange')(this._tags);
      //console.log('tagAdded: ',  get(this, '_tags'));
    },
    tagRemoved: function tagRemoved(tag) {
      var tagIndex = Ember.get(this, '_tags').indexOf(tag);
      if (tagIndex > -1) {
        var part1 = Ember.get(this, '_tags').slice(0, tagIndex);
        var part2 = Ember.get(this, '_tags').slice(tagIndex + 1);
        Ember.set(this, '_tags', [].concat(_toConsumableArray(part1), _toConsumableArray(part2)));
        this.get('onChange')(this._tags);
      }
    },
    willDestroyElement: function willDestroyElement() {
      var el = this.$();
      el.off('itemAdded', this.addTag);
      el.off('itemRemoved', this.removeTag);
    },
    searchByTag: function searchByTag(tag) {
      console.log(tag);
    }
  });
});
define('ember-homework02/components/search-book', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({

        actions: {
            searchBooks: function searchBooks(event) {
                event.preventDefault();

                this.onsubmit({});
            }
        }
    });
});
define('ember-homework02/components/speaker-form', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        actions: {
            submitForm: function submitForm(event) {
                event.preventDefault();

                this.onsubmit({
                    id: this.get('idSpeaker'),
                    firstName: this.get('firstName'),
                    lastName: this.get('lastName'),
                    middleName: this.get('middleName')
                });
            }
        },

        didReceiveAttrs: function didReceiveAttrs() {
            this._super.apply(this, arguments);
            this.setProperties({
                idSpeaker: this.get('speaker.id') ? this.get('speaker.id') : undefined,
                firstName: this.get('speaker.firstName'),
                lastName: this.get('speaker.lastName'),
                middleName: this.get('speaker.middleName')
            });
        }
    });
});
define('ember-homework02/components/speaker-item', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Component.extend({
        actions: {
            deleteSpeaker: function deleteSpeaker(event) {
                event.preventDefault();

                this.onclick({
                    id: this.get('id'),
                    firstName: this.get('firstName'),
                    lastName: this.get('lastName'),
                    middleName: this.get('middleName')
                });
            }
        }
    });
});
define('ember-homework02/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('ember-homework02/controllers/books', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Controller.extend({
        dataService: Ember.inject.service('data'),
        queryParams: ["search", "tags"],
        search: '',
        tags: '',

        loadData: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var search, tags, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                this.set('isLoading', true);
                                search = typeof this.search == 'undefined' ? '' : this.search.replace("#", "").replace(",", "");
                                tags = typeof this.tags == 'undefined' ? '' : this.tags.replace("#", "").replace(",", "");

                                this.set('tagsBook', tags);
                                console.log("search=", search);
                                console.log("tags=", tags);
                                _context.next = 9;
                                return this.get('dataService').getBooks(search, tags);

                            case 9:
                                data = _context.sent;

                                this.set('model', data);
                                this.set('isLoading', false);
                                _context.next = 17;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](0);

                                this.send('error', new Error('Connection failed'));

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 14]]);
            }));

            function loadData() {
                return _ref.apply(this, arguments);
            }

            return loadData;
        }(),


        actions: {
            deleteBook: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(book) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.prev = 0;
                                    _context2.next = 3;
                                    return this.get('dataService').deleteBook(book);

                                case 3:
                                    console.log("book deleted ");
                                    //this.transitionToRoute("books", {queryParams: { search: '#' }});
                                    this.send('refreshBooks');
                                    _context2.next = 10;
                                    break;

                                case 7:
                                    _context2.prev = 7;
                                    _context2.t0 = _context2['catch'](0);

                                    this.send('error', new Error('Connection failed'));

                                case 10:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[0, 7]]);
                }));

                function deleteBook(_x) {
                    return _ref2.apply(this, arguments);
                }

                return deleteBook;
            }(),
            searchBooks: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    event.preventDefault();
                                    this.transitionToRoute("books", { queryParams: { search: this.searchBook, tags: this.tagsBook } });

                                case 2:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function searchBooks(_x2) {
                    return _ref3.apply(this, arguments);
                }

                return searchBooks;
            }()
        }
    });
});
define('ember-homework02/controllers/edit-book', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  exports.default = Ember.Controller.extend({
    dataService: Ember.inject.service('data'),

    actions: {
      changeTags: function changeTags(newTags) {
        Ember.set(this, 'tags', [].concat(_toConsumableArray(newTags)));
        console.log(Ember.get(this, 'tags'));
      },
      saveBook: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var uploadData;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  e.preventDefault();
                  console.log(Ember.get(this, 'tags'));
                  _context.prev = 2;

                  Ember.set(this, 'isUploadingFile', true);
                  uploadData = Ember.get(this, 'uploadData');
                  _context.next = 7;
                  return this.get("dataService").saveBook({
                    title: this.get('model.title'),
                    author: this.get('model.author'),
                    pages: this.get('model.pages'),
                    cover: this.get('model.cover'),
                    tags: Ember.get(this, 'tags'),
                    description: this.get('model.description'),
                    rating: this.get('model.rating')
                  }, uploadData, this.get('model.id'));

                case 7:

                  Ember.set(this, 'isUploadingFile', false);
                  this.transitionToRoute('books');
                  _context.next = 14;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](2);

                  this.send('error', new Error('Connection failed'));

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 11]]);
        }));

        function saveBook(_x) {
          return _ref.apply(this, arguments);
        }

        return saveBook;
      }(),
      changeUploadData: function changeUploadData(uploadData) {
        Ember.set(this, 'uploadData', uploadData);
      },
      change: function change() {
        Ember.set(this, 'tags', ['1', '2', '3']);
      },
      goToTemp: function goToTemp() /* e */{
        //e.preventDefault();
        this.transitionToRoute('temp');
      }
    },

    reset: function reset() {
      Ember.set(this, 'isUploadingFile', false);
      Ember.set(this, 'bookName', '');
      Ember.set(this, 'authorFIO', '');
      Ember.set(this, 'pagesCount', '');
      Ember.set(this, 'bookDescriptionURL', '');
      Ember.set(this, 'tags', []);
      Ember.set(this, 'uploadData', null);
    }
  });
});
define('ember-homework02/controllers/edit-speaker', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Controller.extend({
        dataService: Ember.inject.service('data'),
        actions: {
            saveSpeaker: function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(speaker) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;

                                    if (!(typeof speaker.id == "undefined")) {
                                        _context.next = 6;
                                        break;
                                    }

                                    _context.next = 4;
                                    return this.get("dataService").createSpeaker(speaker);

                                case 4:
                                    _context.next = 8;
                                    break;

                                case 6:
                                    _context.next = 8;
                                    return this.get("dataService").updateSpeaker(speaker);

                                case 8:

                                    this.transitionToRoute('speakers');
                                    _context.next = 14;
                                    break;

                                case 11:
                                    _context.prev = 11;
                                    _context.t0 = _context['catch'](0);

                                    this.send('error', new Error('Connection failed'));

                                case 14:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[0, 11]]);
                }));

                function saveSpeaker(_x) {
                    return _ref.apply(this, arguments);
                }

                return saveSpeaker;
            }()
        }
    });
});
define('ember-homework02/controllers/speakers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Controller.extend({
        dataService: Ember.inject.service('data'),
        queryParams: ["search"],
        search: '',

        loadData: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var search, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                this.set('isLoading', true);
                                search = typeof this.search == 'undefined' ? '' : this.search.replace("#", "").replace(",", "");

                                console.log("search=", search);
                                _context.next = 6;
                                return this.get('dataService').getSpeakers(search);

                            case 6:
                                data = _context.sent;

                                this.set('model', data);
                                this.set('isLoading', false);
                                _context.next = 14;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](0);

                                this.send('error', new Error('Connection failed'));

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 11]]);
            }));

            function loadData() {
                return _ref.apply(this, arguments);
            }

            return loadData;
        }(),


        actions: {
            deleteSpeaker: function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(speaker) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.prev = 0;
                                    _context2.next = 3;
                                    return this.get('dataService').deleteSpeaker(speaker);

                                case 3:
                                    console.log("speaker deleted ");
                                    this.send('refreshSpeakers');
                                    _context2.next = 10;
                                    break;

                                case 7:
                                    _context2.prev = 7;
                                    _context2.t0 = _context2['catch'](0);

                                    this.send('error', new Error('Connection failed'));

                                case 10:
                                case 'end':
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this, [[0, 7]]);
                }));

                function deleteSpeaker(_x) {
                    return _ref2.apply(this, arguments);
                }

                return deleteSpeaker;
            }(),
            searchSpeakers: function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    event.preventDefault();
                                    this.transitionToRoute("speakers", { queryParams: { search: this.searchBook } });

                                case 2:
                                case 'end':
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this);
                }));

                function searchSpeakers(_x2) {
                    return _ref3.apply(this, arguments);
                }

                return searchSpeakers;
            }()
        }
    });
});
define('ember-homework02/helpers/-link-to-params', ['exports', 'ember-angle-bracket-invocation-polyfill/helpers/-link-to-params'], function (exports, _linkToParams) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _linkToParams.default;
    }
  });
});
define('ember-homework02/helpers/app-version', ['exports', 'ember-homework02/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    var versionOnly = hash.versionOnly || hash.hideSha;
    var shaOnly = hash.shaOnly || hash.hideVersion;

    var match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('ember-homework02/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _bsContains) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
define('ember-homework02/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _bsEq) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function () {
      return _bsEq.eq;
    }
  });
});
define('ember-homework02/helpers/cancel-all', ['exports', 'ember-concurrency/helpers/cancel-all'], function (exports, _cancelAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
define('ember-homework02/helpers/env', ['exports', 'ember-homework02/helpers/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.env = env;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function env(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
        propertyName = _ref2[0];

    return Ember.get(_environment.default, propertyName);
  }

  exports.default = Ember.Helper.helper(env);
});
define('ember-homework02/helpers/get-book-rating', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBookRating = getBookRating;
  function getBookRating(params /*, hash*/) {
    var rating = params[0];
    return Ember.String.htmlSafe('<div class="progress-bar" role="progressbar" style="width: ' + rating + '%;" aria-valuenow="' + rating + '" aria-valuemin="0" aria-valuemax="100">' + rating + '%</div>');
  }

  exports.default = Ember.Helper.helper(getBookRating);
});
define('ember-homework02/helpers/get-book-tags', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBookTags = getBookTags;
  function getBookTags(params /*, hash*/) {
    var tags = "";
    if (typeof params[0] == 'undefined') return tags;
    var tags_array = params[0];
    if (tags_array.length === 0) return tags;

    tags = '<a href="#" class="tag-link"><span class="small">' + tags_array[0] + '</span></a>';

    for (var i = 1; i < tags_array.length; i++) {
      tags = tags + (', <a href="#" class="tag-link"><span class="small">' + tags_array[i] + '</span></a>');
    }
    return Ember.String.htmlSafe(tags);
  }

  exports.default = Ember.Helper.helper(getBookTags);
});
define("ember-homework02/helpers/get-local-file-name", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLocalFileName = getLocalFileName;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  function getLocalFileName(params /*, hash*/) {
    var _params = _slicedToArray(params, 1),
        relative_path = _params[0];

    var str_array = relative_path.split("/");
    return str_array[str_array.length - 1];
  }

  exports.default = Ember.Helper.helper(getLocalFileName);
});
define("ember-homework02/helpers/get-tags-string", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getTagsString = getTagsString;
  function getTagsString(params /*, hash*/) {
    var tags_array = params[0];
    var tags = "";
    if (tags_array.length === 0) return tags;

    tags = tags_array[0];
    for (var i = 1; i < tags_array.length; i++) {
      tags = tags + ", " + tags_array[i];
    }
    return tags;
  }

  exports.default = Ember.Helper.helper(getTagsString);
});
define('ember-homework02/helpers/on-document', ['exports', 'ember-on-helper/helpers/on-document'], function (exports, _onDocument) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
define('ember-homework02/helpers/on-window', ['exports', 'ember-on-helper/helpers/on-window'], function (exports, _onWindow) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
define('ember-homework02/helpers/on', ['exports', 'ember-on-helper/helpers/on'], function (exports, _on) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
define('ember-homework02/helpers/perform', ['exports', 'ember-concurrency/helpers/perform'], function (exports, _perform) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
define('ember-homework02/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define("ember-homework02/helpers/prepare-tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.prepareTags = prepareTags;
  function prepareTags(params /*, hash*/) {

    if (!params[0]) return params;
    var length = params[0].length;
    for (var i = 0; i < length - 1; i++) {
      params[0][i] = "#" + params[0][i] + ",";
    }
    params[0][length - 1] = "#" + params[0][length - 1];
    return params[0];
  }

  exports.default = Ember.Helper.helper(prepareTags);
});
define('ember-homework02/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('ember-homework02/helpers/task', ['exports', 'ember-concurrency/helpers/task'], function (exports, _task) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
define('ember-homework02/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-homework02/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('ember-homework02/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ember-homework02/initializers/ember-concurrency', ['exports', 'ember-concurrency/initializers/ember-concurrency'], function (exports, _emberConcurrency) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
define('ember-homework02/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('ember-homework02/initializers/export-application-global', ['exports', 'ember-homework02/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ember-homework02/initializers/load-bootstrap-config', ['exports', 'ember-homework02/config/environment', 'ember-bootstrap/config'], function (exports, _environment, _config) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  exports.default = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define("ember-homework02/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('ember-homework02/modifiers/focus-trap', ['exports', 'ember-focus-trap/modifiers/focus-trap'], function (exports, _focusTrap) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
define('ember-homework02/modifiers/ref', ['exports', 'ember-ref-modifier/modifiers/ref'], function (exports, _ref) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ref.default;
    }
  });
});
define('ember-homework02/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('ember-homework02/router', ['exports', 'ember-homework02/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('books');
    this.route('speakers');
    this.route('edit-book', { path: '/edit-book/:id' });
    this.route('edit-speaker', { path: '/edit-speaker/:id' });
    this.route('create-book');
    this.route('404', { path: '*path' });
    this.route('error', { path: '/:error' });
  });

  exports.default = Router;
});
define('ember-homework02/routes/404', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('ember-homework02/routes/application', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        actions: {
            error: function error(_error, transition) {
                if (transition) {
                    transition.abort();
                }
                this.intermediateTransitionTo('error', { error: _error.message });
            }
        }
    });
});
define('ember-homework02/routes/books', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Route.extend({
        dataService: Ember.inject.service('data'),

        queryParams: {
            search: {
                refreshModel: true
            },
            tags: {
                refreshModel: true
            }
        },

        model: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
                var search = _ref.search,
                    tags = _ref.tags;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', {
                                    isLoading: true
                                });

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function model(_x) {
                return _ref2.apply(this, arguments);
            }

            return model;
        }(),
        setupController: function setupController(controller, model) {
            this._super.apply(this, arguments);
            controller.set('isLoading', true);
            controller.loadData();
        },
        beforeModel: function beforeModel(transition) {
            var _this = this;

            var chi = transition.router.currentHandlerInfos;
            var currentRouteName = this.get('routeName');
            var prevRouteName = '';
            if (chi && chi.length > 0) {
                var lastRouteName = chi[chi.length - 1].name;
                prevRouteName = lastRouteName === 'loading' ? chi[chi.length - 2].name : lastRouteName;
            }

            if (prevRouteName != currentRouteName && prevRouteName !== 'application') {
                transition.promise.then(function () {
                    _this.send('refreshBooks');
                });
            }
        },


        actions: {
            refreshBooks: function refreshBooks() {
                this.refresh();
            }
        }
    });
});
define('ember-homework02/routes/edit-book', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        dataService: Ember.inject.service('data'),

        model: function model(_ref) {
            var id = _ref.id;

            if (id === "new") {
                return Ember.Object.create({
                    "cover": "",
                    "title": "",
                    "author": "",
                    "pages": "",
                    "tags": [],
                    "rating": 0,
                    "description": "https://empty.com"
                });
            } else return this.get("dataService").getBook(id);
        }
    });
});
define('ember-homework02/routes/edit-speaker', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        dataService: Ember.inject.service('data'),

        model: function model(_ref) {
            var id = _ref.id;

            if (id === "new") {
                return Ember.Object.create({
                    "firstName": "",
                    "lastName": "",
                    "middleName": "",
                    "foto": "/images/speaker.jpg"
                });
            } else return this.get("dataService").getSpeaker(id);
        }
    });
});
define('ember-homework02/routes/error', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('ember-homework02/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('ember-homework02/routes/speakers', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    exports.default = Ember.Route.extend({
        dataService: Ember.inject.service('data'),

        queryParams: {
            search: {
                refreshModel: true
            },
            tags: {
                refreshModel: true
            }
        },

        model: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt('return', {
                                    isLoading: true
                                });

                            case 1:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function model() {
                return _ref.apply(this, arguments);
            }

            return model;
        }(),
        setupController: function setupController(controller) {
            this._super.apply(this, arguments);
            controller.set('isLoading', true);
            controller.loadData();
        },
        beforeModel: function beforeModel(transition) {
            var _this = this;

            var chi = transition.router.currentHandlerInfos;
            var currentRouteName = this.get('routeName');
            var prevRouteName = '';
            if (chi && chi.length > 0) {
                var lastRouteName = chi[chi.length - 1].name;
                prevRouteName = lastRouteName === 'loading' ? chi[chi.length - 2].name : lastRouteName;
            }

            if (prevRouteName != currentRouteName && prevRouteName !== 'application') {
                transition.promise.then(function () {
                    _this.send('refreshSpeakers');
                });
            }
        },


        actions: {
            refreshSpeakers: function refreshSpeakers() {
                this.refresh();
            }
        }
    });
});
define('ember-homework02/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('ember-homework02/services/data', ['exports', 'ember-homework02/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  exports.default = Ember.Service.extend({
    getBooks: function getBooks(search, tags) {
      //http://localhost:3000/books?q=Art&tags_like=bestseller
      var queryParams = '';
      if (search) {
        queryParams = '?q=' + search;
        if (tags) {
          queryParams = '?q=' + search + '&tags_like=' + tags;
        }
      } else {
        if (tags) {
          queryParams = '?tags_like=' + tags;
        }
      }

      return fetch(_environment.default.backendURL + '/books' + queryParams).then(function (response) {
        return response.json();
      });
    },
    getBook: function getBook(id) {
      return fetch(_environment.default.backendURL + '/books/' + id).then(function (response) {
        return response.json();
      });
    },
    createBook: function createBook(book) {
      return fetch(_environment.default.backendURL + '/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      }).then(function (response) {
        return response.json();
      });
    },
    updateBook: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(book, bookID) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt('return', fetch(_environment.default.backendURL + '/books/' + bookID, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(book)
                }).then(function (response) {
                  return response.json();
                }));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateBook(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return updateBook;
    }(),
    saveBook: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(book, uploadData, bookID) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt('return', new Promise(function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
                    var savedBookPromise, savedBook;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.prev = 0;
                            savedBookPromise = void 0;

                            if (!(typeof bookID == "undefined")) {
                              _context3.next = 8;
                              break;
                            }

                            _context3.next = 5;
                            return _this.createBook(book, uploadData);

                          case 5:
                            savedBookPromise = _context3.sent;
                            _context3.next = 11;
                            break;

                          case 8:
                            _context3.next = 10;
                            return _this.updateBook(book, bookID);

                          case 10:
                            savedBookPromise = _context3.sent;

                          case 11:
                            savedBook = savedBookPromise;


                            if (!uploadData) {
                              resolve();
                            }

                            uploadData.url = '' + _environment.default.fileUploadURL;
                            uploadData.submit().done(function () {
                              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(result /*, textStatus, jqXhr*/) {
                                var dataToUpload;
                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                  while (1) {
                                    switch (_context2.prev = _context2.next) {
                                      case 0:
                                        _context2.prev = 0;
                                        dataToUpload = {
                                          entityName: 'books',
                                          id: savedBook.id,
                                          fileName: result.filename
                                        };
                                        _context2.next = 4;
                                        return fetch(_environment.default.backendURL + '/saveURL', {
                                          method: 'POST',
                                          headers: {
                                            'Content-Type': 'application/json'
                                          },
                                          body: JSON.stringify(dataToUpload)
                                        });

                                      case 4:
                                        // eslint-disable-next-line no-console          
                                        resolve();
                                        _context2.next = 10;
                                        break;

                                      case 7:
                                        _context2.prev = 7;
                                        _context2.t0 = _context2['catch'](0);

                                        reject(_context2.t0);

                                      case 10:
                                      case 'end':
                                        return _context2.stop();
                                    }
                                  }
                                }, _callee2, _this, [[0, 7]]);
                              }));

                              return function (_x8) {
                                return _ref4.apply(this, arguments);
                              };
                            }()).fail(function (jqXhr, textStatus, errorThrown) {
                              reject(errorThrown);
                            });
                            _context3.next = 20;
                            break;

                          case 17:
                            _context3.prev = 17;
                            _context3.t0 = _context3['catch'](0);

                            reject(_context3.t0);

                          case 20:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, _this, [[0, 17]]);
                  }));

                  return function (_x6, _x7) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 1:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function saveBook(_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
      }

      return saveBook;
    }(),
    deleteBook: function deleteBook(book) {
      return fetch(_environment.default.backendURL + '/books/' + book.id, { method: 'DELETE' });
    },
    getSpeakers: function getSpeakers(search) {
      var queryParams = '';
      if (search) {
        queryParams = '?q=' + search;
      }
      return fetch(_environment.default.backendURL + '/speakers' + queryParams).then(function (response) {
        return response.json();
      });
    },
    getSpeaker: function getSpeaker(id) {
      return fetch(_environment.default.backendURL + '/speakers/' + id).then(function (response) {
        return response.json();
      });
    },
    deleteSpeaker: function deleteSpeaker(speaker) {
      return fetch(_environment.default.backendURL + '/speakers/' + speaker.id, { method: 'DELETE' });
    },
    updateSpeaker: function updateSpeaker(speaker) {
      return fetch(_environment.default.backendURL + '/speakers/' + speaker.id, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker)
      });
    },
    createSpeaker: function createSpeaker(speaker) {
      return fetch(_environment.default.backendURL + '/speakers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(speaker)
      });
    }
  });
});
define("ember-homework02/templates/404", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "8x3BXtTG", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100 ptop-bottom\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"        \"],[6,\"img\"],[10,\"src\",\"/images/404image.gif\"],[10,\"alt\",\"loading\"],[8],[9],[0,\"\\n\"]],\"parameters\":[]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/404.hbs" } });
});
define("ember-homework02/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eqvhqgOj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"ember-view\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"ember-view\"],[8],[0,\"\\n      \"],[6,\"nav\"],[10,\"class\",\"navbar fixed-top navbar-expand-lg navbar-light bg-light\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"          \"],[6,\"img\"],[10,\"src\",\"/images/logo-dark.png\"],[10,\"width\",\"30\"],[10,\"height\",\"30\"],[10,\"class\",\"d-inline-block align-top\"],[10,\"alt\",\"\"],[10,\"loading\",\"lazy\"],[8],[9],[0,\"\\n          Книжный клуб\\n\"]],\"parameters\":[]},null],[0,\"          \"],[6,\"button\"],[10,\"class\",\"navbar-toggler\"],[10,\"data-toggle\",\"collapse\"],[10,\"data-target\",\"#navbarContent\"],[10,\"aria-controls\",\"navbarSupportedContent\"],[10,\"aria-expanded\",\"false\"],[10,\"aria-label\",\"Открыть меню\"],[10,\"type\",\"button\"],[8],[0,\"\\n              \"],[6,\"span\"],[10,\"class\",\"navbar-toggler-icon\"],[8],[9],[0,\"\\n          \"],[9],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"collapse navbar-collapse\"],[10,\"id\",\"navbarContent\"],[8],[0,\"\\n              \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav navigation-main\"],[8],[0,\"\\n                  \"],[6,\"li\"],[10,\"class\",\"nav-item active\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"                      Рабочий стол \"],[6,\"span\"],[10,\"class\",\"sr-only\"],[8],[0,\"(текущий)\"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                  \"],[9],[0,\"\\n                  \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                      \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"meetings.html\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                      \"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"Книги\"]],\"parameters\":[]},null],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                      \"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"nav-link\"]],{\"statements\":[[0,\"Спикеры\"]],\"parameters\":[]},null],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                      \"],[6,\"a\"],[10,\"class\",\"nav-link text-success\"],[10,\"href\",\"#\"],[8],[0,\"Оставить заявку\"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                      \"],[6,\"a\"],[10,\"class\",\"nav-link text-primary\"],[10,\"href\",\"#\"],[8],[0,\"Запланировать\"],[9],[0,\"\\n                  \"],[9],[0,\"\\n              \"],[9],[0,\"\\n              \"],[6,\"ul\"],[10,\"class\",\"nav navbar-nav\"],[8],[0,\"\\n                  \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                      \"],[6,\"a\"],[10,\"class\",\"nav-link text-info\"],[10,\"href\",\"register.html\"],[8],[0,\"Регистрация\"],[9],[0,\"\\n                  \"],[9],[0,\"\\n                  \"],[6,\"li\"],[10,\"class\",\"nav-item\"],[8],[0,\"\\n                      \"],[6,\"a\"],[10,\"class\",\"nav-link\"],[10,\"href\",\"login.html\"],[8],[0,\"Войти\"],[9],[0,\"\\n                  \"],[9],[0,\"\\n              \"],[9],[0,\"\\n          \"],[9],[0,\"\\n      \"],[9],[0,\"\\n      \\n      \"],[6,\"div\"],[10,\"class\",\"container h-100 ptop-bottom\"],[8],[0,\"\\n          \"],[1,[20,\"outlet\"],false],[0,\"\\n      \"],[9],[0,\"\\n\\n      \"],[6,\"footer\"],[10,\"class\",\"footer\"],[8],[0,\"\\n          \"],[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n              \"],[6,\"span\"],[8],[0,\"© New Platform Ltd., 2022\"],[9],[0,\"\\n          \"],[9],[0,\"\\n      \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/application.hbs" } });
});
define("ember-homework02/templates/books", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "vXBAhxuq", "block": "{\"symbols\":[\"book\"],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Книги\"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-book\",\"new\"],[[\"tagName\",\"class\",\"type\",\"title\"],[\"button\",\"btn btn-outline-primary my-2\",\"button\",\"Добавить книгу\"]],{\"statements\":[[0,\"            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"searchBooks\"],null],null],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"value\",\"class\",\"type\",\"placeholder\",\"aria-label\"],[[22,[\"searchBook\"]],\"form-control mr-2 search-long\",\"search\",\"Найти по полям\",\"Найти по полям\"]]],false],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n            \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"searchBooks\"],null],null],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"value\",\"class\",\"type\",\"placeholder\",\"aria-label\"],[[22,[\"tagsBook\"]],\"form-control mr-2\",\"search\",\"Поиск по тегам\",\"Найти по тегам\"]]],false],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Поиск\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\\n\"],[4,\"if\",[[21,0,[\"isLoading\"]]],null,{\"statements\":[[0,\"        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[6,\"img\"],[10,\"src\",\"/images/loading.gif\"],[10,\"alt\",\"loading\"],[8],[9],[0,\"Loading ...\"],[9],[0,\"         \\n\"]],\"parameters\":[]},{\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3 fix-margin\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n                \"],[1,[26,\"book-item\",null,[[\"book\"],[[21,1,[]]]]],false],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n                    \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                            \"],[6,\"a\"],[11,\"href\",[27,[[21,1,[\"description\"]]]]],[10,\"class\",\"card-link line-offset\"],[8],[0,\"Описание\"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                        \"],[6,\"div\"],[10,\"class\",\"coltext-right\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-book\",[21,1,[\"id\"]]],[[\"tagName\",\"class\"],[\"button\",\"btn btn-edit\"]],{\"statements\":[[0,\"                            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                            \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                            \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteBook\",[21,1,[]]],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                                    \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                                \"],[9],[0,\"\\n                            \"],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/books.hbs" } });
});
define("ember-homework02/templates/components/book-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "PaWzd3JP", "block": "{\"symbols\":[\"tag\"],\"statements\":[[6,\"img\"],[11,\"src\",[22,[\"book\",\"cover\"]],null],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Обложка книги\"],[8],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"card-header\"],[8],[0,\"\\n    \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[22,[\"book\",\"title\"]],false],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"ul\"],[10,\"class\",\"list-group list-group-flush\"],[8],[0,\"\\n    \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n        \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Автор\"],[9],[0,\": \"],[1,[22,[\"book\",\"author\"]],false],[9],[0,\"\\n        \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Количество страниц\"],[9],[0,\": \"],[1,[22,[\"book\",\"pages\"]],false],[9],[0,\"\\n        \"],[6,\"div\"],[8],[6,\"strong\"],[8],[0,\"Теги\"],[9],[0,\": \\n\"],[4,\"each\",[[26,\"prepare-tags\",[[22,[\"book\",\"tags\"]]],null]],null,{\"statements\":[[4,\"link-to\",[\"books\",[26,\"query-params\",null,[[\"tags\"],[[21,1,[]]]]]],[[\"class\"],[\"tag-link\"]],{\"statements\":[[0,\"                \"],[6,\"span\"],[10,\"class\",\"small\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"li\"],[10,\"class\",\"list-group-item\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                Рейтинг:\\n            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"progress\"],[8],[0,\"\\n                    \"],[1,[26,\"get-book-rating\",[[22,[\"book\",\"rating\"]]],null],false],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/components/book-item.hbs" } });
});
define("ember-homework02/templates/components/edit-book-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OEoTI8uL", "block": "{\"symbols\":[],\"statements\":[[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[1,[20,\"titlePhrase\"],false],[0,\" \"],[1,[20,\"title\"],false],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/components/edit-book-header.hbs" } });
});
define('ember-homework02/templates/components/ember-popper-targeting-parent', ['exports', 'ember-popper/templates/components/ember-popper-targeting-parent'], function (exports, _emberPopperTargetingParent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
define('ember-homework02/templates/components/ember-popper', ['exports', 'ember-popper/templates/components/ember-popper'], function (exports, _emberPopper) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
define("ember-homework02/templates/components/input-file", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "q7fxk9CA", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"custom-file\"],[8],[0,\"\\n  \"],[6,\"input\"],[10,\"class\",\"custom-file-input\"],[10,\"id\",\"customFile\"],[10,\"lang\",\"ru\"],[10,\"type\",\"file\"],[8],[9],[0,\"\\n  \"],[6,\"label\"],[11,\"class\",[27,[\"custom-file-label form-control-lg \",[26,\"if\",[[22,[\"isFileChoosen\"]],\"\",\"placeholder-color\"],null]]]],[10,\"for\",\"customFile\"],[10,\"data-browse\",\"Выбрать\"],[8],[0,\"\\n    \"],[1,[26,\"if\",[[22,[\"isFileChoosen\"]],[22,[\"fileName\"]],[22,[\"oldFileName\"]]],null],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[6,\"div\"],[10,\"class\",\"input-group-append\"],[8],[0,\"\\n  \"],[6,\"button\"],[10,\"class\",\"btn btn-outline-secondary custom-file-clear\"],[11,\"disabled\",[20,\"ifRemoveButtonDisabled\"],null],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"removeFile\"],null],null],[10,\"type\",\"button\"],[8],[0,\"X\"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/components/input-file.hbs" } });
});
define("ember-homework02/templates/components/input-tags", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JbMaOMHi", "block": "{\"symbols\":[\"tag\"],\"statements\":[[6,\"select\"],[10,\"multiple\",\"multiple\"],[10,\"data-role\",\"tagsinput\"],[10,\"id\",\"inputTags\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"tags\"]]],null,{\"statements\":[[0,\"    \"],[6,\"option\"],[11,\"value\",[27,[[21,1,[]]]]],[10,\"selected\",\"selected\"],[8],[1,[21,1,[]],false],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/components/input-tags.hbs" } });
});
define("ember-homework02/templates/components/search-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "A/MBOe5M", "block": "{\"symbols\":[],\"statements\":[],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/components/search-book.hbs" } });
});
define("ember-homework02/templates/components/speaker-form", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "7obMuQAr", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"submitForm\"],null],null],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"for\",\"inputSurname\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Фамилия\"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"type\",\"value\",\"class\",\"id\",\"placeholder\"],[\"text\",[22,[\"lastName\"]],\"form-control form-control-lg\",\"inputSurname\",\"Введите фамилию\"]]],false],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"for\",\"inputName\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Имя\"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"type\",\"value\",\"class\",\"id\",\"placeholder\"],[\"text\",[22,[\"firstName\"]],\"form-control form-control-lg\",\"inputName\",\"Введите имя\"]]],false],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n        \"],[6,\"label\"],[10,\"for\",\"inputPatronymic\"],[10,\"class\",\"col-sm-2 col-form-label text-right big\"],[8],[0,\"Отчество\"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n            \"],[1,[26,\"input\",null,[[\"type\",\"value\",\"class\",\"id\",\"placeholder\"],[\"text\",[22,[\"middleName\"]],\"form-control form-control-lg\",\"inputPatronymic\",\"Введите отчество\"]]],false],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n            \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"tagName\",\"type\",\"class\"],[\"button\",\"submit\",\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"                Отмена\\n\"]],\"parameters\":[]},null],[0,\"        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/components/speaker-form.hbs" } });
});
define("ember-homework02/templates/components/speaker-item", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rZRRR+2e", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"col mb-4\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"card\"],[8],[0,\"\\n        \"],[6,\"img\"],[10,\"src\",\"images/speaker.jpg\"],[10,\"class\",\"card-img-top\"],[10,\"alt\",\"Фото спикера\"],[8],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n            \"],[6,\"h5\"],[10,\"class\",\"card-title\"],[8],[1,[22,[\"speaker\",\"lastName\"]],false],[0,\" \"],[1,[22,[\"speaker\",\"firstName\"]],false],[0,\" \"],[1,[22,[\"speaker\",\"middleName\"]],false],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"card-footer\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"row\"],[8],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"div\"],[10,\"class\",\"col text-right\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-speaker\",[22,[\"speaker\",\"id\"]]],[[\"tagName\",\"class\"],[\"button\",\"btn btn-edit\"]],{\"statements\":[[0,\"                        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-pencil card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"                    \"],[6,\"button\"],[10,\"class\",\"btn btn-trash\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"deleteSpeaker\"],null],null],[10,\"type\",\"button\"],[8],[0,\"\\n                        \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-trash card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                            \"],[6,\"path\"],[10,\"d\",\"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z\"],[8],[9],[0,\"\\n                            \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z\"],[8],[9],[0,\"\\n                        \"],[9],[0,\"\\n                    \"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/components/speaker-item.hbs" } });
});
define("ember-homework02/templates/edit-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "euwW+6Nc", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[1,[26,\"edit-book-header\",null,[[\"title\",\"modelID\"],[[22,[\"model\",\"title\"]],[22,[\"model\",\"id\"]]]]],false],[0,\"\\n    \"],[6,\"form\"],[10,\"class\",\"edit-form\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"saveBook\"],null],null],[8],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputTitle\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Название \"],[1,[22,[\"model\",\"id\"]],false],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\",\"id\"],[\"text\",\"Полное название книги\",[22,[\"model\",\"title\"]],\"form-control form-control-lg\",\"inputTitle\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputAuthor\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Автор\"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\",\"id\"],[\"text\",\"Фамилия И.О. автора\",[22,[\"model\",\"author\"]],\"form-control form-control-lg\",\"inputAuthor\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputPagesCount\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Объем\"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\",\"id\"],[\"number\",\"Количество страниц книги\",[22,[\"model\",\"pages\"]],\"form-control form-control-lg\",\"inputPagesCount\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputDescriptionURL\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Описание\"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\",\"class\",\"id\"],[\"url\",\"Ссылка на сайт с описанием книги\",[22,[\"model\",\"description\"]],\"form-control form-control-lg\",\"inputDescriptionURL\"]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"customFile\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Обложка\"],[9],[0,\"\\n            \"],[1,[26,\"input-file\",null,[[\"oldFileName\",\"class\",\"uploadData\",\"uploadDataChanged\"],[[26,\"get-local-file-name\",[[22,[\"model\",\"cover\"]]],null],\"input-group input-group-lg col-sm-10\",[22,[\"uploadData\"]],[26,\"action\",[[21,0,[]],\"changeUploadData\"],null]]]],false],[0,\"\\n        \"],[9],[0,\"\\n\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"label\"],[10,\"for\",\"inputTags\"],[10,\"class\",\"col-sm-2 col-form-label text-right\"],[8],[0,\"Теги\"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-sm-10\"],[8],[0,\"\\n                \"],[2,\" <input type=\\\"text\\\" class=\\\"form-control\\\" id=\\\"inputPatronymic\\\" placeholder=\\\"#Теги через запятую\\\"> \"],[0,\"\\n                \"],[1,[26,\"input-tags\",null,[[\"tags\",\"onChange\"],[[22,[\"model\",\"tags\"]],[26,\"action\",[[21,0,[]],\"changeTags\"],null]]]],false],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-group row\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-12 text-right\"],[8],[0,\"\\n                \"],[6,\"button\"],[10,\"class\",\"btn btn-primary btn-lg\"],[10,\"type\",\"submit\"],[8],[0,\"Сохранить\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"tagName\",\"type\",\"class\"],[\"button\",\"submit\",\"btn btn-outline-secondary btn-lg\"]],{\"statements\":[[0,\"                Отмена\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/edit-book.hbs" } });
});
define("ember-homework02/templates/edit-speaker", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "q4Ro95dk", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Редактирование спикера: \"],[1,[22,[\"model\",\"firstName\"]],false],[0,\" \"],[1,[22,[\"model\",\"lastName\"]],false],[9],[0,\"\\n    \"],[1,[26,\"speaker-form\",null,[[\"speaker\",\"onsubmit\"],[[22,[\"model\"]],[26,\"action\",[[21,0,[]],\"saveSpeaker\"],null]]]],false],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/edit-speaker.hbs" } });
});
define("ember-homework02/templates/error", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MujmbxiY", "block": "{\"symbols\":[],\"statements\":[[4,\"if\",[[22,[\"model\",\"error\"]]],null,{\"statements\":[[0,\"    \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Error: \"],[1,[22,[\"model\",\"error\"]],false],[9],[0,\"\\n\"]],\"parameters\":[]},null],[6,\"img\"],[10,\"src\",\"/images/error.gif\"],[10,\"alt\",\"error\"],[10,\"class\",\"rounded mx-auto d-block\"],[8],[9],[0,\"\\n    \\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/error.hbs" } });
});
define("ember-homework02/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pC533o7m", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"row align-items-stretch h-100 home-page-nav\"],[8],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n        \"],[6,\"a\"],[10,\"href\",\"meetings.html\"],[10,\"class\",\"card text-center\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n                \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-people desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                    \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z\"],[8],[9],[0,\"\\n                \"],[9],[0,\"\\n                \"],[6,\"h3\"],[8],[0,\"Встречи клуба\"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"books\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-book desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"h3\"],[8],[0,\"Книги\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n    \"],[6,\"div\"],[10,\"class\",\"col\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"speakers\"],[[\"class\"],[\"card text-center\"]],{\"statements\":[[0,\"        \"],[6,\"div\"],[10,\"class\",\"card-body\"],[8],[0,\"\\n            \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-mic desktop-icon\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"],[8],[9],[0,\"\\n                \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M10 8V3a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"],[8],[9],[0,\"\\n            \"],[9],[0,\"\\n            \"],[6,\"h3\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/index.hbs" } });
});
define("ember-homework02/templates/loading", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0wKXyLFX", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container h-100 ptop-bottom\"],[8],[0,\"\\n    \"],[6,\"h2\"],[8],[0,\"Loading ...\"],[9],[0,\"\\n    \"],[6,\"img\"],[10,\"src\",\"/images/loading.gif\"],[10,\"alt\",\"loading\"],[8],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/loading.hbs" } });
});
define("ember-homework02/templates/speakers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NA4vKkaC", "block": "{\"symbols\":[\"speaker\"],\"statements\":[[0,\"    \"],[6,\"div\"],[10,\"class\",\"htop\"],[8],[0,\"\\n        \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[0,\"Спикеры\"],[9],[0,\"\\n        \"],[6,\"div\"],[10,\"class\",\"form-row navbar-panel justify-content-between\"],[8],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"edit-speaker\",\"new\"],[[\"tagName\",\"class\",\"type\",\"title\"],[\"button\",\"btn btn-outline-primary my-2\",\"button\",\"Добавить спикера\"]],{\"statements\":[[0,\"                    \"],[6,\"svg\"],[10,\"viewBox\",\"0 0 16 16\"],[10,\"class\",\"bi bi-plus card-button\"],[10,\"fill\",\"currentColor\"],[10,\"xmlns\",\"http://www.w3.org/2000/svg\",\"http://www.w3.org/2000/xmlns/\"],[8],[0,\"\\n                        \"],[6,\"path\"],[10,\"fill-rule\",\"evenodd\"],[10,\"d\",\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"],[8],[9],[0,\"\\n                    \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"            \"],[9],[0,\"\\n            \"],[6,\"div\"],[10,\"class\",\"col-md-auto\"],[8],[0,\"\\n                \"],[6,\"form\"],[10,\"class\",\"form-inline\"],[11,\"onsubmit\",[26,\"action\",[[21,0,[]],\"searchSpeakers\"],null],null],[8],[0,\"\\n                    \"],[1,[26,\"input\",null,[[\"value\",\"class\",\"type\",\"placeholder\",\"aria-label\"],[[22,[\"searchBook\"]],\"form-control mr-2 search-long search-only\",\"search\",\"ФИО\",\"Спикер\"]]],false],[0,\"\\n                    \"],[6,\"button\"],[10,\"class\",\"btn btn-primary my-2\"],[10,\"type\",\"submit\"],[8],[0,\"Найти\"],[9],[0,\"\\n                \"],[9],[0,\"\\n            \"],[9],[0,\"\\n        \"],[9],[0,\"\\n\"],[4,\"if\",[[21,0,[\"isLoading\"]]],null,{\"statements\":[[0,\"            \"],[6,\"h2\"],[10,\"class\",\"text-center\"],[8],[6,\"img\"],[10,\"src\",\"/images/loading.gif\"],[10,\"alt\",\"loading\"],[8],[9],[0,\"Loading ...\"],[9],[0,\"         \\n\"]],\"parameters\":[]},{\"statements\":[[0,\"            \"],[6,\"div\"],[10,\"class\",\"row row-cols-1 row-cols-md-3\"],[8],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"                    \"],[1,[26,\"speaker-item\",null,[[\"speaker\",\"onclick\"],[[21,1,[]],[26,\"action\",[[21,0,[]],\"deleteSpeaker\",[21,1,[]]],null]]]],false],[0,\"    \\n\"]],\"parameters\":[1]},null],[0,\"            \"],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"    \"],[9]],\"hasEval\":false}", "meta": { "moduleName": "ember-homework02/templates/speakers.hbs" } });
});


define('ember-homework02/config/environment', [], function() {
  var prefix = 'ember-homework02';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("ember-homework02/app")["default"].create({"name":"ember-homework02","version":"0.0.0+6909118f"});
}
//# sourceMappingURL=ember-homework02.map
