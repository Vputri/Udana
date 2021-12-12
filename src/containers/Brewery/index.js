import React from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

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
    const columns = [
      { dataField: 'name', text: 'Name' },
      { dataField: 'city', text: 'City' },
      { dataField: 'state', text: 'State' },
      { dataField: 'postal_code', text: 'Postal Code' },
      { dataField: 'country', text: 'Country'}
    ];

    const customTotal = (from, to, size) => (
      <span className="react-bootstrap-table-pagination-total">
        Showing { from } to { to } of { size } Results
      </span>
    );
    const options = {
      paginationSize: 4,
      pageStartIndex: 0,
      showTotal: true,
      prePageText: 'Back',
      nextPageText: 'Next',
      sizePerPageList: [
        { text: '5', value: 5 },
        { text: '10', value: 10 },
      ]
    };

    return(
          <div class="bg-light py-5">
            <div class="container px-5">
              <div class="text-center py-5">
                <h1 class="fw-bolder">List Breweries</h1>
              </div>
              <div class="mb-5">
                <BootstrapTable 
                  keyField='id'
                  data={ breweries }
                  columns={ columns }
                  pagination={ paginationFactory(options) }
                />
              </div>
              <div class="copyright-footer text-center">
                <span>Copyright Udana.id © 2020 by All Rights Reserved.</span>
              </div>
            </div>
          </div>
    )}}

export default Brewery;