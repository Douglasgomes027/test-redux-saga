import { Container, Tabs, Tab, Row } from 'react-bootstrap';

import { connect } from 'react-redux';
import { ColumnChart, PieChart, BarChart } from 'react-chartkick';
import 'chart.js';

function App({ dataSet }) {
  return (
    <Container>
      <Container>
        <Row className="justify-content-md-center">
          <div>Teste Sameni</div>
        </Row>
      </Container>
      <Tabs defaultActiveKey="column">
        <Tab eventKey="column" title="Column Chart">
          <Container>
            <ColumnChart xtitle="State" ytitle="Population" data={dataSet} />
          </Container>
        </Tab>
        <Tab eventKey="pie" title="Pie Chart">
          <Container>
            <PieChart data={dataSet} />
          </Container>
        </Tab>
        <Tab eventKey="bar" title="Bar Chart">
          <Container>
            <BarChart xtitle="Population" ytitle="State" data={dataSet} />
          </Container>
        </Tab>
      </Tabs>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  dataSet: state.data,
});

export default connect(mapStateToProps)(App);
