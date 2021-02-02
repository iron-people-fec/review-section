import React from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox.jsx';
import RatingDropDown from './RatingDropDown.jsx';
import SortersDropdown from './SortersDropdown.jsx';


const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #F7F7F7;
  margin: 20px 0;
  padding: 1.5em 17px;
  justify-content: space-between;
  height: 50px;
`

const Dropdown = styled.button`
display: inline-block;
padding: 13px 15px;
border:#888888 solid 1px;
border-radius: 4px;
background-color: white;
color: #333333;
margin-right: 1em;
font-size: 16px;

&:focus {
  outline: gray 1px dashed;
  outline-offset: 2px;
}

&:hover {
  cursor: pointer;
}
`

const Checkboxes = styled.ul`
padding-inline-start: 0;
list-style-type: none;
`

const Arrow = styled.span`
margin-left: 30px;
`

const StarFilters = styled.div`
  position: relative;
`
const Sorters = styled.div`
  position: relative;
`

const Dropdowns = styled.div`
  display:flex;
`

const Carrot = styled.div`
  position:absolute;
  margin-top: 0px;
  left: 91px;
  z-index: 12;
`

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.verified = this.props.verified;
    this.withPhotos = this.props.withPhotos;
    this.filterByVerified = this.props.filterByVerified;
    this.filterByPhotos = this.props.filterByPhotos;
    this.filterByStars = this.props.filterByStars;
    this.stars = this.props.stars;
    this.state = {
      showStarFilters: false,
      showSorters: false
    }
  }

  toggleStarFilterDropdown() {
    this.setState({
      showStarFilters: !this.state.showStarFilters
    })
  }

  toggleSorterDropdown() {
    this.setState({
      showSorters: !this.state.showSorters
    })
  }

  render() {
    return (
      <Container>

        <Dropdowns>
          <Sorters>
            <Dropdown onClick={this.toggleSorterDropdown.bind(this)}>
              sort by <strong>most recent</strong>
            <Arrow><svg width="14" height="14">
              <polyline points="1,7 7,13 13,7" fill="none" stroke="gray" strokeWidth="1.3" />
            </svg>
            </Arrow>
          </Dropdown>
          {this.state.showSorters ? <SortersDropdown toggleSorterDropdown={this.toggleSorterDropdown.bind(this)}></SortersDropdown> : ''}
            {this.state.showSorters ? <Carrot>
              <svg width="24" height="12" left="96">
                <polyline points="1,12 12,0 24,12" fill="white" stroke="gray" strokeWidth="1" />
              </svg>
            </Carrot> : ''}
          </Sorters>

          <StarFilters>
            <Dropdown onClick={this.toggleStarFilterDropdown.bind(this)}>
              filter by <strong>all ratings</strong>
              <Arrow><svg width="14" height="14">
                <polyline points="1,7 7,13 13,7" fill="none" stroke="gray" strokeWidth="1.3" />
              </svg>
              </Arrow>
            </Dropdown>
            {this.state.showStarFilters ? <RatingDropDown stars={this.stars} filterByStars={this.filterByStars} toggleStarFilterDropdown={this.toggleStarFilterDropdown.bind(this)}></RatingDropDown> : ''}
            {this.state.showStarFilters ? <Carrot>
              <svg width="24" height="12">
                <polyline points="1,12 12,0 24,12" fill="white" stroke="gray" strokeWidth="1" />
              </svg>
            </Carrot> : ''}
          </StarFilters>
        </Dropdowns>

        <Checkboxes>
          <Checkbox checkbox={'With photos'} filter={this.filterByPhotos} isChecked={this.withPhotos} />
          <Checkbox checkbox={'Verified purchases'} filter={this.filterByVerified} isChecked={this.verified} />
        </Checkboxes>
      </Container>
    )
  }
}

export default Filters;