import {Component} from 'react'
// Latest version - v3.0.0 with Tree Shaking to reduce bundle size
import { Country, State,City }  from 'country-state-city';
import './index.css'


console.log(State.getAllStates())





class AddressForm extends Component {
  state = {
    username: '',
    email: '',
    phone:null,
    showSubmitError: false,
    errorMsg: '',
    DoorNo:"",
    country:"AF",
   
}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeEmail = event => {
  
    this.setState({email: event.target.value})
  
  }

  onChangePhone = event => {
  
    this.setState({phone: event.target.value})
  
  }

  onChangeDoorNo = event => {
  
    this.setState({DoorNo: event.target.value})
  
  }

  onChangeCountry = event => {
  
    this.setState({country: event.target.value})
  
  }

//   onSubmitSuccess = jwtToken => {
//     const {history} = this.props

//     Cookies.set('jwt_token', jwtToken, {
//       expires: 30,
//     })
//     history.replace('/')
//   }

//   onSubmitFailure = errorMsg => {
//     this.setState({showSubmitError: true, errorMsg})
//   }

  submitForm =event => {
    event.preventDefault()
    // const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const { email } =this.state
    // if(email.match(validRegex)===false){
    //     this.setState({showSubmitError: true, errorMsg:"Invalid Email"})
       
    // } 
    // const {username, password} = this.state
    // if(username===""){
    //   this.setState({showSubmitError: true, errorMsg:"Invalid Username"})
    //   return;
    // }
    // if(password===""){
    //   this.setState({showSubmitError: true, errorMsg:"Invalid Password"})
    //   return;
    // }
    // const userDetails = {username:"rahul",password:"rahul@2021" }
    // const url = 'https://apis.ccbp.in/login'
    // const options = {
    //   method: 'POST',
    //   body: JSON.stringify(userDetails),
    // }
    // const response = await fetch(url, options)
    // const data = await response.json()
    // if (response.ok === true) {
    //   this.onSubmitSuccess(data.jwt_token)
    // } else {
    //   this.onSubmitFailure(data.error_msg)
    // }
  }

  renderEmailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="email">
          EMAIL*
        </label>
        <input
          type="email"
          id="email"
          className="password-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
          required
        />
      </>
    )
  }

  renderPhoneField = () => {
    const {phone} = this.state

    return (
      <>
        <label className="input-label" htmlFor="phone">
          MOBILE NO*
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="888 888 8888" pattern="[0-9]{10}" maxLength="12"
          className="password-input-field"
          value={phone}
          onChange={this.onChangePhone}
          title="Ten digits mobile number"
          required
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          NAME*
        </label>
        <input
        required
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Name"
        />
      </>
    )
  }

  renderDoorField = () => {
    const {DoorNo} = this.state

    return (
      <>
        <label className="input-label" htmlFor="doorNo">
          DoorNo
        </label>
        {/* <select id="doorNo" value={DoorNo} name={DoorNo} className="password-input-field" onChange={this.onChangeDoorNo}>
            {
                Country.getAllCountries.map((i)=> (<option >{i.name}</option>)
            )

            }
        </select> */}
        <input
          type="text"
          id="doorNo"
          placeholder="DoorNo" 
          className="password-input-field"
          value={DoorNo}
          onChange={this.onChangeDoorNo}
          
          
        />
      </>
    )
  }

  renderStateField = () => {
    const {country} = this.state
    const arr= State.getStatesOfCountry(country)

    return (
      <>
        <label className="input-label" htmlFor="state">
          State*
        </label>
        <select id="state" name="state" className="password-input-field">
            {
               arr.map((i)=> (<option value={i.isoCode}>{i.name}</option>)
            )

            }
        </select>
       
      </>
    )
  }

  renderCityField = () => {
    const {country} = this.state
    const arr= City.getCitiesOfCountry(country)

    return (
      <>
        <label className="input-label" htmlFor="city">
          City*
        </label>
        <select id="city" name="city" className="password-input-field">
            {
               arr.map((i)=> (<option>{i.name}</option>)
            )

            }
        </select>
       
      </>
    )
  }

  renderCountryField = () => {
    const {country} = this.state
    const arr= Country.getAllCountries()

    return (
      <>
        <label className="input-label" htmlFor="country">
          Country*
        </label>
        <select id="country" value={country} name={country} className="password-input-field" onChange={this.onChangeCountry}>
            {
               arr.map((i)=> (<option value={i.isoCode}>{i.name}</option>)
            )

            }
        </select>
       
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
   
   

    return (
      <div className="login-form-container">
      
        <form className="form-container" onSubmit={this.submitForm}>
         
          <h1 className='heading'>Shipping Address Details</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPhoneField()}</div>
          <div className="input-container">{this.renderDoorField()}</div>
          <div className="input-container">{this.renderCityField()}</div>
          <div className="input-container">{this.renderStateField()}</div>
          <div className="input-container">{this.renderCountryField()}</div>
          
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default AddressForm

