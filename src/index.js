/* Automatically generated by './build/bin/build-entry.js' */

import Button from '../packages/button/index.js';
import Input from '../packages/input/index.js';
import Loading from '../packages/loading/index.js';
import Notification from '../packages/notification/index.js';
import MessageBox from '../packages/message-box/index.js';
import Message from '../packages/message/index.js';
import Tree from '../packages/tree/index.js';
import Checkbox from '../packages/checkbox/index.js';
import CheckboxButton from '../packages/checkbox-button/index.js';
import CheckboxGroup from '../packages/checkbox-group/index.js';
import locale from 'element-ui/src/locale';
import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  Button,
  Input,
  Tree,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  CollapseTransition
];

const install = function(Vue, opts = {}) {
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  components.forEach(component => {
    Vue.component(component.name, component);
  });

  Vue.use(Loading.directive);

  Vue.prototype.$ELEMENT = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };

  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '2.4.6',
  locale: locale.use,
  i18n: locale.i18n,
  install,
  CollapseTransition,
  Loading,
  Button,
  Input,
  Notification,
  MessageBox,
  Message,
  Tree,
  Checkbox,
  CheckboxButton,
  CheckboxGroup
};

module.exports.default = module.exports;
