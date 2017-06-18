var React = require('react');
var PropTypes = require('prop-types');

//Stateless functional component
function SelectLanguage(props){
  var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
    {
      languages.map(function(lang){
        return(
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      }, this)
    }
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
}

class Popular extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(language) {
    this.setState(function(){
      return {
        selectedLanguage: language
      }
    });
  }
  render(){
    return (
      <div>
        <SelectLanguage
          onSelect={this.updateLanguage}
          selectedLanguage={this.state.selectedLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;