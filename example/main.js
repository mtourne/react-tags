// Set up test data
const Categories = [
  "Beauty", "Big Adventure", "Big Gear", "Books", "Boyfriend", "Brunch", "Cab", "Car", "Car Payment", "Clothes", "Coffee Break", "Credit Card", "Date Night", "Debt", "Delivery Food", "Drinks Out", "Eating Out", "Education", "Emergency Savings", "Entertainment", "Gas", "Gear", "Gifts ", "Girlfriend", "Groceries", "Grocery store", "Gym Membership", "Health", "Health Insurance", "Home", "Home Insurance", "Insurance", "Investments", "Lunch", "Lyft", "Mortgage", "Music Festivals", "Personal Loan", "Phone Bill", "Rent", "Renters Insurance", "Retirement", "Rideshare", "Savings", "Self", "Shoes", "Slush Fund", "Social", "Student Loan", "Subscription", "Transportation to adventure", "Transportation to social good times", "Transportation to work", "Trash", "Travel", "Treat Yo Self", "Uber","Utilities", "Water", "Weddings", "Weekend Trips", "Wine", "Wireless", "Work", "Year Get Away"
];

/*
 * If your app already uses react-dnd, then having multiple
 * backend will raise an integrity violation exception. In such cases
 * use the WithOutContext version of the component.
 * var Tags = ReactTags.WithOutContext;
 * The example below uses the `WithContext` since this the sole component
 * using the react-dnd component.
*/
const Tags = ReactTags.WithContext;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [{ id: 1, text: "#savings" }],
      suggestions: Categories,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleDelete(i) {
    this.setState({
      tags: this.state.tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    var tag = '#' + tag.trim();
    let { tags } = this.state;
    this.setState({ tags: [...tags, { id: tags.length + 1, text: tag }] });
  }

  handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags });
  }

  render() {
    const { tags, suggestions } = this.state;
    return (
      <div>
        <Tags
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
