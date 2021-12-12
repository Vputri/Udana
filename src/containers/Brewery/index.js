import React from "react";
import Trial from './'
import { Link } from 'react-router-dom';

class Brewery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    };
  }

  componentDidMount() {   
    fetch("https://api.openbrewerydb.org/breweries")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          breweries: data,
        })
      })
  }

  render() {
    const { breweries } = this.state;
    return(
          <div class="bg-light">
            <div class="container px-5">
              <div class="text-center py-5">
                <h1 class="fw-bolder">List Breweries</h1>
              </div>

              <table class="table table-bordered">
                <thead>
                  <tr class="text-center table-info">
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col">Country</th>
                  </tr>
                </thead>
                {breweries.map((brewery) => {
                  return (
                    <tbody>
                      <tr key={brewery.id}>
                        <td>{brewery.name}</td>
                        <td>{brewery.city}</td>
                        <td>{brewery.state}</td>
                        <td>{brewery.postal_code}</td>
                        <td>{brewery.country}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
    )}}

export default Brewery;
