import React from 'react';

export default function App(props) {
  return (
    <>
      <div className="ab">
        <div id="ca" key={props.key}>
          <div className="card">
            <div className="cardimg">
              <img
                src={props.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="rightcard">
              <div className="cardimg">
                <h5 className="title">
                  {props.firstname}&nbsp;
                  {props.lastname}
                </h5>
                <p className="para">
                  <p>{props.email}</p>
                  <p>Id:&nbsp;{props.id}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dicta, eveniet.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
