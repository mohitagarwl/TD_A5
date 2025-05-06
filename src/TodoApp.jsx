import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>My To-Do List</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row className="mb-3">
          <Col md={8}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Button variant="success" onClick={handleAdd} className="w-100">
              Add
            </Button>
          </Col>
        </Row>

        <ListGroup>
          {tasks.map((item, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              {item}
              <Button variant="danger" size="sm" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </>
  );
}

export default TodoApp;
