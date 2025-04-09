import React from "react";
import "./MainContent.css";

const MainContent = () => {
  return (
    <div className="main-content">
      <h1>Division</h1>
      <p>We have already done addition and multiplication inside print. Let's do subtraction and division as well once.</p>

      <h2>Operators</h2>
      <table>
        <thead>
          <tr>
            <th>Operator</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+</td><td>Addition</td><td>a + b</td></tr>
          <tr><td>-</td><td>Subtraction</td><td>a - b</td></tr>
          <tr><td>*</td><td>Multiplication</td><td>a * b</td></tr>
          <tr><td>/</td><td>Division</td><td>a / b</td></tr>
        </tbody>
      </table>

      <h2>Task</h2>
      <ul>
        <li>Print the result of subtraction of <b>9</b> and <b>2</b>.</li>
        <li>Print the result of division of <b>30</b> by <b>5</b>.</li>
      </ul>
    </div>
  );
};

export default MainContent;
