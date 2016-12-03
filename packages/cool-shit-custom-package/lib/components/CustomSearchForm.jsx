import React, { PropTypes, Component } from 'react';
import { intlShape } from 'react-intl';
import Formsy from 'formsy-react';
import FRC from 'formsy-react-components';
import { withRouter } from 'react-router'

const Input = FRC.Input;

// see: http://stackoverflow.com/questions/1909441/jquery-keyup-delay
const delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

class CustomSearchForm extends Component{

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      search: props.router.location.query.query || ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      search: this.props.router.location.query.query || ''
    });
  }

  search(data) {

    const router = this.props.router;
    const query = data.searchQuery === '' ? {} : {query: data.searchQuery};

    delay(() => {
      router.push({pathname: "/", query: query});
    }, 700 );

  }

  render() {
    return (
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right header-search">
          <Formsy.Form onChange={this.search}>
        
        	<label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
        		<i className="material-icons">search</i>
        	</label>
        	<div className="mdl-textfield__expandable-holder">
        		<Input 
        		  className="mdl-textfield__input" 
        		  name="searchQuery"
        		  value={this.state.search}
        		  type="text" 
        		  id="fixed-header-drawer-exp"/>
        		<label className="mdl-textfield__label" htmlFor="search-expandable"></label>
        	</div>

          </Formsy.Form>
        </div>
    )
  }
}

CustomSearchForm.contextTypes = {
  currentRoute: React.PropTypes.object,
  currentUser: React.PropTypes.object,
  intl: intlShape
}

module.exports = withRouter(CustomSearchForm);
export default withRouter(CustomSearchForm);