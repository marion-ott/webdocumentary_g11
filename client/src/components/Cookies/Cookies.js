import React from 'react'
import content from "../../content/content";

class Cookies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          cookie: [],
          checked: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    } 
    // componentWillMount() {
    // fetch("//localhost:8000/data.php")
    //     .then(response => response.json())
    //     .catch(error => console.log(error))
    // }

    componentDidMount() {
        //console.log(content.data[2].cookies)
        const cookies = content.data[2].cookies.map(cookie => cookie)
        this.setState({
            cookie: cookies,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const items = Array.from(document.querySelectorAll('#inputServices input'))
        const checked = items
          .filter(item => item.checked === true)
          .map(item => content.cookies[item.id])
        this.setState({
          checked,
        })
    };

    render() {
        return(
            <form action="" onSubmit={() => this.handleSubmit} id="inputServices">
                { this.state.cookie.map((cookie, key) => 
                    <div key={key}>
                    <label htmlFor={cookie.name}>{cookie.name}</label>
                    <input type="checkbox" name={cookie.name} id={key}/>
                    </div>
                )}
                <button type="submit">Valider</button>
            </form>
        )
    }
}

export default Cookies