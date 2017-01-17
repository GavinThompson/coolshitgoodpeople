import React, { PropTypes, Component } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { Accounts } from 'meteor/std:accounts-ui';



// const UsersAccountForm = () => {
//   return (
//     <Accounts.ui.LoginForm />
//   ) 
// };

// module.exports = UsersAccountForm;
// export default UsersAccountForm;

// customize Accounts.ui

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  onSignedInHook: () => {},
  onSignedOutHook: () => {},
});


class MDLAccountsButton extends Accounts.ui.Button {
  render () {
    const {label, href, type, disabled, className, onClick} = this.props;
    if (type === 'link') {
      console.log("link!")
      console.log(onClick)
      var classes = "registration-link"
      return <a href={ href } className={ classes } onClick={ onClick }>{ label }</a>;
    }
    return <Button 
        bsStyle="primary"
        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent registration-button"
        type={ type } 
        disabled={ disabled }
        onClick={ onClick }>{ label }
      </Button>;
  }
}

class AccountsField extends Accounts.ui.Field {

  // see https://github.com/studiointeract/accounts-ui/issues/60
  triggerUpdate () {
    const { onChange } = this.props
    if (this.input) {
      onChange({ target: { value: this.input.value } })
    }
  }
  
  render() {
    const { id, hint, label, type = 'text', onChange, className = "field", defaultValue = "" } = this.props;
    const { mount = true } = this.state;
    return mount ? (
      <div className={ className }>
        <FormControl id={ id } type={ type } onChange={ onChange } placeholder={ hint } defaultValue={ defaultValue } />
      </div>
    ) : null;
  }
}


Accounts.ui.Button = MDLAccountsButton;
Accounts.ui.Field = AccountsField;
