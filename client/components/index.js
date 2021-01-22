import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3333/api/teachers").then(teachers => {
      this.setState({
        teachers: teachers.data
      });
    });
  }

  render() {
    return (
      <main role="main" className="container">
        <div class="row">
          <div class="col-lg-8">
              <h1>About school</h1>
              <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptates soluta, atque provident possimus ipsa non labore vel quis nulla error ratione consequuntur ea reiciendis hic facilis deserunt inventore itaque?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa hic ab architecto natus quibusdam, omnis aut commodi suscipit nobis provident aperiam facilis excepturi, necessitatibus expedita illum quia magnam temporibus! Inventore?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa hic ab architecto natus quibusdam, omnis aut commodi suscipit nobis provident aperiam facilis excepturi, necessitatibus expedita illum quia magnam temporibus! Inventore?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa hic ab architecto natus quibusdam, omnis aut commodi suscipit nobis provident aperiam facilis excepturi, necessitatibus expedita illum quia magnam temporibus! Inventore?
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa hic ab architecto natus quibusdam, omnis aut commodi suscipit nobis provident aperiam facilis excepturi, necessitatibus expedita illum quia magnam temporibus! Inventore?
              </div>
          </div>
          <div className="col-lg-4">
            <h3 class="pb-4 mb-4 font-italic border-bottom">
              Our Teachers
            </h3>
            {this.state.teachers.map(teacher => (
              <div key={teacher._id}>
                <h2>
                  <Link to={`/teacher/${teacher._id}`}>{teacher.name}</Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default Index;
